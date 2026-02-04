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
  Target,
  Hammer,
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
  title: "Condo Remediation Clearwater | SB4-D Compliance & SIRS",
  description:
    "Clearwater Beach condo remediation specialists. SB4-D compliance, milestone inspections, SIRS structural reserve studies for Sand Key, Island Estates, and Clearwater condominiums. Coastal zone deadline experts. Call (813) 420-7561.",
  keywords:
    "condo remediation Clearwater, SB4-D compliance Clearwater Beach, milestone inspection Sand Key, SIRS Clearwater condominiums, beachfront condo structural repair, condo milestone inspection Clearwater, structural integrity reserve study Clearwater, Island Estates condo repair, Clearwater Beach condo restoration, Belleair condo remediation",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Services", href: "/commercial/" },
  { name: "Condo Remediation & SB4-D", href: "/commercial/condo-remediation/" },
  { name: "Clearwater", href: "/condo-remediation-clearwater/" },
];

const trustBadges = [
  { icon: AlertTriangle, label: "Coastal Zone Experts" },
  { icon: ClipboardCheck, label: "SB4-D Compliance" },
  { icon: Shield, label: "Licensed CBC1262722" },
  { icon: Award, label: "40+ Years Experience" },
];

const services = [
  {
    icon: Search,
    title: "Milestone Inspection Coordination",
    description:
      "Full coordination of Phase 1 and Phase 2 milestone inspections for Clearwater Beach condominiums. We work with licensed structural engineers to ensure complete documentation for coastal zone compliance certification.",
  },
  {
    icon: FileText,
    title: "SIRS Assessment Support",
    description:
      "Structural Integrity Reserve Study support including detailed repair estimates, reserve fund planning, and 30-year capital planning specifically calibrated for Clearwater's accelerated coastal deterioration rates.",
  },
  {
    icon: Building2,
    title: "Structural Concrete Repair",
    description:
      "Comprehensive concrete restoration including spall repair, rebar treatment, crack injection, and carbon fiber reinforcement using marine-grade materials engineered for Gulf of Mexico salt exposure.",
  },
  {
    icon: Droplets,
    title: "Waterproofing Systems",
    description:
      "Multi-layer waterproofing membranes, traffic-bearing deck coatings, and drainage systems designed for Clearwater's extreme humidity, UV exposure, and salt spray infiltration.",
  },
  {
    icon: Hammer,
    title: "Balcony Reconstruction",
    description:
      "Complete balcony restoration including structural slab repair, waterproofing, railing replacement, and finishing for Sand Key and Clearwater Beach high-rise condominiums.",
  },
  {
    icon: Target,
    title: "Phased Remediation Programs",
    description:
      "Strategic multi-year remediation planning that allows Clearwater associations to address critical repairs while managing cash flow through special assessments and reserve fund coordination.",
  },
];

const clearwaterNeighborhoods = [
  "Clearwater Beach",
  "Sand Key",
  "Island Estates",
  "Belleair",
  "Belleair Beach",
  "Belleair Bluffs",
  "Downtown Clearwater",
  "Clearwater Point",
  "Harbor Oaks",
  "Safety Harbor",
  "Dunedin",
  "Indian Rocks Beach",
];

const complianceTimeline = [
  {
    milestone: "Clearwater Beach buildings 30+ years old (coastal zone)",
    deadline: "December 31, 2024",
    status: "urgent",
    note: "Most Sand Key, Island Estates, and Clearwater Beach condos built before 1994",
  },
  {
    milestone: "Clearwater buildings 25-29 years old (coastal zone)",
    deadline: "By building's 30th anniversary",
    status: "upcoming",
    note: "Buildings from 1995-1999 must complete by their 30th year",
  },
  {
    milestone: "SIRS completed for all Clearwater condominiums 3+ stories",
    deadline: "December 31, 2024",
    status: "urgent",
    note: "No more reserve waivers for structural components",
  },
  {
    milestone: "Reserve funding begins (no waiving structural reserves)",
    deadline: "January 1, 2025",
    status: "upcoming",
    note: "Associations must fund according to SIRS requirements",
  },
  {
    milestone: "Subsequent milestone inspections",
    deadline: "Every 10 years after initial",
    status: "ongoing",
    note: "Clearwater's coastal conditions may require more frequent monitoring",
  },
];

const commonIssues = [
  {
    issue: "Balcony Slab Deterioration",
    description: "Spalling concrete, corroded rebar, and structural cracking accelerated by Clearwater Beach's direct Gulf salt spray and UV exposure",
    severity: "Critical",
  },
  {
    issue: "Post-Tension Cable Corrosion",
    description: "Salt intrusion causing tendon corrosion in post-tensioned structures common in 1970s-90s Clearwater Beach high-rises",
    severity: "Critical",
  },
  {
    issue: "Parking Structure Deterioration",
    description: "Aggressive deterioration of parking decks from salt-laden vehicles and inadequate drainage in beachfront properties",
    severity: "High",
  },
  {
    issue: "Waterproofing Failures",
    description: "Failed deck coatings and membrane deterioration from Clearwater's 240+ sunny days of intense UV radiation",
    severity: "High",
  },
  {
    issue: "Rebar Corrosion & Concrete Carbonation",
    description: "High humidity (75%+ average) promoting carbonation while salt air accelerates reinforcement corrosion",
    severity: "High",
  },
  {
    issue: "Exterior Wall Systems",
    description: "Building envelope failures allowing moisture intrusion and progressive structural damage in beachfront towers",
    severity: "Medium",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Compliance Assessment",
    description:
      "Review of your Clearwater property's age, construction type, and current condition to determine SB4-D compliance requirements and timeline urgency for coastal zone buildings.",
  },
  {
    step: 2,
    title: "Engineer Coordination",
    description:
      "Coordination with licensed structural engineers for Phase 1 and Phase 2 milestone inspections, with deep understanding of Clearwater Beach's specific deterioration patterns.",
  },
  {
    step: 3,
    title: "Scope & Prioritization",
    description:
      "Development of detailed repair scopes prioritized by severity and safety impact, with phasing options that accommodate association reserve fund realities.",
  },
  {
    step: 4,
    title: "Board Presentation",
    description:
      "Professional presentations to condo boards with clear cost analysis, timeline projections, and funding options tailored for Clearwater Beach seasonal occupancy patterns.",
  },
  {
    step: 5,
    title: "Phased Remediation",
    description:
      "Strategic execution of repairs using marine-grade materials, with careful scheduling around Sand Key and Clearwater Beach's peak tourism seasons.",
  },
  {
    step: 6,
    title: "Documentation & Certification",
    description:
      "Complete documentation for engineering sign-off, City of Clearwater/Pinellas County compliance certification, and ongoing maintenance planning.",
  },
];

const clearwaterFaqs = [
  {
    question: "Why do Clearwater Beach condominiums face earlier SB4-D deadlines than inland buildings?",
    answer:
      "Under Florida SB4-D, buildings within three miles of the coastline must complete their initial milestone inspection at 25 years of age, compared to 30 years for inland buildings. Virtually all of Clearwater Beach, Sand Key, Island Estates, Belleair Beach, and much of Dunedin falls within this coastal zone. This earlier deadline recognizes the scientific reality that salt air exposure dramatically accelerates structural deterioration—Clearwater beachfront buildings experience chloride concentrations 3-5 times higher than even inland Tampa locations. Many Clearwater Beach condominiums built during the 1970s-1990s tourism boom are now well past their 25-year threshold, making immediate action critical for compliance.",
  },
  {
    question: "What makes Clearwater Beach condominiums deteriorate faster than other Tampa Bay buildings?",
    answer:
      "Clearwater Beach faces the most aggressive environmental conditions for concrete structures in the entire Tampa Bay region. The combination of direct Gulf of Mexico salt spray (not filtered by any barrier islands), intense tropical UV exposure (240+ sunny days annually accelerating waterproofing degradation), extreme humidity averaging 75%+ year-round (promoting concrete carbonation), and seasonal hurricane exposure creates ideal conditions for accelerated reinforcement corrosion. Sand Key and Clearwater Beach high-rises built in the 1970s-1990s often used concrete cover depths adequate for inland construction but insufficient for direct Gulf exposure. These buildings now require significantly more extensive remediation than comparable-age structures even a few miles inland.",
  },
  {
    question: "How much does SB4-D compliance and condo remediation cost for Clearwater Beach buildings?",
    answer:
      "Costs vary significantly based on building size, age, construction type, and deterioration severity. For Clearwater Beach condominiums, Phase 1 milestone inspections typically cost $5,000-$20,000 depending on building size. If substantial deterioration triggers Phase 2 (common for beachfront buildings), expect $20,000-$100,000+ for comprehensive testing and engineering. SIRS studies range from $8,000-$40,000. Remediation costs depend entirely on findings—concrete spalling repair runs $20-60/SF (higher than inland due to marine-grade materials required), balcony reconstruction $350-700/SF, and comprehensive building envelope rehabilitation $75-200/SF. A typical 100-unit Sand Key high-rise with moderate deterioration might face $2-5 million in total remediation costs over a multi-year phased program.",
  },
  {
    question: "What happens if our Clearwater condo association misses the SB4-D deadline?",
    answer:
      "Non-compliance with SB4-D carries severe consequences that hit Clearwater Beach properties particularly hard given high property values. The City of Clearwater building department can issue notices of non-compliance that escalate to building closure orders for structures posing safety risks. Board members face personal liability exposure for breach of fiduciary duty. Insurance carriers increasingly deny coverage or impose massive premium increases for non-compliant buildings. Perhaps most significantly in Clearwater's competitive beachfront market, units in non-compliant buildings become extremely difficult to sell—buyers can't obtain financing, and informed purchasers won't accept the risk. Given that many Clearwater Beach buildings have already passed their compliance deadlines, immediate action is essential.",
  },
  {
    question: "What is a SIRS and why can't Clearwater associations waive structural reserves anymore?",
    answer:
      "A Structural Integrity Reserve Study (SIRS) is a specialized 30-year reserve analysis focusing specifically on structural components: roof, waterproofing, foundation, load-bearing walls, floor structures, fire protection, plumbing, electrical, and any item with deferred maintenance exceeding $10,000. Unlike traditional reserve studies, SIRS cannot use pooled funding methods, and—critically—associations can no longer vote to waive or reduce reserve funding for structural components. This change directly addresses the deferred maintenance crisis that contributed to the Surfside collapse. For Clearwater associations that historically underfunded reserves, this means significant assessment increases beginning January 1, 2025. Early SIRS completion allows boards to plan for this transition rather than facing emergency special assessments.",
  },
  {
    question: "Can residents stay in their Clearwater Beach condo during major remediation work?",
    answer:
      "In most cases, yes. FCS specializes in phased remediation programs specifically designed to maintain building occupancy—essential for Clearwater Beach properties with seasonal residents and rental income considerations. Our approach includes strategic floor-by-floor or section-by-section sequencing, temporary weather barriers during work, scheduling noisy operations during reasonable hours, and maintaining all life safety systems throughout construction. For Sand Key and Clearwater Beach high-rises, we typically coordinate work schedules to minimize disruption during peak tourist season when unit rental income is highest. Only in cases of severe structural deficiency requiring immediate shoring would we recommend temporary relocation, and such situations are relatively rare when problems are addressed proactively.",
  },
  {
    question: "How does FCS coordinate with Clearwater building departments and engineers?",
    answer:
      "FCS maintains established relationships with the City of Clearwater Building Department and Pinellas County permitting authorities, streamlining the approval process for remediation projects. We work with licensed structural engineers experienced in SB4-D inspections and condo remediation throughout the process—from coordinating milestone inspections, to developing constructible repair specifications, to providing final documentation for compliance certification. Our team understands the specific permitting requirements for beachfront construction including coastal construction control line considerations. We can recommend qualified engineers for associations without existing relationships, or work seamlessly with your board's chosen engineer.",
  },
  {
    question: "What funding options exist for Clearwater condo remediation projects?",
    answer:
      "Common funding approaches for Clearwater associations include: existing reserves (if adequately funded—rare for buildings that historically waived reserves), special assessments (one-time or spread over multiple years to ease owner burden), bank loans secured by future assessments (typically 5-15 year terms, allowing immediate work while collecting assessments gradually), phased construction (spreading work across multiple budget cycles based on priority), and combinations of these approaches. Many Clearwater associations use reserve loans to begin critical repairs immediately while collecting special assessments over time. For high-value Sand Key and Clearwater Beach properties, some owners prefer to pay lump-sum assessments rather than finance. FCS helps boards evaluate all options and develop strategies balancing compliance urgency with owner financial capacity.",
  },
  {
    question: "How long does the complete SB4-D compliance and remediation process take?",
    answer:
      "Timeline varies significantly based on building condition and scope. Phase 1 milestone inspection typically completes in 3-4 weeks. If Phase 2 is triggered (common for Clearwater beachfront buildings), add 8-16 weeks for comprehensive testing and engineering analysis. SIRS studies require 6-10 weeks. Once engineering is complete and funding secured, remediation construction timelines depend on scope: individual balcony repairs may take 2-3 weeks per unit, while comprehensive building remediation for a large Sand Key tower might span 18-30 months across multiple phases. For buildings already past their compliance deadline, FCS works with engineers to establish interim safety documentation while full remediation is planned and executed.",
  },
  {
    question: "Why are post-tensioned concrete buildings on Clearwater Beach particularly at risk?",
    answer:
      "Many Clearwater Beach high-rises built from the 1970s through 1990s used post-tensioned concrete construction, where high-strength steel cables are tensioned after concrete placement. While this system performs excellently when properly protected, it's particularly vulnerable to salt intrusion. When chlorides reach post-tension tendons, corrosion can occur inside the concrete where it's invisible until significant damage has developed. Tendon failures can be sudden and dramatic, releasing stored tension energy. Clearwater's direct Gulf exposure means salt penetration occurs faster than engineers anticipated when these buildings were designed. FCS and our engineering partners have specific expertise in evaluating and remediating post-tensioned structures, using specialized testing methods to assess tendon condition before problems become critical.",
  },
];

const internalLinks = [
  { href: "/commercial/condo-remediation/", label: "SB4-D Compliance Services (Pillar Page)" },
  { href: "/balcony-reconstruction-clearwater/", label: "Clearwater Balcony Reconstruction" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/condo-remediation-st-petersburg/", label: "St. Petersburg Condo Remediation" },
  { href: "/condo-remediation-tampa/", label: "Tampa Condo Remediation" },
  { href: "/contact/", label: "Schedule Compliance Assessment" },
];

export default function CondoRemediationClearwaterPage() {
  return (
    <>
      <LocalBusinessSchema city="Clearwater" service="Condo Remediation & SB4-D Compliance" />
      <ServiceSchema
        serviceName="Condo Remediation & SB4-D Compliance"
        serviceDescription="SB4-D compliance and structural remediation specialists for Clearwater Beach, Sand Key, and Island Estates condominiums. Milestone inspection coordination, SIRS support, and comprehensive structural restoration for coastal zone buildings. Projects from $500,000 to $10 million+."
        city="Clearwater"
        minPrice="500000"
      />
      <FAQSchema faqs={clearwaterFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Urgent Alert Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full mb-6 animate-pulse">
              <AlertTriangle className="w-4 h-4 text-white" />
              <span className="text-white font-bold">COASTAL ZONE: 25-Year Deadline — Many Buildings Already Past Due</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Condo Remediation & SB4-D Compliance in Clearwater
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl leading-relaxed">
              <strong>Clearwater Beach is in the coastal zone.</strong> Your building faces the stricter 25-year 
              milestone inspection requirement—and if it was built before 1999, the deadline may have already passed.
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              Florida Construction Specialists provides comprehensive SB4-D compliance and structural remediation 
              for Sand Key, Island Estates, Clearwater Beach, and Belleair condominiums. With $7.4M+ in completed 
              condo remediation projects, we understand the urgency and complexity of bringing coastal buildings 
              into compliance.
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

      {/* Urgent Alert Banner */}
      <section className="py-4 bg-red-600">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center md:text-left">
            <AlertTriangle className="w-8 h-8 flex-shrink-0" />
            <div>
              <span className="font-bold text-lg block md:inline">
                December 31, 2024 Deadline: 
              </span>
              <span className="ml-0 md:ml-2">
                Clearwater Beach condos 30+ years old must complete milestone inspections NOW. Buildings from the 1970s-1990s tourism boom are past due.
              </span>
            </div>
            <Link href="/contact/" className="flex-shrink-0 bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
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
                Clearwater's Coastal Zone Challenge: Why Your Building Can't Wait
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Florida Construction Specialists</strong> is the Tampa Bay region's leading 
                contractor for SB4-D compliance and structural remediation of coastal condominiums. 
                For Clearwater Beach, Sand Key, and Island Estates properties, the compliance situation 
                is particularly urgent: virtually every building on the barrier islands falls within 
                the three-mile coastal zone, triggering the stricter 25-year inspection requirement.
              </p>

              <p className="text-gray-600 mb-6">
                The mathematics are stark. A building constructed in 1999 reached its 25-year milestone 
                in 2024. A building from 1994 should have been inspected by age 30—which passed in 2024. 
                The iconic Clearwater Beach high-rises that defined the 1970s and 1980s tourism boom? 
                They're 40-50+ years old, potentially decades past their first required inspection had 
                SB4-D existed earlier. For these buildings, the question isn't whether deterioration 
                exists—it's how severe it has become and what remediation is required.
              </p>

              <p className="text-gray-600 mb-6">
                Clearwater's position directly on the Gulf of Mexico—without the protection of barrier 
                islands that shelter some of Florida's Atlantic coast—means these buildings face the 
                most aggressive salt air exposure in the entire Tampa Bay region. Salt concentrations 
                on Clearwater Beach are measured at 3-5 times higher than even inland Tampa locations 
                just 20 miles away. This directly translates to accelerated reinforcement corrosion, 
                faster concrete carbonation, and deterioration rates that exceed what original designers 
                anticipated.
              </p>

              <p className="text-gray-600 mb-8">
                FCS has completed over $7.4 million in condo remediation projects, including the landmark 
                $4.9 million Tiara Condominium Association reconstruction—one of the largest residential 
                structural restoration projects in Tampa Bay history. Our team understands both the 
                technical requirements of coastal construction and the governance realities of condo 
                association decision-making. We work with boards to develop phased approaches that 
                balance compliance urgency with financial practicality.
              </p>

              {/* Why Clearwater is Different Section */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Why Clearwater Beach Buildings Face Greater Risk
                </h3>
                <div className="space-y-4 text-amber-900">
                  <div className="flex items-start gap-3">
                    <Waves className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Direct Gulf Exposure:</strong> Unlike protected bays or inland locations, 
                      Clearwater Beach faces unobstructed Gulf of Mexico salt spray. Buildings on Sand Key 
                      and Island Estates receive constant salt bombardment from prevailing westerly winds.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sun className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Extreme UV Exposure:</strong> Clearwater averages 240+ sunny days annually—among 
                      the highest in Florida. This intense UV radiation degrades waterproofing membranes 
                      and sealants faster than standard products can withstand.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Tourism Boom Construction:</strong> Many Clearwater Beach high-rises were built 
                      during the 1970s-1990s tourism boom using construction standards adequate for the era 
                      but insufficient for the now-understood realities of coastal exposure.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gauge className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Year-Round Humidity:</strong> Average humidity of 75%+ accelerates concrete 
                      carbonation continuously, reducing the alkaline protection that shields reinforcing 
                      steel from corrosion.
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Gallery */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
                    alt="Condo balcony restoration"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Balcony Restoration</p>
                    <p className="text-xs text-gray-200">Beachfront Condominium</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/FCS-Exterior-Waterproofing/fcs-exterior-waterproofing-display.webp"
                    alt="Concrete restoration"
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
                    src="/images/custom-home-construction-2/custom-home-construction-2-display.webp"
                    alt="Completed condo project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Completed Project</p>
                    <p className="text-xs text-gray-200">Full Remediation</p>
                  </div>
                </div>
              </div>

              {/* Target Audience Section */}
              <div className="bg-brand-green-bg rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-brand-green" />
                  Who We Serve in Clearwater
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Condo Association Boards</span>
                      <p className="text-sm text-gray-600">
                        Navigating SB4-D compliance for Sand Key and Clearwater Beach towers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Property Managers</span>
                      <p className="text-sm text-gray-600">
                        Managing milestone inspection responses for beachfront properties
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Structural Engineers</span>
                      <p className="text-sm text-gray-600">
                        Seeking qualified contractors to execute Phase 2 remediation specifications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Association Attorneys</span>
                      <p className="text-sm text-gray-600">
                        Advising boards on compliance requirements and contractor selection
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
                      Need a Compliance Assessment for Your Clearwater Building?
                    </h4>
                    <p className="text-gray-600">
                      Free consultation for qualified projects—don't wait until deadlines force emergency action.
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
                <h3 className="text-xl font-bold mb-4">HOA Boards & Property Managers</h3>
                <p className="text-gray-200 mb-4">
                  Request a complimentary SB4-D compliance assessment and remediation proposal for your 
                  Clearwater Beach, Sand Key, or Island Estates condominium.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-full hover:bg-brand-green-forest transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* SB4-D Coastal Zone Box */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Coastal Zone Facts
                </h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Zone:</span> Within 3 miles of coast
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Clearwater:</span> 100% coastal zone
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">First inspection:</span> 25 years (not 30)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">1994 buildings:</span> Already past deadline
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">SIRS deadline:</span> Dec 31, 2024
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Penalties:</span> Closure orders possible
                  </li>
                </ul>
                <Link
                  href="/commercial/condo-remediation/"
                  className="text-red-800 font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:underline"
                >
                  Read Full SB4-D Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Services */}
              <RelatedServices city="Clearwater" currentService="condo-remediation" />

              {/* Nearby Locations */}
              <NearbyLocations
                currentCity="Clearwater"
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
              Comprehensive SB4-D Compliance Services for Clearwater
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial milestone inspections through completed remediation, FCS provides end-to-end 
              support for Clearwater Beach condominiums navigating Florida's condo safety requirements.
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

      {/* Compliance Timeline Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
              SB4-D Compliance Deadlines for Clearwater Properties
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              All Clearwater Beach, Sand Key, and Island Estates properties are in the coastal zone. 
              These are your compliance requirements.
            </p>

            <div className="space-y-4">
              {complianceTimeline.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-xl p-6 ${
                    item.status === 'urgent' ? 'border-l-4 border-red-500' : 'border-l-4 border-amber-500'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      {item.status === 'urgent' ? (
                        <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <Clock className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="font-medium text-gray-800 block">{item.milestone}</span>
                        <span className="text-sm text-gray-600">{item.note}</span>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap ${
                      item.status === 'urgent' 
                        ? 'bg-red-600 text-white' 
                        : item.status === 'upcoming'
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}>
                      {item.deadline}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-red-800 mb-2">Time Has Run Out for Many Clearwater Buildings</h4>
                  <p className="text-red-700">
                    A building constructed in 1984 should have completed its first inspection by 2009 under current 
                    coastal zone rules—if SB4-D had existed then. Today, buildings built before 1994 are past the 
                    30-year deadline even under the 2024 compliance schedule. If your building hasn't started 
                    the compliance process, you may already be facing enforcement action. Contact FCS immediately 
                    for an emergency assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
              Common Structural Issues in Clearwater Beach Condominiums
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Based on our experience with Tampa Bay coastal condominiums, these are the issues most 
              frequently identified during milestone inspections of Clearwater Beach buildings.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {commonIssues.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 border-l-4 ${
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

            <div className="bg-brand-green-bg rounded-xl p-6">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                The Salt Air Factor: Why Clearwater Deteriorates Faster
              </h3>
              <p className="text-gray-700 mb-4">
                Concrete doesn't just wear out from age—it deteriorates through specific chemical processes 
                that salt air accelerates dramatically. Chloride ions from sea salt penetrate concrete 
                and reach the reinforcing steel, breaking down the protective alkaline layer that prevents 
                rust. Once corrosion begins, rust expands to 6-10 times the original steel volume, cracking 
                the concrete from within (spalling). This process that might take 50 years inland can 
                occur in 20-25 years on Clearwater Beach.
              </p>
              <p className="text-gray-700">
                That's why Florida's SB4-D law requires coastal zone buildings to begin inspections at 
                25 years rather than 30—and why Clearwater associations must budget for more frequent 
                and more extensive remediation than their inland counterparts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clearwater-Specific Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Understanding Clearwater's Unique Condo Landscape
              </h2>

              <p className="text-gray-600 mb-6">
                Clearwater Beach's condominium market developed differently than other Tampa Bay communities. 
                The iconic high-rise towers along Gulfview Boulevard and South Clearwater Beach represent a 
                distinct era of Florida development—the 1970s through 1990s tourism boom that transformed 
                the barrier islands from quiet beach communities into resort destinations. Understanding 
                this history helps explain why so many buildings now face simultaneous compliance challenges.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Tourism Boom Construction (1970s-1990s)</h4>
                    <p className="text-gray-600 text-sm">
                      The majority of Clearwater Beach's iconic high-rises were built during this era, 
                      using construction standards that were appropriate for inland buildings but 
                      often inadequate for the extreme coastal exposure they actually face. Many used 
                      minimal concrete cover over reinforcement—adequate by code but insufficient 
                      for direct Gulf salt exposure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Scale className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Deferred Maintenance Legacy</h4>
                    <p className="text-gray-600 text-sm">
                      For decades, Florida law allowed condo associations to vote to waive reserve 
                      funding. Many Clearwater Beach associations did exactly that, keeping assessments 
                      low while deferring maintenance. SB4-D ends this practice—but the accumulated 
                      backlog of deferred structural maintenance now must be addressed under firm deadlines.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">High Property Values, High Stakes</h4>
                    <p className="text-gray-600 text-sm">
                      Clearwater Beach units command premium prices—but non-compliant buildings face 
                      dramatic value declines as buyers become aware of SB4-D requirements. A beachfront 
                      unit that's unsellable due to compliance issues isn't worth its assessed value. 
                      Proactive remediation protects not just safety but significant financial investment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Seasonal Occupancy Considerations</h4>
                    <p className="text-gray-600 text-sm">
                      Many Clearwater Beach condos have significant seasonal populations and rental 
                      programs. FCS understands these dynamics and develops remediation schedules 
                      that minimize disruption during peak season while completing critical work 
                      during lower-occupancy periods.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Clearwater Areas We Serve
              </h3>
              <p className="text-gray-600 mb-6">
                FCS provides condo remediation services throughout Clearwater and surrounding 
                Pinellas County beach communities. Our team is experienced with local building 
                departments and familiar with the specific challenges of each area's building stock.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {clearwaterNeighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <MapPin className="w-4 h-4 text-brand-green" />
                    <span className="text-gray-700 text-sm">{neighborhood}</span>
                  </div>
                ))}
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3">All Coastal Zone</h4>
                <p className="text-gray-200 text-sm mb-4">
                  Every community listed above falls within the 3-mile coastal zone, meaning the 
                  25-year inspection requirement applies to all buildings. There are no "inland" 
                  Clearwater Beach condos—if your building is 3+ stories and 25+ years old, 
                  SB4-D compliance is required now.
                </p>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 text-brand-green font-semibold hover:underline"
                >
                  Check Your Building's Status <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
                SB4-D Compliance: What Clearwater Boards Must Understand
              </h2>

              <p className="text-gray-200 mb-6">
                Florida Senate Bill 4-D, enacted in May 2022 following the Surfside tragedy, created 
                the most comprehensive condo safety requirements in state history. For Clearwater Beach 
                associations, the law brings urgent obligations and eliminates long-standing practices 
                that allowed maintenance deferral.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Milestone Inspections:</strong> Phase 1 visual assessment by licensed 
                    engineer. If substantial deterioration found, Phase 2 testing and detailed 
                    remediation planning required.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>SIRS Requirements:</strong> 30-year structural reserve studies with 
                    specific funding requirements—no more reserve waivers for structural components.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Coastal Zone Timeline:</strong> Buildings within 3 miles of coast 
                    (all Clearwater Beach) must inspect at 25 years, not 30. Most 1970s-90s 
                    buildings already past deadline.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Enforcement Reality:</strong> Local building officials can issue 
                    closure orders. Board members face personal liability. Insurance carriers 
                    increasingly require compliance proof.
                  </span>
                </div>
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-forest transition-colors"
              >
                Discuss Your Compliance Status <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$7.4M+</div>
                <div className="text-gray-300 text-sm">Condo Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Wrench className="w-10 h-10 text-brand-green mx-auto mb-3" />
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
                <div className="text-3xl font-bold text-white mb-1">10 Yr</div>
                <div className="text-gray-300 text-sm">Workmanship Warranty</div>
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
              Our SB4-D Compliance Process for Clearwater Condos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FCS guides Clearwater associations from initial assessment through completed remediation 
              and compliance certification—with special attention to beachfront logistics and 
              association governance realities.
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
            Why Clearwater Associations Choose Florida Construction Specialists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Proven Condo Experience
              </h3>
              <p className="text-gray-600">
                FCS completed the $4.9M Tiara Condominium reconstruction—one of Tampa Bay's largest 
                residential structural restoration projects. We understand the unique requirements of 
                working in occupied buildings with complex governance structures and have the track 
                record to prove our capabilities.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Palmtree className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Coastal Construction Expertise
              </h3>
              <p className="text-gray-600">
                We specialize in beachfront construction challenges specific to Clearwater's Gulf Coast 
                environment. Our specifications call for marine-grade materials with enhanced corrosion 
                protection, UV-stable coatings, and waterproofing systems engineered for extreme salt 
                and humidity exposure.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Association-Focused Approach
              </h3>
              <p className="text-gray-600">
                We understand condo board dynamics—competing priorities, budget constraints, seasonal 
                populations, and the need for clear communication with unit owners. Our proposals are 
                designed for board presentations, and our phased approaches accommodate reserve fund 
                and special assessment realities.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-brand-green-bg rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
                  Featured Project: Tiara Condominium Association
                </h3>
                <p className="text-gray-700 mb-4">
                  FCS completed the $4.9 million structural remediation and balcony reconstruction 
                  project at Tiara Condominium in St. Petersburg—involving over 180 balconies, 
                  comprehensive concrete restoration, and new waterproofing systems. The project 
                  was completed in phases to maintain building occupancy throughout construction.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    180+ balconies fully reconstructed
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Structural concrete repairs throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Traffic-bearing waterproofing systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green" />
                    Phased to maintain full occupancy
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-green mb-2">$4.9M</div>
                <div className="text-xl text-gray-600">Project Value</div>
              </div>
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
                Request Your Clearwater SB4-D Compliance Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're responding to a milestone inspection report, planning proactive 
                maintenance, or facing urgent compliance deadlines for your Clearwater Beach, 
                Sand Key, or Island Estates condominium, FCS provides expert guidance and 
                remediation services engineered for Gulf Coast conditions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Free compliance assessment for qualified projects ($500K+)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Detailed proposals formatted for board presentations
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
                    Marine-grade materials for Clearwater's coastal exposure
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Engineering coordination for compliance certification
                  </span>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Urgent: Deadline Past for Many Buildings</h3>
                <p className="text-gray-200 mb-4">
                  If your Clearwater Beach building was constructed before 1994, you may already 
                  be past the December 31, 2024 compliance deadline. Contact us immediately for 
                  an emergency assessment.
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
        items={clearwaterFaqs}
        title="Clearwater Condo Remediation & SB4-D Compliance FAQs"
        description="Common questions about SB4-D compliance, milestone inspections, SIRS requirements, and condo remediation for Clearwater Beach, Sand Key, and Island Estates condominiums."
      />

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving Clearwater Beach and All Pinellas County Coastal Communities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Florida Construction Specialists provides SB4-D compliance and condo remediation services 
              throughout Clearwater Beach, Sand Key, Island Estates, Belleair, and surrounding coastal 
              communities—all within the 3-mile coastal zone requiring earlier compliance deadlines.
            </p>
          </div>
          <GoogleMap city="Clearwater" height={400} />
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
            Clearwater's SB4-D Compliance & Condo Remediation Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From milestone inspection coordination to comprehensive structural remediation, Florida 
            Construction Specialists is Clearwater Beach's trusted contractor for SB4-D compliance. 
            With $7.4M+ in completed condo projects and deep expertise in coastal construction, 
            we help associations navigate compliance while protecting property values. 
            <strong className="text-white"> The deadline has passed for many buildings—contact us today.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Compliance Assessment
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
