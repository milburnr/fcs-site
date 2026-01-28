import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Building2,
  Shield,
  Award,
  Clock,
  AlertTriangle,
  FileText,
  CloudRain,
  Droplets,
  Flame,
  ShieldCheck,
  Users,
  Briefcase,
  Anchor
} from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { GoogleMap } from "@/components/GoogleMap";
import { NearbyLocations, InternalLinks } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disaster Recovery in St. Petersburg | Florida Construction Specialists",
  description: "St. Petersburg large loss disaster recovery contractor. 43+ years claims experience, $250K+ insurance restoration, barrier island expertise. Call (813) 420-7561.",
  keywords: [
    "disaster recovery st petersburg",
    "hurricane damage restoration st petersburg",
    "insurance restoration st petersburg",
    "storm damage repair st petersburg",
    "large loss contractor st petersburg",
    "flood damage restoration st petersburg",
    "fire damage contractor st petersburg",
    "insurance claim contractor st petersburg",
    "pinellas county disaster recovery",
    "barrier island storm damage",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/services/disaster-recovery/" },
  { name: "St. Petersburg", href: "/disaster-recovery-st-petersburg/" },
];

const stPeteFaqs = [
  {
    question: "Why are St. Petersburg and Pinellas County barrier islands so vulnerable to hurricane damage?",
    answer: "St. Petersburg sits on the Pinellas Peninsula—essentially a barrier island chain connected to the mainland. This unique geography means nearly the entire county is surrounded by water on three sides: Tampa Bay to the east, Boca Ciega Bay, and the Gulf of Mexico to the west. Barrier islands like Treasure Island, Madeira Beach, and Pass-a-Grille face extreme storm surge vulnerability, potentially exceeding 15 feet in major hurricanes. Additionally, many St. Petersburg structures predate modern wind codes, and the county's dense development limits evacuation routes. Our disaster recovery team understands these unique challenges and provides comprehensive restoration when storms impact Pinellas County properties."
  },
  {
    question: "What experience does Florida Construction Specialists have with St. Petersburg insurance restoration?",
    answer: "Our principal, Frank Bragano, brings 43+ years of property claims experience, including 7 years as an Allstate Commercial Property Adjuster (1982-1989) and subsequent work as an Executive General Adjuster with CJW-Vericlaim and Sedgwick. We've completed significant projects throughout St. Petersburg including work at Bay Pines Veterans Hospital—a $2 million federal historic restoration project. This combination of insurance industry background and local project experience means we understand both the claims process and St. Petersburg's specific building and historic preservation requirements."
  },
  {
    question: "How does FCS handle historic property disaster recovery in St. Petersburg's Old Northeast district?",
    answer: "St. Petersburg's Old Northeast Historic District contains approximately 2,300 contributing structures built between 1911 and 1940. Disaster recovery in this district requires specialized expertise in period construction methods, materials, and coordination with the St. Petersburg Historic Preservation Commission. We follow Secretary of the Interior Standards for restoration and can source or fabricate period-appropriate materials including historic windows, doors, woodwork, and masonry. Our experience at Bay Pines Veterans Hospital and Tampa Bay historic projects prepares us for the unique requirements of Old Northeast restoration."
  },
  {
    question: "What size disaster recovery projects does FCS handle in St. Petersburg?",
    answer: "We specialize in large loss disaster recovery, typically projects exceeding $250,000. Our St. Petersburg portfolio targets commercial properties, multi-family residential complexes including downtown condominiums, waterfront properties, HOA common areas, and high-value single-family homes. Our Hurricane Harvey response in Texas exceeded $40M total, and our Hurricane Irma work in Miami exceeded $20M—demonstrating our capacity for major disaster mobilization when Pinellas County needs it."
  },
  {
    question: "Do you work with all insurance carriers on St. Petersburg disaster claims?",
    answer: "Yes, Florida Construction Specialists works with all major insurance carriers on commercial and residential large loss claims in St. Petersburg. Our professional relationships with carriers, adjusters, and claims professionals throughout Florida help facilitate efficient claim processing. We maintain the documentation standards and professional communication that carriers expect from experienced restoration contractors, whether you're insured by Citizens, Universal, Tower Hill, or any other carrier."
  },
  {
    question: "What St. Petersburg areas are most vulnerable to flood and hurricane damage?",
    answer: "St. Petersburg's highest-risk areas include the barrier islands (Treasure Island, Madeira Beach, Pass-a-Grille, St. Pete Beach), the downtown waterfront district along Beach Drive and 1st Street, Shore Acres, Snell Isle, and low-lying areas near Salt Creek and Coffee Pot Bayou. Commercial properties in the downtown core face both storm surge and wind exposure. The Old Northeast historic district, while slightly elevated, contains older structures requiring specialized restoration when damaged. We understand Pinellas County's flood zones and can help property owners navigate FEMA requirements during restoration."
  },
  {
    question: "How does FCS coordinate with Pinellas County Emergency Management during disaster recovery?",
    answer: "Following major disasters, we coordinate our response with Pinellas County Emergency Management and the City of St. Petersburg Building Department. This includes understanding access restrictions to barrier islands, coordinating with debris removal operations, securing emergency permits when needed, and ensuring our restoration work aligns with community recovery priorities. Our established relationships with local officials help expedite the restoration process while maintaining proper protocol."
  },
  {
    question: "What is the typical timeline for hurricane damage restoration in St. Petersburg?",
    answer: "Hurricane restoration timelines vary significantly by project scope and barrier island access. Emergency stabilization typically takes 1-3 days once site access is available. Water extraction and structural drying require 5-14 days, and structural repairs range from 30-90 days. Complete restoration of large commercial or multi-family properties often requires 6-12 months, depending on damage extent, permit timelines through the City of St. Petersburg Building Department, and material availability—which can be strained following major events affecting all of Pinellas County."
  },
  {
    question: "How do you handle downtown St. Pete commercial property restoration?",
    answer: "Downtown St. Petersburg's commercial core has experienced significant development, with many mid-rise and high-rise properties along Beach Drive, Central Avenue, and the waterfront. Our commercial disaster recovery addresses structural repair, building envelope restoration, tenant improvement reconstruction, and coordination with multiple stakeholders including property owners, tenants, and insurance carriers. We understand the urgency of returning commercial properties to operation and work efficiently while maintaining quality standards."
  },
  {
    question: "What types of disaster damage do you restore in St. Petersburg?",
    answer: "We handle all major disaster types affecting St. Petersburg including hurricane and tropical storm damage, coastal flooding and storm surge, fire and smoke damage, tornado damage, hail damage, water intrusion from failed roofs or building envelopes, and saltwater intrusion damage common in barrier island properties. Our services encompass structural repair, roof reconstruction, interior restoration, mold remediation coordination, and complete building envelope reconstruction. As a prime contractor, we manage all aspects of restoration from emergency response through final completion."
  },
];

const clusterServices = [
  {
    name: "Hurricane & Storm Damage",
    href: "/services/disaster-recovery/hurricane-damage/",
    description: "Comprehensive restoration from hurricane, tropical storm, and tornado damage including structural repair, roofing, and building envelope reconstruction.",
    icon: CloudRain,
  },
  {
    name: "Water Damage Restoration",
    href: "/services/disaster-recovery/water-damage/",
    description: "Large loss water damage restoration including flood recovery, storm surge damage, saltwater intrusion, and comprehensive moisture remediation.",
    icon: Droplets,
  },
  {
    name: "Fire Damage Restoration",
    href: "/services/disaster-recovery/fire-damage/",
    description: "Complete fire and smoke damage restoration from structural repair to content restoration and odor elimination.",
    icon: Flame,
  },
  {
    name: "Insurance Claims Process",
    href: "/services/disaster-recovery/insurance-claims-process/",
    description: "Expert guidance through the insurance claim process, from initial documentation through final settlement and restoration completion.",
    icon: FileText,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Assessment & Documentation",
    description: "We conduct thorough damage assessment with comprehensive photo and video documentation, moisture readings, and detailed notes. For St. Petersburg properties, we pay special attention to saltwater intrusion, wind-driven rain damage, and barrier island-specific concerns.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Scope Development & Certified Estimate",
    description: "Using industry-standard estimating software, we develop detailed scopes of work that capture all damage and required repairs. Our certified estimates meet carrier documentation standards and account for St. Petersburg's specific building code and historic preservation requirements.",
    icon: Briefcase,
  },
  {
    step: "03",
    title: "Insurance Carrier Communication",
    description: "We work directly with adjusters and claims professionals to review scope, discuss methodology, and reach agreement on repair protocols. Our 43+ years of insurance industry background facilitates productive, professional communication on your St. Petersburg claim.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Permit & Approval Process",
    description: "Once scope is approved, we navigate the City of St. Petersburg permitting process and, if applicable, Historic Preservation Commission review. Our established local relationships help expedite approvals without sacrificing code compliance.",
    icon: Clock,
  },
  {
    step: "05",
    title: "Restoration Execution",
    description: "Experienced project managers oversee every aspect of restoration, from demolition through final finishes. Regular progress reports and documentation maintain transparency and keep your insurance carrier informed throughout the St. Petersburg project.",
    icon: Building2,
  },
  {
    step: "06",
    title: "Final Walkthrough & Project Closeout",
    description: "Comprehensive punch list resolution, City of St. Petersburg final inspections, insurance sign-off, warranty documentation, and certificate of completion ensure your property is returned to pre-loss condition—or better.",
    icon: Award,
  },
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services (Main)" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Services" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/insurance-claims-process/", label: "Insurance Claims Process" },
  { href: "/disaster-recovery-tampa/", label: "Disaster Recovery Tampa" },
  { href: "/disaster-recovery-clearwater/", label: "Disaster Recovery Clearwater" },
  { href: "/disaster-recovery-lakeland/", label: "Disaster Recovery Lakeland" },
];

export default function DisasterRecoveryStPetersburgPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema city="St. Petersburg" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery and Insurance Restoration"
        serviceDescription="Large loss disaster recovery and insurance restoration services in St. Petersburg, FL. Specializing in hurricane damage, barrier island restoration, water damage, fire damage, and comprehensive property restoration with 43+ years claims experience. Projects from $250,000 to $50M+."
        city="St. Petersburg"
        minPrice="250000"
      />
      <FAQSchema faqs={stPeteFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Emergency Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-red-900 via-red-800 to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />

          {/* Emergency Contact Bar */}
          <div className="bg-white/95 rounded-xl p-4 mb-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <div>
                <p className="font-bold text-brand-green-dark">St. Petersburg Property Damaged?</p>
                <p className="text-sm text-gray-600">Large loss restoration specialists available for assessment</p>
              </div>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span className="text-brand-gold font-semibold">Serving St. Petersburg & Pinellas County</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Disaster Recovery in St. Petersburg
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                When disaster strikes the Pinellas Peninsula, you need a contractor who understands both construction and insurance. With 43+ years of property claims experience—including work as a former Allstate Commercial Adjuster—Florida Construction Specialists brings unmatched expertise to large loss restoration throughout St. Petersburg and its barrier islands.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">43+ Years</p>
                  <p className="text-xs text-gray-300">Claims Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Building2 className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">$250K+</p>
                  <p className="text-xs text-gray-300">Projects</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Licensed</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.licenseNumber}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Anchor className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Barrier Island</p>
                  <p className="text-xs text-gray-300">Specialists</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Request Insurance Assessment
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Request a St. Petersburg Assessment
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your St. Petersburg or Pinellas County property damage and we&apos;ll schedule an assessment with our insurance restoration team.
              </p>
              <HighLevelForm height={450} />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Pinellas Peninsula: Florida&apos;s Most Densely Populated Hurricane Zone
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                St. Petersburg and Pinellas County occupy a unique and vulnerable position on Florida&apos;s Gulf Coast. The Pinellas Peninsula—essentially a 38-mile-long barrier island system connected to the mainland—is the most densely populated county in Florida with over 970,000 residents on 280 square miles. This geography creates exceptional disaster risk for property owners throughout the county.
              </p>
              <p className="mb-6">
                When disaster strikes St. Petersburg, Florida Construction Specialists brings a combination of expertise found nowhere else: genuine insurance industry experience paired with prime contractor construction capabilities. Our principal, Frank Bragano, spent 7 years as an Allstate Commercial Property Adjuster before transitioning to Executive General Adjuster roles with CJW-Vericlaim and Sedgwick. This 43+ year foundation in property claims means we understand the restoration process from every perspective.
              </p>
              <p className="mb-6">
                Our work at Bay Pines Veterans Hospital—a $2 million federal historic restoration project—demonstrates our capability in the St. Petersburg market. Combined with our Hurricane Harvey ($40M+) and Hurricane Irma ($20M+) response experience, we bring proven large-scale disaster recovery expertise to Pinellas County. Whether your property is in downtown St. Pete, the historic Old Northeast, or on the barrier islands, FCS has the experience and capacity for your restoration.
              </p>
              <p>
                As your prime contractor for St. Petersburg disaster recovery, FCS provides turnkey restoration—from initial damage assessment and certified estimates through complete reconstruction. We work with all insurance carriers, maintain the documentation standards carriers expect, and deliver quality restoration that returns your property to pre-loss condition.
              </p>
            </div>
          
          {/* Project Gallery */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/wp-content/uploads/2023/12/Ian-2.jpg"
                alt="Hurricane damage assessment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Hurricane Damage</p>
                <p className="text-sm text-gray-200">Emergency Response</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/wp-content/uploads/2023/12/Replacing-roof-decking-and-rafters.jpg"
                alt="Storm damage restoration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Storm Restoration</p>
                <p className="text-sm text-gray-200">Roof Repair</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
                alt="Restored commercial building"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Completed Restoration</p>
                <p className="text-sm text-gray-200">Hurricane Recovery</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* St. Petersburg-Specific Risk Section */}
      <section className="section bg-red-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding St. Petersburg&apos;s Disaster Risk Profile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pinellas County&apos;s peninsula geography creates unique challenges for property owners and requires restoration contractors with local expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Hurricane & Storm Surge Vulnerability
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Barrier islands (Treasure Island, Madeira Beach, Pass-a-Grille) face 10-15+ foot storm surge potential</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Downtown St. Pete waterfront (Beach Drive, 1st Street) exposed to Tampa Bay surge</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Shore Acres and Snell Isle historically flood during tropical systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Limited evacuation routes create access challenges post-storm</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <Droplets className="w-6 h-6" />
                Coastal Flooding & Water Intrusion
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Saltwater intrusion causes accelerated corrosion requiring specialized remediation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Multiple flood zones throughout peninsula: VE, AE, and X zones</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">King tide flooding affects low-lying areas even without storms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">St. Petersburg averages 52 inches of annual rainfall creating persistent moisture risk</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Historic Properties & Old Northeast District</h3>
            <p className="text-gray-700 mb-4">
              St. Petersburg&apos;s Old Northeast Historic District contains approximately 2,300 contributing structures built between 1911 and 1940. Disaster recovery in this district—and other St. Pete historic areas—requires specialized expertise:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <Shield className="w-8 h-8 text-red-700 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Historic Commission</p>
                <p className="text-sm text-gray-600">Approval coordination</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <Building2 className="w-8 h-8 text-red-700 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Period Materials</p>
                <p className="text-sm text-gray-600">Authentic sourcing</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <FileText className="w-8 h-8 text-red-700 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Secretary Standards</p>
                <p className="text-sm text-gray-600">Interior compliance</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <CloudRain className="w-8 h-8 text-red-700 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Storm Hardening</p>
                <p className="text-sm text-gray-600">Within guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disaster Recovery Services Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              St. Petersburg Disaster Recovery Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive restoration services for St. Petersburg and Pinellas County properties affected by hurricanes, flooding, fire, and other catastrophic events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clusterServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                    <service.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="inline-flex items-center text-brand-green font-semibold">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="section bg-red-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            St. Petersburg Property Damaged? We Can Help.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team to schedule an insurance damage assessment. With 43+ years claims experience and proven barrier island restoration expertise, we&apos;ll help you navigate the restoration process and maximize your recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-700 font-bold rounded-full hover:bg-gray-100 transition-all">
              Request St. Petersburg Assessment
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-green-dark font-bold rounded-full hover:bg-brand-gold-light transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Insurance Restoration Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              St. Petersburg Insurance Restoration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured 6-step approach ensures proper documentation, fair settlements, and quality restoration for St. Petersburg and Pinellas County property owners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="relative bg-gray-50 rounded-xl p-6">
                <div className="absolute -top-4 left-6 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step {item.step}
                </div>
                <div className="mt-4">
                  <item.icon className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FCS for St. Petersburg Disaster Recovery */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Why St. Petersburg Property Owners Choose FCS
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">43+ Years Claims Experience</h3>
                    <p className="text-gray-600">Frank Bragano brings four decades of property claims experience, including 7 years as an Allstate Commercial Property Adjuster (1982-1989) and Executive General Adjuster credentials with CJW-Vericlaim and Sedgwick. We understand insurance from every angle.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Anchor className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Barrier Island & Coastal Expertise</h3>
                    <p className="text-gray-600">We understand the unique challenges of St. Petersburg&apos;s barrier islands—saltwater intrusion, storm surge damage, limited access post-hurricane, and the specialized materials and methods required for coastal restoration.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Proven Hurricane Response Capacity</h3>
                    <p className="text-gray-600">Our Hurricane Harvey Texas response exceeded $40M in restoration. Hurricane Irma Miami work exceeded $20M including Embassy Towers and Oceania I Condominiums. We have the experience and capacity Pinellas County needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">All Insurance Carriers Welcome</h3>
                    <p className="text-gray-600">We work with all major insurance carriers on St. Petersburg commercial and residential claims—Citizens, Universal, Tower Hill, and all others. Our professional relationships throughout Florida help facilitate efficient claim processing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">Types of St. Pete Losses We Handle</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Hurricane/Wind",
                  "Storm Surge",
                  "Tropical Storms",
                  "Saltwater Intrusion",
                  "Flood/Water Loss",
                  "Fire/Smoke",
                  "Tornado Damage",
                  "Hail Damage",
                  "Burst Pipes",
                  "Mold Remediation",
                  "Lightning Strike",
                  "Building Envelope",
                ].map((loss) => (
                  <div key={loss} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span className="text-gray-700">{loss}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-brand-green-dark mb-3">St. Pete Property Types We Restore</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>- Commercial buildings (Downtown, Beach Drive, Central Avenue)</li>
                  <li>- Multi-family residential (condos, waterfront apartments)</li>
                  <li>- Historic properties (Old Northeast, Roser Park, Historic Kenwood)</li>
                  <li>- Barrier island properties (Treasure Island, St. Pete Beach)</li>
                  <li>- Medical and healthcare facilities</li>
                  <li>- Retail centers and hospitality venues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* St. Petersburg-Specific Building Department Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                City of St. Petersburg & Pinellas County Expertise
              </h2>
              <p className="text-gray-200 mb-6">
                Successful St. Petersburg disaster recovery requires contractors who understand local permitting, inspection requirements, historic preservation rules, and coordination with Pinellas County Emergency Management. FCS maintains established relationships with the City of St. Petersburg Building Department and understands the specific requirements for restoration work throughout Pinellas County.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Permit Coordination:</strong> Established relationships with St. Petersburg permitting staff accelerate approval timelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Historic Preservation:</strong> Experience with St. Petersburg Historic Preservation Commission requirements for Old Northeast, Roser Park, and other districts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Emergency Management:</strong> Coordination with Pinellas County Emergency Management for post-disaster access and restoration priority</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>FEMA Compliance:</strong> Understanding of flood zone requirements, substantial improvement rules, and elevation requirements</span>
                </li>
              </ul>
            </div>

            <div>
              <GoogleMap city="St. Petersburg" height={400} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="section bg-red-700">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Schedule Your St. Petersburg Property Assessment
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Whether you&apos;ve experienced hurricane damage on the barrier islands, flooding in Shore Acres, fire damage downtown, or any other disaster, our team will assess your St. Petersburg property and explain your restoration options. We work with all insurance carriers and provide comprehensive documentation to support your claim.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">What to Expect from Your Assessment:</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    Thorough damage inspection and documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    Saltwater intrusion and moisture assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    Insurance claim guidance and requirements
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    Historic preservation considerations (if applicable)
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Request Your Assessment
              </h3>
              <HighLevelForm height={400} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
                St. Petersburg Disaster Recovery FAQ
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about disaster recovery and insurance restoration in St. Petersburg and Pinellas County.
              </p>
            </div>

            <FAQ items={stPeteFaqs} />
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Disaster Recovery Resources"
            links={internalLinks}
          />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <NearbyLocations
              currentCity="St. Petersburg"
              service="disaster-recovery"
              serviceName="Disaster Recovery"
            />

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">St. Petersburg Disaster Recovery Pillar</h3>
              <p className="text-gray-600 mb-4">
                Learn more about our comprehensive disaster recovery services, insurance restoration expertise, and claims experience throughout St. Petersburg and Pinellas County.
              </p>
              <Link
                href="/services/disaster-recovery/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                View All Disaster Recovery Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              St. Petersburg&apos;s Large Loss Disaster Recovery Experts
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              When disaster strikes your St. Petersburg or Pinellas County property, choose the contractor with 43+ years of claims experience, barrier island expertise, and a proven track record of major hurricane response. Florida Construction Specialists—your partner for insurance restoration done right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
                Request Assessment
              </Link>
            </div>

            <div className="pt-8 border-t border-white/20">
              <p className="text-sm text-gray-300 mb-4">Trusted for St. Petersburg large loss restoration:</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-200">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-brand-gold" /> 43+ Years Claims Experience</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-brand-gold" /> License {BUSINESS_INFO.licenseNumber}</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-brand-gold" /> All Insurance Carriers</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-brand-gold" /> Barrier Island Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
