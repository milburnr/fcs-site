import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import {
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Building2,
  Shield,
  Award,
  AlertTriangle,
  FileText,
  Wrench,
  Clock,
  Calendar,
  DollarSign,
  Users,
  Sun,
  Droplets,
  Scale,
  ClipboardCheck,
  Thermometer,
  Gauge,
  TreeDeciduous,
  Home,
  Search,
  Hammer,
  HardHat,
  CloudRain,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import {
  LocalBusinessSchema,
  ServiceSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks, RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { GoogleMap } from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "Condo Remediation Lakeland | SB4-D Polk | FCS",
  description:
    "Lakeland condo remediation experts. SB4-D compliance, milestone inspections (30-year inland deadline), SIRS structural reserve studies. Polk County licensed contractor. Call (813) 420-7561.",
  keywords:
    "condo remediation Lakeland, SB4-D compliance Polk County, milestone inspection Lakeland FL, SIRS Lakeland condos, condo structural repair Lakeland, HOA contractor Polk County, condominium restoration Lakeland, structural integrity reserve study Lakeland",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Services", href: "/commercial/" },
  { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
  { name: "Lakeland", href: "/condo-remediation-lakeland/" },
];

const trustBadges = [
  { icon: FileText, label: "SB4-D Compliance" },
  { icon: ClipboardCheck, label: "Milestone Inspections" },
  { icon: Shield, label: "Licensed CBC1262722" },
  { icon: Award, label: "40+ Years Experience" },
];

const services = [
  {
    icon: Search,
    title: "Milestone Inspection Coordination",
    description:
      "Full coordination of Phase 1 and Phase 2 structural inspections for Lakeland buildings approaching their 30-year milestone. We work with licensed engineers to ensure thorough assessments.",
  },
  {
    icon: FileText,
    title: "SIRS Assessments",
    description:
      "Structural Integrity Reserve Study support including component condition assessments, repair cost projections, and reserve funding analysis for Lakeland condo associations.",
  },
  {
    icon: Hammer,
    title: "Structural Concrete Repair",
    description:
      "Expert repair of spalling concrete, delamination, and deteriorated structural elements. Specialized techniques for inland buildings addressing water intrusion and settlement damage.",
  },
  {
    icon: Droplets,
    title: "Waterproofing Systems",
    description:
      "Comprehensive waterproofing for balconies, walkways, parking structures, and building envelopes. Protection against Lakeland's humid subtropical climate and intense rainfall.",
  },
  {
    icon: Building2,
    title: "Balcony Reconstruction",
    description:
      "Complete balcony restoration including structural repairs, waterproofing membranes, railing systems, and deck coatings for Lakeland's multi-story condominiums.",
  },
  {
    icon: HardHat,
    title: "Parking Structure Repair",
    description:
      "Restoration of parking decks and garages addressing common inland deterioration: water penetration, expansion joint failures, traffic surface wear, and drainage issues.",
  },
];

const lakelandNeighborhoods = [
  "Downtown Lakeland",
  "Lake Morton",
  "Lake Hollingsworth",
  "Dixieland",
  "South Lakeland",
  "Lakeside Village",
  "Highland City",
  "Kathleen",
  "Mulberry",
  "Bartow",
  "Winter Haven",
  "Auburndale",
];

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "We review your building's age, construction type, and current condition. For Lakeland properties approaching their 30-year anniversary, we help prioritize inspection needs.",
  },
  {
    step: 2,
    title: "Engineering Coordination",
    description:
      "We coordinate with licensed structural engineers for milestone inspections, Phase 1 assessments, and Phase 2 testing if substantial deterioration is identified.",
  },
  {
    step: 3,
    title: "Scope Development",
    description:
      "Based on engineering findings, we develop detailed repair specifications addressing identified deficiencies with solutions appropriate for Lakeland's inland climate conditions.",
  },
  {
    step: 4,
    title: "Board Presentation",
    description:
      "Professional proposals suitable for condo board meetings including scope, timeline, cost options, and phased approaches aligned with reserve fund planning.",
  },
  {
    step: 5,
    title: "Construction Execution",
    description:
      "Expert remediation work by our experienced crews, with careful scheduling to minimize resident disruption while maintaining building occupancy throughout the project.",
  },
  {
    step: 6,
    title: "Documentation & Compliance",
    description:
      "Complete documentation package including engineer certifications, warranty information, and compliance records for Polk County building department and association files.",
  },
];

const inlandChallenges = [
  {
    icon: CloudRain,
    title: "Heavy Rainfall & Water Intrusion",
    description:
      "Lakeland averages 50+ inches of rainfall annually. Unlike coastal salt corrosion, inland deterioration often starts with water intrusion through failed sealants, expansion joints, and drainage systems. Proper waterproofing is critical.",
  },
  {
    icon: Thermometer,
    title: "Thermal Cycling Stress",
    description:
      "Lakeland's temperature swings from hot afternoons to cooler nights create expansion/contraction cycles that stress concrete and sealants. This thermal fatigue causes cracking that allows moisture penetration.",
  },
  {
    icon: Sun,
    title: "Intense UV Exposure",
    description:
      "Central Florida's intense UV radiation degrades waterproofing membranes, deck coatings, and sealants. Without salt air to dominate concerns, UV degradation becomes a primary factor in coating failures.",
  },
  {
    icon: TreeDeciduous,
    title: "Organic Growth & Staining",
    description:
      "High humidity promotes algae, mold, and mildew growth on concrete surfaces. While primarily aesthetic, organic growth can penetrate porous concrete and retain moisture, accelerating deterioration.",
  },
];

const complianceTimeline = [
  {
    milestone: "Lakeland buildings 30+ years old (more than 3 miles from coast)",
    deadline: "December 31, 2025",
    status: "approaching",
  },
  {
    milestone: "Buildings approaching 30 years (built before 1996)",
    deadline: "By building's 30th anniversary",
    status: "upcoming",
  },
  {
    milestone: "SIRS must be completed for all applicable buildings",
    deadline: "December 31, 2024",
    status: "urgent",
  },
  {
    milestone: "Reserve funding must begin (no more waiving structural reserves)",
    deadline: "January 1, 2025",
    status: "upcoming",
  },
  {
    milestone: "Subsequent milestone inspections",
    deadline: "Every 10 years after initial",
    status: "ongoing",
  },
];

const lakelandFaqs = [
  {
    question: "What is Florida SB4-D and how does it affect Lakeland condominiums?",
    answer:
      "Florida Senate Bill 4-D, enacted in 2022 following the Surfside tragedy, mandates milestone structural inspections and Structural Integrity Reserve Studies (SIRS) for condominium buildings three stories or taller. For Lakeland properties—which are more than three miles from the coast—buildings must complete their initial milestone inspection by 30 years of age (compared to 25 years for coastal properties). This gives Lakeland associations more time to prepare, but buildings constructed in the early 1990s and before are now approaching or past their deadlines. The law also eliminates the ability to waive reserve funding for structural components starting January 2025.",
  },
  {
    question: "Why do Lakeland condos have a 30-year deadline instead of 25 years?",
    answer:
      "Florida SB4-D recognizes that coastal buildings face accelerated deterioration from salt air corrosion and established different timelines based on location. Buildings within three miles of the coastline must complete milestone inspections at 25 years due to the aggressive effects of salt spray on reinforcing steel. Lakeland's inland location—approximately 35 miles from Tampa Bay and 55 miles from the Gulf—means buildings here face different deterioration patterns: primarily water intrusion, thermal stress, and UV degradation rather than salt corrosion. The 30-year timeline reflects these different conditions while still ensuring structural safety.",
  },
  {
    question: "What structural issues are most common in Lakeland condominiums?",
    answer:
      "Lakeland's inland location creates different deterioration patterns than coastal properties. The most common issues we find include: water intrusion through failed waterproofing and expansion joints (Lakeland's 50+ inches of annual rainfall creates constant moisture exposure), concrete cracking from thermal cycling (temperature variations cause expansion/contraction stress), drainage system failures leading to ponding water, foundation settlement issues (Central Florida's variable soil conditions), deteriorated sealants and coatings from intense UV exposure, and parking structure degradation from water and traffic wear. While rebar corrosion still occurs, it's typically less severe than coastal buildings and develops more gradually.",
  },
  {
    question: "When must our Lakeland condo association complete milestone inspections?",
    answer:
      "For Lakeland buildings 30+ years old as of December 31, 2024, the deadline for initial milestone inspection is December 31, 2025. Buildings approaching 30 years must complete their inspection by their 30th anniversary date. For example, a building with a certificate of occupancy dated June 1996 must complete its milestone inspection by June 2026. Additionally, all applicable associations must complete their Structural Integrity Reserve Study (SIRS) by December 31, 2024, regardless of building age. After the initial inspection, subsequent milestone inspections are required every 10 years.",
  },
  {
    question: "How much does condo remediation typically cost in Lakeland?",
    answer:
      "Condo remediation costs in Lakeland vary significantly based on building size, age, condition, and scope of identified deficiencies. Milestone inspections typically cost $3,000-$15,000 for Phase 1, with Phase 2 (if triggered) adding $15,000-$75,000 depending on complexity. SIRS studies range from $5,000-$25,000 depending on building size. Remediation costs depend entirely on deficiencies found: concrete spalling repair runs $15-50/SF, waterproofing systems $8-20/SF, balcony reconstruction $300-600/SF, and parking structure repairs $15-40/SF. Lakeland's inland location often means somewhat lower costs than coastal projects since salt damage tends to be less severe, but every building is unique.",
  },
  {
    question: "Can residents stay in the building during remediation work?",
    answer:
      "In most cases, yes. FCS develops phased remediation plans specifically designed to maintain building occupancy. Our approach includes working floor-by-floor or section-by-section, creating temporary weather barriers when needed, scheduling noisy work during reasonable hours, maintaining all life safety systems, and providing advance notice to affected residents. Only in cases of severe structural deficiency requiring immediate shoring or emergency repairs would temporary evacuation of affected areas be recommended. We understand Lakeland's mix of year-round residents and seasonal occupants and plan accordingly.",
  },
  {
    question: "What is the difference between Phase 1 and Phase 2 milestone inspections?",
    answer:
      "Phase 1 is a visual inspection by a licensed engineer or architect to identify any substantial structural deterioration—deterioration that approaches or exceeds safe design limits. The inspector examines load-bearing walls, primary structural systems, and overall structural condition. If substantial deterioration is found during Phase 1, a Phase 2 inspection is triggered. Phase 2 requires more extensive investigation including destructive testing (concrete cores, rebar exposure, laboratory analysis), detailed structural analysis, and development of a comprehensive repair plan with cost estimates and timelines. FCS coordinates with qualified engineers for both phases and executes required remediation.",
  },
  {
    question: "What is SIRS and why does it matter for Lakeland associations?",
    answer:
      "SIRS (Structural Integrity Reserve Study) is a specialized reserve study mandated by SB4-D that focuses specifically on structural components: roof, waterproofing, foundation, load-bearing walls, floor structures, fireproofing, plumbing, electrical systems, and any item with deferred maintenance exceeding $10,000. Unlike traditional reserve studies, SIRS cannot use pooled funding, and associations cannot vote to waive or reduce funding for these structural components. This means Lakeland associations that have historically underfunded reserves may face significant assessment increases starting January 2025 when the no-waiver provisions take effect.",
  },
  {
    question: "How does FCS work with Polk County building departments?",
    answer:
      "Florida Construction Specialists has extensive experience working with Polk County's building department and permitting processes. We handle all permit applications for remediation work, coordinate required inspections throughout construction, and ensure final documentation meets all county requirements. Our familiarity with local requirements helps streamline the approval process. We also coordinate with the condo association's engineer to ensure all repair documentation satisfies both Polk County and state SB4-D compliance requirements.",
  },
  {
    question: "Our building was constructed in 1993. What should we do now?",
    answer:
      "Buildings constructed in 1993 are now 31-32 years old and have passed their 30-year milestone threshold. You should take immediate action: First, schedule a milestone inspection with a licensed engineer if you haven't already—this is legally required. Second, complete your SIRS (required by December 31, 2024) if not already done. Third, contact FCS to discuss any identified deficiencies and develop a remediation plan. Even if your building appears to be in good condition, the inspections are mandatory and documentation is required for compliance. Many early 1990s Lakeland buildings are in this situation, and we're experienced in helping associations navigate the process efficiently.",
  },
  {
    question: "What funding options exist for SB4-D compliance and remediation?",
    answer:
      "Common funding approaches include: existing reserves (if adequately funded through prior planning), special assessments (one-time or multi-year charges to unit owners), bank loans secured by future assessments (typically repaid over 5-15 years), and phased construction (spreading work across multiple budget cycles). Many associations use a combination—perhaps a loan to begin immediate work while collecting special assessments over time. FCS helps Lakeland boards understand options and develop strategies that balance compliance urgency with unit owner financial capacity. We can also provide phased proposals that prioritize critical repairs while deferring less urgent work.",
  },
  {
    question: "What happens if our association misses SB4-D deadlines?",
    answer:
      "Non-compliance with SB4-D carries serious consequences: local building officials can issue notices of non-compliance that escalate to building closure orders for structures posing safety risks, board members may face personal liability for failure to fulfill fiduciary duties, insurance carriers may deny coverage or dramatically increase premiums, property values decline as buyers and lenders become aware of compliance issues, and units may become difficult to sell or finance. Lakeland's growing real estate market between Tampa and Orlando makes compliance particularly important—non-compliant buildings face significant disadvantages in an otherwise strong market.",
  },
];

const internalLinks = [
  { href: "/commercial/condo-remediation/", label: "SB4-D Compliance Services" },
  { href: "/services/balcony-reconstruction/", label: "Balcony Reconstruction" },
  { href: "/services/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/commercial/parking-structures/", label: "Parking Structure Repair" },
  { href: "/condo-remediation-tampa/", label: "Condo Remediation Tampa" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CondoRemediationLakelandPage() {
  return (
    <>
      <LocalBusinessSchema city="Lakeland" service="Condo Remediation & SB4-D Compliance" />
      <ServiceSchema
        serviceName="Condo Remediation & SB4-D Compliance"
        serviceDescription="Expert condo remediation and SB4-D compliance services for Lakeland and Polk County condominiums. Milestone inspections, SIRS assessments, structural repair, and waterproofing for buildings 3+ stories. Projects from $50,000 to $5 million+."
        city="Lakeland"
        minPrice="50000"
      />
      <FAQSchema faqs={lakelandFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Commercial-Construction.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green font-semibold">Serving Lakeland &amp; Polk County, FL</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Condo Remediation &amp; SB4-D Compliance in Lakeland
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Polk County&apos;s trusted contractor for condominium structural remediation and SB4-D 
              compliance. Milestone inspections, SIRS assessments, concrete restoration, and waterproofing 
              for multi-story buildings. <strong>30-year inland deadline approaching</strong> for buildings 
              constructed before 1996.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                >
                  <badge.icon className="w-5 h-5 text-brand-green" />
                  <span className="text-white font-medium">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Request Compliance Assessment
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

      {/* SB4-D Alert Banner */}
      <section className="py-4 bg-amber-50 border-y border-amber-200">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 text-amber-800">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="font-semibold text-center">
              <strong>30-Year Milestone Deadline:</strong> Lakeland buildings 3+ stories built before 1995 must complete 
              milestone inspections by December 31, 2025. SIRS required by December 31, 2024.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Lakeland&apos;s Condo Remediation &amp; SB4-D Compliance Experts
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Florida Construction Specialists brings over 40 years of construction experience to 
                Lakeland and Polk County condominium associations facing SB4-D compliance requirements. 
                As Central Florida&apos;s condo market continues to grow—fueled by Lakeland&apos;s strategic 
                location between Tampa and Orlando—understanding and meeting these new structural safety 
                requirements has never been more important for property values and resident safety.
              </p>

              <p className="text-gray-600 mb-6">
                Lakeland&apos;s position as an <strong>inland community more than three miles from the 
                coast</strong> means your buildings qualify for the 30-year milestone inspection timeline 
                rather than the 25-year coastal deadline. While this provides additional time compared 
                to beachfront properties, many Lakeland condominiums built during the building boom of 
                the late 1980s and early 1990s are now approaching or have passed their 30-year milestone. 
                Buildings with certificates of occupancy from 1994 or earlier are now subject to mandatory 
                inspections.
              </p>

              <p className="text-gray-600 mb-6">
                Our team specializes in the unique challenges facing inland Florida condominiums. Unlike 
                coastal buildings where salt air corrosion dominates structural concerns, Lakeland properties 
                face different deterioration patterns: water intrusion from our 50+ inches of annual rainfall, 
                thermal stress from temperature cycling, UV degradation of coatings and membranes, and 
                settlement issues related to Central Florida&apos;s variable soil conditions. We understand these 
                inland-specific challenges and develop remediation solutions tailored to Lakeland&apos;s environment.
              </p>

              <p className="text-gray-600 mb-8">
                As a prime contractor, FCS maintains direct accountability for every project. We never 
                operate as a subcontractor, ensuring your Lakeland association works directly with the 
                company responsible for quality, timeline, and warranty obligations. Our experience with 
                condo boards, HOA governance, and Polk County permitting processes ensures smooth project 
                execution from initial assessment through final compliance documentation.
              </p>

              {/* Project Gallery */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Commercial-Construction.webp"
                    alt="Commercial building restoration"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Structural Repair</p>
                    <p className="text-xs text-gray-200">Concrete Restoration</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png"
                    alt="Waterproofing application"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Waterproofing</p>
                    <p className="text-xs text-gray-200">Moisture Protection</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
                    alt="Balcony reconstruction"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Balcony Work</p>
                    <p className="text-xs text-gray-200">Complete Restoration</p>
                  </div>
                </div>
              </div>

              {/* Target Audience Section */}
              <div className="bg-brand-green-bg rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-brand-green" />
                  Who We Serve in Lakeland &amp; Polk County
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Condo Associations</span>
                      <p className="text-sm text-gray-600">
                        Board members navigating SB4-D compliance for 30-year milestone deadlines
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Property Managers</span>
                      <p className="text-sm text-gray-600">
                        Managing milestone inspection repairs throughout Polk County
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Multi-Family Building Owners</span>
                      <p className="text-sm text-gray-600">
                        Owners of 3+ story residential buildings requiring compliance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">HOA Boards</span>
                      <p className="text-sm text-gray-600">
                        Decision-makers seeking qualified contractors for structural projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Need a Compliance Assessment for Your Lakeland Building?
                    </h4>
                    <p className="text-gray-600">
                      We provide complimentary consultations for qualified projects.
                    </p>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-dark transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-5 h-5" />
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">HOA &amp; Property Managers</h3>
                <p className="text-gray-200 mb-4">
                  Request a complimentary assessment and proposal for your Lakeland condominium 
                  building&apos;s SB4-D compliance and remediation needs.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-full hover:bg-brand-green-forest transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* 30-Year Timeline Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  30-Year Inland Timeline
                </h3>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Location:</span> 3+ miles from coast
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Milestone:</span> 30 years, then every 10 years
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Buildings 30+:</span> Due by Dec 31, 2025
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">SIRS:</span> Due by Dec 31, 2024
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">No reserve waivers:</span> Starting Jan 2025
                  </li>
                </ul>
                <Link
                  href="/commercial/condo-remediation/"
                  className="text-amber-800 font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:underline"
                >
                  Read Full SB4-D Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Services */}
              <RelatedServices city="Lakeland" currentService="condo-remediation" />

              {/* Nearby Locations */}
              <NearbyLocations
                currentCity="Lakeland"
                service="condo-remediation"
                serviceName="Condo Remediation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding the 30-Year Deadline Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 font-heading">
              Understanding Lakeland&apos;s 30-Year Milestone Inspection Deadline
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Florida&apos;s SB4-D legislation, passed in 2022 following the tragic Surfside condominium 
                collapse, establishes mandatory structural safety inspections for multi-story residential 
                buildings throughout the state. A key feature of the law is its recognition that coastal 
                and inland buildings face different environmental challenges and deteriorate at different rates.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">
                Why Lakeland Gets the 30-Year Timeline
              </h3>
              <p className="mb-6">
                Buildings within three miles of Florida&apos;s coastline must complete milestone inspections 
                at 25 years of age because salt air dramatically accelerates structural deterioration. The 
                chloride ions in salt spray penetrate concrete and cause rapid corrosion of reinforcing steel, 
                often creating visible damage within 15-20 years.
              </p>
              <p className="mb-6">
                Lakeland, located approximately 35 miles from Tampa Bay and 55 miles from the Gulf of Mexico, 
                is well beyond this coastal zone. Buildings here don&apos;t experience the same aggressive salt 
                corrosion, so the law provides an additional five years before the initial milestone inspection 
                is required. This 30-year timeline recognizes that while inland buildings still deteriorate and 
                require inspection, the rate of structural degradation is typically slower than coastal properties.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">
                Which Lakeland Buildings Are Affected?
              </h3>
              <p className="mb-6">
                SB4-D applies to all condominium and cooperative buildings three stories or taller. In Lakeland, 
                this includes mid-rise condominiums, mixed-use buildings with residential units, and cooperative 
                housing. The law applies regardless of building use—residential, commercial, or mixed-use 
                condominiums all face the same requirements if they meet the height threshold.
              </p>
              <p className="mb-4">
                Key factors determining your compliance timeline include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Building age:</strong> Determined by certificate of occupancy date, not construction start</li>
                <li><strong>Building height:</strong> Three or more stories (including parking levels in some cases)</li>
                <li><strong>Association type:</strong> Both condominiums and cooperatives must comply</li>
                <li><strong>Current building condition:</strong> May trigger earlier inspection if substantial deterioration is observed</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">
                Critical Deadlines for Lakeland Associations
              </h3>
              <p className="mb-6">
                While Lakeland&apos;s 30-year timeline provides more breathing room than coastal areas, many 
                local buildings are now approaching or past their milestone dates. The building boom of the 
                late 1980s and early 1990s—when Lakeland&apos;s population was rapidly growing and condominium 
                development was accelerating—means a significant number of local buildings are now 30+ years old.
              </p>
            </div>
          </div>

          {/* Timeline Cards */}
          <div className="max-w-4xl mx-auto mt-8">
            <h3 className="text-xl font-bold text-brand-green-dark font-heading mb-6 text-center">
              SB4-D Compliance Timeline for Lakeland
            </h3>
            <div className="space-y-4">
              {complianceTimeline.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-sm ${
                    item.status === 'urgent' ? 'border-l-4 border-red-500' : 
                    item.status === 'approaching' ? 'border-l-4 border-amber-500' :
                    'border-l-4 border-brand-gold'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3 md:mb-0">
                    {item.status === 'urgent' ? (
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Clock className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    )}
                    <span className="font-medium text-gray-700">{item.milestone}</span>
                  </div>
                  <span className={`px-4 py-2 rounded-full font-bold text-sm ${
                    item.status === 'urgent' 
                      ? 'bg-red-600 text-white' 
                      : item.status === 'approaching'
                      ? 'bg-amber-500 text-white'
                      : item.status === 'upcoming'
                      ? 'bg-brand-gold text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {item.deadline}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-start gap-3">
                <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-800 mb-2">Buildings from the Early 1990s</h4>
                  <p className="text-blue-700">
                    Lakeland condominiums built between 1990-1995 are now at or past their 30-year milestone. 
                    If your building was constructed during this period and hasn&apos;t completed a milestone 
                    inspection, you should begin the process immediately. Buildings from the mid-to-late 1990s 
                    have a narrow window to plan and budget before their deadlines arrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Condo Remediation Services in Lakeland
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive SB4-D compliance and structural restoration solutions for Lakeland 
              and Polk County condominium associations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-brand-green-bg rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Visual Break */}
      <ContentParallax
        src="/images/fcs-concrete-restoration/fcs-concrete-restoration-large.webp"
        alt="Condo structural remediation"
        title="SB 4-D Compliance Experts"
        subtitle="Trusted by HOAs and property managers throughout Tampa Bay"
        overlayOpacity={0.55}
      />

      {/* Inland-Specific Challenges Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Lakeland&apos;s Unique Structural Challenges
              </h2>

              <p className="text-gray-600 mb-6">
                While Lakeland avoids the aggressive salt air corrosion that plagues coastal condominiums, 
                inland buildings face their own set of structural challenges. Understanding these 
                Lakeland-specific issues is essential for proper assessment and remediation planning.
              </p>

              <p className="text-gray-600 mb-6">
                Central Florida&apos;s humid subtropical climate creates a demanding environment for concrete 
                structures. High humidity promotes moisture retention, intense rainfall creates water 
                intrusion pathways, extreme UV exposure degrades protective coatings, and thermal cycling 
                stresses joints and sealants. Without salt corrosion as the dominant concern, these 
                factors become the primary drivers of structural deterioration in Lakeland condominiums.
              </p>

              <p className="text-gray-600 mb-8">
                FCS has developed remediation approaches specifically tailored to inland Florida conditions. 
                Our waterproofing systems, concrete repair techniques, and protective coatings are selected 
                to address the moisture, thermal, and UV challenges that Lakeland buildings face—rather than 
                simply applying coastal-focused solutions that may not address the actual deterioration mechanisms.
              </p>
            </div>

            <div className="space-y-4">
              {inlandChallenges.map((challenge) => (
                <div key={challenge.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-green-bg rounded-lg flex items-center justify-center flex-shrink-0">
                      <challenge.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-green-dark mb-2">{challenge.title}</h4>
                      <p className="text-gray-600 text-sm">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lakeland Areas Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Serving Lakeland &amp; Throughout Polk County
              </h2>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists provides condo remediation and SB4-D compliance services 
                throughout Lakeland and the greater Polk County area. Our team is familiar with local 
                building departments, permit processes, and the specific challenges of Central Florida&apos;s 
                diverse building stock.
              </p>

              <p className="text-gray-600 mb-6">
                Lakeland&apos;s strategic location between Tampa and Orlando has made it one of Florida&apos;s 
                fastest-growing metro areas. This growth has brought increased focus on condominium 
                development and, consequently, increased demand for SB4-D compliance services. From 
                established communities around Lake Morton and Lake Hollingsworth to newer developments 
                in South Lakeland and Lakeside Village, we serve associations throughout the region.
              </p>

              <p className="text-gray-600 mb-8">
                Our Polk County expertise extends to coordination with local building officials, 
                understanding of area-specific construction practices from different eras, and 
                relationships with local engineers who specialize in structural assessments. This 
                local knowledge helps ensure smooth project execution and compliance documentation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Lakeland &amp; Polk County Areas We Serve
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {lakelandNeighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <MapPin className="w-4 h-4 text-brand-green" />
                    <span className="text-gray-700 text-sm">{neighborhood}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-brand-green-bg rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Service Area Note:</strong> We also serve neighboring communities including 
                  Plant City, Brandon, and the I-4 corridor. For buildings outside Polk County, 
                  please contact us to discuss your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIRS Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                SIRS Requirements for Lakeland Condominiums
              </h2>

              <p className="text-gray-200 mb-6">
                In addition to milestone inspections, SB4-D requires all affected associations to complete 
                a Structural Integrity Reserve Study (SIRS) by December 31, 2024. This deadline applies 
                regardless of building age—even newer Lakeland condominiums that are years away from their 
                milestone inspection must complete SIRS.
              </p>

              <p className="text-gray-200 mb-6">
                SIRS differs from traditional reserve studies in critical ways. It focuses specifically on 
                structural components (roof, foundation, load-bearing walls, waterproofing, etc.) and 
                cannot be pooled with reserves for amenities or non-structural items. Most significantly, 
                associations can no longer vote to waive or reduce funding for SIRS components—a practice 
                that contributed to the deferred maintenance crisis exposed by Surfside.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Required by:</strong> December 31, 2024 (regardless of building age)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Scope:</strong> Structural components only—separate from general reserves
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>No waivers:</strong> Cannot vote to underfund starting January 2025
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Updates:</strong> Required every 10 years or after significant changes
                  </span>
                </div>
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-forest transition-colors"
              >
                Discuss SIRS Compliance <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-gray-300 text-sm">Condo Buildings Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$7.4M+</div>
                <div className="text-gray-300 text-sm">Condo Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Calendar className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">40+</div>
                <div className="text-gray-300 text-sm">Years Florida Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Award className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">Prime</div>
                <div className="text-gray-300 text-sm">Contractor Status</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Condo Remediation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FCS manages every aspect of SB4-D compliance and remediation from initial assessment 
              through final documentation, with attention to condo association governance and 
              Polk County requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Inspection Details Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 font-heading">
              Milestone Inspections: What Lakeland Associations Should Expect
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Phase 1: Visual Assessment</h3>
              <p className="mb-6">
                The Phase 1 milestone inspection is a comprehensive visual examination by a licensed 
                Florida architect or engineer. The inspector examines the building&apos;s primary structural 
                systems to identify any substantial structural deterioration—defined as deterioration that 
                approaches or exceeds safe design limits for the building.
              </p>
              <p className="mb-4">For Lakeland buildings, Phase 1 inspections typically focus on:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Foundation systems:</strong> Assessment for settlement, cracking, or water damage</li>
                <li><strong>Load-bearing walls and columns:</strong> Examination for cracks, deflection, or deterioration</li>
                <li><strong>Floor and roof structures:</strong> Inspection of slabs, beams, and structural decking</li>
                <li><strong>Balconies and elevated walkways:</strong> Critical assessment of cantilevered elements</li>
                <li><strong>Waterproofing systems:</strong> Condition of coatings, membranes, and drainage</li>
                <li><strong>Expansion joints:</strong> Assessment of sealant condition and movement capacity</li>
              </ul>
              <p className="mb-6">
                If Phase 1 finds no substantial structural deterioration, the inspector certifies the 
                building as compliant until the next 10-year inspection cycle. Minor deterioration may 
                still be noted for maintenance planning purposes.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Phase 2: Detailed Investigation</h3>
              <p className="mb-6">
                If Phase 1 reveals substantial structural deterioration, Phase 2 becomes mandatory. 
                This more extensive investigation typically includes destructive testing (concrete cores, 
                rebar exposure, petrographic analysis), detailed documentation of deterioration extent, 
                structural analysis, and development of a comprehensive repair plan with cost estimates.
              </p>
              <p className="mb-6">
                For inland Lakeland buildings, Phase 2 investigations often focus on different areas 
                than coastal properties. While coastal buildings typically show extensive rebar corrosion 
                from chloride penetration, Lakeland buildings more commonly reveal water intrusion damage, 
                carbonation-related issues, settlement cracking, and waterproofing failures. Understanding 
                these different deterioration mechanisms is essential for developing appropriate repairs.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Working with Structural Engineers</h3>
              <p className="mb-6">
                Milestone inspections must be performed by licensed Florida engineers or architects. 
                FCS maintains relationships with structural engineers experienced in Central Florida 
                condo assessments and can recommend qualified professionals for Lakeland associations. 
                Alternatively, we work seamlessly with your association&apos;s chosen engineer throughout 
                the inspection and remediation process.
              </p>
              <p className="mb-6">
                During remediation, the engineer develops repair specifications, we provide constructability 
                input and detailed pricing, the engineer reviews our work for specification compliance, 
                and ultimately provides certification that completed repairs meet structural requirements. 
                This collaborative approach ensures repairs meet both engineering standards and practical 
                construction realities.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">From Inspection to Remediation</h3>
              <p className="mb-6">
                The timeline from milestone inspection to completed remediation varies significantly based 
                on findings. If Phase 1 reveals no substantial deterioration, the process concludes 
                quickly. If Phase 2 is triggered and significant repairs are needed, the process may 
                span 12-24 months including engineering, board decision-making, funding arrangement, 
                contractor selection, and construction.
              </p>
              <p className="mb-6">
                For Lakeland associations, we recommend beginning the process well before deadlines to 
                allow adequate time for planning and funding. Buildings constructed in the early 1990s 
                should start immediately if they haven&apos;t already. Buildings from the mid-1990s should 
                begin planning now to ensure smooth compliance as their deadlines approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Funding Your Lakeland Condo Remediation Project
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8 text-center">
                One of the most challenging aspects of SB4-D compliance is funding the required 
                inspections and any resulting remediation work. FCS helps Lakeland associations 
                understand their options and develop practical funding strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-brand-green" />
                  Existing Reserves
                </h3>
                <p className="text-gray-600 text-sm">
                  Associations with adequately funded reserves may be able to cover remediation costs 
                  from existing funds. However, many associations have historically underfunded structural 
                  reserves—a practice that will no longer be permitted starting January 2025.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-green" />
                  Special Assessments
                </h3>
                <p className="text-gray-600 text-sm">
                  One-time or multi-year special assessments spread costs among unit owners. This is 
                  often the most direct funding approach but requires board approval and can create 
                  financial hardship for some owners.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand-green" />
                  Bank Financing
                </h3>
                <p className="text-gray-600 text-sm">
                  Association loans secured by future assessments allow immediate remediation with 
                  repayment over 5-15 years. This approach spreads the financial impact while enabling 
                  timely compliance with safety requirements.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-green" />
                  Phased Construction
                </h3>
                <p className="text-gray-600 text-sm">
                  Spreading work across multiple budget cycles allows associations to address the 
                  most critical issues first while planning for additional work in subsequent years. 
                  FCS develops phased proposals that prioritize safety while managing cash flow.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-brand-green-bg rounded-xl">
              <p className="text-gray-700 text-center">
                <strong>FCS Approach:</strong> We work with Lakeland boards to develop funding strategies 
                that balance compliance urgency with unit owner financial capacity. Our detailed proposals 
                include cost breakdowns suitable for bank financing applications and phased options that 
                align with special assessment schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Lakeland Associations Choose Florida Construction Specialists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Prime Contractor Only
              </h3>
              <p className="text-gray-600">
                FCS always serves as the prime contractor, never a subcontractor. Your Lakeland 
                association gets direct accountability, single-point responsibility, and our full 
                bonding protection on every project.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                SB4-D Expertise
              </h3>
              <p className="text-gray-600">
                We understand milestone inspection requirements, work seamlessly with structural 
                engineers, coordinate with Polk County building officials, and provide all documentation 
                needed for compliance certification.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Inland Expertise
              </h3>
              <p className="text-gray-600">
                Our team understands the unique deterioration patterns affecting inland Central Florida 
                buildings. We develop remediation solutions tailored to Lakeland&apos;s specific climate 
                challenges rather than applying coastal-focused approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Request Your Lakeland Compliance Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether your Lakeland condominium is approaching its 30-year milestone, responding to 
                an inspection report, or planning proactive maintenance, FCS provides expert assessment 
                and remediation solutions for Polk County associations.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Complimentary consultation for qualified projects
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Detailed proposals suitable for board presentations
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Phased approaches to accommodate reserve fund planning
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Coordination with structural engineers and Polk County permitting
                  </span>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Speak with Our Team</h3>
                <p className="text-gray-200 mb-4">
                  For immediate assistance with your Lakeland condo remediation project:
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-forest transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Assessment</h3>
              <HighLevelForm height={500} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={lakelandFaqs}
        title="Lakeland Condo Remediation FAQs"
        description="Common questions about SB4-D compliance, milestone inspections, SIRS requirements, and condo remediation in Lakeland, Florida."
      />

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving Lakeland &amp; Polk County
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Florida Construction Specialists provides condo remediation and SB4-D compliance services 
              throughout Lakeland, including Downtown, Lake Morton, Lake Hollingsworth, Dixieland, 
              South Lakeland, and surrounding Polk County communities.
            </p>
          </div>
          <GoogleMap city="Lakeland" height={400} />
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks title="Related Services &amp; Locations" links={internalLinks} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Lakeland&apos;s Trusted Condo Remediation Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From SB4-D compliance assessments to complete structural remediation, Florida 
            Construction Specialists is Polk County&apos;s premier contractor for condominium 
            restoration. Contact us today to discuss your building&apos;s 30-year milestone requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
