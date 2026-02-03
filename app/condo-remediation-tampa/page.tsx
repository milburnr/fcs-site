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
  Droplets,
  Scale,
  ClipboardCheck,
  Waves,
  Gauge,
  HardHat,
  Search,
  Hammer,
  Target,
  Building,
  Landmark,
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
  title: "Condo Remediation Tampa | SB4-D Compliance | FCS",
  description:
    "Tampa condo remediation specialists. SB4-D compliance, milestone inspections, SIRS reserve studies, structural repairs for condominiums 3+ stories. Hillsborough County expertise. Licensed CBC1262722. Call (813) 420-7561.",
  keywords:
    "condo remediation Tampa, SB4-D compliance Tampa, milestone inspection Tampa, SIRS Tampa condominiums, condo structural repair Tampa, Tampa condo milestone inspection, Hillsborough County condo compliance, Tampa high-rise repair, condo balcony repair Tampa, Tampa Bay condo restoration",
  openGraph: {
    title: "Condo Remediation Tampa | SB4-D Compliance Specialists",
    description:
      "Tampa's trusted contractor for SB4-D compliance, milestone inspections, and condo structural repairs. Serving Hyde Park, Davis Islands, Channelside, and Tampa Bay condominiums.",
    type: "website",
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Services", href: "/commercial/" },
  { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
  { name: "Tampa", href: "/condo-remediation-tampa/" },
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
      "Coordination with licensed structural engineers for Phase 1 and Phase 2 milestone inspections of Tampa condominiums. Documentation preparation, deficiency assessment, and remediation scoping for Hillsborough County compliance.",
  },
  {
    icon: FileText,
    title: "SIRS Compliance Assistance",
    description:
      "Structural Integrity Reserve Study support including component assessment, repair cost estimates, and reserve fund planning for Tampa condo associations navigating new funding requirements effective January 2025.",
  },
  {
    icon: Hammer,
    title: "Structural Concrete Repair",
    description:
      "Comprehensive concrete restoration including spall repair, rebar treatment, crack injection, and carbon fiber reinforcement for deteriorated Tampa high-rise parking structures, walkways, and building elements.",
  },
  {
    icon: Building2,
    title: "Balcony Reconstruction",
    description:
      "Complete balcony restoration from structural slab repair to waterproofing systems and railing replacement. Phased construction approach maintains building occupancy throughout Tampa condo projects.",
  },
  {
    icon: Droplets,
    title: "Building Envelope Waterproofing",
    description:
      "Multi-layer waterproofing systems for Tampa's humidity and storm exposure. Traffic-bearing membranes, expansion joint rehabilitation, and drainage correction for long-term moisture protection.",
  },
  {
    icon: Users,
    title: "HOA & Board Coordination",
    description:
      "Experienced in Tampa condo association governance. Professional proposals for board presentations, phased funding options, resident communication, and special assessment coordination.",
  },
];

const tampaNeighborhoods = [
  "Hyde Park",
  "Davis Islands",
  "Harbour Island",
  "Channelside",
  "Downtown Tampa",
  "South Tampa",
  "Westshore",
  "Bayshore",
  "Palma Ceia",
  "Beach Park",
  "Ballast Point",
  "Riverside Heights",
  "Seminole Heights",
  "Tampa Heights",
  "Ybor City",
  "Carrollwood",
];

const processSteps = [
  {
    step: 1,
    title: "Compliance Assessment",
    description:
      "Review of your Tampa building's age, location, and current compliance status. Analysis of existing inspection reports, SIRS documents, and identified structural deficiencies requiring remediation.",
  },
  {
    step: 2,
    title: "Engineering Coordination",
    description:
      "Connection with licensed structural engineers for milestone inspections if not completed, or review of existing Phase 2 reports. Development of repair specifications meeting Hillsborough County requirements.",
  },
  {
    step: 3,
    title: "Board Proposal Development",
    description:
      "Comprehensive proposals suitable for Tampa HOA board presentations including scope breakdown, phased options, timeline projections, and budget aligned with reserve fund and special assessment capabilities.",
  },
  {
    step: 4,
    title: "Permit & Mobilization",
    description:
      "Permit applications through City of Tampa Building Department. Site setup, safety barriers, and construction phasing designed to maintain building occupancy and minimize resident disruption.",
  },
  {
    step: 5,
    title: "Structural Remediation",
    description:
      "Execution of concrete repair, waterproofing installation, railing systems, and all identified structural work. Quality control inspections throughout with engineer oversight and verification.",
  },
  {
    step: 6,
    title: "Compliance Documentation",
    description:
      "Complete project documentation including engineer certifications, warranty information, and SB4-D compliance records for Tampa building officials and association files.",
  },
];

const complianceTimeline = [
  {
    milestone: "Buildings 30+ years old (within 3 miles of coast)",
    deadline: "December 31, 2024",
    status: "passed",
    note: "Deadline has passed - immediate action required",
  },
  {
    milestone: "Buildings 30+ years old (more than 3 miles from coast)",
    deadline: "December 31, 2025",
    status: "urgent",
    note: "Many Tampa inland condos fall into this category",
  },
  {
    milestone: "SIRS must be completed for all applicable buildings",
    deadline: "December 31, 2024",
    status: "passed",
    note: "Reserve funding requirements now in effect",
  },
  {
    milestone: "No-waiver reserve funding begins",
    deadline: "January 1, 2025",
    status: "active",
    note: "Associations cannot waive structural reserve contributions",
  },
];

const commonIssues = [
  {
    issue: "Balcony Concrete Deterioration",
    description:
      "Tampa's high humidity accelerates concrete carbonation and rebar corrosion in exposed balcony slabs. Buildings from the 1970s-1990s boom frequently show significant spalling and structural weakening.",
    severity: "Critical",
  },
  {
    issue: "Post-Tension Cable Corrosion",
    description:
      "Many Tampa high-rises use post-tensioned concrete construction. Moisture intrusion through failed waterproofing leads to tendon corrosion, potentially causing sudden structural failures.",
    severity: "Critical",
  },
  {
    issue: "Parking Garage Deterioration",
    description:
      "Tampa condo parking structures experience severe wear from traffic, salt tracked from beach trips, and inadequate drainage. Expansion joint failures and deck coating deterioration are common.",
    severity: "High",
  },
  {
    issue: "Exterior Waterproofing Failure",
    description:
      "Original waterproofing systems on 30-40 year old Tampa buildings have typically exceeded service life. Failed sealants and coatings allow water intrusion that accelerates structural damage.",
    severity: "High",
  },
  {
    issue: "Railing Anchorage Corrosion",
    description:
      "Railing posts embedded in balcony slabs corrode from moisture, losing anchorage strength. This creates fall hazards that frequently trigger Phase 2 inspections and urgent remediation requirements.",
    severity: "Critical",
  },
  {
    issue: "Stairwell & Walkway Spalling",
    description:
      "Exterior stairwells and elevated walkways in Tampa condos show concrete deterioration similar to balconies, requiring structural assessment and repair as part of comprehensive remediation.",
    severity: "High",
  },
];

const tampaFaqs = [
  {
    question: "What is Florida SB4-D and how does it affect Tampa condominiums?",
    answer:
      "Florida Senate Bill 4-D, passed in response to the 2021 Surfside tragedy, mandates milestone structural inspections and Structural Integrity Reserve Studies (SIRS) for all condominium and cooperative buildings three stories or taller. For Tampa, this affects hundreds of condominiums built during the building boom from the 1970s through 2000s. Buildings within 3 miles of the coast must complete initial inspections at 25 years (then every 10 years), while inland Tampa buildings have until 30 years. The December 31, 2024 deadline has passed for many Tampa coastal-zone buildings, making immediate compliance action critical. Hillsborough County and the City of Tampa are actively monitoring compliance.",
  },
  {
    question: "Which Tampa neighborhoods have the most condos affected by SB4-D requirements?",
    answer:
      "Tampa's waterfront and urban core neighborhoods have the highest concentration of affected buildings. Bayshore Boulevard, Davis Islands, Harbour Island, and Channelside feature numerous high-rise condominiums built from the 1970s-1990s that are now past their 30-year milestone. Hyde Park and South Tampa have mid-rise buildings from similar eras. Downtown Tampa's recent development boom means newer buildings aren't yet affected, but many 1980s-era office-to-condo conversions need attention. The Westshore business district includes mixed-use buildings with residential components requiring compliance. FCS has assessed and performed work on condominiums throughout these Tampa neighborhoods.",
  },
  {
    question: "How much does condo remediation cost for Tampa buildings?",
    answer:
      "Tampa condo remediation costs vary significantly based on building size, age, extent of deterioration, and specific deficiencies identified. Milestone inspections typically cost $5,000-$25,000 for Phase 1, with Phase 2 adding $25,000-$100,000+ depending on building complexity. SIRS studies range from $10,000-$50,000. Remediation costs depend entirely on what inspections reveal: balcony reconstruction runs $20,000-$60,000+ per unit, concrete restoration $15-75/SF, and comprehensive building envelope rehabilitation can reach $50-150/SF of wall area. Our $4.9 million Tiara project demonstrates the scope of major condo remediation. FCS provides detailed estimates after engineering assessment of your Tampa building's specific conditions.",
  },
  {
    question: "What happens to Tampa condos that miss SB4-D deadlines?",
    answer:
      "Non-compliance with SB4-D carries serious consequences for Tampa condominiums. The City of Tampa Building Department and Hillsborough County can issue notices of violation that escalate to building closure orders for structures deemed unsafe. Board members face potential personal liability for breach of fiduciary duty. Insurance carriers are increasingly requiring compliance documentation, with non-compliant buildings facing coverage denials or dramatically higher premiums. Unit sales become difficult as buyers and lenders require SB4-D compliance proof. Property values in non-compliant Tampa buildings are already declining as the market recognizes these risks. If your building has missed deadlines, contact us immediately—remedial action can still demonstrate good faith compliance efforts.",
  },
  {
    question: "Can Tampa condo residents stay in their units during remediation work?",
    answer:
      "In the vast majority of Tampa condo remediation projects, yes. FCS specifically develops phased construction approaches designed to maintain building occupancy throughout the project. We work floor-by-floor or section-by-section, install safety barriers and weather protection, schedule impactful work during reasonable hours, and maintain all life safety systems. Residents typically need to clear their balconies during their unit's active work phase (2-4 weeks per balcony) and may experience some noise and minor inconvenience. Only in cases of severe structural deficiency where immediate safety is compromised would temporary relocation be recommended—this is relatively rare. We've completed major projects at occupied Tampa buildings while maintaining resident safety and minimizing disruption.",
  },
  {
    question: "How does FCS coordinate with Tampa condo boards and property managers?",
    answer:
      "FCS has extensive experience working with Tampa condo associations and property management companies. We understand Florida condominium governance, the role of board members, and the decision-making processes involved in major capital projects. Our team provides detailed proposals formatted for board presentations, attends association meetings when requested, offers multiple phasing and funding options to align with reserve funds and special assessment capabilities, and maintains clear communication with boards, managers, and residents throughout projects. We're familiar with major Tampa property management firms and have established working relationships that facilitate smooth project execution.",
  },
  {
    question: "What's the difference between milestone inspections and SIRS for Tampa condos?",
    answer:
      "Milestone inspections and SIRS are related but distinct SB4-D requirements. Milestone inspections are structural safety assessments performed by licensed engineers—Phase 1 is visual, Phase 2 involves testing if problems are found. These identify immediate structural concerns requiring remediation. SIRS (Structural Integrity Reserve Studies) are financial planning documents that establish 30-year funding schedules for structural component maintenance and replacement. While milestone inspections reveal current problems, SIRS ensures associations have money set aside for future repairs. Tampa condos need both: inspections identify what needs fixing now, SIRS ensures funding exists for ongoing structural maintenance. The January 2025 no-waiver provisions mean Tampa associations can no longer vote to underfund SIRS-identified structural reserves.",
  },
  {
    question: "Why are 1970s-1990s Tampa condos particularly vulnerable to structural issues?",
    answer:
      "Tampa experienced massive condominium development during the 1970s through 1990s, coinciding with several factors that affect building durability. Construction practices and concrete specifications from this era often provided inadequate cover over reinforcing steel, leaving rebar vulnerable to moisture and chloride penetration. Many buildings used post-tensioned concrete systems that, while efficient, are particularly susceptible to corrosion damage. Original waterproofing systems have long exceeded their service life—most were designed for 15-20 year performance and are now 30-50 years old. Additionally, Florida's building codes were significantly strengthened after major hurricanes, meaning older buildings don't meet current wind and water resistance standards. The combination of age, original construction quality, and climate exposure makes professional assessment critical for Tampa condos from this era.",
  },
  {
    question: "Does FCS handle milestone inspections directly, or work with engineers?",
    answer:
      "Florida law requires milestone inspections to be performed by licensed architects or engineers—this is not contractor work. However, FCS provides comprehensive support throughout the inspection and remediation process. We can recommend qualified structural engineers experienced with Tampa condo inspections, or work seamlessly with your association's chosen engineer. Once inspection reports are complete, FCS provides the remediation expertise: we review engineering reports, develop repair specifications in coordination with engineers, provide detailed cost estimates, execute the construction work, and support final engineering sign-off. This collaborative approach ensures repairs meet structural requirements while being practically implementable and accurately priced. Our relationships with Tampa-area structural engineers make the entire compliance process smoother.",
  },
  {
    question: "What funding options exist for Tampa condo associations facing major remediation costs?",
    answer:
      "Tampa condo associations facing significant remediation costs have several funding approaches. Existing reserves can be applied if adequately funded (SIRS requirements now mandate this for new contributions). Special assessments—either lump-sum or spread over multiple years—are common for major projects. Many associations use bank loans secured by future assessment income, spreading repayment over 5-15 years to reduce immediate owner burden. Phased construction allows spreading work across multiple budget cycles, addressing critical items first while planning for remaining work. Some associations combine approaches: starting immediate work with a loan while collecting special assessments. FCS helps Tampa boards understand options, provides phased proposals when appropriate, and structures payment terms to align with association cash flow. The goal is making necessary compliance work financially achievable.",
  },
];

const internalLinks = [
  { href: "/commercial/condo-remediation/", label: "Condo Remediation Services Overview" },
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "Complete SB4-D Compliance Guide" },
  { href: "/balcony-reconstruction-tampa/", label: "Balcony Reconstruction Tampa" },
  { href: "/disaster-recovery-tampa/", label: "Disaster Recovery Tampa" },
  { href: "/services/exterior-waterproofing/", label: "Exterior Waterproofing Services" },
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Remediation" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CondoRemediationTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Condo Remediation & SB4-D Compliance" />
      <ServiceSchema
        serviceName="Condo Remediation & SB4-D Compliance"
        serviceDescription="Expert condo remediation and SB4-D compliance services for Tampa condominiums including milestone inspection support, SIRS assistance, structural concrete repair, balcony reconstruction, and building envelope waterproofing. Serving Hyde Park, Davis Islands, Channelside, and Tampa Bay high-rises."
        city="Tampa"
        minPrice="100000"
      />
      <FAQSchema faqs={tampaFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green font-semibold">Serving Tampa, FL & Hillsborough County</span>
            </div>

            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/90 rounded-full mb-6 ml-2 animate-pulse">
              <AlertTriangle className="w-4 h-4 text-white" />
              <span className="text-white font-bold text-sm">SB4-D DEADLINE PASSED</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Condo Remediation & SB4-D Compliance in Tampa
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl leading-relaxed">
              Tampa's trusted contractor for condominium milestone inspections, structural repairs,
              and SB4-D compliance. <strong>The December 31, 2024 deadline has passed.</strong> If
              your building hasn't started compliance, act now.
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              From Davis Islands high-rises to Bayshore Boulevard towers, FCS helps Tampa condo
              associations navigate Florida's stringent new building safety requirements. With $4.9M+
              in completed condo remediation projects, we understand the urgency and complexity
              of this work.
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
      <section className="py-4 bg-red-600 border-y border-red-700">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center md:text-left">
            <AlertTriangle className="w-8 h-8 flex-shrink-0" />
            <div>
              <span className="font-bold text-lg block md:inline">
                Critical Deadline Alert:
              </span>
              <span className="ml-0 md:ml-2">
                Tampa condos 30+ years old within 3 miles of the coast should have completed milestone
                inspections by December 31, 2024. Buildings still non-compliant risk closure orders
                and board liability. Contact FCS immediately for remediation.
              </span>
            </div>
            <Link
              href="/contact/"
              className="flex-shrink-0 bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Get Help Now
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
                Tampa's Premier Condo Remediation & SB4-D Compliance Contractor
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Florida Construction Specialists is Tampa's experienced prime contractor for
                condominium structural remediation and SB4-D compliance projects. With over 40 years
                of construction expertise and landmark projects including the $4.9 million Tiara
                Condominium balcony reconstruction, we bring unmatched capability to Tampa's
                most complex condo restoration challenges.
              </p>

              <p className="text-gray-600 mb-6">
                Tampa's condominium landscape reflects decades of development along the bay and
                urban core. High-rises lining Bayshore Boulevard, luxury towers on Davis Islands
                and Harbour Island, the Channelside development boom, and established communities
                throughout South Tampa and Hyde Park—many of these buildings now face critical
                compliance deadlines under Florida's SB4-D legislation. Buildings constructed
                during Tampa's 1970s-1990s development surge are now 30-50 years old, past their
                milestone inspection triggers and often showing significant structural deterioration
                that requires professional remediation.
              </p>

              <p className="text-gray-600 mb-6">
                The 2021 Surfside condominium collapse revealed critical gaps in how Florida
                oversaw aging buildings. In response, the Legislature passed SB4-D, creating
                mandatory structural inspections and reserve funding requirements that affect
                hundreds of Tampa condominiums. For many Tampa buildings, the December 31, 2024
                deadline has already passed—meaning immediate action is required to demonstrate
                compliance efforts and avoid potential penalties including building closure orders.
              </p>

              <p className="text-gray-600 mb-8">
                FCS provides end-to-end support for Tampa condo associations navigating these
                requirements: from connecting boards with qualified structural engineers for
                milestone inspections, to reviewing Phase 2 reports and developing remediation
                plans, to executing the construction work that restores structural integrity.
                Our team understands both the technical requirements and the association
                governance processes that make these projects successful.
              </p>

              {/* Tampa Market Context */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Building className="w-6 h-6 text-brand-green" />
                  Tampa's Condo Compliance Landscape
                </h3>
                <p className="text-gray-600 mb-4">
                  Tampa's waterfront location means most high-rise condominiums fall within the
                  3-mile coastal zone, triggering the earlier 25-year milestone inspection
                  requirement. Key facts about Tampa's affected building stock:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">1970s-2000s Construction Boom</span>
                      <p className="text-sm text-gray-600">
                        Hundreds of condos built during Tampa's development surge now past 30 years old
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Coastal Zone Buildings</span>
                      <p className="text-sm text-gray-600">
                        Bayshore, Davis Islands, Harbour Island—most face 25-year threshold
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Hurricane Exposure</span>
                      <p className="text-sm text-gray-600">
                        Buildings have weathered multiple major storms, accelerating deterioration
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Post-Tension Construction</span>
                      <p className="text-sm text-gray-600">
                        Many Tampa high-rises use PT systems requiring specialized assessment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Gallery */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png"
                    alt="Condo exterior waterproofing Tampa"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Building Envelope</p>
                    <p className="text-xs text-gray-200">Waterproofing Systems</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
                    alt="Balcony reconstruction Tampa condo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Balcony Restoration</p>
                    <p className="text-xs text-gray-200">Structural Repair & Finishes</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/Old/custom-home-construction-2.jpg"
                    alt="Tampa condo remediation project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Project Completion</p>
                    <p className="text-xs text-gray-200">Quality Construction</p>
                  </div>
                </div>
              </div>

              {/* Who We Serve */}
              <div className="bg-brand-green-bg rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-brand-green" />
                  Who We Serve in Tampa
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Condo Association Boards</span>
                      <p className="text-sm text-gray-600">
                        Directors navigating SB4-D compliance for Tampa high-rises and mid-rises
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Property Management Companies</span>
                      <p className="text-sm text-gray-600">
                        CAMs managing milestone inspection remediation for Tampa portfolios
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">HOA Managers</span>
                      <p className="text-sm text-gray-600">
                        Coordinating structural repairs across Tampa communities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Building Owners</span>
                      <p className="text-sm text-gray-600">
                        Developers and investors with Tampa multi-family properties
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
                      Need SB4-D Compliance Help for Your Tampa Condo?
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
                <h3 className="text-xl font-bold mb-4">Tampa Condo Boards</h3>
                <p className="text-gray-200 mb-4">
                  Request a complimentary compliance assessment and remediation proposal for your
                  Tampa condominium's SB4-D requirements.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-full hover:bg-brand-green-forest transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* SB4-D Timeline Box */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  SB4-D Deadline Status
                </h3>
                <ul className="space-y-3 text-sm">
                  {complianceTimeline.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span
                        className={`mt-1 w-3 h-3 rounded-full flex-shrink-0 ${
                          item.status === "passed"
                            ? "bg-red-500"
                            : item.status === "urgent"
                            ? "bg-orange-500"
                            : "bg-yellow-500"
                        }`}
                      />
                      <div>
                        <span className="font-semibold text-gray-800 block">{item.deadline}</span>
                        <span className="text-gray-600">{item.note}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/sb-4-d-compliance-tampa-bay-condos/"
                  className="text-red-800 font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:underline"
                >
                  Read Full SB4-D Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Services */}
              <RelatedServices city="Tampa" currentService="condo-remediation" />

              {/* Nearby Locations */}
              <NearbyLocations
                currentCity="Tampa"
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
              Tampa Condo Remediation & SB4-D Compliance Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive structural remediation and compliance solutions for Tampa condominiums,
              from milestone inspection support through completed reconstruction.
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
        alt="Condo structural remediation in Tampa"
        title="Tampa's SB 4-D Compliance Experts"
        subtitle="Trusted by HOAs and property managers throughout Tampa Bay"
        overlayOpacity={0.55}
      />

      {/* Tampa-Specific Challenges Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Why Tampa Condos Face Unique SB4-D Challenges
              </h2>

              <p className="text-gray-600 mb-6">
                Tampa's position on Tampa Bay creates distinctive environmental stressors for
                condominium structures. Unlike purely coastal locations, Tampa buildings face
                the combination of bay humidity, periodic hurricane exposure, and the specific
                construction practices common during the region's development boom. Understanding
                these factors is critical for effective remediation.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Waves className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Bay Humidity & Salt Air</h4>
                    <p className="text-gray-600 text-sm">
                      Tampa Bay proximity brings persistent humidity and salt-laden air that
                      penetrates concrete and accelerates rebar corrosion. Bayshore Boulevard
                      and waterfront buildings experience the most severe exposure, but even
                      inland Tampa condos face humidity levels that degrade structural elements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gauge className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hurricane History Impact</h4>
                    <p className="text-gray-600 text-sm">
                      Tampa-area buildings have weathered numerous tropical systems. Even without
                      direct hits, repeated exposure to wind-driven rain stresses waterproofing
                      and can create damage pathways. Buildings that survived storms may show
                      progressive deterioration years later as water intrusion compounds.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">1970s-1990s Construction Era</h4>
                    <p className="text-gray-600 text-sm">
                      Many Tampa condos were built when code requirements and construction
                      practices provided less margin for Florida's conditions. Inadequate concrete
                      cover over rebar, minimal waterproofing systems, and limited corrosion
                      protection are common in buildings from this era.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Post-Tensioned Systems</h4>
                    <p className="text-gray-600 text-sm">
                      A significant portion of Tampa high-rises use post-tensioned concrete
                      construction. While efficient, these systems require specialized assessment
                      because tendon corrosion can lead to sudden failures. Many PT buildings now
                      require careful evaluation under SB4-D requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Tampa Neighborhoods We Serve
              </h3>
              <p className="text-gray-600 mb-6">
                FCS provides condo remediation and SB4-D compliance services throughout Tampa
                and Hillsborough County. Our team is familiar with the City of Tampa Building
                Department, local permit processes, and the specific building stock in each
                neighborhood.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tampaNeighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <MapPin className="w-4 h-4 text-brand-green" />
                    <span className="text-gray-700 text-sm">{neighborhood}</span>
                  </div>
                ))}
              </div>

              {/* Case Study Callout */}
              <div className="mt-8 bg-brand-green-bg rounded-xl p-6">
                <h4 className="font-bold text-brand-green-dark mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-green" />
                  Featured Project: Tiara Condominium
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  <strong>$4.9 Million</strong> comprehensive balcony reconstruction project.
                  180+ balconies restored including structural repairs, waterproofing systems,
                  and railing replacement. Project completed in phases while maintaining full
                  building occupancy—demonstrating FCS capability for Tampa's largest condo
                  remediation challenges.
                </p>
                <Link
                  href="/commercial/condo-remediation/"
                  className="text-brand-green font-semibold text-sm inline-flex items-center gap-1 hover:underline"
                >
                  Learn More About Our Approach <ArrowRight className="w-4 h-4" />
                </Link>
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
              Common Structural Issues in Tampa Condominiums
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based on our experience with Tampa-area buildings, these are the structural
              deficiencies most frequently identified during milestone inspections and
              requiring remediation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 border-l-4 shadow-sm ${
                  item.severity === "Critical"
                    ? "border-red-500"
                    : "border-orange-500"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-brand-green-dark">{item.issue}</h3>
                  <span
                    className={`px-2 py-1 rounded text-xs font-bold ${
                      item.severity === "Critical"
                        ? "bg-red-100 text-red-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {item.severity}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SB4-D Deep Dive Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Understanding SB4-D Requirements for Tampa Condos
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">
                The Post-Surfside Regulatory Landscape
              </h3>
              <p className="mb-6">
                The June 2021 collapse of Champlain Towers South in Surfside killed 98 people and
                revealed decades of deferred maintenance hidden beneath Florida's condo safety
                oversight. In response, the Florida Legislature passed Senate Bill 4-D, creating
                the most comprehensive condominium safety requirements in state history. For Tampa
                condo associations, this legislation fundamentally changes how buildings must be
                inspected, maintained, and funded.
              </p>
              <p className="mb-6">
                Tampa's building stock includes hundreds of condominiums built during the 1970s
                through 2000s—a period of rapid development that produced many of the high-rises
                and mid-rises now facing SB4-D deadlines. Buildings along Bayshore Boulevard, Davis
                Islands, Harbour Island, Channelside, and throughout South Tampa are now past their
                30-year (or in many cases 25-year) milestone triggers. The December 31, 2024
                deadline has passed for coastal-zone buildings, meaning many Tampa condos are
                technically non-compliant and need immediate action.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">
                Milestone Inspections: What Tampa Boards Need to Know
              </h3>
              <p className="mb-6">
                Milestone inspections under SB4-D must be performed by licensed architects or
                structural engineers—this is not contractor work. However, the inspection is just
                the beginning. Phase 1 is a visual assessment that identifies areas of potential
                concern. If substantial deterioration is found (and given Tampa buildings' age and
                exposure, this is common), Phase 2 triggers detailed investigation including
                destructive testing, structural analysis, and development of repair specifications.
              </p>
              <p className="mb-6">
                Phase 2 reports become the roadmap for remediation. They establish what repairs are
                needed, the urgency of each item, and approximate costs. FCS works with Tampa condo
                boards to translate these engineering documents into actionable construction plans,
                providing detailed estimates, phased approaches when appropriate, and proposals
                suitable for board decision-making. We coordinate closely with the inspecting
                engineer throughout remediation to ensure repairs meet specifications and achieve
                compliance sign-off.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">
                SIRS and the End of Reserve Waivers
              </h3>
              <p className="mb-6">
                Beyond milestone inspections, SB4-D requires Structural Integrity Reserve Studies
                (SIRS) for all affected buildings. SIRS establishes 30-year funding schedules for
                structural components: roof, waterproofing, foundation, load-bearing elements, fire
                protection, and major building systems. Unlike traditional reserve studies, SIRS
                cannot include "pooled" funding and associations cannot vote to waive or reduce
                contributions.
              </p>
              <p className="mb-6">
                This no-waiver provision, effective January 1, 2025, is transformative for Tampa
                condo associations. Many buildings have historically underfunded reserves—either by
                direct waiver votes or by using optimistic replacement timelines. SIRS forces
                realistic assessment and adequate funding. For associations facing both milestone
                inspection deficiencies and SIRS funding requirements, the financial challenge can
                be significant. FCS helps boards understand options including phased construction,
                special assessments, and financing structures that make necessary work achievable.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">
                Hillsborough County & City of Tampa Enforcement
              </h3>
              <p className="mb-6">
                Local building officials in Tampa and Hillsborough County have authority to enforce
                SB4-D requirements. This includes issuing notices of non-compliance and, in serious
                cases, building closure orders for structures deemed unsafe. While enforcement
                approaches are still developing, the trend is toward increased scrutiny. Insurance
                carriers are also increasingly requiring compliance documentation, with non-compliant
                buildings facing coverage challenges.
              </p>
              <p className="mb-6">
                For Tampa condo boards, the message is clear: compliance is not optional, and delay
                increases risk. Buildings that missed December 2024 deadlines should begin
                compliance efforts immediately—documenting inspections scheduled, engineering
                engaged, and remediation plans in development. This demonstrates good faith and
                may mitigate liability concerns while work proceeds.
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
                SB4-D Compliance Support for Tampa Condominiums
              </h2>

              <p className="text-gray-200 mb-6">
                FCS provides comprehensive SB4-D compliance support for Tampa condo associations—
                from initial assessment through completed remediation and certification. We
                understand both the technical requirements and the board governance processes
                that make these complex projects successful.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Engineer Coordination:</strong> Connections to qualified structural
                    engineers for milestone inspections, or seamless collaboration with your
                    association's existing engineering firm.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Report Translation:</strong> Conversion of Phase 2 engineering reports
                    into actionable construction plans with detailed cost estimates and timelines.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Board Presentations:</strong> Professional proposals formatted for
                    association meetings, with phased options and funding considerations explained.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Remediation Execution:</strong> Prime contractor responsibility for
                    all structural repairs, waterproofing, and construction work.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Compliance Documentation:</strong> Complete project records, engineer
                    certifications, and warranty documentation for Tampa building officials.
                  </span>
                </div>
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-forest transition-colors"
              >
                Start Compliance Discussion <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$4.9M+</div>
                <div className="text-gray-300 text-sm">Condo Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <HardHat className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">180+</div>
                <div className="text-gray-300 text-sm">Balconies Reconstructed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Calendar className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">40+</div>
                <div className="text-gray-300 text-sm">Years Florida Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Shield className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">Prime</div>
                <div className="text-gray-300 text-sm">Contractor Always</div>
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
              Our Tampa Condo Remediation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FCS manages every phase of condo remediation from initial compliance assessment
              through project completion, with special attention to Tampa association governance
              and Hillsborough County permit requirements.
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
            Why Tampa Condo Associations Choose Florida Construction Specialists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Prime Contractor Accountability
              </h3>
              <p className="text-gray-600">
                FCS always serves as prime contractor, never a subcontractor. Your Tampa
                association gets direct accountability, single-point responsibility, and
                our full bonding protection on every project. No finger-pointing, no middlemen.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Proven Tampa Bay Track Record
              </h3>
              <p className="text-gray-600">
                With $4.9 million in completed condo remediation projects including 180+
                balcony reconstructions at Tiara Condominium, we bring demonstrated capability
                to Tampa's most demanding structural restoration challenges.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Association Governance Expertise
              </h3>
              <p className="text-gray-600">
                We understand Florida condo association dynamics—board approvals, reserve
                coordination, special assessments, resident communications, and property
                management relationships. Our proposals and processes are designed for your
                governance structure.
              </p>
            </div>
          </div>

          {/* Additional Differentiators */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-brand-green" />
                In-House Engineering & Drafting
              </h4>
              <p className="text-gray-600 text-sm">
                FCS maintains in-house engineering and architectural drafting capabilities,
                allowing us to quickly develop repair details, coordinate with structural
                engineers, and adapt to field conditions discovered during Tampa remediation work.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-brand-green" />
                Flexible Funding Approaches
              </h4>
              <p className="text-gray-600 text-sm">
                We structure phased proposals and payment terms aligned with Tampa association
                cash flow, reserve funds, and special assessment schedules. Our goal is making
                necessary compliance work financially achievable for your community.
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
                Request Your Tampa Condo Compliance Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you've received a Phase 2 milestone inspection report requiring remediation,
                need help coordinating inspections, or want to proactively assess your Tampa
                building's SB4-D compliance status, FCS provides expert guidance and construction
                solutions for Hillsborough County condominiums.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Complimentary compliance assessment for qualified Tampa buildings
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Detailed proposals suitable for board presentations and decision-making
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Phased construction options to manage costs and minimize disruption
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Engineering coordination and compliance documentation
                  </span>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Speak with Our Tampa Team</h3>
                <p className="text-gray-200 mb-4">
                  For immediate assistance with your Tampa condo remediation project:
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
        items={tampaFaqs}
        title="Tampa Condo Remediation & SB4-D Compliance FAQs"
        description="Common questions about condo remediation, SB4-D compliance, milestone inspections, SIRS requirements, and structural repairs for Tampa, Florida condominiums."
      />

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving Tampa & Hillsborough County Condominiums
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Florida Construction Specialists provides condo remediation and SB4-D compliance
              services throughout Tampa, from Bayshore Boulevard high-rises to Davis Islands
              towers, Harbour Island, Channelside, and communities across Hillsborough County.
            </p>
          </div>
          <GoogleMap city="Tampa" height={400} />
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
            Tampa's Trusted Condo Remediation & SB4-D Compliance Specialists
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From milestone inspection support to comprehensive structural remediation, Florida
            Construction Specialists is Tampa's premier contractor for condominium compliance
            and restoration. The deadline has passed—contact us today to discuss your building.
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
