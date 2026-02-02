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
  Wind,
  FileCheck,
  Home,
  Briefcase,
  Umbrella,
  Hotel,
  Search,
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
  title: "Insurance Restoration Clearwater | 43 Years Claims Experience | FCS",
  description:
    "Clearwater's most experienced insurance restoration contractor. 43 years claims expertise—adjuster AND contractor. Hurricane damage Clearwater Beach, flood restoration, commercial property restoration Pinellas. NFIP specialists. (813) 420-7561.",
  keywords:
    "insurance restoration Clearwater, hurricane damage Clearwater Beach, flood damage restoration Clearwater, commercial property restoration Pinellas, storm damage Clearwater, NFIP claims Clearwater, insurance claim contractor Clearwater, large loss restoration Clearwater Beach, beachfront property restoration, Sand Key hurricane damage",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Disaster Recovery", href: "/disaster-recovery/" },
  { name: "Insurance Restoration Clearwater", href: "/insurance-restoration-clearwater/" },
];

const trustBadges = [
  { icon: Briefcase, label: "43 Years Insurance Experience" },
  { icon: FileCheck, label: "Former Allstate Adjuster" },
  { icon: Shield, label: "Licensed CGC1522434" },
  { icon: Award, label: "$75M+ Claims Handled" },
];

const insuranceStats = [
  { stat: "43", label: "Years Insurance Industry Experience" },
  { stat: "7", label: "Years as Insurance Adjuster" },
  { stat: "28", label: "Years Restoration Contractor" },
  { stat: "$75M+", label: "In Claims Handled" },
];

const services = [
  {
    icon: Wind,
    title: "Hurricane Damage Restoration",
    description:
      "Complete hurricane damage restoration for Clearwater Beach beachfront properties, Sand Key high-rises, and Gulf Coast commercial buildings. Wind damage, roof systems, water intrusion, and structural repairs with expert insurance claim documentation.",
  },
  {
    icon: Droplets,
    title: "Flood Damage Recovery",
    description:
      "NFIP and private flood insurance claim expertise for Clearwater properties. We understand the critical distinction between direct flood damage and adjacent damage—knowledge that maximizes your covered recovery.",
  },
  {
    icon: Building2,
    title: "Commercial Property Restoration",
    description:
      "Large loss commercial restoration for Clearwater hotels, resorts, retail centers, and tourism properties. Business interruption coordination, tenant considerations, and multi-policy claim management.",
  },
  {
    icon: FileText,
    title: "Insurance Claim Management",
    description:
      "Complete claim documentation including Xactimate estimates, adjuster meeting coordination, scope negotiations, and supplemental claims. 43 years of experience from both sides of the claims process.",
  },
  {
    icon: Search,
    title: "Hidden Damage Assessment",
    description:
      "Systematic inspection protocols developed through decades of claims experience. We find the damage that surface inspections miss—critical for complete claim documentation on Clearwater's salt-exposed properties.",
  },
  {
    icon: Scale,
    title: "Claim Dispute Resolution",
    description:
      "When claims are underpaid or disputed, we provide independent certified estimates and documentation. Experience with appraisal, arbitration, and supplement negotiation processes.",
  },
];

const clearwaterNeighborhoods = [
  "Clearwater Beach",
  "Sand Key",
  "Island Estates",
  "Belleair",
  "Belleair Beach",
  "Downtown Clearwater",
  "Clearwater Point",
  "Harbor Oaks",
  "Dunedin",
  "Safety Harbor",
  "Palm Harbor",
  "Countryside",
];

const processSteps = [
  {
    step: 1,
    title: "Emergency Response",
    description:
      "Rapid mobilization for Clearwater large loss situations. Initial site assessment, stabilization recommendations, and emergency documentation to protect your claim from day one.",
  },
  {
    step: 2,
    title: "Comprehensive Documentation",
    description:
      "Detailed damage assessment using protocols developed through 43 years of claims experience. We document damage that surface inspections miss, critical for Clearwater's salt-damaged properties.",
  },
  {
    step: 3,
    title: "Certified Estimates",
    description:
      "Professional Xactimate estimates that meet insurance carrier requirements. Our estimates reflect both visible and hidden damage discovered during assessment.",
  },
  {
    step: 4,
    title: "Adjuster Coordination",
    description:
      "Professional interaction with insurance adjusters and carriers. We speak the industry's language because we've lived it—7 years as an Allstate adjuster provides invaluable perspective.",
  },
  {
    step: 5,
    title: "Restoration Execution",
    description:
      "Complete property restoration by our experienced crews. Quality construction that meets Florida Building Code requirements and insurance carrier standards.",
  },
  {
    step: 6,
    title: "Supplemental Claims",
    description:
      "As hidden damage is discovered during reconstruction, we prepare and negotiate supplemental claims. This is extremely common in Clearwater's salt-exposed coastal properties.",
  },
];

const clearwaterFaqs = [
  {
    question: "What makes FCS different from other Clearwater restoration contractors?",
    answer:
      "FCS brings 43 years of insurance industry experience—7 years as an Allstate field adjuster and 28 years operating a statewide insurance restoration firm. This dual perspective from both sides of the claims process is extraordinarily rare. We understand exactly how adjusters evaluate claims, what documentation carriers require, and how to present scope of work that gets approved. For Clearwater's complex beachfront claims involving wind, flood, and salt damage, this expertise translates to faster processing, fewer disputes, and more complete settlements.",
  },
  {
    question: "How does storm surge damage differ from flood damage for insurance claims?",
    answer:
      "Storm surge is ocean water pushed inland by hurricane winds, and it creates unique claims challenges for Clearwater Beach properties. Most critically, storm surge damage requires flood insurance coverage—your standard property policy won't cover it. For Clearwater beachfront properties, understanding storm surge exposure is essential: properties on Sand Key, Clearwater Beach, and Island Estates face significant surge risk from Gulf hurricanes. FCS helps property owners document storm surge damage correctly and navigate the complex overlap between windstorm and flood coverage.",
  },
  {
    question: "What is the difference between NFIP flood coverage and private flood insurance?",
    answer:
      "This distinction is critical for Clearwater property owners. NFIP (National Flood Insurance Program) coverage has strict limitations: it only covers direct physical damage from flood water contact, with maximums of $250,000 residential/$500,000 commercial. Damage above the water line from moisture migration or mold is NOT covered. Private flood policies vary but may cover additional perils, higher limits, and some adjacent damage. FCS understands both types of coverage intimately and ensures documentation meets the specific requirements of your policy type—essential for maximizing your recovery.",
  },
  {
    question: "What is 'adjacent damage' and why does NFIP exclude it?",
    answer:
      "Adjacent damage refers to damage caused by a flood event but located above the actual water line—such as moisture that wicks up through drywall, mold growth above flood levels, or humidity damage to upper floors. NFIP specifically excludes this damage, covering only areas directly contacted by flood water. This creates significant coverage gaps: if flood water reaches 3 feet, NFIP covers damage to that level, but moisture damage at 5 feet is your responsibility. This distinction can mean tens of thousands in uninsured damage. FCS documents flood claims meticulously to establish exact water lines and maximize covered damage.",
  },
  {
    question: "How quickly can FCS respond to hurricane damage in Clearwater?",
    answer:
      "For large loss situations, FCS mobilizes within 24-48 hours for Clearwater properties. We've responded to every major hurricane affecting Tampa Bay and have experience deploying to catastrophe zones including Hurricane Harvey in Texas and Hurricane Irma throughout Florida. Our emergency response includes immediate site assessment, stabilization recommendations, and preliminary scope development. For Clearwater beachfront properties facing wind-driven rain intrusion, rapid response helps prevent secondary damage that could complicate claims.",
  },
  {
    question: "Why do Clearwater Beach insurance claims face extra complexity?",
    answer:
      "Clearwater's Gulf Coast location creates multiple overlapping damage sources that must be carefully documented: wind damage from hurricanes, flood/storm surge requiring separate coverage, salt spray corrosion accelerating all deterioration, and intense UV degradation of materials. Each damage type may involve different coverage, different adjusters, and different claim processes. A single storm can trigger windstorm claims, flood claims, and potentially business interruption claims—each requiring specific documentation. FCS's 43 years of experience navigating these multi-coverage situations is invaluable for Clearwater property owners.",
  },
  {
    question: "Does FCS handle tourism and hospitality property restoration in Clearwater?",
    answer:
      "Yes, FCS has extensive experience with Clearwater's tourism industry properties including hotels, resorts, restaurants, and retail centers on Clearwater Beach and throughout Pinellas County. Tourism property claims involve unique considerations: business interruption coverage, seasonal revenue impacts, guest relocation, brand standards compliance, and rapid restoration timelines to minimize lost revenue. Our commercial restoration experience and insurance expertise help hospitality property owners navigate these complex multi-layered claims.",
  },
  {
    question: "What documentation does FCS provide for Clearwater insurance claims?",
    answer:
      "FCS provides comprehensive claim documentation including: detailed photographic evidence of all damage, moisture mapping and testing results, certified Xactimate estimates using industry-standard pricing, scope of work documentation meeting carrier requirements, timeline and phasing plans, supplemental claim packages as hidden damage is discovered, and final completion documentation. Our documentation is prepared by professionals who understand exactly what insurance carriers need—because we've been on their side of the process.",
  },
  {
    question: "How does FCS find hidden damage that initial inspections miss?",
    answer:
      "Our 43 years of claims experience has taught us exactly where hidden damage occurs. We use moisture meters, thermal imaging, and systematic inspection protocols to find damage beneath surfaces. For Clearwater properties, salt infiltration creates corrosion damage that isn't visible until materials are removed. Wind-driven rain penetrates building envelopes through small openings. Structural movement from wind pressure affects door and window operation. Finding this damage during initial documentation—rather than after the claim closes—is essential for proper recovery.",
  },
  {
    question: "What should Clearwater property owners do immediately after hurricane damage?",
    answer:
      "First, ensure safety and document everything with photos and video before any cleanup—establish the damage extent while evidence is fresh. Contact your insurance company to report the claim. Take reasonable steps to prevent further damage (emergency tarping, board-up) but don't begin permanent repairs until damage is documented by your carrier. Keep all receipts for emergency expenses. For significant losses on Clearwater Beach or Sand Key properties, contact FCS early—our initial assessment can identify damage that might otherwise be missed and ensure proper documentation from the start.",
  },
];

const internalLinks = [
  { href: "/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/commercial-restoration-tampa/", label: "Commercial Restoration Tampa" },
  { href: "/insurance-claim-contractor-tampa/", label: "Insurance Claim Contractor Tampa" },
  { href: "/hurricane-damage-restoration-tampa-bay/", label: "Hurricane Damage Restoration" },
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function InsuranceRestorationClearwaterPage() {
  return (
    <>
      <LocalBusinessSchema city="Clearwater" service="Insurance Restoration" />
      <ServiceSchema
        serviceName="Insurance Restoration"
        serviceDescription="Clearwater's most experienced insurance restoration contractor with 43 years claims expertise. Hurricane damage restoration, flood recovery, and commercial property restoration for Clearwater Beach, Sand Key, and Pinellas County. NFIP and private flood claim specialists. Projects from $250,000 to $25 million+."
        city="Clearwater"
        minPrice="250000"
      />
      <FAQSchema faqs={clearwaterFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Hurricane damage restoration in Clearwater by Florida Construction Specialists"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Clearwater & Pinellas County</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Insurance Restoration in Clearwater:<br />
              <span className="text-brand-gold">The Insurance Expert's Contractor</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl leading-relaxed">
              Clearwater Beach's beachfront properties face Florida's most complex insurance claims. 
              Hurricane wind damage, storm surge, NFIP flood coverage, salt corrosion—each requiring 
              specialized expertise to navigate successfully.
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              FCS brings what no other Clearwater contractor can: 43 years of insurance industry 
              experience including 7 years as an Allstate adjuster. We've processed claims from 
              both sides of the desk, handling $75M+ in losses. When your Gulf Coast property 
              suffers disaster damage, you need the contractor who truly understands coastal 
              insurance claims.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                >
                  <badge.icon className="w-5 h-5 text-brand-gold" />
                  <span className="text-white font-medium">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Damage Assessment
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Emergency: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Experience Stats */}
      <section className="py-8 bg-brand-green-dark">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {insuranceStats.map((item) => (
              <div key={item.label}>
                <div className="text-4xl md:text-5xl font-bold text-brand-gold mb-2">{item.stat}</div>
                <div className="text-white/90 text-sm md:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coastal Claims Alert Banner */}
      <section className="py-4 bg-amber-50 border-y border-amber-200">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 text-amber-800">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="font-semibold text-center">
              <strong>Clearwater Beach Property Owners:</strong> Storm surge and flood damage require separate 
              coverage from wind damage. NFIP has strict limitations most property owners don't discover 
              until claim time. FCS can help you understand your coverage before disaster strikes.
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
                Clearwater's Most Experienced Insurance Restoration Contractor
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Florida Construction Specialists occupies a unique position among Clearwater restoration 
                contractors. Our founder's career began in 1982 as a field adjuster for Allstate Insurance, 
                spending seven years evaluating claims, determining coverage, and understanding exactly how 
                carriers assess damage and process large losses. That insider knowledge became the foundation 
                for a 28-year career operating a statewide insurance restoration firm that became trusted 
                by major carriers throughout Florida.
              </p>

              <p className="text-gray-600 mb-6">
                This dual perspective—having worked both as the adjuster evaluating claims AND as the 
                contractor rebuilding properties—is extraordinarily rare in the construction industry. 
                Most contractors learn insurance processes through trial and error. We learned them from 
                the inside, understanding not just what adjusters look for, but <em>why</em> they look 
                for it, how coverage decisions are made, and what documentation actually supports claim 
                approval.
              </p>

              <p className="text-gray-600 mb-6">
                For Clearwater Beach property owners, this expertise is invaluable. Gulf Coast properties 
                face the most complex insurance scenarios in Florida: overlapping wind and flood damage, 
                storm surge coverage questions, NFIP limitations, salt corrosion accelerating all 
                deterioration, and multi-policy claims for commercial properties. When you hire FCS, 
                you're not just hiring a contractor—you're hiring 43 years of claims experience that 
                helps ensure your Clearwater property is properly documented, your claim is fairly 
                evaluated, and your restoration meets both insurance requirements and building codes.
              </p>

              <p className="text-gray-600 mb-8">
                Today, FCS serves as the prime general contractor for large loss disaster recovery 
                throughout Clearwater, Sand Key, Island Estates, and Pinellas County. We specialize 
                in commercial properties, beachfront condominiums, hotels and resorts, and high-value 
                residential reconstruction—the complex projects where insurance expertise matters most. 
                Our portfolio includes hurricane damage restoration totaling tens of millions of dollars, 
                major flood recovery, and complete property rebuilds for Clearwater's tourism industry.
              </p>

              {/* Project Gallery */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/hurricane-ian/hurricane-ian-roof-damage.webp"
                    alt="Hurricane roof damage restoration Clearwater"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Hurricane Damage</p>
                    <p className="text-xs text-gray-200">Roof System Restoration</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/hurricane-ian/hurricane-ian-interior.webp"
                    alt="Water damage restoration Clearwater Beach"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Flood Recovery</p>
                    <p className="text-xs text-gray-200">Interior Restoration</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/commercial/commercial-construction-tampa-exterior.webp"
                    alt="Commercial property restoration Clearwater"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Commercial Restoration</p>
                    <p className="text-xs text-gray-200">Complete Reconstruction</p>
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
                      <span className="font-semibold text-gray-800">Beachfront Property Owners</span>
                      <p className="text-sm text-gray-600">
                        Complex coastal claims with wind, flood, and surge coverage
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Hotels & Resorts</span>
                      <p className="text-sm text-gray-600">
                        Tourism properties requiring rapid restoration and business interruption coordination
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Commercial Building Owners</span>
                      <p className="text-sm text-gray-600">
                        Large loss claims from $250,000 to $25 million+ throughout Pinellas County
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Condo Associations</span>
                      <p className="text-sm text-gray-600">
                        Multi-unit hurricane and flood damage on Sand Key and Clearwater Beach
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
                      Disaster Damage at Your Clearwater Property?
                    </h4>
                    <p className="text-gray-600">
                      Get expert assessment and claims guidance from professionals who've worked both sides.
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
                <h3 className="text-xl font-bold mb-4">Insurance Claim Assistance</h3>
                <p className="text-gray-200 mb-4">
                  Don't navigate complex coastal insurance claims alone. Get expert guidance 
                  from professionals with 43 years of industry experience.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* NFIP Alert Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  NFIP Coverage Alert
                </h3>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Direct damage only:</span> Above water line excluded
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Residential max:</span> $250,000 building coverage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Commercial max:</span> $500,000 building coverage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Mold:</span> NOT covered above flood line
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Proof of Loss:</span> 60-day deadline
                  </li>
                </ul>
                <Link
                  href="/disaster-recovery/"
                  className="text-amber-800 font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:underline"
                >
                  Learn About NFIP Limitations <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Services */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Related Services</h3>
                <div className="space-y-3">
                  <Link href="/disaster-recovery/" className="flex items-center gap-2 text-brand-green hover:text-brand-green-dark transition-colors">
                    <ArrowRight className="w-4 h-4" />
                    <span>Disaster Recovery Services</span>
                  </Link>
                  <Link href="/services/commercial/" className="flex items-center gap-2 text-brand-green hover:text-brand-green-dark transition-colors">
                    <ArrowRight className="w-4 h-4" />
                    <span>Commercial Construction</span>
                  </Link>
                  <Link href="/condo-milestone-inspection-remediation/" className="flex items-center gap-2 text-brand-green hover:text-brand-green-dark transition-colors">
                    <ArrowRight className="w-4 h-4" />
                    <span>Condo Milestone Inspections</span>
                  </Link>
                </div>
              </div>

              {/* Nearby Locations */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Also Serving</h3>
                <div className="space-y-2 text-sm">
                  <Link href="/insurance-restoration-tampa/" className="flex items-center gap-2 text-gray-600 hover:text-brand-green transition-colors">
                    <MapPin className="w-4 h-4" />
                    <span>Insurance Restoration Tampa</span>
                  </Link>
                  <Link href="/commercial-restoration-st-petersburg/" className="flex items-center gap-2 text-gray-600 hover:text-brand-green transition-colors">
                    <MapPin className="w-4 h-4" />
                    <span>Commercial Restoration St. Petersburg</span>
                  </Link>
                  <Link href="/disaster-recovery/" className="flex items-center gap-2 text-gray-600 hover:text-brand-green transition-colors">
                    <MapPin className="w-4 h-4" />
                    <span>Tampa Bay Disaster Recovery</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Insurance Restoration Services in Clearwater
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive disaster recovery and insurance claim expertise for Clearwater Beach 
              beachfront properties, Sand Key high-rises, commercial buildings, and Pinellas County 
              businesses.
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

      {/* NFIP Deep Dive Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-600 rounded-xl">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                NFIP vs. Private Flood Insurance: Critical Knowledge for Clearwater Property Owners
              </h2>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">The Coverage Gap Most Clearwater Property Owners Don't Know About</h3>
                  <p className="text-red-900">
                    NFIP flood insurance covers <strong>only direct flood water contact damage</strong>. 
                    If flood water reaches 3 feet in your building, damage at 5 feet from moisture 
                    migration, humidity, or resulting mold is <strong>NOT covered</strong>—even though 
                    the flood caused it. This "adjacent damage" exclusion can mean tens of thousands 
                    in uninsured losses for Clearwater property owners.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">
                Understanding NFIP Limitations
              </h3>
              <p className="mb-4">
                The National Flood Insurance Program (NFIP), administered by FEMA, provides flood 
                insurance for Clearwater properties in communities participating in the program. 
                Standard property insurance specifically excludes flood damage, making NFIP or 
                private flood coverage essential—especially for beachfront properties on Clearwater 
                Beach, Sand Key, and Island Estates where storm surge risk is significant.
              </p>

              <p className="mb-4">
                However, NFIP operates under strict coverage rules that many Clearwater property 
                owners don't understand until claim time:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Coverage maximums:</strong> $250,000 for residential buildings, $500,000 for commercial—often inadequate for Clearwater's high-value beachfront properties</li>
                <li><strong>Direct damage only:</strong> Only areas physically touched by flood water are covered</li>
                <li><strong>Adjacent damage excluded:</strong> Moisture migration, humidity damage, and mold above the water line are NOT covered</li>
                <li><strong>60-day Proof of Loss deadline:</strong> Strict documentation timeline that must be met</li>
                <li><strong>Basement limitations:</strong> Severely restricted coverage for below-grade areas</li>
                <li><strong>Contents limits:</strong> Separate coverage required with additional limitations</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Why the "Direct vs. Adjacent" Distinction Matters
              </h3>
              <p className="mb-4">
                Consider a Clearwater Beach commercial property where storm surge reaches 4 feet. 
                NFIP covers damage to building components and contents that were actually touched 
                by flood water—from the floor up to approximately 4 feet. But here's what happens 
                in reality:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Moisture wicks up through drywall to 6-7 feet—<strong>NOT covered</strong></li>
                <li>Elevated humidity causes damage to upper floor materials—<strong>NOT covered</strong></li>
                <li>Mold develops above the water line from moisture conditions—<strong>NOT covered</strong></li>
                <li>HVAC systems contaminated by humidity—coverage may be disputed</li>
              </ul>

              <p className="mb-6">
                The total restoration cost might reach $600,000, but NFIP coverage applies to only 
                $350,000 of direct flood contact damage—leaving $250,000 in uninsured losses. This 
                is why understanding your coverage BEFORE a flood event is critical for Clearwater 
                property owners.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Private Flood Insurance Differences
              </h3>
              <p className="mb-4">
                Private flood insurance has grown substantially as an alternative to NFIP, and many 
                policies offer broader coverage that may benefit Clearwater property owners:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Higher coverage limits—critical for valuable beachfront properties</li>
                <li>Some policies cover adjacent damage that NFIP excludes</li>
                <li>Mold coverage may be included (varies by carrier)</li>
                <li>Additional living expenses or business interruption coverage</li>
                <li>Replacement cost coverage vs. actual cash value</li>
              </ul>

              <p className="mb-4">
                However, private flood policies vary significantly by carrier. Coverage terms, 
                exclusions, and claims processes differ from NFIP and from each other. FCS works 
                with all types of flood coverage and understands the documentation requirements 
                for both NFIP and major private flood carriers—ensuring your claim is properly 
                documented regardless of policy type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clearwater-Specific Challenges Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Clearwater Beach's Unique Insurance Claim Challenges
              </h2>

              <p className="text-gray-600 mb-6">
                Clearwater's position directly on the Gulf of Mexico creates the most complex 
                insurance claim scenarios in the Tampa Bay region. A single hurricane can trigger 
                multiple overlapping coverage types, each with different documentation requirements, 
                different adjusters, and different claim processes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Wind className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hurricane Wind Exposure</h4>
                    <p className="text-gray-600 text-sm">
                      Clearwater Beach faces direct hurricane wind exposure from the Gulf. Wind damage 
                      is covered under standard property policies, but hurricane deductibles often 
                      calculate as percentage of building value—potentially $50,000+ for valuable 
                      beachfront properties.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Waves className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Storm Surge Vulnerability</h4>
                    <p className="text-gray-600 text-sm">
                      Properties on Sand Key, Clearwater Beach, and Island Estates face significant 
                      storm surge risk. Storm surge requires flood insurance coverage—NOT covered 
                      under windstorm policies. Distinguishing wind-driven rain from surge damage 
                      is critical for proper claim allocation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">NFIP Coverage Limitations</h4>
                    <p className="text-gray-600 text-sm">
                      Clearwater's flood zones require careful attention to NFIP limitations. 
                      Coverage caps may be inadequate for beachfront properties, and the adjacent 
                      damage exclusion creates significant uninsured exposure for Gulf Coast buildings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Salt Corrosion Complications</h4>
                    <p className="text-gray-600 text-sm">
                      Clearwater Beach properties experience salt air concentrations 3-5x higher 
                      than inland Tampa. This accelerates all deterioration, creates hidden damage 
                      that must be documented, and complicates the distinction between storm damage 
                      and pre-existing deterioration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Hotel className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Tourism Industry Complexity</h4>
                    <p className="text-gray-600 text-sm">
                      Clearwater's hotels, resorts, and tourism properties face unique claims involving 
                      business interruption, seasonal revenue impacts, guest relocation costs, and 
                      accelerated restoration timelines. FCS understands these multi-layered claims.
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
                FCS provides insurance restoration services throughout Clearwater and Pinellas County. 
                Our team understands the specific challenges of each area—from Clearwater Beach's 
                direct Gulf exposure to the protected bay-side properties of Harbor Oaks and Safety Harbor.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {clearwaterNeighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm"
                  >
                    <MapPin className="w-4 h-4 text-brand-green" />
                    <span className="text-gray-700 text-sm">{neighborhood}</span>
                  </div>
                ))}
              </div>

              {/* Pinellas County Emergency Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Pinellas County Emergency Management
                </h4>
                <p className="text-blue-700 text-sm mb-4">
                  Pinellas County maintains comprehensive hurricane preparedness and emergency 
                  management programs. After a disaster, coordinate with county officials while 
                  FCS handles your insurance claim documentation and restoration.
                </p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Document damage before emergency cleanup</li>
                  <li>• Report damage to county for disaster assessment</li>
                  <li>• Maintain all receipts for emergency expenses</li>
                  <li>• Contact FCS for professional claim documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Expertise Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                The Insurance Expert's Advantage for Clearwater Properties
              </h2>

              <p className="text-gray-200 mb-6">
                When you hire FCS for your Clearwater insurance restoration project, you get 
                more than a contractor—you get 43 years of insurance industry expertise working 
                on your behalf. We've processed claims from both sides of the desk, and that 
                perspective translates to real advantages for property owners:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Proper documentation from day one:</strong> We know exactly what 
                    adjusters need to see and how to present damage for approval.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Hidden damage discovery:</strong> 43 years of experience taught us 
                    where damage hides—essential for Clearwater's salt-exposed properties.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Carrier relationship:</strong> We speak the insurance industry's 
                    language fluently, facilitating smoother claim processing.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Supplemental claim expertise:</strong> As hidden damage is discovered, 
                    we prepare and negotiate supplements to capture complete coverage.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Dispute resolution:</strong> Experience with appraisal, arbitration, 
                    and claim negotiation when settlements are insufficient.
                  </span>
                </div>
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Discuss Your Clearwater Claim <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Briefcase className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">43</div>
                <div className="text-gray-300 text-sm">Years Insurance Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$75M+</div>
                <div className="text-gray-300 text-sm">In Claims Handled</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <FileCheck className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">7</div>
                <div className="text-gray-300 text-sm">Years as Adjuster</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$25M</div>
                <div className="text-gray-300 text-sm">Max Project Capacity</div>
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
              Our Insurance Restoration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FCS manages every aspect of insurance restoration from emergency response through 
              final claim settlement, with expertise specifically relevant to Clearwater's 
              complex coastal insurance scenarios.
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
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Clearwater Property Owners Choose Florida Construction Specialists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Unmatched Insurance Expertise
              </h3>
              <p className="text-gray-600">
                43 years of insurance industry experience—7 as an adjuster, 28 as a restoration 
                contractor. We understand claims from both sides of the process, giving Clearwater 
                property owners a significant advantage in complex coastal claims.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Prime Contractor Accountability
              </h3>
              <p className="text-gray-600">
                FCS always serves as the prime contractor, never a subcontractor. Your Clearwater 
                restoration project gets direct accountability, single-point responsibility, and 
                our full $25M bonding capacity backing every project.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Coastal Restoration Specialists
              </h3>
              <p className="text-gray-600">
                We understand Clearwater's unique coastal challenges: salt corrosion, storm surge, 
                NFIP limitations, and tourism property complexities. Our restoration methods and 
                materials are specifically suited for Gulf Coast beachfront properties.
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
                Request Your Clearwater Insurance Claim Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're dealing with hurricane damage, flood recovery, or a disputed claim 
                on your Clearwater Beach or Pinellas County property, FCS provides the insurance 
                expertise and restoration capabilities to protect your interests and restore your 
                property.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Expert assessment by professionals with adjuster experience
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Documentation that meets carrier requirements
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Hidden damage discovery using systematic protocols
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Supplemental claim preparation as damage is discovered
                  </span>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Need Immediate Assistance?</h3>
                <p className="text-gray-200 mb-4">
                  For emergency response or urgent insurance claim questions about your 
                  Clearwater property:
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors"
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
        items={clearwaterFaqs}
        title="Clearwater Insurance Restoration FAQs"
        description="Common questions about insurance restoration, hurricane damage claims, NFIP flood coverage, and commercial property restoration in Clearwater, Florida."
      />

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving Clearwater Beach and Pinellas County
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Florida Construction Specialists provides insurance restoration services throughout 
              Clearwater Beach, Sand Key, Island Estates, and surrounding Pinellas County communities, 
              including beachfront commercial properties and high-value residences.
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
            Clearwater's Insurance Restoration Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            When disaster strikes your Clearwater property, you need more than a contractor—you 
            need 43 years of insurance industry expertise. From hurricane damage to flood recovery, 
            FCS delivers the documentation, negotiation, and restoration capabilities that protect 
            your investment.
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
