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
  Hammer,
  Search,
  Target,
  Anchor,
  Ship,
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
  title: "Condo Remediation St Petersburg FL | SB4-D Compliance & SIRS | FCS",
  description:
    "St. Petersburg condo remediation and SB4-D compliance experts. Milestone inspections, SIRS structural reserve studies, balcony reconstruction for condos 3+ stories. Serving Downtown St. Pete, St. Pete Beach, Treasure Island. Licensed CBC1262722.",
  keywords:
    "condo remediation St Petersburg, SB4-D compliance St Pete, milestone inspection St Petersburg FL, SIRS St Pete condos, condo structural repair Pinellas, St Petersburg condo restoration, St Pete Beach condo repair, Treasure Island condo remediation, condo milestone inspection St Pete, structural reserve study St Petersburg",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Services", href: "/commercial/" },
  { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
  { name: "St. Petersburg", href: "/condo-remediation-st-petersburg/" },
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
      "Expert coordination of Phase 1 and Phase 2 structural inspections with licensed engineers for St. Petersburg condos approaching or past their 25/30-year milestone deadlines.",
  },
  {
    icon: FileText,
    title: "SIRS Compliance Support",
    description:
      "Structural Integrity Reserve Study coordination and remediation cost analysis to help St. Pete condo associations plan and fund necessary structural repairs.",
  },
  {
    icon: Building2,
    title: "Structural Concrete Repair",
    description:
      "Complete concrete restoration including spall repair, rebar treatment, carbon fiber reinforcement, and post-tension cable rehabilitation for aging St. Petersburg condominiums.",
  },
  {
    icon: Hammer,
    title: "Balcony Reconstruction",
    description:
      "Full balcony restoration from structural repair to waterproofing and railings, addressing the deterioration common in St. Pete's 1970s-1990s era condo buildings.",
  },
  {
    icon: Droplets,
    title: "Waterproofing Systems",
    description:
      "Multi-layer waterproofing membranes, traffic-bearing coatings, and drainage correction engineered for St. Petersburg's dual-waterfront salt exposure and tropical weather.",
  },
  {
    icon: Users,
    title: "Board & HOA Coordination",
    description:
      "Experience presenting to condo boards, developing phased remediation programs, and coordinating special assessments for St. Petersburg association projects.",
  },
];

const stPeteNeighborhoods = [
  "Downtown St. Pete",
  "St. Pete Beach",
  "Treasure Island",
  "Pass-a-Grille",
  "Snell Isle",
  "Old Northeast",
  "Shore Acres",
  "Gulfport",
  "Pinellas Point",
  "Tierra Verde",
  "Isla Del Sol",
  "Madeira Beach",
  "Venetian Isles",
  "Coquina Key",
  "Bayway Isles",
];

const processSteps = [
  {
    step: 1,
    title: "Compliance Assessment",
    description:
      "Review building age, coastal proximity, and current inspection status to determine SB4-D requirements for your St. Petersburg condominium.",
  },
  {
    step: 2,
    title: "Engineering Coordination",
    description:
      "Coordinate with licensed structural engineers for Phase 1 milestone inspection, or Phase 2 testing if substantial deterioration is found.",
  },
  {
    step: 3,
    title: "Scope Development",
    description:
      "Develop detailed remediation specifications and cost estimates based on engineering findings, prioritizing by structural urgency.",
  },
  {
    step: 4,
    title: "Board Presentation",
    description:
      "Present findings, options, and recommendations to your St. Pete condo board with clear cost projections and timeline scenarios.",
  },
  {
    step: 5,
    title: "Funding Strategy",
    description:
      "Assist with reserve analysis, special assessment planning, financing options, and phasing strategies to fund required repairs.",
  },
  {
    step: 6,
    title: "Phased Construction",
    description:
      "Execute remediation work strategically to maintain occupancy, coordinating with the City of St. Petersburg Building Department for permits and inspections.",
  },
];

const stPeteFaqs = [
  {
    question: "What is SB4-D and how does it affect St. Petersburg condominiums?",
    answer:
      "Florida Senate Bill 4-D, passed in 2022 after the Surfside tragedy, requires condominiums three stories or taller to complete milestone structural inspections at 30 years of age (or 25 years if within 3 miles of the coast). For St. Petersburg, virtually all waterfront properties—including Downtown St. Pete, St. Pete Beach, Treasure Island, and Pass-a-Grille—fall within the coastal zone requiring inspection at 25 years. The law also mandates Structural Integrity Reserve Studies (SIRS) and eliminates reserve fund waivers for structural components. Many St. Pete condos built during the 1970s-1990s development boom are now past their inspection deadlines, requiring immediate attention.",
  },
  {
    question: "Why are St. Petersburg condos particularly vulnerable to structural deterioration?",
    answer:
      "St. Petersburg's unique geography creates dual salt-air exposure from both Tampa Bay to the east and the Gulf of Mexico to the west. This means condos throughout the peninsula—not just beachfront properties—experience accelerated concrete carbonation and reinforcing steel corrosion. The city's significant inventory of 1960s-1990s era condos used construction practices with thinner concrete cover over rebar than current codes require, making these buildings especially susceptible to chloride intrusion. Add intense tropical UV exposure, 75%+ average humidity, and seasonal hurricane exposure, and St. Pete condos face some of the most demanding conditions in Florida.",
  },
  {
    question: "What areas of St. Petersburg fall within the coastal zone for SB4-D purposes?",
    answer:
      "The SB4-D coastal zone extends 3 miles from the shoreline, which encompasses virtually all of St. Petersburg due to the city's peninsula geography. All of St. Pete Beach, Treasure Island, Pass-a-Grille, Tierra Verde, and Isla Del Sol are within the coastal zone. Downtown St. Pete, Old Northeast, Snell Isle, Shore Acres, and most of the peninsula are also within 3 miles of either Tampa Bay or the Gulf. Even inland areas of Pinellas County around St. Pete may fall within this zone. This means most St. Petersburg condos require inspection at 25 years rather than 30 years.",
  },
  {
    question: "How much does condo remediation typically cost in St. Petersburg?",
    answer:
      "Costs vary significantly based on building size, age, construction type, and severity of deterioration. Phase 1 milestone inspections typically cost $3,000-$15,000, with Phase 2 adding $15,000-$75,000+ if triggered. SIRS studies range from $5,000-$30,000 depending on building complexity. Remediation costs depend entirely on deficiencies found: concrete spalling repair runs $15-50/SF, balcony reconstruction $300-600/SF, and comprehensive building envelope rehabilitation $50-150/SF. For perspective, our landmark Tiara Condominium project in St. Pete totaled $4.9 million for 180+ balcony reconstructions. FCS provides detailed estimates after engineering assessment.",
  },
  {
    question: "Can St. Pete condo residents stay in the building during remediation work?",
    answer:
      "In most cases, yes. FCS develops phased remediation plans specifically designed to maintain building occupancy throughout construction. We work floor-by-floor or section-by-section, install temporary weather barriers, schedule noise-intensive work during reasonable hours, and maintain all life safety systems. Residents typically need to clear balcony areas during their unit's active work phase. For St. Pete's seasonal population, we can often coordinate major work during lower-occupancy periods. Only in cases of severe structural compromise requiring emergency shoring would temporary evacuation be recommended—this is relatively rare.",
  },
  {
    question: "What's the difference between Phase 1 and Phase 2 milestone inspections?",
    answer:
      "Phase 1 is a visual inspection by a licensed engineer to identify any substantial structural deterioration—deterioration approaching or exceeding design limits. The engineer examines load-bearing walls, primary structural systems, and overall building condition. If Phase 1 reveals substantial deterioration, Phase 2 is triggered, requiring more extensive investigation including destructive testing (concrete cores, rebar exposure), detailed structural analysis, repair specifications, cost estimates, and recommended timelines. FCS coordinates with qualified engineers for both phases and executes the remediation work that Phase 2 reports prescribe.",
  },
  {
    question: "What happens if our St. Petersburg condo association misses SB4-D deadlines?",
    answer:
      "Non-compliance carries serious consequences: local building officials (City of St. Petersburg or Pinellas County) can issue notices of non-compliance escalating to building closure orders; board members may face personal liability for breach of fiduciary duty; insurance carriers may deny coverage or dramatically increase premiums; property values decline as buyers require compliance documentation; and units may become unsellable or unfinanceable. Given St. Pete's competitive waterfront real estate market, non-compliant buildings face particularly severe market penalties. If your building hasn't started the compliance process, contact us immediately.",
  },
  {
    question: "How does FCS work with St. Petersburg condo associations and boards?",
    answer:
      "FCS has extensive experience with St. Petersburg condo governance. We provide detailed proposals suitable for board presentations, attend association meetings when requested, and present complex engineering findings in terms board members and owners can understand. We develop phased approaches aligned with reserve fund availability and special assessment capacity. Our team understands the dynamics of St. Pete's seasonal resident populations and community decision-making processes. We maintain clear communication with boards, property managers, and all stakeholders throughout projects.",
  },
  {
    question: "What funding options exist for SB4-D compliance and remediation in St. Pete?",
    answer:
      "St. Petersburg condo associations typically use several funding approaches: existing reserves (if previously funded adequately), special assessments (one-time or multi-year charges), bank loans secured by future assessments (repaid over 5-15 years), phased construction spreading work across multiple budget cycles, or combinations. Many associations use reserve loans to begin immediate work while collecting special assessments. The elimination of reserve waivers under SB4-D means associations must begin properly funding structural reserves—early SIRS completion helps boards plan this transition and communicate funding needs to unit owners.",
  },
  {
    question: "Why choose FCS for St. Petersburg condo remediation projects?",
    answer:
      "FCS brings unique qualifications to St. Pete condo remediation: our landmark $4.9 million Tiara Condominium project here demonstrates capability for the largest, most complex projects; we always serve as prime contractor with direct accountability; our 40+ years of Florida construction experience includes deep expertise in coastal concrete restoration; we maintain relationships with licensed structural engineers experienced in SB4-D compliance; and our $10M+ bonding capacity provides confidence for even the largest tower projects. We understand St. Petersburg's unique dual-waterfront challenges and local permitting requirements.",
  },
];

const commonIssues = [
  {
    issue: "Balcony Deterioration",
    description:
      "Spalling concrete, corroded rebar, waterproofing failures, and structural cracking common in St. Pete's 1970s-1990s condo balconies.",
    severity: "High",
  },
  {
    issue: "Concrete Spalling",
    description:
      "Delamination and flaking exposing reinforcing steel, accelerated by dual salt-air exposure from Tampa Bay and Gulf.",
    severity: "High",
  },
  {
    issue: "Rebar Corrosion",
    description:
      "Rust expansion causing concrete cracking, particularly severe in older St. Pete condos with insufficient concrete cover.",
    severity: "Critical",
  },
  {
    issue: "Post-Tension Cable Issues",
    description:
      "Corrosion, broken strands, or grout voids in post-tensioned concrete systems used in many 1970s-80s St. Pete buildings.",
    severity: "Critical",
  },
  {
    issue: "Waterproofing Failures",
    description:
      "Failed deck coatings and membrane deterioration from intense UV and humidity, causing water intrusion and structural damage.",
    severity: "Medium",
  },
  {
    issue: "Parking Structure Deterioration",
    description:
      "Corrosion damage, expansion joint failures, and surface wear in parking decks under St. Pete's older condo buildings.",
    severity: "High",
  },
];

const internalLinks = [
  { href: "/commercial/condo-remediation/", label: "SB4-D & Condo Remediation Guide" },
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Services" },
  { href: "/services/residential/balcony-reconstruction/", label: "Balcony Reconstruction Services" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/balcony-reconstruction-clearwater/", label: "Clearwater Balcony Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CondoRemediationStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Condo Remediation & SB4-D Compliance" />
      <ServiceSchema
        serviceName="Condo Remediation & SB4-D Compliance"
        serviceDescription="Expert condo remediation, SB4-D compliance, milestone inspections, and SIRS support for St. Petersburg condominiums. Serving Downtown St. Pete, St. Pete Beach, Treasure Island, and all Pinellas County. Structural concrete repair, balcony reconstruction, waterproofing for buildings 3+ stories."
        city="St. Petersburg"
        minPrice="100000"
      />
      <FAQSchema faqs={stPeteFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/commercial-construction-hero.jpg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Deadline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full mb-6 animate-pulse">
              <AlertTriangle className="w-4 h-4 text-white" />
              <span className="text-white font-bold">SB4-D DEADLINES ARE HERE</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Condo Remediation & SB4-D Compliance in St. Petersburg
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl leading-relaxed">
              St. Petersburg's trusted contractor for condo structural remediation, milestone
              inspections, and SB4-D compliance. Serving condos three stories and higher
              throughout Downtown St. Pete, St. Pete Beach, Treasure Island, and Pinellas County.
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              With <strong>$4.9 million in completed St. Pete condo remediation</strong> including the Tiara
              Condominium project, FCS understands the urgency facing St. Petersburg's aging condo
              inventory. Many buildings are now past SB4-D deadlines—act now.
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
                <ArrowRight className="w-5 h-5" />
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="font-semibold text-center">
              <strong>December 31, 2024 Deadline Passed:</strong> St. Petersburg condos 30+ years
              old within the coastal zone must have completed milestone inspections. Non-compliant
              buildings face closure orders, liability exposure, and property value decline.
              <strong> Contact FCS immediately for urgent assessment.</strong>
            </p>
            <Link
              href="/contact/"
              className="flex-shrink-0 bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
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
                St. Petersburg's Trusted Condo Remediation Specialists
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Florida Construction Specialists (FCS)</strong> is St. Petersburg's
                premier contractor for condo remediation and SB4-D compliance. With the landmark
                $4.9 million Tiara Condominium balcony reconstruction project completed right
                here in St. Pete, we've proven our capability to handle the largest, most complex
                remediation projects in the region while maintaining building occupancy throughout
                construction.
              </p>

              <p className="text-gray-600 mb-6">
                St. Petersburg presents unique challenges for condo structures. Unlike coastal
                cities with exposure on one side, St. Pete's peninsula geography creates
                <strong> dual waterfront exposure</strong>—salt air from Tampa Bay to the east and
                the Gulf of Mexico to the west. This means condos throughout the city, not just
                beachfront properties, experience accelerated structural deterioration. Combined
                with St. Pete's significant inventory of condos built during the 1960s-1990s
                development boom, many buildings now face urgent repair needs just as SB4-D
                compliance deadlines arrive.
              </p>

              <p className="text-gray-600 mb-8">
                Our team understands the specific construction practices used during St. Pete's
                condo boom—the thinner concrete cover over rebar, the post-tensioned slab systems,
                the waterproofing methods that were state-of-art decades ago but have reached
                end-of-life. We've restored buildings from Downtown St. Pete's urban high-rises to
                the beachfront condos of Treasure Island and St. Pete Beach, working with
                associations, property managers, and engineers throughout the compliance and
                remediation process.
              </p>

              {/* Project Gallery */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
                    alt="Balcony reconstruction project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Balcony Reconstruction</p>
                    <p className="text-xs text-gray-200">Tiara Condominiums, St. Pete</p>
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
                    <p className="font-semibold text-sm">Structural Waterproofing</p>
                    <p className="text-xs text-gray-200">Coastal Protection Systems</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/commercial-construction-hero.jpg"
                    alt="Commercial condo project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Structural Remediation</p>
                    <p className="text-xs text-gray-200">Concrete Restoration</p>
                  </div>
                </div>
              </div>

              {/* St. Pete's Dual Waterfront Challenge */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Ship className="w-6 h-6 text-brand-green" />
                  St. Petersburg's Dual-Waterfront Challenge
                </h3>
                <p className="text-gray-700 mb-4">
                  St. Petersburg is uniquely situated on a peninsula between Tampa Bay and the
                  Gulf of Mexico, creating salt-air exposure from multiple directions that
                  accelerates structural deterioration throughout the city—not just at
                  beachfront properties.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Anchor className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Tampa Bay Exposure (East)</span>
                      <p className="text-sm text-gray-600">
                        Downtown St. Pete, Snell Isle, Old Northeast, Shore Acres face bay salt air
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Waves className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Gulf Exposure (West)</span>
                      <p className="text-sm text-gray-600">
                        St. Pete Beach, Treasure Island, Pass-a-Grille face direct Gulf salt spray
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Target Audience Section */}
              <div className="bg-brand-green-bg rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-brand-green" />
                  Who We Serve in St. Petersburg
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Condo Associations</span>
                      <p className="text-sm text-gray-600">
                        Board members navigating SB4-D compliance deadlines for St. Pete condos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Property Managers</span>
                      <p className="text-sm text-gray-600">
                        Managing milestone inspection remediation for downtown and beachfront properties
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Waterfront Building Owners</span>
                      <p className="text-sm text-gray-600">
                        Bay-front and Gulf-front multi-family buildings requiring structural work
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">HOA Boards</span>
                      <p className="text-sm text-gray-600">
                        Decision-makers seeking qualified contractors for $100K+ remediation projects
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
                      Need a Compliance Assessment for Your St. Petersburg Condo?
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
                <h3 className="text-xl font-bold mb-4">St. Pete Condo Boards</h3>
                <p className="text-gray-200 mb-4">
                  Request a complimentary SB4-D compliance assessment and remediation
                  proposal for your St. Petersburg condominium building.
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
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  SB4-D Deadlines
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Coastal 30+ years:</span> Dec 31, 2024 ⚠️
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Inland 30+ years:</span> Dec 31, 2025
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">St. Pete:</span> Most areas in coastal zone
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">SIRS Required:</span> Dec 31, 2024 ⚠️
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Penalties:</span> Closure, liability, sales impact
                  </li>
                </ul>
                <Link
                  href="/commercial/condo-remediation/"
                  className="text-red-800 font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:underline"
                >
                  Read Full SB4-D Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Featured Project */}
              <div className="bg-brand-green-bg rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  Featured St. Pete Project
                </h3>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-brand-green">$4.9 Million</div>
                  <div className="text-gray-600">Tiara Condominium Association</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    180+ balconies reconstructed
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    Structural concrete repairs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    Traffic-bearing waterproofing
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    Phased to maintain occupancy
                  </li>
                </ul>
              </div>

              {/* Related Services */}
              <RelatedServices city="St. Petersburg" currentService="condo-remediation" />

              {/* Nearby Locations */}
              <NearbyLocations
                currentCity="St. Petersburg"
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
              Condo Remediation Services in St. Petersburg
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive SB4-D compliance and structural remediation solutions for St. Pete
              condominiums, from milestone inspection coordination through completed repairs.
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

      {/* St. Pete's Historic Condo Stock Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                St. Petersburg's Historic Condo Challenges
              </h2>

              <p className="text-gray-600 mb-6">
                St. Petersburg experienced massive condo development during the 1960s through
                1990s, creating an inventory of mid-rise and high-rise buildings that now face
                the dual challenges of aging infrastructure and new SB4-D compliance requirements.
                Understanding these buildings' construction characteristics helps associations
                anticipate what milestone inspections may reveal.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">1960s-1970s Construction</h4>
                    <p className="text-gray-600 text-sm">
                      Early St. Pete condos often used thinner concrete cover over reinforcing
                      steel than current codes require, making them vulnerable to chloride
                      intrusion from salt air. Many have reached or exceeded 50 years of age.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">1980s-1990s Boom Buildings</h4>
                    <p className="text-gray-600 text-sm">
                      Post-tensioned slab construction became common during this era. While
                      offering excellent performance when maintained, these systems require
                      specialized inspection and repair approaches when tendons corrode.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Original Waterproofing</h4>
                    <p className="text-gray-600 text-sm">
                      Many St. Pete condos still have original waterproofing systems from
                      construction—products designed for 15-20 year lifespans now 30-50 years
                      old. Failed waterproofing is often the root cause of structural deterioration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Scale className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Deferred Maintenance Legacy</h4>
                    <p className="text-gray-600 text-sm">
                      Years of reserve waivers (now prohibited under SB4-D) left many associations
                      with accumulated maintenance backlogs. Milestone inspections are now
                      revealing the consequences of this deferred maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                St. Petersburg Areas We Serve
              </h3>
              <p className="text-gray-600 mb-6">
                FCS provides condo remediation services throughout St. Petersburg and the
                surrounding beach communities. Our team is familiar with local building
                departments, permit processes, and the specific challenges of each neighborhood.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {stPeteNeighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <MapPin className="w-4 h-4 text-brand-green" />
                    <span className="text-gray-700 text-sm">{neighborhood}</span>
                  </div>
                ))}
              </div>

              {/* City Permitting Note */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">City & County Permitting</h4>
                <p className="text-sm text-blue-700">
                  FCS handles permit coordination with both the City of St. Petersburg Building
                  Department and Pinellas County as required. We understand the specific
                  documentation and inspection requirements for structural remediation projects
                  in this jurisdiction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Common Structural Issues in St. Pete Condos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based on our extensive experience with St. Petersburg condominiums, these are the
              structural issues most frequently identified during milestone inspections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {commonIssues.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border-l-4 shadow-sm ${
                  item.severity === "Critical"
                    ? "border-red-500"
                    : item.severity === "High"
                    ? "border-orange-500"
                    : "border-yellow-500"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-brand-green-dark">{item.issue}</h3>
                  <span
                    className={`px-2 py-1 rounded text-xs font-bold ${
                      item.severity === "Critical"
                        ? "bg-red-100 text-red-700"
                        : item.severity === "High"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.severity}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold text-brand-green-dark text-lg mb-3">
              Why St. Pete Condos Face Accelerated Deterioration
            </h3>
            <p className="text-gray-600 mb-4">
              St. Petersburg's unique peninsula geography means salt air exposure from Tampa Bay
              and the Gulf simultaneously. Average humidity of 75%+ promotes year-round concrete
              carbonation, reducing the alkaline environment that protects reinforcing steel.
              Intense tropical UV (St. Pete averages 245 sunny days annually) degrades
              waterproofing faster than almost anywhere else. Combine these factors with
              construction practices from decades past, and St. Pete condos often show
              deterioration rates 2-3x higher than inland buildings.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-brand-green font-semibold hover:underline"
            >
              Schedule Structural Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SB4-D Compliance Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                SB4-D Compliance for St. Petersburg Condominiums
              </h2>

              <p className="text-gray-200 mb-6">
                Florida's SB4-D legislation, passed in response to the 2021 Surfside tragedy,
                creates mandatory milestone inspections and Structural Integrity Reserve Studies
                for condominiums three stories or taller. For St. Petersburg's coastal-zone
                buildings—which includes virtually the entire city—initial inspections were
                required by December 31, 2024 for buildings 30+ years old.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Coastal Zone Requirements:</strong> St. Pete's peninsula geography
                    places virtually all condos within 3 miles of shoreline, requiring inspection
                    at 25 years of building age.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>SIRS Mandate:</strong> Structural Integrity Reserve Studies required
                    for all affected buildings, with no more reserve waivers for structural
                    components.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Phase 1 & Phase 2:</strong> Visual inspections by licensed engineers,
                    with destructive testing required if substantial deterioration is found.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Ongoing Requirements:</strong> Subsequent milestone inspections every
                    10 years; SIRS updates every 10 years or after material changes.
                  </span>
                </div>
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-forest transition-colors"
              >
                Discuss SB4-D Compliance <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$4.9M</div>
                <div className="text-gray-300 text-sm">Tiara Condo Project</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$10M+</div>
                <div className="text-gray-300 text-sm">Bonding Capacity</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Calendar className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">40+</div>
                <div className="text-gray-300 text-sm">Years FL Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Target className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">180+</div>
                <div className="text-gray-300 text-sm">Balconies at Tiara</div>
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
              Our Condo Remediation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FCS manages every aspect of SB4-D compliance and remediation from initial
              assessment through completed construction, working closely with your board,
              engineers, and the City of St. Petersburg.
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
            Why St. Petersburg Condos Choose Florida Construction Specialists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Proven St. Pete Track Record
              </h3>
              <p className="text-gray-600">
                Our $4.9 million Tiara Condominium project—180+ balconies reconstructed while
                maintaining occupancy—demonstrates our capability for the largest, most complex
                St. Pete remediation projects.
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
                FCS always serves as prime contractor with direct accountability. Your St. Pete
                association gets single-point responsibility, full bonding protection, and our
                complete team on every project.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Complete SB4-D Expertise
              </h3>
              <p className="text-gray-600">
                We understand milestone inspection requirements, work seamlessly with structural
                engineers, and provide complete documentation for compliance certification with
                the City of St. Petersburg.
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
                Request Your St. Petersburg Compliance Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're responding to a milestone inspection report, proactively assessing
                your building before deadlines, or facing urgent structural concerns at your
                St. Pete condo, FCS provides expert assessment and remediation solutions for
                Pinellas County condominiums.
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
                    Engineering coordination for milestone inspection support
                  </span>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Speak with Our Team</h3>
                <p className="text-gray-200 mb-4">
                  For immediate assistance with your St. Petersburg condo remediation project:
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
        items={stPeteFaqs}
        title="St. Petersburg Condo Remediation FAQs"
        description="Common questions about SB4-D compliance, milestone inspections, SIRS requirements, and condo remediation in St. Petersburg, Florida."
      />

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving St. Petersburg and Pinellas Beach Communities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Florida Construction Specialists provides condo remediation and SB4-D compliance
              services throughout St. Petersburg, including Downtown St. Pete, St. Pete Beach,
              Treasure Island, Pass-a-Grille, and all Pinellas County communities.
            </p>
          </div>
          <GoogleMap city="St. Petersburg" height={400} />
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
            St. Petersburg's Trusted Condo Remediation Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From SB4-D compliance assessments to full structural remediation, Florida
            Construction Specialists is St. Petersburg's premier contractor for condominium
            restoration. With $4.9M in completed St. Pete projects and 40+ years of experience,
            we understand the urgency—contact us today.
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
