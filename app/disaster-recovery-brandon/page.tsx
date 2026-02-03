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
  title: "Disaster Recovery Brandon FL | Hurricane | FCS",
  description: "Brandon disaster recovery contractor specializing in hurricane, storm, and flood damage restoration. Prime contractor for large loss insurance claims $225K-$45M. 24/7 emergency response. Licensed, bonded, insured.",
  keywords: "disaster recovery Brandon, hurricane damage restoration Brandon, storm damage repair Brandon, flood damage Brandon, insurance restoration Brandon, large loss contractor Brandon, Alafia River flooding",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/insurance-restoration/" },
  { name: "Brandon", href: "/disaster-recovery-brandon/" },
];

const disasterTypes = [
  {
    type: "Hurricane & Wind Damage",
    description: "Roof damage, structural impacts, water intrusion, and wind damage from tropical storms and hurricanes affecting inland Brandon properties",
    icon: AlertTriangle,
  },
  {
    type: "Flash Flood Restoration",
    description: "Water extraction, structural drying, mold remediation, and flood damage repair for Alafia River corridor and low-lying areas",
    icon: Wrench,
  },
  {
    type: "Fire & Smoke Damage",
    description: "Structural repairs, smoke damage remediation, odor removal, and complete fire restoration for commercial and residential properties",
    icon: Building2,
  },
  {
    type: "Severe Storm Damage",
    description: "Severe thunderstorm damage repair including hail, lightning strikes, tornado damage, and heavy rain impacts common to inland areas",
    icon: Shield,
  },
];

const brandonFaqs = [
  {
    question: "How quickly can FCS respond to disaster damage in Brandon?",
    answer: "Florida Construction Specialists provides 24/7 emergency response throughout Brandon and surrounding Hillsborough County communities including Valrico, Riverview, and FishHawk. For large loss commercial and high-value residential properties, we typically have assessment teams on-site within 2-4 hours. Our proximity to Brandon via the I-75 corridor allows rapid deployment of emergency crews and equipment.",
  },
  {
    question: "What types of disasters most commonly affect Brandon properties?",
    answer: "Brandon's inland suburban location experiences different disaster patterns than coastal Tampa Bay areas. The most common disasters include severe thunderstorms with damaging winds and hail (May-September), flash flooding near the Alafia River corridor and low-lying areas, occasional tornado activity (Florida averages 60+ tornadoes annually), and hurricane wind damage. While Brandon lacks storm surge risk, hurricane winds still cause significant damage to roofing and structures.",
  },
  {
    question: "Who handles building permits for disaster restoration in Brandon?",
    answer: "Brandon is an unincorporated area of Hillsborough County, so all building permits go through Hillsborough County Building Services—not the City of Tampa. FCS has established relationships with County permitting staff, which helps expedite disaster restoration projects. Commercial permit review typically takes 4-6 weeks, though emergency permits for stabilization can be obtained within 24-48 hours.",
  },
  {
    question: "What is the typical timeline for disaster recovery in Brandon?",
    answer: "Disaster recovery timelines in Brandon vary by scope: Emergency stabilization (1-3 days), water extraction and drying (5-14 days), structural repairs (30-90 days), and full restoration (90-150 days for larger commercial projects). Projects over $1 million may require 5-10 months depending on scope and Hillsborough County permit requirements. Brandon's inland location often means less competing demand for restoration contractors compared to coastal areas.",
  },
  {
    question: "Are Brandon disaster recovery costs lower than Tampa?",
    answer: "Yes, disaster recovery costs in Brandon typically run 10-15% lower than comparable projects in Tampa or coastal areas. This reflects Brandon's reduced flood zone requirements (most properties are Zone X), lower insurance premiums, and less stringent coastal construction regulations. However, projects still must meet Florida Building Code standards including wind resistance requirements for Hillsborough County.",
  },
  {
    question: "What areas of Brandon are most vulnerable to flooding?",
    answer: "Brandon's highest flood risk areas include properties along the Alafia River corridor, low-lying areas near retention ponds in master-planned communities like FishHawk, and older neighborhoods with inadequate stormwater infrastructure. While most of Brandon is Zone X (minimal flood risk), flash flooding from intense summer thunderstorms can affect any low-lying area, especially along Bloomingdale Avenue and the Highway 60 corridor.",
  },
  {
    question: "Do you work with insurance companies on Brandon disaster claims?",
    answer: "Yes, FCS specializes in large loss insurance restoration and works directly with all major insurance carriers serving Brandon. We provide detailed documentation, scope assessments, and claims support for property owners. Our experience with Xactimate estimating and insurance adjuster protocols helps expedite claims. Brandon properties often have different coverage needs than coastal properties, and we help owners understand their policies.",
  },
  {
    question: "What commercial properties do you restore in Brandon?",
    answer: "FCS specializes in large loss disaster recovery for Brandon's commercial sector including retail centers (Westfield Brandon, Winthrop Town Centre), medical facilities (Brandon Regional Hospital area), multi-family apartment complexes, industrial and warehouse properties near I-75, and commercial office buildings along Highway 60. Our Brandon projects typically range from $225,000 to $45 million.",
  },
];

const costData = [
  { category: "Water Damage Restoration", range: "$13,000 - $65,000", timeline: "1-4 weeks", notes: "Depends on affected area and mold presence" },
  { category: "Hurricane Roof Repair", range: "$45,000 - $425,000", timeline: "4-10 weeks", notes: "Commercial roofing with wind uplift compliance" },
  { category: "Fire Damage Restoration", range: "$90,000 - $1.8M+", timeline: "3-8 months", notes: "Structural repairs and smoke remediation" },
  { category: "Full Building Restoration", range: "$450,000 - $45M+", timeline: "5-15 months", notes: "Complete disaster recovery with code upgrades" },
];

const processSteps = [
  { step: 1, title: "Emergency Response", description: "24/7 rapid response with damage assessment and immediate stabilization to prevent further loss" },
  { step: 2, title: "Documentation", description: "Comprehensive photo/video documentation, moisture mapping, and detailed scope development" },
  { step: 3, title: "Insurance Coordination", description: "Direct carrier communication, Xactimate estimates, and claims negotiation support" },
  { step: 4, title: "Restoration Planning", description: "Engineering assessments, Hillsborough County permit applications, and detailed project scheduling" },
  { step: 5, title: "Construction Phase", description: "Professional restoration with quality control, progress reporting, and Florida Building Code compliance" },
  { step: 6, title: "Final Inspection", description: "County inspections, insurance sign-off, warranty documentation, and project closeout" },
];

export default function DisasterRecoveryBrandonPage() {
  return (
    <>
      <LocalBusinessSchema city="Brandon" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery and Insurance Restoration"
        serviceDescription="Professional disaster recovery and insurance restoration services in Brandon, FL. Prime contractor for hurricane damage, flood restoration, fire damage, and large loss insurance claims. 24/7 emergency response with projects from $225,000 to $45 million."
        city="Brandon"
        minPrice="225000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Disaster Recovery Services in Brandon, FL"
        description="Comprehensive guide to disaster recovery and insurance restoration services in Brandon. Learn about hurricane damage restoration, flood remediation, and large loss insurance claim processes for Hillsborough County properties."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="disaster-recovery-brandon"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Brandon, Florida (Hillsborough County)</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Disaster Recovery & Insurance Restoration in Brandon
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Brandon's trusted large loss contractor for hurricane damage, severe storm restoration, and commercial property disaster recovery. We work directly with insurance companies on claims from $225,000 to $45 million. 24/7 emergency response for Hillsborough County properties.
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
                Brandon's Premier Disaster Recovery Contractor
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is Brandon's trusted prime contractor for large loss disaster recovery and insurance restoration. As an inland suburban community in unincorporated Hillsborough County, Brandon faces different disaster challenges than coastal areas—primarily severe thunderstorms, hurricane wind damage, flash flooding near the Alafia River corridor, and occasional tornado activity. Property owners need experienced restoration partners who understand both the technical requirements and insurance complexities of major disaster recovery.
              </p>

              <p className="text-gray-600 mb-6">
                Brandon's location offers significant advantages for property owners. The community sits inland from Tampa Bay, eliminating storm surge risk while still experiencing hurricane-force winds during major storms. The area receives approximately 48 inches of annual rainfall, with intense summer thunderstorms causing flash flooding in low-lying areas. Our team has restored properties throughout Brandon, Valrico, FishHawk, and Bloomingdale following hurricanes, severe storms, flooding events, and fires—always working as the prime contractor with direct accountability for project success.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 mt-8">
                Brandon Disaster Recovery Services
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
                Brandon's Disaster Risk Profile
              </h3>

              <p className="text-gray-600 mb-4">
                Brandon's inland Hillsborough County location creates a unique disaster risk profile different from coastal Tampa Bay communities. Key risk factors for Brandon properties include:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Hurricane Wind Exposure:</strong> While protected from storm surge, Brandon still experiences damaging winds from hurricanes—Category 3+ storms can produce 100+ mph winds this far inland</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Alafia River Flooding:</strong> Properties near the Alafia River corridor face flood risk during heavy rainfall events, with flash flooding possible after intense summer storms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Severe Thunderstorm Activity:</strong> Florida leads the nation in lightning strikes, and Brandon's afternoon thunderstorms bring damaging winds, hail, and occasional tornado activity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Tornado Risk:</strong> Central Florida's tornado alley extends through Hillsborough County, with waterspout-generated tornadoes and supercell storms creating localized but severe damage</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Brandon Property's Disaster Recovery Needs <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">24/7 Emergency Line</h3>
                <p className="text-gray-200 mb-4">
                  Immediate response for disaster damage in Brandon and Hillsborough County. Our emergency crews are ready to deploy.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Brandon" currentService="disaster-recovery" />
              <NearbyLocations currentCity="Brandon" service="disaster-recovery" serviceName="Disaster Recovery" />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Brandon Disaster Recovery Costs & Timelines
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Brandon restoration costs typically run 10-15% lower than coastal Tampa Bay areas due to reduced flood zone requirements and less stringent coastal regulations. These ranges reflect typical Brandon projects—actual costs depend on specific conditions and insurance coverage.
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
            * Costs as of 2025. Brandon projects typically 10-15% lower than coastal Tampa. Actual project costs depend on damage assessment, insurance coverage, and Hillsborough County code requirements.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Brandon Disaster Recovery Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our proven 6-step process ensures thorough restoration, proper documentation, and maximum insurance recovery for Brandon property owners. All permits processed through Hillsborough County Building Services.
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

      {/* Brandon-Specific Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Local Brandon & Hillsborough County Expertise
              </h2>
              <p className="text-gray-200 mb-6">
                Disaster recovery in Brandon requires contractors who understand Hillsborough County's permitting process, Florida Building Code requirements, and the unique disaster risks facing inland suburban communities. FCS brings decades of Tampa Bay experience to every Brandon restoration project.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Hillsborough County Permits:</strong> Established relationships with County Building Services expedite permit approvals for Brandon properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Florida Building Code Compliance:</strong> Full knowledge of wind resistance requirements and code upgrade triggers for Hillsborough County</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Alafia River Corridor:</strong> Specialized experience with flood-prone properties along the river corridor and low-lying Brandon areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Insurance Carrier Relationships:</strong> Direct experience with carriers common in Brandon and Hillsborough County markets</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$40M+</div>
                <div className="text-gray-300 text-sm">Brandon Area Projects</div>
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
            Why Brandon Chooses FCS for Disaster Recovery
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Shield className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                FCS is always the prime contractor on Brandon disaster recovery projects—never a subcontractor. You get direct accountability and single-point responsibility for your restoration.
              </p>
            </div>
            <div className="card text-center p-8">
              <FileText className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Insurance Expertise</h3>
              <p className="text-gray-600">
                Our team includes insurance restoration specialists who understand claim documentation, Xactimate estimating, and carrier negotiation to maximize your recovery.
              </p>
            </div>
            <div className="card text-center p-8">
              <Award className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                With $40M+ in completed Brandon area disaster recovery projects, we have the experience, bonding capacity, and Hillsborough County expertise to handle any restoration challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Properties Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Brandon Commercial Property Restoration
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            FCS specializes in large loss disaster recovery for Brandon's diverse commercial sector, from retail centers to industrial facilities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h4 className="font-bold text-brand-green-dark mb-2">Retail Centers</h4>
              <p className="text-gray-600 text-sm">Westfield Brandon Mall, Winthrop Town Centre, Brandon Town Center corridor</p>
            </div>
            <div className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h4 className="font-bold text-brand-green-dark mb-2">Medical Facilities</h4>
              <p className="text-gray-600 text-sm">Brandon Regional Hospital, medical office buildings, urgent care facilities</p>
            </div>
            <div className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h4 className="font-bold text-brand-green-dark mb-2">Industrial & Warehouse</h4>
              <p className="text-gray-600 text-sm">Distribution centers, manufacturing facilities, flex space near I-75</p>
            </div>
            <div className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h4 className="font-bold text-brand-green-dark mb-2">Multi-Family Housing</h4>
              <p className="text-gray-600 text-sm">Apartment complexes, condominium communities, townhome developments</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={brandonFaqs}
        title="Brandon Disaster Recovery FAQs"
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Brandon Disaster Recovery Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From emergency response to complete restoration, FCS is Brandon's trusted partner for large loss disaster recovery. Contact us 24/7 for immediate assistance throughout Hillsborough County.
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
