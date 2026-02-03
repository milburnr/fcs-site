import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, AlertTriangle, FileText, Wrench, Users, DollarSign, Home } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Disaster Recovery Ruskin FL | Hurricane | FCS",
  description: "Ruskin disaster recovery contractor specializing in hurricane, storm, and flood damage restoration. FCS home base location with fastest emergency response. Prime contractor for large loss insurance claims $250K-$50M. 24/7 emergency response.",
  keywords: "disaster recovery Ruskin, hurricane damage restoration Ruskin, storm damage repair Ruskin, flood damage Apollo Beach, insurance restoration Ruskin, Sun City Center restoration, large loss contractor Ruskin",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/insurance-restoration/" },
  { name: "Ruskin", href: "/disaster-recovery-ruskin/" },
];

const disasterTypes = [
  {
    type: "Hurricane Damage",
    description: "Roof damage, structural impacts, water intrusion, and wind damage from tropical storms. Apollo Beach and coastal properties face elevated storm surge risk.",
    icon: AlertTriangle,
  },
  {
    type: "Flood Restoration",
    description: "Water extraction, structural drying, mold remediation, and flood damage repair for properties in VE/AE zones along Tampa Bay and Little Manatee River.",
    icon: Wrench,
  },
  {
    type: "Fire & Smoke Damage",
    description: "Structural repairs, smoke damage remediation, odor removal, and complete fire restoration for commercial, industrial, and residential properties.",
    icon: Building2,
  },
  {
    type: "Storm Damage",
    description: "Severe weather damage repair including hail, lightning, tornadic activity, and heavy rain damage common during Florida's summer storm season.",
    icon: Shield,
  },
];

const ruskinFaqs = [
  {
    question: "How quickly can FCS respond to disaster damage in Ruskin?",
    answer: "Ruskin is FCS headquarters—our home base. This means we provide the fastest emergency response times in the entire Tampa Bay region for Ruskin properties. Our crews, equipment, and project managers are stationed locally, enabling response times as fast as 30 minutes to 1 hour for emergency situations. For Apollo Beach, Sun City Center, and surrounding areas, we typically arrive within 1-2 hours. This home base advantage means Ruskin property owners receive priority dispatch during major storm events.",
  },
  {
    question: "What areas of Ruskin face the highest disaster risk?",
    answer: "Apollo Beach waterfront properties and homes along the Tampa Bay coastline face the highest risk, sitting in VE and AE flood zones with significant storm surge exposure. Properties near the Little Manatee River also face flooding during heavy rainfall events. Sun City Center, while more inland, still faces hurricane wind damage risks. The industrial corridor along US-41 and former agricultural areas have generally lower flood risk but require attention to drainage and stormwater management during restoration.",
  },
  {
    question: "Do you specialize in Sun City Center senior community restoration?",
    answer: "Yes, FCS has extensive experience restoring properties in Sun City Center and other 55+ communities in the Ruskin area. We understand the unique needs of senior residents—providing clear communication, minimizing disruption, ensuring ADA accessibility during restoration, and working with community HOAs and management companies. Our team has restored clubhouses, community centers, multi-family buildings, and individual homes throughout Sun City Center following hurricanes and other disasters.",
  },
  {
    question: "What insurance companies do you work with in Ruskin?",
    answer: "FCS works directly with all major insurance carriers active in the Ruskin market, including Citizens Property Insurance, Universal Insurance, Federated National, American Coastal, Heritage, and major national carriers. As Ruskin locals, we have established relationships with adjusters and understand the specific documentation requirements for South Hillsborough County properties. We provide Xactimate estimates and comprehensive claim documentation to expedite your recovery.",
  },
  {
    question: "How do flood zone requirements affect Ruskin disaster restoration?",
    answer: "Apollo Beach and waterfront Ruskin properties in VE (velocity) and AE zones face strict FEMA requirements during restoration. If damage exceeds 50% of building value, substantial improvement rules require bringing the entire structure to current flood elevation and building code standards. This often means elevating mechanical systems, installing flood vents, and potentially raising the structure. FCS has extensive experience navigating these requirements with Hillsborough County.",
  },
  {
    question: "What is the typical timeline for hurricane damage restoration in Ruskin?",
    answer: "Ruskin hurricane restoration timelines: Emergency stabilization and tarping (1-3 days), water extraction and drying (5-14 days depending on extent), structural repairs (30-90 days), and complete restoration (90-180 days for major projects). Our Ruskin headquarters location allows us to mobilize faster and maintain consistent progress. Large commercial projects like those along the US-41 corridor or multi-building Sun City Center projects may require 6-12 months.",
  },
  {
    question: "Do you handle industrial property disaster recovery in Ruskin?",
    answer: "Yes, FCS has significant experience with industrial disaster recovery in the Ruskin area, including properties in the Amazon fulfillment center corridor, agricultural processing facilities, distribution warehouses, and Port Manatee-adjacent industrial buildings. We understand the urgency of getting businesses operational and can coordinate phased restoration to minimize downtime while ensuring proper repairs and code compliance.",
  },
  {
    question: "What makes FCS different from other Ruskin disaster recovery contractors?",
    answer: "Three key factors: First, Ruskin is our home—we live and work here, giving us unmatched local knowledge and fastest response times. Second, we're always the prime contractor, never a subcontractor, providing direct accountability. Third, we specialize in large loss insurance restoration ($250K-$50M), meaning we have the bonding capacity, insurance expertise, and resources for major projects that smaller contractors cannot handle.",
  },
];

const costData = [
  { category: "Water Damage Restoration", range: "$12,000 - $65,000", timeline: "1-4 weeks", notes: "Lower than coastal cities due to reduced salt exposure" },
  { category: "Hurricane Roof Repair", range: "$40,000 - $400,000", timeline: "3-10 weeks", notes: "Commercial and residential with wind code compliance" },
  { category: "Fire Damage Restoration", range: "$75,000 - $1.5M+", timeline: "2-8 months", notes: "Industrial facilities may require specialized systems" },
  { category: "Full Building Restoration", range: "$400,000 - $40M+", timeline: "6-18 months", notes: "Multi-building Sun City Center projects at higher end" },
];

const processSteps = [
  { step: 1, title: "Immediate Local Response", description: "As Ruskin's home base contractor, we deploy emergency crews within 30-60 minutes for damage assessment and stabilization" },
  { step: 2, title: "Documentation", description: "Comprehensive photo/video documentation, moisture mapping, and detailed scope development for insurance claims" },
  { step: 3, title: "Insurance Coordination", description: "Direct carrier communication, Xactimate estimates, and claims negotiation—we know the local adjusters" },
  { step: 4, title: "Restoration Planning", description: "Engineering assessments, Hillsborough County permit applications, and detailed project scheduling" },
  { step: 5, title: "Construction Phase", description: "Professional restoration with quality control, daily progress reporting, and Florida Building Code compliance" },
  { step: 6, title: "Final Inspection", description: "County inspections, insurance sign-off, warranty documentation, and thorough project closeout" },
];

export default function DisasterRecoveryRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery and Insurance Restoration"
        serviceDescription="Professional disaster recovery and insurance restoration services in Ruskin, FL. FCS home base location providing fastest emergency response in Tampa Bay. Prime contractor for hurricane damage, flood restoration, fire damage, and large loss insurance claims. 24/7 emergency response with projects from $250,000 to $25 million."
        city="Ruskin"
        minPrice="250000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Disaster Recovery Services in Ruskin, FL"
        description="Comprehensive guide to disaster recovery and insurance restoration services in Ruskin. Learn about hurricane damage restoration, flood remediation, and large loss insurance claim processes from Tampa Bay's home base contractor."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Ruskin, Florida - FCS Home Base</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Disaster Recovery & Insurance Restoration in Ruskin
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Ruskin is our home—and that means faster emergency response for Apollo Beach, Sun City Center, and all of South Hillsborough County. We work directly with insurance companies on claims from $250,000 to $25 million. 24/7 emergency dispatch from our local headquarters.
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
              <Home className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">FCS Home Base</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">30-60 Min Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Direct Insurance Billing</span>
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
                Your Home Base Disaster Recovery Contractor
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is headquartered in Ruskin—this is our home. That means when disaster strikes Apollo Beach, Sun City Center, or anywhere in South Hillsborough County, our crews, equipment, and project managers are already here. While other contractors travel from Tampa or St. Petersburg, we're deploying within minutes. This home base advantage translates to faster emergency response, better local knowledge, and more consistent project oversight throughout your restoration.
              </p>

              <p className="text-gray-600 mb-6">
                Ruskin's unique geography presents distinct disaster recovery challenges. The Apollo Beach waterfront and properties along Tampa Bay face significant storm surge risk in VE and AE flood zones. The Little Manatee River corridor experiences flooding during heavy rainfall. The agricultural heritage means many properties sit on clay-rich soils that require specific drainage considerations. And Sun City Center's 55+ community has specialized needs for senior residents during restoration projects. Our local expertise means we understand all these factors intimately.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 mt-8">
                Ruskin Disaster Recovery Services
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
                Ruskin's Disaster Risk Profile
              </h3>

              <p className="text-gray-600 mb-4">
                Ruskin and the surrounding South Hillsborough County area face multiple disaster risks that require experienced restoration partners:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Apollo Beach Storm Surge:</strong> Waterfront properties face potential 10-15 foot storm surge in major hurricanes, requiring flood-resistant restoration and elevation compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Little Manatee River Flooding:</strong> Properties near the river corridor experience flooding during tropical storms and heavy rain events</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Industrial Corridor Exposure:</strong> Distribution centers, agricultural facilities, and commercial properties along US-41 require rapid restoration to minimize business interruption</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Sun City Center Community:</strong> Senior community restoration requires ADA compliance, clear communication, and minimal disruption for elderly residents</span>
                </li>
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Ruskin Property's Disaster Recovery Needs <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">24/7 Emergency Line</h3>
                <p className="text-gray-200 mb-4">
                  Local Ruskin crews ready for immediate deployment. Fastest response times in Tampa Bay from our home base.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <RelatedServices city="Ruskin" currentService="disaster-recovery" />
              <NearbyLocations currentCity="Ruskin" service="disaster-recovery" serviceName="Disaster Recovery" />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Ruskin Disaster Recovery Costs & Timelines
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Restoration costs vary based on damage extent, property type, and code upgrade requirements. Ruskin properties often benefit from lower salt-air corrosion compared to barrier island locations. These ranges reflect typical projects—actual costs depend on specific conditions and insurance coverage.
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
            * Costs as of 2025. Actual project costs depend on damage assessment, insurance coverage, and Hillsborough County code requirements.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Ruskin Disaster Recovery Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our proven 6-step process ensures thorough restoration, proper documentation, and maximum insurance recovery—with the added advantage of local Ruskin headquarters for faster execution.
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

      {/* Ruskin-Specific Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading">
                The Home Base Advantage
              </h2>
              <p className="text-gray-200 mb-6">
                Being headquartered in Ruskin gives FCS unmatched advantages for disaster recovery in South Hillsborough County. We're not traveling from Tampa or St. Petersburg—we're already here, ready to respond.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Fastest Response Times:</strong> 30-60 minute emergency response vs. 2-4 hours from Tampa-based contractors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Local Permit Knowledge:</strong> Deep relationships with Hillsborough County Building Services for expedited approvals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Community Understanding:</strong> We know Sun City Center, Apollo Beach, and local neighborhoods intimately</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Consistent Oversight:</strong> Our project managers live locally—daily site visits are standard, not exceptional</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$25M+</div>
                <div className="text-gray-300 text-sm">Local Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-gray-300 text-sm">Properties Restored</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Clock className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">30 Min</div>
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
            Why Ruskin Chooses FCS for Disaster Recovery
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Home className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Local Headquarters</h3>
              <p className="text-gray-600">
                FCS is headquartered in Ruskin—not Tampa, not St. Petersburg. We're your neighbors, and your property gets priority response from our home base crews.
              </p>
            </div>
            <div className="card text-center p-8">
              <FileText className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Insurance Expertise</h3>
              <p className="text-gray-600">
                Our team includes insurance restoration specialists who know local adjusters, understand South Hillsborough claims, and maximize your recovery through proper documentation.
              </p>
            </div>
            <div className="card text-center p-8">
              <Award className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Prime Contractor</h3>
              <p className="text-gray-600">
                FCS is always the prime contractor on Ruskin disaster recovery projects—never a subcontractor. You get direct accountability and single-point responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={ruskinFaqs}
        title="Ruskin Disaster Recovery FAQs"
        description="Common questions about disaster recovery and insurance restoration services in Ruskin, Apollo Beach, Sun City Center, and South Hillsborough County."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ruskin's Home Base Disaster Recovery Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From emergency response to complete restoration, FCS is Ruskin's local partner for large loss disaster recovery. Contact our home base team 24/7 for immediate assistance.
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
