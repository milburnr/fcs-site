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
  Briefcase
} from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { GoogleMap } from "@/components/GoogleMap";
import { NearbyLocations, InternalLinks } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disaster Recovery in Tampa | Florida Construction Specialists",
  description: "Tampa's large loss disaster recovery contractor. 43+ years claims experience, $250K+ insurance restoration projects, all carriers. Call (813) 420-7561.",
  keywords: [
    "disaster recovery tampa",
    "hurricane damage restoration tampa",
    "insurance restoration tampa",
    "storm damage repair tampa",
    "large loss contractor tampa",
    "flood damage restoration tampa",
    "fire damage contractor tampa",
    "insurance claim contractor tampa",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/services/disaster-recovery/" },
  { name: "Tampa", href: "/disaster-recovery-tampa/" },
];

const tampaFaqs = [
  {
    question: "Why is Tampa Bay considered one of the most hurricane-vulnerable metro areas in the U.S.?",
    answer: "Tampa Bay's unique geography creates extreme storm surge vulnerability. The bay's shallow bathymetry can amplify storm surge to 15-20 feet in major hurricanes. Properties along Bayshore Boulevard, Davis Islands, Harbour Island, and the Channelside District face the highest risk. Additionally, Tampa hasn't experienced a direct major hurricane hit since 1921, meaning much of the building stock predates modern wind codes. Our disaster recovery team understands these vulnerabilities and provides comprehensive restoration when storms strike."
  },
  {
    question: "What experience does Florida Construction Specialists have with large loss insurance claims?",
    answer: "Our principal, Frank Bragano, brings 43+ years of property claims experience, including 7 years as an Allstate Commercial Property Adjuster (1982-1989) and subsequent work as an Executive General Adjuster with CJW-Vericlaim and Sedgwick. This insurance industry background means we understand claims from both sides—adjuster and contractor. We know what documentation carriers need, how to properly scope damages, and how to communicate effectively to facilitate fair settlements."
  },
  {
    question: "What size disaster recovery projects does FCS handle in Tampa?",
    answer: "We specialize in large loss disaster recovery, typically projects exceeding $250,000. Our Tampa portfolio includes commercial properties, multi-family residential complexes, condominiums, HOA common areas, and high-value single-family homes. Our Hurricane Harvey response in Texas exceeded $40M total, and our Hurricane Irma work in Miami exceeded $20M—demonstrating our capacity for major disaster mobilization."
  },
  {
    question: "Do you work with all insurance carriers on Tampa disaster claims?",
    answer: "Yes, Florida Construction Specialists works with all major insurance carriers on commercial and residential large loss claims. Our professional relationships with carriers, adjusters, and claims professionals throughout Florida help facilitate efficient claim processing. We maintain the documentation standards and professional communication that carriers expect from experienced restoration contractors."
  },
  {
    question: "What Tampa neighborhoods are most vulnerable to flood and hurricane damage?",
    answer: "Tampa's highest-risk areas include VE (velocity) flood zones along Hillsborough Bay, Davis Islands, Harbour Island, Bayshore Boulevard, and the Channelside District. South Tampa, Westshore, and low-lying areas near the Hillsborough River also face significant flood exposure. Downtown Tampa's older commercial buildings and the historic districts of Ybor City, Hyde Park, and Tampa Heights require specialized restoration approaches that comply with both building codes and historic preservation requirements."
  },
  {
    question: "What is Tampa's 50% Rule and how does it affect disaster restoration?",
    answer: "Under Florida Building Code, if repair costs exceed 50% of a building's pre-damage market value, the entire structure must be brought up to current code—not just the damaged portions. In Tampa, this often triggers requirements for impact-resistant windows, upgraded roof tie-downs, flood elevation compliance, and HVHZ (High-Velocity Hurricane Zone) wind resistance standards. Our experience with substantial improvement calculations helps Tampa property owners understand their obligations and plan accordingly."
  },
  {
    question: "How does FCS handle documentation for Tampa insurance restoration projects?",
    answer: "We provide comprehensive documentation including initial damage assessments with photos and video, moisture mapping reports, detailed scope of work documents, certified estimates using industry-standard software, material specifications, progress reports, and final completion documentation. This thorough documentation supports fair claim settlements and provides clear records for supplemental claims when hidden damage is discovered during restoration."
  },
  {
    question: "What is the typical timeline for hurricane damage restoration in Tampa?",
    answer: "Hurricane restoration timelines vary by project scope. Emergency stabilization typically takes 1-3 days, water extraction and structural drying 5-14 days, and structural repairs 30-90 days. Complete restoration of large commercial or multi-family properties often requires 6-12 months, depending on damage extent, permit timelines through the City of Tampa Building Department, and material availability. We provide realistic schedules during our initial assessment."
  },
  {
    question: "Can you restore historic properties in Tampa's designated historic districts?",
    answer: "Yes, FCS has extensive experience restoring historic properties throughout Tampa Bay, including work in Ybor City, Hyde Park, Tampa Heights, and Seminole Heights. We coordinate with the Tampa Historic Preservation Commission and follow Secretary of the Interior Standards to maintain historic character while incorporating disaster-resistant improvements where permitted. Our portfolio includes projects like the Italian American Club in Ybor City and Bay Pines Veterans Hospital."
  },
  {
    question: "What types of disaster damage do you restore in Tampa?",
    answer: "We handle all major disaster types including hurricane and tropical storm damage, flooding and water intrusion, fire and smoke damage, tornado damage, hail damage, and vehicle impact damage. Our services encompass structural repair, roof reconstruction, interior restoration, mold remediation coordination, and complete building envelope reconstruction. As a prime contractor, we manage all aspects of restoration from emergency response through final completion."
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
    description: "Large loss water damage restoration including flood recovery, pipe failures, and comprehensive moisture remediation.",
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
    description: "We conduct thorough damage assessment with comprehensive photo and video documentation, moisture readings, and detailed notes. Our certified damage assessments form the foundation for accurate scope development and support your insurance claim.",
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
    description: "Once scope is approved, we mobilize resources for restoration. Our established relationships with Tampa-area subcontractors and suppliers enable rapid response without sacrificing quality or code compliance.",
    icon: Clock,
  },
  {
    step: "05",
    title: "Restoration Execution",
    description: "Experienced project managers oversee every aspect of restoration, from demolition through final finishes. Regular progress reports and documentation maintain transparency and keep your insurance carrier informed throughout the project.",
    icon: Building2,
  },
  {
    step: "06",
    title: "Final Walkthrough & Project Closeout",
    description: "Comprehensive punch list resolution, City of Tampa final inspections, insurance sign-off, warranty documentation, and certificate of completion ensure your Tampa property is returned to pre-loss condition—or better.",
    icon: Award,
  },
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services (Main)" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Services" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/insurance-claims-process/", label: "Insurance Claims Process" },
  { href: "/disaster-recovery-st-petersburg/", label: "Disaster Recovery St. Petersburg" },
  { href: "/disaster-recovery-clearwater/", label: "Disaster Recovery Clearwater" },
  { href: "/disaster-recovery-lakeland/", label: "Disaster Recovery Lakeland" },
];

export default function DisasterRecoveryTampaPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema city="Tampa" service="Disaster Recovery" />
      <ServiceSchema
        serviceName="Disaster Recovery and Insurance Restoration"
        serviceDescription="Large loss disaster recovery and insurance restoration services in Tampa, FL. Specializing in hurricane damage, water damage, fire damage, and comprehensive property restoration with 43+ years claims experience. Projects from $250,000 to $50M+."
        city="Tampa"
        minPrice="250000"
      />
      <FAQSchema faqs={tampaFaqs} />
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
                <p className="font-bold text-brand-green-dark">Tampa Property Damaged?</p>
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
                <span className="text-brand-gold font-semibold">Serving Tampa, FL</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Disaster Recovery in Tampa
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                When disaster strikes Tampa Bay, you need a contractor who understands both construction and insurance. With 43+ years of property claims experience—including work as a former Allstate Commercial Adjuster—Florida Construction Specialists brings unmatched expertise to large loss restoration throughout Tampa.
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
                Request a Tampa Assessment
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your Tampa property damage and we'll schedule an assessment with our insurance restoration team.
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
              Tampa Bay's Most Vulnerable Metro Area—And the Expertise to Restore It
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                Tampa Bay is consistently ranked as one of the most hurricane-vulnerable metropolitan areas in the United States. The bay's unique geography—shallow waters that amplify storm surge, extensive waterfront development, and building stock largely predating modern wind codes—creates exceptional risk for property owners throughout Hillsborough County.
              </p>
              <p className="mb-6">
                When disaster strikes Tampa, Florida Construction Specialists brings a combination of expertise found nowhere else: genuine insurance industry experience paired with prime contractor construction capabilities. Our principal, Frank Bragano, spent 7 years as an Allstate Commercial Property Adjuster before transitioning to Executive General Adjuster roles with CJW-Vericlaim and Sedgwick. This 43+ year foundation in property claims means we understand the restoration process from every perspective.
              </p>
              <p className="mb-6">
                Our disaster recovery track record demonstrates our capacity for major mobilization. Following Hurricane Harvey in Texas, we managed over $40 million in restoration projects. Hurricane Irma brought us to Miami where we completed more than $20 million in work including Embassy Towers, Oceania I Luxury Condominiums, and numerous commercial properties. This experience informs our approach to Tampa disaster recovery, where similar challenges await.
              </p>
              <p>
                As your prime contractor for Tampa disaster recovery, FCS provides turnkey restoration—from initial damage assessment and certified estimates through complete reconstruction. We work with all insurance carriers, maintain the documentation standards carriers expect, and deliver quality restoration that returns your property to pre-loss condition.
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

      {/* Tampa-Specific Risk Section */}
      <section className="section bg-red-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Tampa's Disaster Risk Profile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tampa Bay's geography creates unique challenges for property owners and requires restoration contractors with local expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Hurricane & Storm Surge Risk
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Tampa Bay's shallow bathymetry can amplify storm surge to 15-20 feet in major hurricanes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Last direct major hurricane hit was 1921—most buildings predate modern wind codes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Bayshore Boulevard, Davis Islands, Harbour Island, and Channelside face extreme exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hurricane season runs June through November with peak activity August-October</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <Droplets className="w-6 h-6" />
                Flood Zone Considerations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Extensive VE (velocity) and AE (still water) flood zones throughout South Tampa</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Westshore business district and downtown face significant flood exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Low-lying areas near Hillsborough River vulnerable to flash flooding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Tampa averages 46 inches of annual rainfall creating persistent water damage risk</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Tampa's 50% Rule & Building Code Requirements</h3>
            <p className="text-gray-700 mb-4">
              Under Florida Building Code, if restoration costs exceed 50% of a building's pre-damage market value, the entire structure must be brought up to current code standards—not just the damaged portions. For Tampa properties, this frequently triggers requirements for:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <Shield className="w-8 h-8 text-red-700 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Impact-Resistant Glazing</p>
                <p className="text-sm text-gray-600">Windows & doors</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <Building2 className="w-8 h-8 text-red-700 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Enhanced Roof Tie-Downs</p>
                <p className="text-sm text-gray-600">HVHZ compliance</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <Droplets className="w-8 h-8 text-red-700 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Flood Elevation</p>
                <p className="text-sm text-gray-600">SFHA compliance</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 text-center">
                <CloudRain className="w-8 h-8 text-red-700 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Wind Resistance</p>
                <p className="text-sm text-gray-600">Current standards</p>
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
              Tampa Disaster Recovery Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive restoration services for Tampa properties affected by hurricanes, fire, water damage, and other catastrophic events.
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
            Tampa Property Damaged? We Can Help.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team to schedule an insurance damage assessment. With 43+ years claims experience, we'll help you navigate the restoration process and maximize your recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-700 font-bold rounded-full hover:bg-gray-100 transition-all">
              Request Tampa Assessment
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
              Tampa Insurance Restoration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured 6-step approach ensures proper documentation, fair settlements, and quality restoration for Tampa property owners.
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

      {/* Why Choose FCS for Tampa Disaster Recovery */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Why Tampa Property Owners Choose FCS
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
                    <Building2 className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Large Loss Specialists ($250K+ Projects)</h3>
                    <p className="text-gray-600">We focus on substantial Tampa restoration projects—typically $250,000 and above. This allows us to dedicate senior project managers, experienced superintendents, and the resources these complex projects demand.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Proven Hurricane Response Capacity</h3>
                    <p className="text-gray-600">Our Hurricane Harvey Texas response exceeded $40M in restoration. Hurricane Irma Miami work exceeded $20M including Embassy Towers and Oceania I Condominiums. We have the experience and capacity Tampa needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">All Insurance Carriers Welcome</h3>
                    <p className="text-gray-600">We work with all major insurance carriers on Tampa commercial and residential claims. Our professional relationships with carriers and adjusters throughout Florida help facilitate efficient claim processing and fair settlements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">Types of Tampa Losses We Handle</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Hurricane/Wind",
                  "Tropical Storms",
                  "Tornado Damage",
                  "Flood/Water Loss",
                  "Fire/Smoke",
                  "Hail Damage",
                  "Vehicle Impact",
                  "Structural Collapse",
                  "Burst Pipes",
                  "Mold Remediation",
                  "Lightning Strike",
                  "Storm Surge",
                ].map((loss) => (
                  <div key={loss} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span className="text-gray-700">{loss}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-brand-green-dark mb-3">Tampa Property Types We Restore</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>- Commercial buildings (Downtown, Westshore, Channelside)</li>
                  <li>- Multi-family residential (condos, apartments)</li>
                  <li>- Historic properties (Ybor City, Hyde Park, Tampa Heights)</li>
                  <li>- High-value waterfront residences</li>
                  <li>- Medical and healthcare facilities</li>
                  <li>- Retail centers and hospitality venues</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tampa-Specific Building Department Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                City of Tampa Building Department Expertise
              </h2>
              <p className="text-gray-200 mb-6">
                Successful Tampa disaster recovery requires contractors who understand local permitting, inspection requirements, and code enforcement. FCS maintains established relationships with the City of Tampa Building Department and understands the specific requirements for restoration work in Hillsborough County.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Permit Expediting:</strong> Established relationships with Tampa permitting staff accelerate approval timelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Code Compliance:</strong> Full knowledge of Florida Building Code, HVHZ requirements, and 50% Rule implications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Historic Districts:</strong> Experience with Tampa Historic Preservation Commission requirements for Ybor City, Hyde Park, and Tampa Heights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Inspection Coordination:</strong> Professional relationships ensure smooth inspections and timely project completion</span>
                </li>
              </ul>
            </div>

            <div>
              <GoogleMap city="Tampa" height={400} />
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
                Schedule Your Tampa Property Assessment
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Whether you've experienced hurricane damage, flooding, fire, or other disaster, our team will assess your Tampa property and explain your restoration options. We work with all insurance carriers and provide comprehensive documentation to support your claim.
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
                    Preliminary scope and timeline discussion
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    Insurance claim guidance and requirements
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-gold" />
                    Code compliance considerations (50% Rule, HVHZ, etc.)
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
                Tampa Disaster Recovery FAQ
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about disaster recovery and insurance restoration in Tampa, Florida.
              </p>
            </div>

            <FAQ items={tampaFaqs} />
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
              currentCity="Tampa"
              service="disaster-recovery"
              serviceName="Disaster Recovery"
            />

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Tampa Disaster Recovery Pillar</h3>
              <p className="text-gray-600 mb-4">
                Learn more about our comprehensive disaster recovery services, insurance restoration expertise, and claims experience throughout Tampa Bay.
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
              Tampa's Large Loss Disaster Recovery Experts
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              When disaster strikes your Tampa property, choose the contractor with 43+ years of claims experience and a proven track record of major hurricane response. Florida Construction Specialists—your partner for insurance restoration done right.
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
              <p className="text-sm text-gray-300 mb-4">Trusted for Tampa large loss restoration:</p>
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
