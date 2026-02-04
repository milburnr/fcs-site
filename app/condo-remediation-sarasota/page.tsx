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
  Home,
  Search,
  Hammer,
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
  title: "Condo Remediation Sarasota | SB4-D Compliance & SIRS",
  description:
    "Sarasota condo remediation experts. SB4-D compliance, milestone inspections, SIRS for Longboat Key, Siesta Key, Lido Key luxury condos. Post-Hurricane Ian structural repairs. Licensed. Call (813) 420-7561.",
  keywords:
    "condo remediation Sarasota, SB4-D compliance Longboat Key, milestone inspection Siesta Key, SIRS Sarasota condominiums, luxury condo structural repair Sarasota, condo balcony repair Lido Key, St Armands condo restoration, Bird Key structural inspection, Sarasota County building compliance, hurricane damage condo repair Sarasota",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Services", href: "/commercial/" },
  { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
  { name: "Sarasota", href: "/condo-remediation-sarasota/" },
];

const trustBadges = [
  { icon: FileText, label: "SB4-D Compliance" },
  { icon: ClipboardCheck, label: "SIRS Certified" },
  { icon: Shield, label: "Licensed CBC1262722" },
  { icon: Award, label: "$4.9M+ Condo Projects" },
];

const services = [
  {
    icon: Search,
    title: "Milestone Inspection Coordination",
    description:
      "Coordination of Phase 1 and Phase 2 structural inspections for Sarasota condominiums, working with licensed engineers to identify deficiencies and develop remediation plans for barrier island properties.",
  },
  {
    icon: FileText,
    title: "SIRS Assessment Support",
    description:
      "Structural Integrity Reserve Study support for Sarasota associations, including repair estimates, 30-year reserve projections, and compliance documentation required under Florida law.",
  },
  {
    icon: Building2,
    title: "Structural Concrete Repair",
    description:
      "Comprehensive concrete restoration including spall repair, rebar treatment, carbon fiber reinforcement, and post-tension cable evaluation for Sarasota's aging luxury high-rises.",
  },
  {
    icon: Hammer,
    title: "Balcony Reconstruction",
    description:
      "Complete balcony remediation for Longboat Key, Siesta Key, and Lido Key condominiums—structural repairs, waterproofing systems, and code-compliant railing replacement.",
  },
  {
    icon: Droplets,
    title: "Waterproofing Systems",
    description:
      "Multi-layer waterproofing membranes, traffic-bearing deck coatings, and envelope protection engineered for Sarasota's Gulf Coast salt air exposure and hurricane weather.",
  },
  {
    icon: Users,
    title: "Board & HOA Coordination",
    description:
      "Expert collaboration with Sarasota condo boards and property managers, including board presentations, phased approaches, and special assessment coordination for high-value properties.",
  },
];

const sarasotaNeighborhoods = [
  "Longboat Key",
  "Lido Key",
  "St. Armands",
  "Siesta Key",
  "Bird Key",
  "Downtown Sarasota",
  "Southgate",
  "Gulf Gate",
  "Palmer Ranch",
  "Lakewood Ranch",
  "Casey Key",
  "Venice Island",
];

const processSteps = [
  {
    step: 1,
    title: "Engineering Assessment",
    description:
      "Licensed engineer inspects and documents all structural deficiencies with detailed repair recommendations specific to Sarasota's coastal building conditions.",
  },
  {
    step: 2,
    title: "Scope Development",
    description:
      "Work with engineer to develop detailed repair specifications and prioritize work based on severity, coordinating with Sarasota County building department requirements.",
  },
  {
    step: 3,
    title: "Board Presentation",
    description:
      "Present findings and options to board with clear cost estimates and timeline projections suitable for Sarasota's affluent condo associations.",
  },
  {
    step: 4,
    title: "Funding Strategy",
    description:
      "Help board evaluate reserves, special assessments, financing, and phasing options—critical for Sarasota's high-value properties where assessments can be substantial.",
  },
  {
    step: 5,
    title: "Phased Construction",
    description:
      "Execute repairs strategically to maintain building occupancy and manage cash flow, with scheduling that accommodates Sarasota's seasonal resident populations.",
  },
  {
    step: 6,
    title: "Documentation & Compliance",
    description:
      "Provide complete documentation for engineering sign-off and regulatory compliance, ensuring Sarasota buildings meet all SB4-D requirements.",
  },
];

const commonIssues = [
  {
    issue: "Balcony Deterioration",
    description: "Spalling concrete, corroded rebar, waterproofing failures, and structural cracking in balcony slabs—common in 1980s-2000s Sarasota condos.",
    severity: "High",
  },
  {
    issue: "Concrete Spalling",
    description: "Delamination and flaking of concrete surfaces exposing reinforcing steel, accelerated by Sarasota's salt air and humidity.",
    severity: "High",
  },
  {
    issue: "Rebar Corrosion",
    description: "Rust expansion causing concrete cracking and structural capacity reduction—particularly aggressive on barrier island properties.",
    severity: "Critical",
  },
  {
    issue: "Post-Tension Cable Issues",
    description: "Corrosion, broken strands, or inadequate grouting in post-tensioned systems common in Sarasota high-rises from the 1970s-80s.",
    severity: "Critical",
  },
  {
    issue: "Hurricane Damage",
    description: "Water intrusion and structural stress from Hurricane Ian (2022) and subsequent storms affecting Sarasota's coastal buildings.",
    severity: "High",
  },
  {
    issue: "Parking Structure Deterioration",
    description: "Corrosion damage, expansion joint failures, and traffic surface wear in parking decks beneath Sarasota condominiums.",
    severity: "Medium",
  },
];

const complianceTimeline = [
  {
    milestone: "Buildings 30+ years old (within 3 miles of coast)",
    deadline: "December 31, 2024",
    status: "urgent",
    sarasotaNote: "Includes all Longboat Key, Lido Key, Siesta Key, and beachfront properties",
  },
  {
    milestone: "Buildings 25-29 years old (coastal zone)", 
    deadline: "By building's 30th anniversary",
    status: "upcoming",
    sarasotaNote: "Many 1990s-built Sarasota condos approaching deadline",
  },
  {
    milestone: "SIRS must be completed for all applicable buildings",
    deadline: "December 31, 2024",
    status: "urgent",
    sarasotaNote: "No more reserve waivers for Sarasota associations",
  },
  {
    milestone: "Reserve funding must begin",
    deadline: "January 1, 2025",
    status: "upcoming",
    sarasotaNote: "Sarasota boards must fund structural reserves per SIRS",
  },
];

const sarasotaFaqs = [
  {
    question: "What is SB4-D and how does it affect Sarasota condominiums specifically?",
    answer:
      "Florida Senate Bill 4-D, enacted in 2022 following the Surfside tragedy, mandates milestone structural inspections for all condominium buildings three stories or taller. For Sarasota properties, this is particularly significant because virtually all barrier island condominiums on Longboat Key, Lido Key, Siesta Key, and Bird Key fall within the coastal zone requiring earlier inspection at 25 years. Many of Sarasota's luxury beachfront condos were built during the 1980s-2000s development boom, meaning hundreds of buildings are now past their initial inspection deadlines. The law also requires Structural Integrity Reserve Studies (SIRS) and eliminates the ability of associations to waive structural reserve funding—a change that significantly impacts Sarasota's high-value properties where repair costs can reach into the millions.",
  },
  {
    question: "Why are Sarasota barrier island condos especially vulnerable to structural deterioration?",
    answer:
      "Sarasota's barrier islands—Longboat Key, Lido Key, Siesta Key, Casey Key, and Bird Key—face some of Florida's most aggressive environmental conditions for concrete structures. The combination of direct Gulf of Mexico salt spray, intense subtropical UV exposure, high humidity averaging 75%+, and hurricane exposure creates ideal conditions for accelerated concrete carbonation and reinforcing steel corrosion. Properties on these islands experience salt air concentrations significantly higher than mainland locations, even those in downtown Sarasota. Additionally, Hurricane Ian's 2022 impact on the Sarasota region drove salt water and debris into many buildings, accelerating existing deterioration and creating new damage patterns that milestone inspections are now revealing.",
  },
  {
    question: "How did Hurricane Ian affect Sarasota condo structural conditions?",
    answer:
      "Hurricane Ian made landfall near Fort Myers in September 2022 but significantly impacted Sarasota County with tropical storm-force winds, storm surge, and flooding. Many Sarasota barrier island condominiums experienced water intrusion, wind damage to building envelopes, and salt water exposure to structural elements. The storm accelerated existing deterioration in aging concrete structures and created new vulnerabilities. Post-Ian, many Sarasota condo associations have discovered during milestone inspections that storm damage compounded pre-existing conditions, requiring more extensive remediation than originally anticipated. The hurricane served as a wake-up call for many associations that had deferred maintenance, highlighting the urgent need for SB4-D compliance.",
  },
  {
    question: "What are the specific SB4-D deadlines for Sarasota beachfront condominiums?",
    answer:
      "For Sarasota coastal zone properties—which includes all of Longboat Key, Lido Key, Siesta Key, Bird Key, Casey Key, and properties within three miles of the Gulf—buildings that reached 30 years old by December 31, 2024 must complete milestone inspections by that date. Buildings 25-29 years old must complete inspections by their 30th anniversary. All affected associations must also complete Structural Integrity Reserve Studies (SIRS) by December 31, 2024, and begin funding structural reserves without the option to waive or reduce funding starting January 1, 2025. Given that many Sarasota luxury condos were built in the 1980s-1990s, a large number of buildings are now past these critical deadlines, creating urgent compliance requirements.",
  },
  {
    question: "How much does condo remediation typically cost for Sarasota luxury high-rises?",
    answer:
      "Sarasota condo remediation costs vary significantly based on building size, age, condition, and deficiency severity. Milestone inspections typically cost $5,000-$20,000 for Phase 1, with Phase 2 (if triggered) adding $20,000-$100,000 or more for larger buildings. SIRS studies range from $8,000-$40,000 depending on building complexity. Remediation costs depend entirely on deficiencies found—concrete spalling repair runs $15-50/SF, balcony reconstruction $300-600/SF, and full building envelope rehabilitation $50-150/SF of wall area. For Sarasota's luxury high-rises, total project costs commonly range from $500,000 to $10 million or more. FCS completed the $4.9 million Tiara Condominium project, demonstrating our capability for large-scale Sarasota-area condo remediation.",
  },
  {
    question: "What happens if a Sarasota condo association fails to comply with SB4-D?",
    answer:
      "Non-compliance with SB4-D carries serious consequences that are particularly impactful in Sarasota's luxury real estate market. Local building officials, including Sarasota County, can issue notices of non-compliance escalating to building closure orders for structures posing safety risks. Board members face potential personal liability for breach of fiduciary duty. Insurance carriers may decline coverage or charge dramatically higher premiums. Most significantly for Sarasota's high-value properties, non-compliant buildings become effectively unsellable—prospective buyers and their lenders increasingly require proof of SB4-D compliance before closing transactions. Given Sarasota's competitive luxury condo market, where units routinely sell for $500,000 to several million dollars, non-compliance creates severe property value impacts.",
  },
  {
    question: "Can residents stay in their Sarasota condo during remediation work?",
    answer:
      "In most cases, yes. FCS develops phased remediation plans specifically designed to maintain building occupancy during construction. Our approach includes working floor-by-floor or section-by-section, creating temporary weather barriers, scheduling noisy work during reasonable hours, maintaining all life safety systems, and providing advance notice to affected residents. For Sarasota properties with significant seasonal resident populations, we coordinate work schedules to minimize disruption during peak season (typically November through April). Only in cases of severe structural deficiency where safety is immediately compromised would temporary evacuation of affected areas be recommended—and this is relatively rare.",
  },
  {
    question: "What funding options exist for Sarasota condo remediation projects?",
    answer:
      "Common funding approaches for Sarasota associations include: existing reserves (if adequately funded through prior planning), special assessments (one-time or multi-year charges to unit owners), bank loans secured by future assessments (typically repaid over 5-15 years), phased construction spreading work across multiple budget cycles, and combinations thereof. Many Sarasota associations use reserve loans to begin immediate work while collecting special assessments. For Sarasota's luxury properties, special assessments can be substantial—$50,000 to $200,000 or more per unit is not uncommon for major remediation projects. FCS helps boards understand options and develop strategies that balance compliance urgency with owner financial capacity.",
  },
  {
    question: "How does FCS work with Sarasota County building department on compliance projects?",
    answer:
      "Florida Construction Specialists has extensive experience navigating Sarasota County's building department requirements for condo remediation projects. We handle all permit applications, coordinate required inspections, and ensure documentation meets county standards. Our team understands the specific requirements for coastal construction in Sarasota County, including wind load requirements, flood zone considerations, and material specifications. We work closely with licensed structural engineers to ensure all repairs meet both engineering specifications and local building code requirements, providing the documentation necessary for final compliance certification.",
  },
  {
    question: "What is a SIRS and why is it critical for Sarasota condo associations?",
    answer:
      "A Structural Integrity Reserve Study (SIRS) is a specialized reserve study mandated by SB4-D focusing specifically on structural components: roof, waterproofing, foundation, load-bearing walls, floor structures, fireproofing, plumbing, electrical, and any item with deferred maintenance exceeding $10,000. Unlike traditional reserve studies, SIRS cannot include pooling with non-structural items, and associations cannot vote to waive or reduce funding. For Sarasota's luxury condominiums, SIRS requirements often reveal significant funding gaps—many associations that historically waived reserves now face mandatory funding requirements that can increase regular assessments substantially. All Sarasota associations with buildings 3+ stories must complete SIRS by December 31, 2024.",
  },
];

const internalLinks = [
  { href: "/commercial/condo-remediation/", label: "Condo Remediation Services" },
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB 4-D Compliance Guide" },
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Services" },
  { href: "/services/residential/balcony-reconstruction/", label: "Balcony Reconstruction" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CondoRemediationSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Condo Remediation & SB4-D Compliance" />
      <ServiceSchema
        serviceName="Condo Remediation & SB4-D Compliance"
        serviceDescription="Expert condo remediation and SB4-D compliance services for Sarasota luxury condominiums, including Longboat Key, Siesta Key, Lido Key, and barrier island properties. Milestone inspections, SIRS assessments, structural repair. Projects from $100,000 to $10 million+."
        city="Sarasota"
        minPrice="100000"
      />
      <FAQSchema faqs={sarasotaFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green font-semibold">Serving Sarasota County, FL</span>
            </div>

            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/90 rounded-full mb-6 ml-3">
              <AlertTriangle className="w-4 h-4 text-white" />
              <span className="text-white font-semibold text-sm">POST-IAN COMPLIANCE URGENT</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Condo Remediation &amp; SB4-D Compliance in Sarasota
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Sarasota&apos;s trusted contractor for luxury beachfront condominium structural remediation.
              SB4-D compliance specialists serving Longboat Key, Siesta Key, Lido Key, and barrier island
              properties. <strong>Hurricane Ian heightened urgency—deadlines are here.</strong>
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center md:text-left">
            <AlertTriangle className="w-8 h-8 flex-shrink-0" />
            <div>
              <span className="font-bold text-lg block md:inline">
                SB4-D Deadlines Are Here: 
              </span>
              <span className="ml-0 md:ml-2">
                Sarasota barrier island condos 30+ years old must complete milestone inspections by December 31, 2024. 
                Don&apos;t risk building closure orders or liability.
              </span>
            </div>
            <Link href="/contact/" className="flex-shrink-0 bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
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
                Sarasota&apos;s Premier Condo Remediation Specialists
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Florida Construction Specialists (FCS)</strong> provides comprehensive SB4-D compliance
                and structural remediation services for Sarasota&apos;s luxury condominium communities. With over
                $7.4 million in completed condo remediation projects—including the landmark $4.9 million Tiara
                Condominium restoration—we understand the unique challenges facing Sarasota&apos;s barrier island
                properties and high-value beachfront buildings.
              </p>

              <p className="text-gray-600 mb-6">
                Sarasota County&apos;s barrier islands—Longboat Key, Lido Key, Siesta Key, Bird Key, and Casey Key—contain
                some of Florida&apos;s most prestigious condominium properties. Many of these luxury buildings were
                constructed during the development boom of the 1980s through early 2000s, meaning they&apos;re now
                reaching or exceeding the critical 25-30 year milestone inspection thresholds mandated by Florida&apos;s
                SB4-D legislation. The combination of aging infrastructure, aggressive Gulf Coast environmental
                conditions, and Hurricane Ian&apos;s 2022 impact has created urgent compliance requirements for
                hundreds of Sarasota condominiums.
              </p>

              <p className="text-gray-600 mb-6">
                Hurricane Ian served as a devastating reminder of Sarasota&apos;s vulnerability to major storms.
                While the storm&apos;s eye made landfall south of Sarasota County, the region experienced significant
                wind damage, storm surge, and flooding that stressed building envelopes and accelerated existing
                structural deterioration. Post-Ian milestone inspections have revealed that many Sarasota condominiums
                require more extensive remediation than boards anticipated, making compliance planning more complex
                and urgent.
              </p>

              <p className="text-gray-600 mb-8">
                For Sarasota&apos;s affluent condo communities, the stakes are particularly high. Property values on
                Longboat Key, Siesta Key, and Lido Key routinely exceed $500,000 to several million dollars per unit.
                Non-compliance with SB4-D doesn&apos;t just create regulatory risk—it threatens property values, insurance
                coverage, and the ability to sell units. FCS brings the expertise, capacity, and professionalism that
                Sarasota&apos;s luxury associations demand.
              </p>

              {/* Project Gallery */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
                    alt="Balcony restoration Sarasota"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Balcony Restoration</p>
                    <p className="text-xs text-gray-200">Luxury Condo Project</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/FCS-Exterior-Waterproofing/fcs-exterior-waterproofing-display.webp"
                    alt="Waterproofing for Sarasota condos"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Envelope Waterproofing</p>
                    <p className="text-xs text-gray-200">Coastal Protection</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/custom-home-construction-2/custom-home-construction-2-display.webp"
                    alt="Structural concrete repair"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Structural Repair</p>
                    <p className="text-xs text-gray-200">Concrete Restoration</p>
                  </div>
                </div>
              </div>

              {/* Target Audience Section */}
              <div className="bg-brand-green-bg rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-brand-green" />
                  Who We Serve in Sarasota
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Luxury Condo Associations</span>
                      <p className="text-sm text-gray-600">
                        Longboat Key, Siesta Key, Lido Key high-value properties
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Property Managers</span>
                      <p className="text-sm text-gray-600">
                        Managing SB4-D compliance for barrier island portfolios
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">HOA Boards</span>
                      <p className="text-sm text-gray-600">
                        Navigating milestone inspections and SIRS requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Beachfront Building Owners</span>
                      <p className="text-sm text-gray-600">
                        Gulf-front and bay-front multi-family properties
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
                      Need a Compliance Assessment for Your Sarasota Condo?
                    </h4>
                    <p className="text-gray-600">
                      We provide consultations for qualified projects on barrier islands and throughout Sarasota County.
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
                <h3 className="text-xl font-bold mb-4">Sarasota HOA & Boards</h3>
                <p className="text-gray-200 mb-4">
                  Request a compliance assessment and remediation proposal for your Longboat Key,
                  Siesta Key, or Lido Key condominium.
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
                  Sarasota SB4-D Facts
                </h3>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Applies to:</span> Buildings 3+ stories
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Barrier Islands:</span> 25-year inspection
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Deadline:</span> Dec 31, 2024 (many buildings)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">SIRS:</span> Reserve study now required
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Impact:</span> Values, insurance, sales
                  </li>
                </ul>
                <Link
                  href="/commercial/condo-remediation/"
                  className="text-amber-800 font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:underline"
                >
                  Read Full SB4-D Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Property Value Impact Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Sarasota Property Values at Risk
                </h3>
                <p className="text-blue-700 text-sm mb-3">
                  Non-compliant Sarasota condos face severe market penalties:
                </p>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Units become difficult to sell or finance</li>
                  <li>• Insurance premiums increase dramatically</li>
                  <li>• Property values decline significantly</li>
                  <li>• Board members face personal liability</li>
                </ul>
              </div>

              {/* Related Services */}
              <RelatedServices city="Sarasota" currentService="condo-remediation" />

              {/* Nearby Locations */}
              <NearbyLocations
                currentCity="Sarasota"
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
              Condo Remediation Services in Sarasota
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive SB4-D compliance and structural restoration solutions for Sarasota&apos;s
              luxury barrier island condominiums and Gulf Coast multi-family buildings.
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

      
      {/* Visual Break */}
      <ContentParallax
        src="/images/fcs-concrete-restoration/fcs-concrete-restoration-large.webp"
        alt="Condo structural remediation"
        title="SB 4-D Compliance Experts"
        subtitle="Trusted by HOAs and property managers throughout Tampa Bay"
        overlayOpacity={0.55}
      />

      {/* Sarasota-Specific Challenges Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Sarasota&apos;s Barrier Island Vulnerability
              </h2>

              <p className="text-gray-600 mb-6">
                Sarasota&apos;s position on Florida&apos;s Gulf Coast creates uniquely challenging conditions
                for condominium structures. The barrier islands that define Sarasota&apos;s prestigious
                beachfront communities—Longboat Key, Lido Key, Siesta Key, Bird Key, and Casey Key—experience
                environmental stresses that accelerate structural deterioration far beyond inland properties.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Waves className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Direct Gulf Salt Exposure</h4>
                    <p className="text-gray-600 text-sm">
                      Barrier island properties face constant Gulf of Mexico salt spray with chloride
                      concentrations 3-5x higher than mainland Sarasota. This dramatically accelerates
                      rebar corrosion and concrete deterioration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hurricane Ian Impact (2022)</h4>
                    <p className="text-gray-600 text-sm">
                      Hurricane Ian drove salt water and debris into many Sarasota buildings, accelerating
                      existing deterioration and revealing hidden structural deficiencies during subsequent
                      milestone inspections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Intense Subtropical UV</h4>
                    <p className="text-gray-600 text-sm">
                      Sarasota&apos;s intense year-round sun degrades waterproofing membranes and sealants
                      faster than northern Florida locations, requiring premium UV-stable materials for
                      lasting repairs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gauge className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">1980s-2000s Construction Era</h4>
                    <p className="text-gray-600 text-sm">
                      Many Sarasota luxury condos were built during the development boom, using construction
                      practices that predated modern understanding of Florida&apos;s harsh coastal environment
                      and durability requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Sarasota Areas We Serve
              </h3>
              <p className="text-gray-600 mb-6">
                FCS provides condo remediation services throughout Sarasota County&apos;s barrier islands
                and coastal communities. Our team is familiar with Sarasota County building department
                requirements and the specific challenges of the region&apos;s diverse luxury building stock.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {sarasotaNeighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <MapPin className="w-4 h-4 text-brand-green" />
                    <span className="text-gray-700 text-sm">{neighborhood}</span>
                  </div>
                ))}
              </div>

              {/* Affluent Market Callout */}
              <div className="mt-8 bg-gradient-to-br from-brand-green-dark to-brand-green-forest text-white rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  High-Value Properties Demand Expert Care
                </h4>
                <p className="text-gray-200 text-sm">
                  Sarasota&apos;s luxury condos—with units valued from $500,000 to several million dollars—require
                  contractors who understand both the technical complexity and the elevated expectations of
                  affluent communities. FCS brings the professionalism, communication, and quality that
                  Sarasota&apos;s discerning associations expect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Timeline Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
              SB4-D Compliance Timeline for Sarasota
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Critical deadlines for Sarasota barrier island and coastal zone condominiums
            </p>

            <div className="space-y-4 mb-8">
              {complianceTimeline.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-sm ${
                    item.status === 'urgent' ? 'border-l-4 border-red-500' : 'border-l-4 border-brand-gold'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2">
                    <div className="flex items-start gap-3">
                      {item.status === 'urgent' ? (
                        <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Clock className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
                      )}
                      <span className="font-medium text-gray-700">{item.milestone}</span>
                    </div>
                    <span className={`px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap ${
                      item.status === 'urgent' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-brand-gold text-white'
                    }`}>
                      {item.deadline}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 ml-9">{item.sarasotaNote}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-red-50 rounded-xl border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-red-800 mb-2">Deadline Warning for Sarasota Associations</h4>
                  <p className="text-red-700">
                    Many Sarasota barrier island condos have already missed recommended start dates for
                    compliance. Milestone inspections and SIRS studies take time to schedule and complete.
                    If your Longboat Key, Siesta Key, or Lido Key building hasn&apos;t started the compliance
                    process, contact us immediately—there may still be time, but every week matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
              Common Structural Issues in Sarasota Condos
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Issues frequently identified during milestone inspections of Sarasota barrier island properties
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {commonIssues.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-xl p-6 border-l-4 ${
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

      {/* SB4-D Deep Dive Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                Understanding SB4-D for Sarasota Associations
              </h2>

              <p className="text-gray-200 mb-6">
                Florida Senate Bill 4-D, enacted in response to the Surfside condominium collapse,
                establishes mandatory milestone inspections and Structural Integrity Reserve
                Studies for buildings three stories or taller. For Sarasota&apos;s barrier island
                communities, the implications are significant—and the urgency is immediate.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Phase 1 Inspection:</strong> Licensed engineer identifies structural
                    deterioration through visual assessment of load-bearing elements, balconies,
                    and building envelope.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Phase 2 Investigation:</strong> If substantial deterioration is found,
                    detailed testing and analysis quantifies repair requirements and develops
                    remediation specifications.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>SIRS Requirements:</strong> Sarasota associations must complete Structural
                    Integrity Reserve Studies and fund structural reserves—no more waivers allowed.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Remediation Execution:</strong> FCS implements required repairs with
                    engineering oversight and provides documentation for compliance certification.
                  </span>
                </div>
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-forest transition-colors"
              >
                Discuss Sarasota Compliance <ArrowRight className="w-5 h-5" />
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
                <Target className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$4.9M</div>
                <div className="text-gray-300 text-sm">Largest Condo Project</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Sarasota Condo Remediation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From milestone inspection coordination through completed remediation, FCS manages
              every aspect with the professionalism Sarasota&apos;s luxury associations expect.
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

      {/* Why Choose FCS Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Sarasota Associations Choose Florida Construction Specialists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Prime Contractor Only
              </h3>
              <p className="text-gray-600">
                FCS always serves as the prime contractor, never a subcontractor. Your Sarasota
                association gets direct accountability, single-point responsibility, and our full
                bonding protection on every luxury condo project.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Proven Condo Experience
              </h3>
              <p className="text-gray-600">
                Our $4.9 million Tiara Condominium project—180+ balconies reconstructed while
                maintaining occupancy—demonstrates our capability for Sarasota&apos;s most demanding
                luxury remediation projects.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Palmtree className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Gulf Coast Specialists
              </h3>
              <p className="text-gray-600">
                We specialize in barrier island construction challenges unique to Sarasota. Our team
                uses marine-grade materials and methods specifically engineered for the aggressive
                Gulf Coast environment.
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
                Request Your Sarasota Compliance Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you&apos;re responding to a milestone inspection report, planning proactive
                remediation, or facing urgent structural concerns at your Longboat Key, Siesta Key,
                or Lido Key property, FCS provides expert assessment and comprehensive solutions
                for Sarasota&apos;s luxury condominiums.
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
                    Phased approaches to accommodate SIRS reserve planning
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Marine-grade materials for Sarasota&apos;s barrier island environment
                  </span>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Speak with Our Team</h3>
                <p className="text-gray-200 mb-4">
                  For immediate assistance with your Sarasota condo remediation project:
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
        items={sarasotaFaqs}
        title="Sarasota Condo Remediation FAQs"
        description="Common questions about condo remediation, SB4-D compliance, milestone inspections, and SIRS requirements for Sarasota, Longboat Key, Siesta Key, and barrier island condominiums."
      />

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving Sarasota&apos;s Barrier Islands &amp; Coastal Communities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Florida Construction Specialists provides condo remediation and SB4-D compliance services
              throughout Sarasota County, including Longboat Key, Lido Key, Siesta Key, Bird Key,
              St. Armands, and surrounding Gulf Coast communities.
            </p>
          </div>
          <GoogleMap city="Sarasota" height={400} />
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks title="Related Services & Resources" links={internalLinks} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Sarasota&apos;s Trusted Condo Remediation Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From SB4-D compliance assessments to comprehensive structural remediation, Florida
            Construction Specialists is Sarasota&apos;s premier contractor for luxury barrier island
            condominium restoration. Contact us today to discuss your project.
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
