import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, AlertTriangle, FileText, Wrench, Users, DollarSign } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Disaster Recovery Sarasota FL | Hurricane & Storm Damage Restoration | FCS",
  description: "Sarasota disaster recovery contractor specializing in hurricane, storm, and flood damage restoration for barrier islands and waterfront properties. Prime contractor for large loss insurance claims $250K-$50M. 24/7 emergency response.",
  keywords: "disaster recovery Sarasota, hurricane damage restoration Sarasota, storm damage repair Sarasota, flood damage Sarasota, insurance restoration Sarasota, barrier island restoration, Siesta Key disaster recovery, Longboat Key storm damage",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/insurance-restoration/" },
  { name: "Sarasota", href: "/disaster-recovery-sarasota/" },
];

const disasterTypes = [
  {
    type: "Hurricane Damage",
    description: "Roof damage, structural impacts, water intrusion, and wind damage from tropical storms affecting barrier islands and mainland Sarasota",
    icon: AlertTriangle,
  },
  {
    type: "Flood Restoration",
    description: "Water extraction, structural drying, mold remediation, and flood damage repair for VE zone barrier island and AE zone waterfront properties",
    icon: Wrench,
  },
  {
    type: "Fire & Smoke Damage",
    description: "Structural repairs, smoke damage remediation, odor removal, and complete fire restoration for luxury homes and commercial properties",
    icon: Building2,
  },
  {
    type: "Storm Surge Damage",
    description: "Specialized restoration for Gulf-exposed properties on Siesta Key, Longboat Key, Lido Key, and St. Armands after storm surge events",
    icon: Shield,
  },
];

const sarasotaFaqs = [
  {
    question: "How quickly can FCS respond to disaster damage in Sarasota and the barrier islands?",
    answer: "Florida Construction Specialists provides 24/7 emergency response throughout Sarasota, including Siesta Key, Longboat Key, Lido Key, and St. Armands. For large loss commercial and high-value residential properties, we typically have assessment teams on-site within 2-4 hours of initial contact. During hurricane season (June-November), we pre-position crews and maintain emergency access protocols for barrier island properties.",
  },
  {
    question: "What areas of Sarasota are most vulnerable to hurricane and flood damage?",
    answer: "Sarasota's barrier islands—Siesta Key, Longboat Key, Lido Key, and Bird Key—face the highest risk with VE flood zone designations and direct Gulf exposure. Storm surge potential of 6-12 feet threatens these properties. St. Armands Circle, the downtown bayfront, and waterfront properties on Bird Key and Indian Beach/Sapphire Shores also have significant flood exposure. These high-value properties require specialized restoration approaches including elevated systems and marine-grade materials.",
  },
  {
    question: "Do you work directly with insurance companies on Sarasota disaster claims?",
    answer: "Yes, FCS specializes in large loss insurance restoration and works directly with all major insurance carriers. For Sarasota's high-value waterfront and barrier island properties, we provide detailed documentation, scope assessments, and claims support. Our experience with Xactimate estimating and insurance adjuster protocols helps expedite claims, which is especially important for the luxury homes and condominiums common in Sarasota.",
  },
  {
    question: "What is the typical timeline for hurricane damage restoration in Sarasota?",
    answer: "Hurricane damage restoration timelines in Sarasota vary by scope and property access: Emergency stabilization (1-3 days), water extraction and drying (5-14 days), structural repairs (30-120 days), and full restoration (90-180 days for luxury properties). Barrier island projects may face additional logistics challenges during post-storm periods. Projects over $1 million typically require 6-12 months depending on scope and permit requirements through the City of Sarasota Building Department.",
  },
  {
    question: "What types of properties do you restore in Sarasota?",
    answer: "FCS specializes in large loss disaster recovery for Sarasota's high-value properties including luxury waterfront estates on Longboat Key and Bird Key, Gulf-front condominiums on Siesta Key and Lido Key, historic Sarasota School of Architecture homes, downtown commercial buildings, St. Armands Circle retail and hospitality properties, and multi-family buildings. Our Sarasota projects typically range from $250,000 to $25 million.",
  },
  {
    question: "How do Sarasota building codes affect disaster restoration on barrier islands?",
    answer: "Sarasota enforces the Florida Building Code with strict coastal construction requirements for barrier islands. All properties in VE zones must meet flood-resistant construction standards. Restoration work often triggers the 50% Rule—if repair costs exceed 50% of building value, the entire structure must be brought to current code. This frequently requires upgraded wind resistance ratings, impact-resistant glazing, elevated mechanical systems, and breakaway wall construction for properties in velocity zones.",
  },
  {
    question: "Can you restore Sarasota School of Architecture (mid-century modern) properties after disaster damage?",
    answer: "Yes, FCS has extensive experience restoring Sarasota's iconic mid-century modern architecture. The Sarasota School of Architecture properties in neighborhoods like Indian Beach/Sapphire Shores, Lido Shores, and throughout the city require specialized restoration approaches that preserve their distinctive design elements—jalousie windows, floating rooflines, open floor plans, and indoor-outdoor connections—while incorporating modern disaster-resistant improvements where permitted by historic preservation guidelines.",
  },
  {
    question: "What documentation do you provide for Sarasota insurance claims?",
    answer: "FCS provides comprehensive documentation including initial damage assessments with photos and video, moisture mapping reports, detailed scope of work documents, Xactimate estimates, material specifications, daily progress reports, and final completion documentation. For Sarasota's luxury properties, we also document custom finishes, designer materials, and specialty items that require replacement-value documentation for proper insurance recovery.",
  },
];

const costData = [
  { category: "Water Damage Restoration", range: "$20,000 - $100,000", timeline: "1-4 weeks", notes: "Higher for barrier island properties with salt water intrusion" },
  { category: "Hurricane Roof Repair", range: "$75,000 - $750,000", timeline: "4-16 weeks", notes: "Luxury homes and tile roofs increase costs" },
  { category: "Storm Surge Restoration", range: "$150,000 - $3M+", timeline: "3-12 months", notes: "Complete rebuild may be required for VE zone properties" },
  { category: "Full Property Restoration", range: "$500,000 - $25M+", timeline: "6-18 months", notes: "Luxury estates and large condominiums" },
];

const processSteps = [
  { step: 1, title: "Emergency Response", description: "24/7 rapid response with barrier island access coordination and immediate stabilization" },
  { step: 2, title: "Documentation", description: "Comprehensive photo/video documentation, moisture mapping, and luxury finish inventory" },
  { step: 3, title: "Insurance Coordination", description: "Direct carrier communication, Xactimate estimates, and high-value claims support" },
  { step: 4, title: "Restoration Planning", description: "Engineering assessments, permit applications, and coordination with Sarasota Building Department" },
  { step: 5, title: "Construction Phase", description: "Professional restoration with quality control, marine-grade materials, and code compliance" },
  { step: 6, title: "Final Inspection", description: "City inspections, insurance sign-off, warranty documentation, and project closeout" },
];

export default function DisasterRecoverySarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery and Insurance Restoration"
        serviceDescription="Professional disaster recovery and insurance restoration services in Sarasota, FL. Prime contractor for hurricane damage, flood restoration, storm surge damage, and large loss insurance claims for barrier islands and luxury waterfront properties. 24/7 emergency response with projects from $250,000 to $25 million."
        city="Sarasota"
        minPrice="250000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Disaster Recovery Services in Sarasota, FL"
        description="Comprehensive guide to disaster recovery and insurance restoration services in Sarasota. Learn about hurricane damage restoration, storm surge remediation, barrier island recovery, and large loss insurance claim processes."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="disaster-recovery-sarasota"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Sarasota, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Disaster Recovery & Insurance Restoration in Sarasota
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Sarasota's trusted large loss contractor for hurricane damage, storm surge restoration, and barrier island disaster recovery. Specializing in high-value waterfront properties on Siesta Key, Longboat Key, and St. Armands. We work directly with insurance companies on claims from $250,000 to $25 million. 24/7 emergency response.
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
                Sarasota's Premier Disaster Recovery Contractor
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is Sarasota's trusted prime contractor for large loss disaster recovery and insurance restoration. With Sarasota's significant barrier island exposure and concentration of high-value waterfront properties—particularly on Siesta Key, Longboat Key, Lido Key, Bird Key, and St. Armands—property owners need experienced restoration partners who understand both the technical challenges of coastal construction and the insurance complexities of luxury property recovery.
              </p>

              <p className="text-gray-600 mb-6">
                Sarasota's barrier islands face direct Gulf of Mexico exposure, creating unique disaster recovery challenges. The city experiences 54 inches of annual rainfall, sits in a major hurricane corridor, and has extensive VE (velocity) flood zones throughout its keys. Storm surge potential of 6-12 feet threatens waterfront properties from downtown Sarasota Bay to the Gulf beaches. Our team has restored properties throughout Sarasota following hurricanes, severe storms, flooding events, and fires—always working as the prime contractor with direct accountability for project success.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 mt-8">
                Sarasota Disaster Recovery Services
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
                Sarasota's Hurricane & Flood Risk Profile
              </h3>

              <p className="text-gray-600 mb-4">
                Sarasota's barrier islands and waterfront properties face significant hurricane and flood exposure. Key risk factors for Sarasota properties include:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Barrier Island Exposure:</strong> Siesta Key, Longboat Key, Lido Key, and Bird Key face direct Gulf storms with potential for 6-12 foot storm surge and severe wind damage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>VE Flood Zone Coverage:</strong> Most barrier island properties are in VE (velocity) zones requiring specialized flood-resistant construction and elevated structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>High-Value Properties:</strong> Sarasota's luxury waterfront estates, Gulf-front condominiums, and St. Armands commercial properties represent significant restoration investments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Sarasota School Architecture:</strong> Mid-century modern properties require specialized restoration approaches to preserve architectural significance while meeting current codes</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Sarasota Property's Disaster Recovery Needs <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">24/7 Emergency Line</h3>
                <p className="text-gray-200 mb-4">
                  Immediate response for disaster damage in Sarasota and the barrier islands. Our emergency crews are ready to deploy.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Sarasota" currentService="disaster-recovery" />
              <NearbyLocations currentCity="Sarasota" service="disaster-recovery" serviceName="Disaster Recovery" />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Sarasota Disaster Recovery Costs & Timelines
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Restoration costs in Sarasota reflect the area's concentration of luxury properties, barrier island logistics, and coastal construction requirements. These ranges reflect typical projects—actual costs depend on specific conditions and insurance coverage.
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
            * Costs as of 2025. Actual project costs depend on damage assessment, insurance coverage, and code requirements. Barrier island properties typically incur 15-25% premium.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Sarasota Disaster Recovery Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our proven 6-step process ensures thorough restoration, proper documentation, and maximum insurance recovery for Sarasota property owners—including specialized protocols for barrier island access.
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

      {/* Sarasota-Specific Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Local Sarasota Expertise Matters
              </h2>
              <p className="text-gray-200 mb-6">
                Disaster recovery in Sarasota requires contractors who understand barrier island construction, luxury property restoration, and the unique challenges of coastal Florida. FCS brings decades of Sarasota experience to every restoration project.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>City of Sarasota Permit Expertise:</strong> Established relationships with Sarasota Building Department expedite permit approvals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Coastal Construction Standards:</strong> Full knowledge of VE zone requirements, breakaway walls, and elevated construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Sarasota School Architecture:</strong> Expertise restoring mid-century modern properties in Indian Beach/Sapphire Shores and Lido Shores</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Luxury Property Experience:</strong> Proven track record with high-value estates on Longboat Key, Bird Key, and Siesta Key</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$40M+</div>
                <div className="text-gray-300 text-sm">Sarasota Projects Completed</div>
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

      {/* Barrier Islands Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Disaster Recovery for Sarasota's Barrier Islands
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Each of Sarasota's barrier islands presents unique disaster recovery challenges. FCS has extensive experience restoring properties across all of Sarasota's keys.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Siesta Key</h3>
              <p className="text-gray-600 text-sm mb-3">
                World-famous beaches with Gulf-front condominiums and single-family homes. VE zone construction requirements, significant storm surge exposure.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>- Gulf-front condos</li>
                <li>- Elevated residential</li>
                <li>- Salt air corrosion</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Longboat Key</h3>
              <p className="text-gray-600 text-sm mb-3">
                Luxury estates and high-rise condominiums. Spans Sarasota and Manatee counties with some of the region's most valuable waterfront properties.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>- Luxury estates $5M+</li>
                <li>- High-rise condos</li>
                <li>- Dual county permits</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Lido Key & St. Armands</h3>
              <p className="text-gray-600 text-sm mb-3">
                Mix of residential properties and St. Armands Circle commercial district. Historic mid-century modern homes in Lido Shores neighborhood.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>- Commercial restoration</li>
                <li>- Mid-century homes</li>
                <li>- Historic preservation</li>
              </ul>
            </div>
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Bird Key</h3>
              <p className="text-gray-600 text-sm mb-3">
                Exclusive residential island with luxury waterfront estates. Bay and Gulf access, high property values, and exacting restoration standards.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>- Estate properties</li>
                <li>- Custom finishes</li>
                <li>- Marine-grade materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Sarasota Chooses FCS for Disaster Recovery
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Shield className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                FCS is always the prime contractor on Sarasota disaster recovery projects—never a subcontractor. You get direct accountability and single-point responsibility for your restoration.
              </p>
            </div>
            <div className="card text-center p-8">
              <FileText className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Luxury Property Expertise</h3>
              <p className="text-gray-600">
                Our team specializes in high-value property restoration with experience documenting custom finishes, designer materials, and specialty items for proper insurance recovery.
              </p>
            </div>
            <div className="card text-center p-8">
              <Award className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                With $40M+ in completed Sarasota disaster recovery projects, we have the experience, bonding capacity, and barrier island expertise to handle any restoration challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={sarasotaFaqs}
        title="Sarasota Disaster Recovery FAQs"
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Sarasota Disaster Recovery Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From emergency response to complete restoration, FCS is Sarasota's trusted partner for large loss disaster recovery on barrier islands and luxury waterfront properties. Contact us 24/7 for immediate assistance.
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
