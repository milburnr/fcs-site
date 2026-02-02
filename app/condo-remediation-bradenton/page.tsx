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
  Waves,
  Gauge,
  Palmtree,
  Search,
  Hammer,
  HelpCircle,
  Target,
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
  title: "Condo Remediation Bradenton | SB4-D Compliance & SIRS",
  description:
    "Bradenton condo remediation and SB4-D compliance experts. Milestone inspections, SIRS structural reserve studies, balcony repair for Anna Maria Island, Holmes Beach, Palmetto condos. Licensed, bonded. Call (813) 420-7561.",
  keywords:
    "condo remediation Bradenton, SB4-D compliance Anna Maria, milestone inspection Manatee County, SIRS Bradenton condos, condo structural repair Bradenton, HOA compliance contractor Bradenton, Anna Maria Island condo repair, Holmes Beach milestone inspection, Bradenton Beach structural assessment, Lakewood Ranch condo remediation",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Services", href: "/commercial/" },
  { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
  { name: "Bradenton", href: "/condo-remediation-bradenton/" },
];

const trustBadges = [
  { icon: FileText, label: "SB4-D Compliance" },
  { icon: ClipboardCheck, label: "Milestone Inspections" },
  { icon: Shield, label: "Licensed CBC1262722" },
  { icon: Award, label: "$4.9M+ Condo Projects" },
];

const services = [
  {
    icon: Search,
    title: "Milestone Inspection Support",
    description:
      "Coordination with licensed structural engineers for Phase 1 and Phase 2 milestone inspections, complete documentation, and repair scoping for Manatee County compliance certification.",
  },
  {
    icon: FileText,
    title: "SIRS Compliance",
    description:
      "Structural Integrity Reserve Study support including component assessments, 30-year funding analysis, and reserve planning assistance for Bradenton condo associations facing new requirements.",
  },
  {
    icon: Hammer,
    title: "Structural Remediation",
    description:
      "Expert repair of structural deficiencies identified in inspections—balcony reconstruction, concrete spalling repair, rebar treatment, and waterproofing restoration for barrier island and mainland condos.",
  },
  {
    icon: Droplets,
    title: "Waterproofing Systems",
    description:
      "Multi-layer waterproofing membranes, traffic-bearing deck coatings, and envelope restoration engineered for Anna Maria Island's salt air and Bradenton's intense UV exposure.",
  },
  {
    icon: Building2,
    title: "Balcony Reconstruction",
    description:
      "Complete balcony restoration including structural repairs, railing replacement, surface restoration, and protective coatings using marine-grade materials for Gulf Coast durability.",
  },
  {
    icon: Users,
    title: "Board & HOA Coordination",
    description:
      "Experience working with Bradenton condo boards, property managers, and 55+ community associations on complex compliance projects, special assessments, and phased construction programs.",
  },
];

const bradentonNeighborhoods = [
  "Anna Maria Island",
  "Holmes Beach",
  "Bradenton Beach",
  "Palmetto",
  "Cortez",
  "West Bradenton",
  "Downtown Bradenton",
  "Lakewood Ranch",
  "Bayshore Gardens",
  "Palma Sola",
  "Northwest Bradenton",
  "Longboat Key (Manatee)",
];

const processSteps = [
  {
    step: 1,
    title: "Compliance Assessment",
    description:
      "Review your building's age, location (coastal proximity), current compliance status, and any existing inspection reports. Determine milestone inspection and SIRS deadlines for Manatee County requirements.",
  },
  {
    step: 2,
    title: "Engineering Coordination",
    description:
      "Connect with licensed structural engineers for Phase 1 visual inspection. If substantial deterioration is found, coordinate Phase 2 testing, analysis, and repair specification development.",
  },
  {
    step: 3,
    title: "Board Presentation",
    description:
      "Present findings, repair options, and cost estimates to your Bradenton condo board or HOA. Provide detailed proposals suitable for association decision-making and special assessment planning.",
  },
  {
    step: 4,
    title: "Funding Strategy",
    description:
      "Help boards evaluate funding options including existing reserves, special assessments, bank financing, and phased construction approaches to manage costs for Bradenton associations.",
  },
  {
    step: 5,
    title: "Phased Construction",
    description:
      "Execute remediation work strategically to maintain building occupancy, minimize disruption to residents, and coordinate around seasonal patterns for barrier island properties.",
  },
  {
    step: 6,
    title: "Documentation & Certification",
    description:
      "Provide complete documentation for engineering sign-off, Manatee County building department compliance certification, and association records required under SB4-D.",
  },
];

const commonIssues = [
  {
    issue: "Balcony Deterioration",
    description: "Spalling concrete, corroded rebar, waterproofing failures, and structural cracking in balcony slabs—especially severe on Anna Maria Island beachfront properties.",
    severity: "High",
  },
  {
    issue: "Concrete Spalling & Delamination",
    description: "Surface concrete flaking and separating from reinforcing steel, exposing rebar to salt air corrosion accelerated by Gulf Coast conditions.",
    severity: "High",
  },
  {
    issue: "Rebar Corrosion",
    description: "Rust expansion causing concrete cracking and structural capacity reduction—the primary failure mode in coastal Manatee County condominiums.",
    severity: "Critical",
  },
  {
    issue: "Waterproofing Failures",
    description: "Failed deck coatings, membrane deterioration, and inadequate drainage allowing water intrusion that accelerates all other deterioration mechanisms.",
    severity: "Medium",
  },
  {
    issue: "Post-Tension Cable Issues",
    description: "Corrosion, broken strands, or inadequate grouting in post-tensioned concrete systems common in 1980s-era Bradenton construction.",
    severity: "Critical",
  },
  {
    issue: "Parking Structure Deterioration",
    description: "Corrosion damage in covered parking areas, expansion joint failures, and traffic surface wear requiring structural assessment and repair.",
    severity: "High",
  },
];

const bradentonFaqs = [
  {
    question: "What is Florida SB4-D and how does it affect Bradenton and Manatee County condominiums?",
    answer:
      "Florida Senate Bill 4-D, enacted in 2022 following the Surfside tragedy, mandates milestone structural inspections for all condominium and cooperative buildings three stories or taller. For Bradenton properties within three miles of the coastline—which includes Anna Maria Island, Holmes Beach, Bradenton Beach, Cortez, and most of Palma Sola—buildings 25 years or older must complete inspections by specific deadlines, then every 10 years thereafter. Many barrier island condos built during the 1970s-1990s are now past their critical inspection deadlines, requiring immediate attention to avoid compliance penalties from Manatee County building officials.",
  },
  {
    question: "Which Bradenton areas fall within the SB4-D coastal zone requiring earlier inspections?",
    answer:
      "Under SB4-D, buildings within three miles of the coastline must complete milestone inspections at 25 years rather than 30 years for inland properties. In the Bradenton area, this coastal zone includes virtually all of Anna Maria Island (Anna Maria, Holmes Beach, Bradenton Beach), Cortez, Palma Sola, portions of West Bradenton near the bay, and Longboat Key. Properties in Downtown Bradenton, East Bradenton, Palmetto, and Lakewood Ranch typically fall outside the three-mile coastal zone and have slightly longer timelines, but many of these buildings are also approaching or past their 30-year milestones.",
  },
  {
    question: "Why are Anna Maria Island condos especially vulnerable to structural deterioration?",
    answer:
      "Anna Maria Island condominiums face some of the most aggressive environmental conditions in Florida for structural deterioration. The combination of direct Gulf of Mexico salt spray, intense tropical UV exposure, humidity averaging 75%+, and seasonal hurricane impacts creates ideal conditions for accelerated concrete carbonation and reinforcing steel corrosion. Beachfront properties on Anna Maria, Holmes Beach, and Bradenton Beach experience salt air concentrations 3-5 times higher than even mainland Bradenton locations. Additionally, many island condos were built during the 1970s-80s with construction practices that didn't fully anticipate long-term salt air exposure.",
  },
  {
    question: "What is a SIRS (Structural Integrity Reserve Study) and does my Bradenton condo need one?",
    answer:
      "A Structural Integrity Reserve Study is a specialized 30-year reserve analysis required by SB4-D for structural components including roof, foundation, load-bearing walls, floor structures, waterproofing, plumbing, and electrical systems. Unlike traditional reserve studies, SIRS cannot use pooled funding and associations cannot vote to waive or reduce structural reserves. All Bradenton condominium associations with buildings three stories or taller must complete SIRS by December 31, 2024. Beginning January 1, 2025, associations must fund structural reserves according to SIRS findings—a significant change affecting many Manatee County communities.",
  },
  {
    question: "How much does SB4-D compliance and condo remediation typically cost in Bradenton?",
    answer:
      "Costs vary significantly based on building size, age, condition, and deficiency severity. Milestone inspections typically cost $3,000-$15,000 for Phase 1, with Phase 2 (if triggered) adding $15,000-$75,000 depending on complexity. SIRS studies range from $5,000-$30,000 depending on building size. Remediation costs depend entirely on deficiencies found—concrete spalling repair runs $15-50 per square foot, balcony reconstruction $300-600 per square foot, and building envelope rehabilitation $50-150 per square foot. Anna Maria Island properties often face higher costs due to severe salt air damage and logistics of barrier island construction.",
  },
  {
    question: "Can residents stay in their Bradenton condo during remediation work?",
    answer:
      "In most cases, yes. FCS develops phased remediation plans specifically designed to maintain building occupancy. Our approach includes working floor-by-floor or section-by-section, creating temporary weather barriers, scheduling noisy work during reasonable hours, and maintaining all life safety systems. For barrier island properties, we coordinate schedules around seasonal occupancy patterns common on Anna Maria Island. Only in cases of severe structural deficiency where safety is compromised would temporary evacuation be recommended—this is relatively rare.",
  },
  {
    question: "What happens if our Bradenton condo association misses SB4-D deadlines?",
    answer:
      "Non-compliance with SB4-D carries serious consequences for Manatee County condominiums. Associations face potential personal liability exposure for board members who fail to meet fiduciary duties. Insurance carriers may deny coverage or dramatically increase premiums. Property values decline significantly as buyers and lenders increasingly require compliance documentation before closing. Units may become unsellable or unfinanceable. In extreme cases, Manatee County building officials can declare buildings unsafe for occupancy. Given Anna Maria Island's high property values and desirability, non-compliant buildings face particularly severe market penalties.",
  },
  {
    question: "How does FCS work with Bradenton condo associations and 55+ communities?",
    answer:
      "Florida Construction Specialists has extensive experience working with Manatee County condo associations, including the growing number of 55+ retirement communities in areas like Lakewood Ranch, Palmetto, and West Bradenton. We understand the unique governance dynamics, fixed-income budget sensitivities, and communication preferences of these communities. Our team provides detailed proposals suitable for board presentations, attends association meetings when requested, offers flexible payment terms aligned with special assessment schedules, and maintains clear communication with property managers and residents throughout projects.",
  },
  {
    question: "What funding options exist for SB4-D compliance work in Bradenton?",
    answer:
      "Common funding approaches for Manatee County associations include: existing reserves (if adequately funded through prior planning), special assessments (one-time or multi-year charges to unit owners), bank loans secured by future assessments (typically repaid over 5-15 years), phased construction (spreading work across multiple budget cycles), and combinations thereof. Many Bradenton associations use reserve loans to begin immediate compliance work while collecting special assessments over time. FCS helps boards understand options and develop strategies that balance urgency with owner financial capacity—particularly important for 55+ communities with fixed-income residents.",
  },
  {
    question: "What's the difference between Phase 1 and Phase 2 milestone inspections?",
    answer:
      "Phase 1 is a visual inspection by a licensed engineer or architect to identify any substantial structural deterioration. The inspector examines load-bearing walls, primary structural systems, and overall structural condition. If substantial deterioration is found during Phase 1, a Phase 2 inspection is triggered. Phase 2 requires more extensive investigation including destructive testing (concrete cores, rebar exposure), detailed structural analysis, and development of a comprehensive repair plan with cost estimates and timelines. FCS coordinates with qualified engineers for both phases and implements required remediation work identified in Phase 2 reports.",
  },
  {
    question: "How long does the remediation process take from inspection to completion?",
    answer:
      "Timeline depends heavily on scope. Milestone inspections take 2-4 weeks. SIRS studies take 4-8 weeks. Once deficiencies are identified, engineering and bid development typically requires 6-12 weeks. Remediation construction varies by scope—individual balcony repairs may take 1-2 weeks per unit, while building-wide projects span 6-18 months depending on size and complexity. For Anna Maria Island properties, we factor in seasonal considerations and potential weather delays. FCS provides detailed schedules during pre-construction and works with boards to establish realistic timelines.",
  },
  {
    question: "Does FCS have experience with large condo remediation projects?",
    answer:
      "Yes. FCS completed the $4.9 million Tiara Condominium Association balcony reconstruction and waterproofing project—one of the largest condo remediation projects in the Tampa Bay region—involving reconstruction of over 180 balconies while maintaining building occupancy throughout construction. We also completed the $2.5 million Southwind Condominiums roof and waterproofing restoration. Our team has decades of experience in multi-family construction and restoration, working with condo boards throughout Manatee and Pinellas counties, and managing complex phased construction in occupied buildings.",
  },
];

const internalLinks = [
  { href: "/commercial/condo-remediation/", label: "Condo Remediation Services" },
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB4-D Compliance Guide" },
  { href: "/services/balcony-reconstruction/", label: "Balcony Reconstruction" },
  { href: "/services/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/condo-remediation-sarasota/", label: "Condo Remediation Sarasota" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CondoRemediationBradentonPage() {
  return (
    <>
      <LocalBusinessSchema city="Bradenton" service="Condo Remediation & SB4-D Compliance" />
      <ServiceSchema
        serviceName="Condo Remediation & SB4-D Compliance"
        serviceDescription="Expert condo remediation and SB4-D compliance services for Bradenton, Anna Maria Island, Holmes Beach, and Manatee County condominiums. Milestone inspection support, SIRS compliance, structural repairs. Projects from $100,000 to $10 million+."
        city="Bradenton"
        minPrice="100000"
      />
      <FAQSchema faqs={bradentonFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/Old/commercial-construction-3.jpg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green font-semibold">Serving Bradenton & Manatee County</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Condo Remediation & SB4-D Compliance in Bradenton
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Manatee County's trusted contractor for SB4-D compliance, milestone inspections, and
              structural remediation. Serving Anna Maria Island beachfront condos, Lakewood Ranch
              communities, and Bradenton-area buildings three stories and higher. Projects from $100K to $10M+.
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
      <section className="py-4 bg-red-600">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-white">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="font-semibold text-center">
              <strong>SB4-D Deadline Alert:</strong> Bradenton coastal buildings 30+ years old must complete
              milestone inspections by December 31, 2024. Many Anna Maria Island condos built in the 1970s-80s
              are past deadlines. Contact FCS immediately.
            </p>
            <Link href="/contact/" className="flex-shrink-0 bg-white text-red-600 px-4 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Act Now
            </Link>
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
                Bradenton & Manatee County's SB4-D Compliance Specialists
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Florida Construction Specialists is the trusted partner for Manatee County condominium
                associations navigating Florida's SB4-D compliance requirements. With over $7.4 million
                in completed condo remediation projects and decades of experience working with condo
                boards throughout the Tampa Bay region, we understand the unique challenges facing
                Bradenton-area communities—from beachfront high-rises on Anna Maria Island to growing
                55+ communities in Lakewood Ranch.
              </p>

              <p className="text-gray-600 mb-6">
                The 2021 Surfside condominium collapse exposed critical gaps in Florida's condo safety
                oversight, prompting the Legislature to pass SB4-D—the most comprehensive condo safety
                legislation in state history. For Bradenton and Manatee County associations, this means
                mandatory milestone structural inspections for buildings three stories or taller,
                Structural Integrity Reserve Studies (SIRS) with strict funding requirements, and
                serious consequences for non-compliance including potential building closure orders
                and personal liability for board members.
              </p>

              <p className="text-gray-600 mb-6">
                Anna Maria Island and the Bradenton barrier islands face particularly urgent timelines.
                Buildings within three miles of the coastline must complete inspections at 25 years
                rather than 30, and many island condos built during the 1970s-80s tourism boom are
                already past their deadlines. The aggressive salt air environment has accelerated
                deterioration in these buildings, often revealing significant structural issues when
                inspections are finally completed.
              </p>

              <p className="text-gray-600 mb-8">
                FCS provides the complete SB4-D compliance solution: coordinating milestone inspections
                with qualified structural engineers, helping boards understand SIRS requirements and
                funding implications, and executing the structural remediation work that inspections
                reveal. Our expertise spans balcony reconstruction, concrete restoration, waterproofing
                systems, and comprehensive building envelope rehabilitation—all using materials and
                methods specifically engineered for Gulf Coast conditions.
              </p>

              {/* Project Gallery */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/Old/commercial-construction-3.jpg"
                    alt="Condo remediation project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Structural Remediation</p>
                    <p className="text-xs text-gray-200">Multi-Story Condo</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png"
                    alt="Waterproofing restoration"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Waterproofing</p>
                    <p className="text-xs text-gray-200">Envelope Protection</p>
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
                    <p className="font-semibold text-sm">Balcony Restoration</p>
                    <p className="text-xs text-gray-200">Complete Rebuild</p>
                  </div>
                </div>
              </div>

              {/* Target Audience Section */}
              <div className="bg-brand-green-bg rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-brand-green" />
                  Who We Serve in Bradenton & Manatee County
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Condo Associations</span>
                      <p className="text-sm text-gray-600">
                        Board members navigating SB4-D compliance for Anna Maria and mainland properties
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">55+ Communities</span>
                      <p className="text-sm text-gray-600">
                        Retirement community boards in Lakewood Ranch, Palmetto, and West Bradenton
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Property Managers</span>
                      <p className="text-sm text-gray-600">
                        Managing milestone inspections and remediation for Manatee County portfolios
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Multi-Family Owners</span>
                      <p className="text-sm text-gray-600">
                        Waterfront and inland building owners facing compliance requirements
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
                      Need a Compliance Assessment for Your Bradenton Building?
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
                <h3 className="text-xl font-bold mb-4">HOA & Condo Boards</h3>
                <p className="text-gray-200 mb-4">
                  Request a complimentary SB4-D compliance assessment and remediation proposal for
                  your Bradenton or Anna Maria Island condominium.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-full hover:bg-brand-green-forest transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* SB4-D Info Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  SB4-D Quick Facts
                </h3>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Applies to:</span> Buildings 3+ stories
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Coastal:</span> 25 years, then every 10 years
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Anna Maria:</span> All within coastal zone
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">SIRS Due:</span> December 31, 2024
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">No Waivers:</span> Starting January 1, 2025
                  </li>
                </ul>
                <Link
                  href="/sb-4-d-compliance-tampa-bay-condos/"
                  className="text-amber-800 font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:underline"
                >
                  Read Full SB4-D Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Common Issues */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-brand-green" />
                  Common Issues We Repair
                </h3>
                <ul className="space-y-3">
                  {commonIssues.slice(0, 4).map((item) => (
                    <li key={item.issue} className="flex items-start gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        item.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                        item.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.severity}
                      </span>
                      <span className="text-gray-700 text-sm">{item.issue}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Services */}
              <RelatedServices city="Bradenton" currentService="condo-remediation" />

              {/* Nearby Locations */}
              <NearbyLocations
                currentCity="Bradenton"
                service="condo-remediation"
                serviceName="Condo Remediation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              SB4-D Compliance & Remediation Services in Bradenton
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive condo compliance and structural restoration solutions for Anna Maria Island
              beachfront condominiums, Lakewood Ranch communities, and Manatee County multi-family buildings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
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

      {/* Bradenton-Specific Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Bradenton's Unique Condo Compliance Challenges
              </h2>

              <p className="text-gray-600 mb-6">
                Manatee County's diverse condominium landscape presents distinct SB4-D compliance
                challenges. From salt-battered beachfront towers on Anna Maria Island to expanding
                55+ communities in Lakewood Ranch, each building type requires specialized approaches
                to inspection, assessment, and remediation. Understanding these local factors helps
                boards plan effectively for compliance.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Waves className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Barrier Island Vulnerability</h4>
                    <p className="text-gray-600 text-sm">
                      Anna Maria Island, Holmes Beach, and Bradenton Beach condos face direct Gulf
                      exposure with salt concentrations far exceeding mainland properties. Many
                      1970s-80s era buildings are now revealing decades of accumulated damage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hurricane Exposure</h4>
                    <p className="text-gray-600 text-sm">
                      Barrier island properties face elevated hurricane risk. Historic storms have
                      stressed building envelopes, potentially compromising waterproofing and
                      creating hidden deterioration pathways only revealed during inspections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Growing 55+ Community Market</h4>
                    <p className="text-gray-600 text-sm">
                      Lakewood Ranch, Palmetto, and West Bradenton have seen explosive growth in
                      retirement communities. Many 3+ story buildings in these communities are
                      approaching or past SB4-D milestone ages, requiring board action.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Fixed-Income Budget Sensitivity</h4>
                    <p className="text-gray-600 text-sm">
                      Many Bradenton-area associations serve retirees on fixed incomes. Special
                      assessments for compliance work require careful planning, phasing options,
                      and financing alternatives that FCS helps boards navigate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Bradenton Areas We Serve
              </h3>
              <p className="text-gray-600 mb-6">
                FCS provides SB4-D compliance and condo remediation services throughout Bradenton
                and Manatee County. Our team is familiar with local building department requirements,
                permit processes, and the specific challenges of each community type.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {bradentonNeighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <MapPin className="w-4 h-4 text-brand-green" />
                    <span className="text-gray-700 text-sm">{neighborhood}</span>
                  </div>
                ))}
              </div>

              {/* Coastal vs Inland Box */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Coastal Zone Deadline Differences
                </h4>
                <div className="space-y-3 text-sm text-blue-700">
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <span className="font-medium">Within 3 Miles (Coastal)</span>
                    <span className="bg-blue-100 px-2 py-1 rounded">25 Year Milestone</span>
                  </div>
                  <p className="text-xs">
                    Anna Maria Island, Holmes Beach, Bradenton Beach, Cortez, Palma Sola, parts of West Bradenton
                  </p>
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2 mt-4">
                    <span className="font-medium">Beyond 3 Miles (Inland)</span>
                    <span className="bg-blue-100 px-2 py-1 rounded">30 Year Milestone</span>
                  </div>
                  <p className="text-xs">
                    Downtown Bradenton, Lakewood Ranch, Palmetto, East Bradenton
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding SB4-D Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Understanding SB4-D: What Bradenton Condo Boards Must Know
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">The Surfside Tragedy and Florida's Response</h3>
              <p className="mb-6">
                On June 24, 2021, Champlain Towers South in Surfside collapsed without warning, killing
                98 people in one of the deadliest structural failures in American history. Subsequent
                investigations revealed years of deferred maintenance, inadequate reserve funding, and
                missed warning signs about deteriorating structural conditions. The tragedy exposed
                critical gaps in how Florida oversees condominium building safety.
              </p>
              <p className="mb-6">
                In response, the Florida Legislature passed Senate Bill 4-D in May 2022, creating the
                most comprehensive condo safety requirements in state history. The law mandates periodic
                structural inspections, requires associations to maintain adequate reserves for structural
                repairs, and eliminates the ability to waive or reduce reserve funding for critical
                structural components. For Bradenton and Manatee County, this affects hundreds of
                condominium buildings from Anna Maria Island to Lakewood Ranch.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Which Bradenton Buildings Are Affected?</h3>
              <p className="mb-6">
                SB4-D applies to condominium and cooperative buildings three stories or taller. In
                Manatee County, this includes beachfront towers on Anna Maria Island, mid-rise
                condominiums throughout Bradenton, and many 55+ community buildings in Lakewood Ranch
                and Palmetto. Key factors determining compliance timelines include building age (30-year
                milestone, or 25 years within 3 miles of coast), coastal proximity, and building height.
                The law makes no distinction between luxury beachfront properties and modest retirement
                community buildings—all are subject to the same requirements.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Milestone Inspection Requirements</h3>
              <p className="mb-6">
                The centerpiece of SB4-D is the mandatory milestone structural inspection, performed by
                a licensed architect or engineer. Phase 1 is a visual examination of structural
                components—foundation, load-bearing walls, floor structures, and building envelope. If
                Phase 1 reveals substantial deterioration, Phase 2 triggers more extensive investigation
                including destructive testing and development of a detailed repair plan with cost
                estimates and timelines.
              </p>
              <p className="mb-6">
                For Bradenton buildings already past their milestone age, initial inspections must be
                completed by December 31, 2024 (coastal) or December 31, 2025 (inland). Buildings
                approaching their milestone must complete inspection within the applicable timeframe.
                After the initial inspection, subsequent milestone inspections are required every 10
                years—a significant ongoing obligation for associations.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">SIRS: The End of Reserve Waivers</h3>
              <p className="mb-6">
                Perhaps the most significant change for Manatee County associations is the Structural
                Integrity Reserve Study (SIRS) requirement. This specialized reserve study focuses on
                structural components: roof, foundation, load-bearing walls, floor structures,
                waterproofing, plumbing, and electrical systems. Unlike traditional reserve studies,
                SIRS cannot include pooled funding with non-structural items, and associations cannot
                vote to waive or reduce funding.
              </p>
              <p className="mb-6">
                Beginning January 1, 2025, associations must fund structural reserves according to
                their SIRS findings. This represents a fundamental shift for many Bradenton associations
                that have historically deferred structural maintenance. Boards should begin preparing
                unit owners now for what may be significant increases in regular assessments—or
                alternatively, develop special assessment plans for immediate compliance work.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Consequences of Non-Compliance</h3>
              <p className="mb-6">
                The consequences of failing to comply with SB4-D are severe and designed to be impossible
                to ignore. Manatee County building officials can issue notices of non-compliance that
                escalate to building closure orders for structures posing safety risks. Board members
                who fail to ensure compliance may face personal liability for breach of fiduciary duty.
                Insurance carriers may decline coverage or charge significant premiums for non-compliant
                buildings.
              </p>
              <p className="mb-6">
                Beyond regulatory penalties, non-compliance creates practical problems that hit property
                values directly. Prospective buyers and lenders increasingly require proof of SB4-D
                compliance before closing transactions. In Anna Maria Island's competitive real estate
                market, non-compliant buildings face particularly severe market penalties as informed
                buyers pass over properties with uncertain compliance status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SB4-D Compliance Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                SB4-D Compliance Timeline for Manatee County
              </h2>

              <p className="text-gray-200 mb-6">
                Understanding your building's specific deadlines is critical for compliance planning.
                The timeline varies based on building age and coastal proximity—factors that affect
                most Bradenton-area condominiums differently.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-red-300">December 31, 2024</span>
                    <p className="text-gray-200 text-sm">
                      Coastal buildings 30+ years old must complete milestone inspections. SIRS must be completed for all applicable buildings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Clock className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-amber-300">January 1, 2025</span>
                    <p className="text-gray-200 text-sm">
                      Reserve waivers prohibited. Associations must fund structural reserves per SIRS findings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Calendar className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-brand-green">December 31, 2025</span>
                    <p className="text-gray-200 text-sm">
                      Inland buildings 30+ years old must complete milestone inspections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Building2 className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-200">Ongoing</span>
                    <p className="text-gray-200 text-sm">
                      Subsequent milestone inspections required every 10 years after initial.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-forest transition-colors"
              >
                Discuss Your Compliance Timeline <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$4.9M</div>
                <div className="text-gray-300 text-sm">Largest Condo Project</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$7.4M+</div>
                <div className="text-gray-300 text-sm">Condo Work Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Calendar className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">40+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Shield className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$10M+</div>
                <div className="text-gray-300 text-sm">Bonding Capacity</div>
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
              Our SB4-D Compliance & Remediation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FCS manages every aspect of condo compliance from initial assessment through completed
              remediation, with particular attention to Manatee County building requirements and
              condo association governance.
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

      {/* Common Issues Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Common Structural Issues in Bradenton Condominiums
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Based on our experience with Manatee County condominiums, these are the structural
              issues most frequently identified during milestone inspections—and the repairs we
              commonly implement.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {commonIssues.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 border-l-4 shadow-sm ${
                    item.severity === 'Critical' ? 'border-red-500' :
                    item.severity === 'High' ? 'border-orange-500' :
                    'border-yellow-500'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-brand-green-dark">{item.issue}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      item.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                      item.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.severity}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Bradenton Condo Boards Choose Florida Construction Specialists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Proven Condo Experience
              </h3>
              <p className="text-gray-600">
                Over $7.4 million in completed condo remediation projects including the $4.9M Tiara
                Condominium reconstruction—one of the largest in Tampa Bay. We understand condo
                association governance and multi-phase project management.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Prime Contractor Only
              </h3>
              <p className="text-gray-600">
                FCS always serves as prime contractor, never a subcontractor. Your Manatee County
                association gets direct accountability, single-point responsibility, and our full
                $10M+ bonding protection on every project.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Palmtree className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Gulf Coast Expertise
              </h3>
              <p className="text-gray-600">
                Our team specializes in coastal construction challenges unique to Anna Maria Island
                and Bradenton. We use marine-grade materials and methods specifically engineered for
                barrier island salt exposure and hurricane conditions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                SB4-D Specialists
              </h3>
              <p className="text-gray-600">
                We understand milestone inspection requirements, work seamlessly with structural
                engineers, and provide complete documentation for Manatee County compliance
                certification. Our team stays current on evolving regulatory requirements.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                55+ Community Experience
              </h3>
              <p className="text-gray-600">
                We understand the unique needs of retirement communities—fixed-income budget
                sensitivities, clear communication requirements, and scheduling around resident
                needs. Many Lakewood Ranch and Palmetto associations trust FCS.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Maintained Occupancy
              </h3>
              <p className="text-gray-600">
                Our phased construction approach allows residents to remain in their units during
                remediation. We minimize disruption while maintaining all life safety systems and
                coordinating around seasonal occupancy patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Request Your Bradenton Compliance Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're responding to a milestone inspection report, planning for SIRS
                compliance, or facing urgent structural concerns at your Anna Maria Island,
                Downtown Bradenton, or Lakewood Ranch property, FCS provides expert assessment
                and remediation solutions for Manatee County condominiums.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Complimentary consultation for qualified projects ($100K+)
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
                    Marine-grade materials for barrier island durability
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Flexible financing options for special assessment coordination
                  </span>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Speak with Our Team</h3>
                <p className="text-gray-200 mb-4">
                  For immediate assistance with your Bradenton condo remediation or SB4-D compliance project:
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

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Assessment</h3>
              <HighLevelForm height={500} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={bradentonFaqs}
        title="Bradenton Condo Remediation & SB4-D FAQs"
        description="Common questions about SB4-D compliance, milestone inspections, SIRS requirements, and condo remediation for Bradenton, Anna Maria Island, and Manatee County condominiums."
      />

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving Bradenton, Anna Maria Island & Manatee County
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Florida Construction Specialists provides SB4-D compliance and condo remediation services
              throughout Bradenton, Anna Maria Island, Holmes Beach, Bradenton Beach, Palmetto, Lakewood
              Ranch, and surrounding Manatee County communities.
            </p>
          </div>
          <GoogleMap city="Bradenton" height={400} />
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks title="Related Services & Locations" links={internalLinks} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Bradenton's Trusted Condo Compliance & Remediation Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From SB4-D compliance assessments to complete structural remediation, Florida
            Construction Specialists is Manatee County's premier contractor for condominium
            restoration. With deadlines approaching, contact us today to discuss your project.
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
