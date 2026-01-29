import Image from "next/image";
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
  Anchor,
  Waves
} from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { GoogleMap } from "@/components/GoogleMap";
import { NearbyLocations, InternalLinks } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disaster Recovery in Clearwater | Florida Construction Specialists",
  description: "Clearwater's large loss disaster recovery contractor. 43+ years claims experience, $250K+ insurance restoration projects, all carriers. Call (813) 420-7561.",
  keywords: [
    "disaster recovery clearwater",
    "hurricane damage restoration clearwater",
    "insurance restoration clearwater",
    "storm damage repair clearwater",
    "large loss contractor clearwater",
    "flood damage restoration clearwater",
    "fire damage contractor clearwater",
    "insurance claim contractor clearwater",
    "clearwater beach storm damage",
    "pinellas county disaster recovery",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/services/disaster-recovery/" },
  { name: "Clearwater", href: "/disaster-recovery-clearwater/" },
];

const clearwaterFaqs = [
  {
    question: "Why is Clearwater Beach and the barrier islands especially vulnerable to hurricane damage?",
    answer: "Clearwater Beach sits on a barrier island separated from the mainland by the Intracoastal Waterway, making it extremely susceptible to storm surge and coastal flooding. During major hurricanes, storm surge can reach 10-15 feet on Clearwater Beach, completely inundating ground-level structures. The barrier island's low elevation, narrow width, and exposure to the Gulf of Mexico mean properties face wave action, wind damage, and saltwater intrusion simultaneously. Our disaster recovery team understands these unique challenges and provides specialized restoration for barrier island properties."
  },
  {
    question: "What experience does Florida Construction Specialists have with large loss insurance claims in Clearwater?",
    answer: "Our principal, Frank Bragano, brings 43+ years of property claims experience, including 7 years as an Allstate Commercial Property Adjuster (1982-1989) and subsequent work as an Executive General Adjuster with CJW-Vericlaim and Sedgwick. We've worked extensively with Clearwater properties including hotels, condominiums, and commercial buildings along the beach. This insurance industry background means we understand claims from both sides—adjuster and contractor—and know exactly what documentation Pinellas County property owners need for successful claims."
  },
  {
    question: "How does Clearwater's tourism and hospitality industry affect disaster recovery priorities?",
    answer: "Clearwater's economy depends heavily on its tourism and hospitality sector, making rapid disaster recovery essential for hotels, resorts, restaurants, and retail businesses. Every day a beachfront property remains closed represents significant lost revenue. FCS understands this urgency and prioritizes restoration timelines for hospitality properties while maintaining quality standards. We coordinate with property managers to phase work in ways that may allow partial operations during restoration when possible, minimizing financial impact."
  },
  {
    question: "What are Clearwater's evacuation zones and how do they impact property vulnerability?",
    answer: "Pinellas County has established evacuation zones A through E based on storm surge and flooding risk. Clearwater Beach and coastal areas fall primarily within Zone A, requiring evacuation for all tropical storms and hurricanes. Properties in Zone A face the highest risk of catastrophic damage from storm surge, flooding, and wind. Our disaster recovery planning accounts for these zone designations, and we help property owners understand their risk profile and develop appropriate preparation and recovery strategies."
  },
  {
    question: "How does FCS coordinate with Pinellas County Emergency Management after disasters?",
    answer: "Following major disasters, Pinellas County Emergency Management coordinates response and recovery efforts throughout Clearwater. FCS maintains professional relationships with county officials and understands local emergency protocols, permitting procedures, and inspection requirements. We work within the county's recovery framework while advocating for our clients' interests. This coordination ensures smooth project execution and helps expedite the restoration process for Clearwater property owners."
  },
  {
    question: "What special considerations apply to Clearwater Beach condominium disaster recovery?",
    answer: "Clearwater Beach has extensive high-rise and mid-rise condominium development, creating unique disaster recovery challenges. Condominiums require coordination with HOA boards, reserve fund management, and communication with multiple unit owners. Storm damage often affects both common areas and individual units, requiring careful damage allocation and insurance claim coordination. FCS has extensive experience with multi-family disaster recovery and understands the complex governance and financial considerations involved in condominium restoration."
  },
  {
    question: "How does saltwater intrusion from storm surge affect Clearwater property restoration?",
    answer: "Saltwater intrusion is particularly damaging in Clearwater coastal properties. Unlike freshwater, salt water corrodes metal components, damages electrical systems, and can compromise structural steel reinforcement. Saltwater-affected materials often cannot be dried and saved—they must be removed and replaced. Our restoration protocols include thorough assessment for saltwater damage, proper demolition of affected materials, and installation of marine-grade or salt-resistant replacements when appropriate for coastal properties."
  },
  {
    question: "What is the typical timeline for hotel or resort disaster restoration in Clearwater?",
    answer: "Hotel and resort restoration timelines in Clearwater vary significantly based on damage extent. Emergency stabilization and water extraction typically take 3-7 days. Structural drying and demolition may require 2-4 weeks. Complete restoration of a major hospitality property can take 6-18 months depending on scope. We provide realistic schedules during initial assessment and work with ownership to prioritize revenue-generating areas when possible, potentially allowing phased reopening during restoration."
  },
  {
    question: "Does FCS handle both commercial and residential disaster recovery in Clearwater?",
    answer: "Yes, Florida Construction Specialists handles large loss disaster recovery for both commercial and residential properties throughout Clearwater. Our commercial portfolio includes hotels, restaurants, retail centers, office buildings, and multi-family residential complexes. For residential, we focus on high-value waterfront homes and properties with claims typically exceeding $250,000. This dual expertise allows us to serve Clearwater's diverse property types with the same professional standards."
  },
  {
    question: "What flood insurance considerations are unique to Clearwater properties?",
    answer: "Clearwater properties, especially those on Clearwater Beach and near the Intracoastal Waterway, typically require flood insurance through the National Flood Insurance Program (NFIP) or private flood carriers. NFIP claims have specific documentation requirements and coverage limits that differ from standard property insurance. FCS understands these distinctions and provides documentation appropriate for both flood and wind claims—often required simultaneously after hurricanes. We also help property owners navigate the sometimes complex coordination between multiple insurance policies."
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
    description: "Large loss water damage restoration including flood recovery, storm surge damage, and comprehensive moisture remediation for coastal properties.",
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
    description: "We conduct thorough damage assessment with comprehensive photo and video documentation, moisture readings, and detailed notes. For Clearwater coastal properties, we specifically evaluate saltwater intrusion and storm surge damage patterns.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Scope Development & Certified Estimate",
    description: "Using industry-standard estimating software, we develop detailed scopes of work that capture all damage and required repairs. Our certified estimates meet carrier documentation standards and ensure nothing is overlooked in your claim.",
    icon: Briefcase,
  },
  {
    step: "03",
    title: "Insurance Carrier Communication",
    description: "We work directly with adjusters and claims professionals to review scope, discuss methodology, and reach agreement on repair protocols. Our 43+ years of insurance industry background facilitates productive, professional communication.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Approval & Project Mobilization",
    description: "Once scope is approved, we mobilize resources for restoration. Our established relationships with Clearwater-area subcontractors and suppliers enable rapid response without sacrificing quality or code compliance.",
    icon: Clock,
  },
  {
    step: "05",
    title: "Restoration Execution",
    description: "Experienced project managers oversee every aspect of restoration, from demolition through final finishes. For hospitality properties, we coordinate with management to minimize operational disruption throughout the project.",
    icon: Building2,
  },
  {
    step: "06",
    title: "Final Walkthrough & Project Closeout",
    description: "Comprehensive punch list resolution, City of Clearwater and Pinellas County final inspections, insurance sign-off, warranty documentation, and certificate of completion ensure your property is returned to pre-loss condition—or better.",
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
  { href: "/disaster-recovery-st-petersburg/", label: "Disaster Recovery St. Petersburg" },
  { href: "/disaster-recovery-lakeland/", label: "Disaster Recovery Lakeland" },
];

export default function DisasterRecoveryClearwaterPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema city="Clearwater" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery and Insurance Restoration"
        serviceDescription="Large loss disaster recovery and insurance restoration services in Clearwater, FL. Specializing in hurricane damage, storm surge restoration, water damage, fire damage, and comprehensive property restoration for barrier island and coastal properties with 43+ years claims experience. Projects from $250,000 to $25M+."
        city="Clearwater"
        minPrice="250000"
      />
      <FAQSchema faqs={clearwaterFaqs} />
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
                <p className="font-bold text-brand-green-dark">Clearwater Property Damaged?</p>
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
                <span className="text-brand-gold font-semibold">Serving Clearwater, FL & Clearwater Beach</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Disaster Recovery in Clearwater
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                When disaster strikes Clearwater's barrier islands and coastal properties, you need a contractor who understands both construction and insurance. With 43+ years of property claims experience—including work as a former Allstate Commercial Adjuster—Florida Construction Specialists brings unmatched expertise to large loss restoration throughout Pinellas County.
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
                  <FileText className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">All Carriers</p>
                  <p className="text-xs text-gray-300">Insurance</p>
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
                Request a Clearwater Assessment
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your Clearwater property damage and we'll schedule an assessment with our insurance restoration team.
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
              Clearwater Beach: Florida's Most Beautiful—And Most Vulnerable—Coastline
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                Clearwater Beach is consistently ranked among America's most beautiful beaches, but that stunning barrier island location comes with significant disaster risk. Properties along Gulf Boulevard, Mandalay Avenue, and throughout Clearwater Beach face extreme exposure to hurricanes, storm surge, and coastal flooding that can cause catastrophic damage in hours.
              </p>
              <p className="mb-6">
                When disaster strikes Clearwater, Florida Construction Specialists brings a combination of expertise found nowhere else: genuine insurance industry experience paired with prime contractor construction capabilities. Our principal, Frank Bragano, spent 7 years as an Allstate Commercial Property Adjuster before transitioning to Executive General Adjuster roles with CJW-Vericlaim and Sedgwick. This 43+ year foundation in property claims means we understand the restoration process from every perspective.
              </p>
              <p className="mb-6">
                Clearwater's hospitality-driven economy requires contractors who understand that every day of closure means lost revenue. Whether your property is a beachfront hotel, a Sand Key condominium, or a commercial building in downtown Clearwater, FCS provides the rapid response and quality restoration that gets properties back in operation. Our Hurricane Irma response in Miami exceeded $20 million in completed restoration, demonstrating our capacity for major coastal disaster mobilization.
              </p>
              <p>
                As your prime contractor for Clearwater disaster recovery, FCS provides turnkey restoration—from initial damage assessment and certified estimates through complete reconstruction. We work with all insurance carriers, maintain the documentation standards carriers expect, and deliver quality restoration that returns your property to pre-loss condition.
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

      {/* Clearwater-Specific Risk Section */}
      <section className="section bg-red-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Clearwater's Unique Disaster Risk Profile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clearwater's barrier island geography and Gulf Coast exposure create challenges that require restoration contractors with specialized coastal expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <Waves className="w-6 h-6" />
                Barrier Island & Storm Surge Risk
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Clearwater Beach barrier island can experience 10-15 foot storm surge in major hurricanes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Properties surrounded by Gulf of Mexico and Intracoastal Waterway face multi-directional flooding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Low elevation and narrow island width means rapid inundation during storm events</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Saltwater intrusion causes additional damage beyond freshwater flooding</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Evacuation Zone Considerations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Clearwater Beach falls within Pinellas County Evacuation Zone A (highest risk)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Zone A evacuates for ALL tropical storms and hurricanes—even Category 1</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Downtown Clearwater and areas near Clearwater Harbor also face significant exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Post-storm bridge closures can delay restoration mobilization to barrier islands</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <Anchor className="w-6 h-6" />
                Tourism & Hospitality Impact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Clearwater Beach generates over $2 billion annually in tourism revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hotels, resorts, and restaurants require rapid restoration to minimize lost revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Peak season timing of restoration can significantly impact business recovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Phased restoration may allow partial operations during recovery</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                Condominium & Multi-Family Challenges
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Clearwater Beach and Sand Key have extensive high-rise condominium development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">HOA coordination and reserve fund management required for common area restoration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Wind-driven rain and envelope failures can affect multiple floors and units</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">SB4-D milestone inspections now required for coastal condominium buildings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disaster Recovery Services Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Clearwater Disaster Recovery Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive restoration services for Clearwater properties affected by hurricanes, storm surge, fire, and other catastrophic events.
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
            Clearwater Property Damaged? We Can Help.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team to schedule an insurance damage assessment. With 43+ years claims experience and expertise in barrier island restoration, we'll help you navigate the recovery process and maximize your claim settlement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-700 font-bold rounded-full hover:bg-gray-100 transition-all">
              Request Clearwater Assessment
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
              Clearwater Insurance Restoration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured 6-step approach ensures proper documentation, fair settlements, and quality restoration for Clearwater property owners.
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

      {/* Why Choose FCS for Clearwater Disaster Recovery */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Why Clearwater Property Owners Choose FCS
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
                    <Waves className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Barrier Island Restoration Expertise</h3>
                    <p className="text-gray-600">Clearwater Beach properties face unique challenges including saltwater intrusion, storm surge damage, and accelerated corrosion. FCS understands coastal construction and provides appropriate marine-grade materials and restoration techniques for barrier island properties.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Hospitality Industry Understanding</h3>
                    <p className="text-gray-600">Clearwater's hotels, resorts, and restaurants require contractors who understand that time is money. We prioritize restoration timelines, coordinate with property managers, and can phase work to minimize operational disruption and lost revenue.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">All Insurance Carriers Welcome</h3>
                    <p className="text-gray-600">We work with all major insurance carriers on Clearwater commercial and residential claims, including coordination of flood and wind policies. Our professional relationships with carriers and adjusters throughout Florida help facilitate efficient claim processing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">Types of Clearwater Losses We Handle</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Hurricane/Wind",
                  "Storm Surge",
                  "Tropical Storms",
                  "Coastal Flooding",
                  "Tornado Damage",
                  "Saltwater Intrusion",
                  "Fire/Smoke",
                  "Hail Damage",
                  "Burst Pipes",
                  "Mold Remediation",
                  "Lightning Strike",
                  "Vehicle Impact",
                ].map((loss) => (
                  <div key={loss} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span className="text-gray-700">{loss}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-brand-green-dark mb-3">Clearwater Property Types We Restore</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>- Beachfront hotels and resorts (Clearwater Beach, Sand Key)</li>
                  <li>- High-rise and mid-rise condominiums</li>
                  <li>- Restaurants and entertainment venues</li>
                  <li>- Retail centers and shopping districts</li>
                  <li>- Office buildings (downtown Clearwater)</li>
                  <li>- Waterfront single-family residences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pinellas County Coordination Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                Pinellas County Emergency Management Coordination
              </h2>
              <p className="text-gray-200 mb-6">
                Successful Clearwater disaster recovery requires contractors who understand local emergency management protocols, permitting requirements, and code enforcement. FCS maintains established relationships with Pinellas County officials and understands the specific requirements for restoration work following declared disasters.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Emergency Permitting:</strong> Understanding of expedited permitting procedures activated following disaster declarations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Barrier Island Access:</strong> Coordination with authorities for contractor access when bridges reopen following storms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Flood Zone Compliance:</strong> Full knowledge of FEMA requirements, substantial improvement rules, and flood elevation standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>NFIP Coordination:</strong> Experience with National Flood Insurance Program claims and documentation requirements</span>
                </li>
              </ul>
            </div>

            <div>
              <GoogleMap city="Clearwater" height={400} />
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
                Schedule Your Clearwater Property Assessment
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Whether you've experienced hurricane damage, storm surge, fire, or other disaster, our team will assess your Clearwater property and explain your restoration options. We work with all insurance carriers and provide comprehensive documentation to support your claim.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">What to Expect from Your Assessment:</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    Thorough damage inspection including saltwater intrusion assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    Preliminary scope and timeline discussion
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    Insurance claim guidance (wind, flood, or both)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    Flood zone and substantial improvement considerations
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
                Clearwater Disaster Recovery FAQ
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about disaster recovery and insurance restoration in Clearwater, Florida.
              </p>
            </div>

            <FAQ items={clearwaterFaqs} />
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
              currentCity="Clearwater"
              service="disaster-recovery"
              serviceName="Disaster Recovery"
            />

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Clearwater Disaster Recovery Pillar</h3>
              <p className="text-gray-600 mb-4">
                Learn more about our comprehensive disaster recovery services, insurance restoration expertise, and claims experience throughout the Tampa Bay area including Clearwater Beach and Pinellas County.
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
              Clearwater's Large Loss Disaster Recovery Experts
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              When disaster strikes your Clearwater Beach or Pinellas County property, choose the contractor with 43+ years of claims experience, barrier island expertise, and a proven track record of major hurricane response. Florida Construction Specialists—your partner for insurance restoration done right.
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
              <p className="text-sm text-gray-300 mb-4">Trusted for Clearwater large loss restoration:</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-200">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-brand-gold" /> 43+ Years Claims Experience</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-brand-gold" /> License {BUSINESS_INFO.licenseNumber}</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-brand-gold" /> All Insurance Carriers</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-brand-gold" /> $250K+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
