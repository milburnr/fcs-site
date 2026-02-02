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
  FileCheck,
  Droplets,
  Wind,
  Flame,
  ClipboardCheck,
  Waves,
  Landmark,
  Scale,
  Search,
  Home,
  HardHat,
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
  title: "Insurance Restoration St. Petersburg | 43 Years Claims Experience",
  description:
    "St. Petersburg's most experienced insurance restoration contractor. 43 years claims expertise from both sides—adjuster AND contractor. Hurricane, flood, fire damage restoration. Historic district specialists. Call (813) 420-7561.",
  keywords:
    "insurance restoration St Petersburg, property damage restoration St Pete, hurricane contractor St Petersburg FL, flood damage St Pete Beach, storm damage repair St Petersburg, insurance claim contractor Pinellas, fire damage restoration St Pete, historic property restoration St Petersburg",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Disaster Recovery", href: "/disaster-recovery/" },
  { name: "St. Petersburg", href: "/insurance-restoration-st-petersburg/" },
];

const trustBadges = [
  { icon: Shield, label: "43 Years Insurance Experience" },
  { icon: FileCheck, label: "Former Allstate Adjuster" },
  { icon: Award, label: "Licensed CGC#1522434" },
  { icon: Building2, label: "$75M+ Claims Handled" },
];

const insuranceExperience = [
  { stat: "43", label: "Years Insurance Industry Experience" },
  { stat: "7", label: "Years as Insurance Adjuster" },
  { stat: "28", label: "Years Insurance Restoration Contractor" },
  { stat: "$75M+", label: "In Claims Handled" },
];

const services = [
  {
    icon: Wind,
    title: "Hurricane Damage Restoration",
    description:
      "Complete hurricane damage restoration including roof repair, water intrusion remediation, structural repairs, and comprehensive insurance claim documentation for St. Petersburg's dual-waterfront properties.",
  },
  {
    icon: Droplets,
    title: "Flood Damage Recovery",
    description:
      "NFIP and private flood claim expertise for St. Pete Beach, Treasure Island, and coastal properties. We understand the critical distinction between covered flood damage and adjacent damage exclusions.",
  },
  {
    icon: Flame,
    title: "Fire & Smoke Damage",
    description:
      "Comprehensive fire restoration including structural repair, smoke remediation, water damage from firefighting, and complete insurance claim management for St. Petersburg commercial and residential properties.",
  },
  {
    icon: FileCheck,
    title: "Insurance Claim Management",
    description:
      "Full claims support including Xactimate estimates, adjuster coordination, supplemental claims, and scope negotiations. Our dual perspective from both sides of the claims process ensures maximum coverage.",
  },
  {
    icon: Landmark,
    title: "Historic Property Restoration",
    description:
      "Specialized insurance restoration for St. Petersburg's historic districts including Old Northeast, Snell Isle, and Kenwood. We navigate preservation requirements while maximizing insurance coverage.",
  },
  {
    icon: Building2,
    title: "Commercial Restoration",
    description:
      "Large loss commercial restoration for downtown St. Petersburg businesses, retail centers, and multi-family properties. Business interruption coordination and tenant considerations included.",
  },
];

const stPeteNeighborhoods = [
  "Downtown St. Petersburg",
  "St. Pete Beach",
  "Treasure Island",
  "Pass-a-Grille",
  "Snell Isle",
  "Old Northeast",
  "Shore Acres",
  "Kenwood",
  "Historic Uptown",
  "Isla del Sol",
  "Gulfport",
  "Madeira Beach",
  "Tierra Verde",
  "Jungle Terrace",
  "Pasadena",
  "Tyrone",
];

const processSteps = [
  {
    step: 1,
    title: "Emergency Assessment",
    description:
      "Rapid damage assessment for St. Petersburg properties including documentation, stabilization recommendations, and preliminary scope development for your insurance claim.",
  },
  {
    step: 2,
    title: "Insurance Coordination",
    description:
      "Direct coordination with your insurance carrier, certified Xactimate estimates, and preparation of documentation that meets carrier requirements—we speak the insurance industry's language.",
  },
  {
    step: 3,
    title: "Scope Development",
    description:
      "Comprehensive scope including hidden damage discovery using our 43 years of claims experience to identify damage that surface inspections miss, supporting supplemental claims when needed.",
  },
  {
    step: 4,
    title: "Claim Negotiation",
    description:
      "Professional scope negotiations and adjuster meetings leveraging our background as former insurance adjusters. We know exactly how claims are evaluated and what documentation supports approval.",
  },
  {
    step: 5,
    title: "Restoration Execution",
    description:
      "Complete property restoration using quality materials and skilled craftsmen. Historic district projects include preservation-compliant methods that maintain architectural integrity.",
  },
  {
    step: 6,
    title: "Final Documentation",
    description:
      "Complete project documentation, warranty information, and final insurance coordination including supplement processing for any additional discovered damage.",
  },
];

const stPeteFaqs = [
  {
    question: "What makes FCS different from other insurance restoration contractors in St. Petersburg?",
    answer:
      "FCS's owner has 43 years of insurance industry experience—7 years as a field adjuster for Allstate and 28 years operating a statewide insurance restoration firm. This dual perspective from both sides of the claims process is extremely rare. We understand exactly how adjusters evaluate claims, what documentation carriers require, and how to present scope of work that gets approved. For St. Petersburg property owners facing storm damage, this expertise means faster claim processing, fewer disputes, and more complete settlements.",
  },
  {
    question: "How does St. Petersburg's dual waterfront exposure affect insurance claims?",
    answer:
      "St. Petersburg's unique geography—bordered by Tampa Bay on the east and the Gulf of Mexico beaches on the west—creates complex damage patterns during storms. Properties can experience different types of damage depending on storm direction: Gulf-side properties like St. Pete Beach and Pass-a-Grille face direct ocean surge and salt spray, while bay-side areas like Shore Acres and Snell Isle may experience bay surge and wind-driven rain from different angles. Our experience with St. Pete's dual exposure helps ensure all damage types are properly documented and claimed.",
  },
  {
    question: "Does FCS handle insurance restoration for historic St. Petersburg properties?",
    answer:
      "Yes, we specialize in insurance restoration for St. Petersburg's historic districts including Old Northeast, Snell Isle, Historic Kenwood, and Historic Uptown. Historic property claims involve unique considerations—preservation ordinances may require specific restoration methods and materials, and insurance coverage must account for the cost of maintaining historic character. Our team understands both the technical restoration requirements and the insurance documentation needed to secure appropriate coverage for historic property repairs.",
  },
  {
    question: "What should St. Petersburg property owners do immediately after storm damage?",
    answer:
      "First, ensure safety and document everything with photos and video before any cleanup. Contact your insurance company to report the claim. Take reasonable steps to prevent further damage (emergency tarping, board-up) but don't begin permanent repairs until damage is documented. Keep all receipts for emergency expenses. For significant losses in St. Petersburg, contact FCS early—our initial assessment helps ensure proper documentation from the start and identifies damage that might otherwise be missed, particularly important for St. Pete's older building stock.",
  },
  {
    question: "How do NFIP flood claims work for St. Pete Beach and barrier island properties?",
    answer:
      "NFIP (National Flood Insurance Program) claims operate under completely different rules than standard property insurance. The most critical distinction: NFIP only covers direct physical damage from flood water contact. Damage above the flood line from moisture migration or humidity—even if caused by the flood event—is NOT covered. For St. Pete Beach, Treasure Island, and Pass-a-Grille properties, this distinction is crucial. Our 43 years of claims experience includes extensive NFIP work, and we help property owners understand coverage limitations while maximizing covered claims.",
  },
  {
    question: "Can FCS help if my St. Petersburg insurance claim was denied or underpaid?",
    answer:
      "Yes. Our background includes experience with the appraisal and arbitration processes when claims become disputed. We can review existing claims, provide independent certified estimates, and help document why additional coverage may be warranted. For St. Petersburg properties where initial claims were inadequate—common with older buildings where hidden damage is extensive—our detailed supplemental documentation often helps secure additional payments. For severely contested claims, we can recommend qualified public adjusters or attorneys.",
  },
  {
    question: "Does FCS work on both commercial and residential properties in St. Petersburg?",
    answer:
      "Yes, FCS handles both commercial and high-value residential disaster recovery throughout St. Petersburg. Our commercial experience includes downtown office buildings, retail centers on Central Avenue, hotels, restaurants, and multi-family complexes. Residential work includes historic homes in Old Northeast and Snell Isle, waterfront properties in Shore Acres, and beach homes throughout the barrier islands. For both sectors, we function as prime general contractor—never a subcontractor—maintaining full project control and accountability.",
  },
  {
    question: "What is the typical timeline for insurance restoration projects in St. Petersburg?",
    answer:
      "Timeline varies significantly based on damage extent, building complexity, and insurance process efficiency. A straightforward residential restoration might take 3-6 months from damage to completion. Commercial projects or historic properties often require 6-12 months. Complex large-loss projects can extend to 18-24 months. The insurance claim process itself—from initial inspection through final payment—often takes 2-4 months for residential and 3-6 months for commercial losses. St. Petersburg's older building stock sometimes reveals hidden damage that extends timelines but is captured through supplemental claims.",
  },
  {
    question: "How does FCS handle insurance restoration for St. Petersburg's older buildings?",
    answer:
      "St. Petersburg has significant building stock from the 1920s through 1970s, and these older structures often have hidden conditions that affect both damage extent and repair methods. Our 43 years of experience includes extensive work with older construction—we know where damage hides in plaster walls, original windows, terrazzo floors, and older roofing systems. We also understand how code upgrade requirements (Florida's 50% rule) can affect restoration scope when repairs are extensive, and ensure this is properly addressed in insurance documentation.",
  },
  {
    question: "What types of storm damage does FCS restore in St. Petersburg?",
    answer:
      "FCS provides comprehensive storm damage restoration including: hurricane wind damage (roof, windows, structural), water intrusion from compromised building envelopes, flood damage (both NFIP and private flood claims), fire and smoke damage, and tornado damage. For St. Petersburg's waterfront properties, we're experienced with salt spray corrosion, surge damage, and the accelerated deterioration common in coastal construction. Our restoration addresses both visible damage and hidden problems that our claims experience helps us identify.",
  },
];

const internalLinks = [
  { href: "/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/insurance-restoration-tampa/", label: "Insurance Restoration Tampa" },
  { href: "/insurance-restoration-clearwater/", label: "Insurance Restoration Clearwater" },
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function InsuranceRestorationStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Insurance Restoration" />
      <ServiceSchema
        serviceName="Insurance Restoration"
        serviceDescription="St. Petersburg's most experienced insurance restoration contractor with 43 years claims expertise. Hurricane, flood, fire damage restoration for commercial and residential properties. Historic district specialists. Projects from $50,000 to $25 million+."
        city="St. Petersburg"
        minPrice="50000"
      />
      <FAQSchema faqs={stPeteFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Hurricane damage restoration in St. Petersburg by Florida Construction Specialists"
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
              <span className="text-brand-gold font-semibold">Serving St. Petersburg, FL</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Insurance Restoration in St. Petersburg:{" "}
              <span className="text-brand-gold">The Insurance Expert's Contractor</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl leading-relaxed">
              When disaster strikes your St. Petersburg property, you need a contractor who truly
              understands insurance claims—from both sides of the process.
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              FCS brings 43 years of insurance industry experience: 7 years as an Allstate adjuster,
              28 years operating a statewide insurance restoration firm, and deep expertise with
              St. Petersburg's unique dual-waterfront exposure and historic properties.
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
            {insuranceExperience.map((item) => (
              <div key={item.label}>
                <div className="text-4xl md:text-5xl font-bold text-brand-gold mb-2">{item.stat}</div>
                <div className="text-white/90 text-sm md:text-base">{item.label}</div>
              </div>
            ))}
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
                St. Petersburg's Most Experienced Insurance Restoration Contractor
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Florida Construction Specialists occupies a unique position in the St. Petersburg
                disaster recovery industry. Our founder's career began in 1982 as a field adjuster
                for Allstate Insurance, spending seven years evaluating claims, determining coverage,
                and understanding exactly how carriers assess damage and process large losses. That
                insider knowledge became the foundation for a 28-year career operating a statewide
                insurance restoration firm trusted by major carriers throughout Florida.
              </p>

              <p className="text-gray-600 mb-6">
                This dual perspective—having worked both as the adjuster evaluating claims AND as
                the contractor rebuilding properties—is extraordinarily rare in the construction
                industry. Most contractors learn insurance processes through trial and error. We
                learned them from the inside, understanding not just what adjusters look for, but
                why they look for it, how coverage decisions are made, and what documentation
                actually supports claim approval.
              </p>

              <p className="text-gray-600 mb-6">
                For St. Petersburg property owners, this expertise is particularly valuable.
                St. Pete's unique position on the Pinellas peninsula—with Tampa Bay to the east
                and Gulf of Mexico beaches to the west—creates complex damage patterns during
                storms. Add the city's significant inventory of historic properties with specialized
                restoration requirements, and you need a contractor who understands both the
                technical and insurance aspects of disaster recovery.
              </p>

              <p className="text-gray-600 mb-8">
                When you hire FCS, you're not just hiring a contractor. You're hiring 43 years
                of claims experience that helps ensure your St. Petersburg property is properly
                documented, your claim is fairly evaluated, and your restoration meets both
                insurance requirements and building codes. We've handled claims as the adjuster,
                we've built claims as the contractor, and we've navigated disputes through
                appraisal and arbitration.
              </p>

              {/* Project Gallery */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/hurricane-ian/hurricane-ian-display.webp"
                    alt="Hurricane damage restoration St. Petersburg"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Hurricane Restoration</p>
                    <p className="text-xs text-gray-200">Storm Damage Recovery</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png"
                    alt="Waterproofing and building envelope repair"
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
                    src="/wp-content/uploads/2023/12/Old/custom-home-construction-2.jpg"
                    alt="Complete property restoration"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Property Restoration</p>
                    <p className="text-xs text-gray-200">Complete Reconstruction</p>
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
                      <span className="font-semibold text-gray-800">Commercial Property Owners</span>
                      <p className="text-sm text-gray-600">
                        Downtown businesses, retail, hotels, and office buildings
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Historic Property Owners</span>
                      <p className="text-sm text-gray-600">
                        Old Northeast, Snell Isle, Historic Kenwood homes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Waterfront Properties</span>
                      <p className="text-sm text-gray-600">
                        Shore Acres, Snell Isle, bayfront and beachfront homes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Beach Community Properties</span>
                      <p className="text-sm text-gray-600">
                        St. Pete Beach, Treasure Island, Pass-a-Grille
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
                      Need Insurance Restoration for Your St. Petersburg Property?
                    </h4>
                    <p className="text-gray-600">
                      Our 43 years of insurance expertise works for you.
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
                  From initial damage assessment to final claim settlement, our 43 years of
                  insurance experience guides you through the entire restoration process.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-full hover:bg-brand-green-forest transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* Insurance Expertise Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Our Insurance Expertise
                </h3>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>7 years as Allstate field adjuster</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>28 years insurance restoration contractor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Certified Xactimate estimating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Supplemental claim specialists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Appraisal & arbitration experience</span>
                  </li>
                </ul>
                <Link
                  href="/disaster-recovery/"
                  className="text-amber-800 font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:underline"
                >
                  Full Disaster Recovery Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Services */}
              <RelatedServices city="St. Petersburg" currentService="insurance-restoration" />

              {/* Nearby Locations */}
              <NearbyLocations
                currentCity="St. Petersburg"
                service="insurance-restoration"
                serviceName="Insurance Restoration"
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
              Insurance Restoration Services in St. Petersburg
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive disaster recovery and insurance claim support for St. Petersburg
              commercial properties, historic homes, and waterfront residences.
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

      {/* St. Pete-Specific Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                St. Petersburg's Unique Storm Exposure Patterns
              </h2>

              <p className="text-gray-600 mb-6">
                St. Petersburg's position on the Pinellas peninsula creates unique challenges for
                property owners and their insurance claims. Unlike communities with single
                waterfront exposure, St. Pete faces storm threats from multiple directions—
                Tampa Bay storms from the east and Gulf hurricanes from the west—each creating
                different damage patterns that require specific documentation approaches.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Waves className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Dual Waterfront Exposure</h4>
                    <p className="text-gray-600 text-sm">
                      Properties face both Tampa Bay surge and Gulf hurricane exposure. Storm direction
                      determines whether damage comes from salt-laden Gulf winds or bay surge flooding,
                      affecting both damage extent and insurance coverage type.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Landmark className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Historic District Considerations</h4>
                    <p className="text-gray-600 text-sm">
                      Old Northeast, Snell Isle, and Historic Kenwood properties require restoration
                      methods that meet preservation standards. Insurance claims must document the
                      additional cost of period-appropriate materials and techniques.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Downtown Commercial District</h4>
                    <p className="text-gray-600 text-sm">
                      St. Petersburg's thriving downtown includes historic commercial buildings,
                      modern mixed-use developments, and hospitality properties—each with different
                      insurance requirements and business interruption considerations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Home className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Beach Community Properties</h4>
                    <p className="text-gray-600 text-sm">
                      St. Pete Beach, Treasure Island, Pass-a-Grille, and Tierra Verde face the
                      most severe Gulf exposure. NFIP flood coverage is typically required, and
                      salt air accelerates storm damage deterioration.
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
                FCS provides insurance restoration services throughout St. Petersburg and Pinellas
                County's beach communities. Our team understands the distinct characteristics and
                insurance requirements of each neighborhood.
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
            </div>
          </div>
        </div>
      </section>

      {/* Historic Properties Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <Landmark className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Historic Property Restoration Claims
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                St. Petersburg's historic districts—including Old Northeast, Snell Isle, Historic
                Kenwood, and the Grand Central District—contain some of Florida's most distinctive
                architecture. Insurance restoration for these properties requires specialized
                expertise that addresses both preservation requirements and claim documentation.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">
                Preservation Requirements and Insurance Coverage
              </h3>
              <p className="mb-4">
                Historic properties in St. Petersburg's designated districts often face local
                preservation ordinances that restrict exterior modifications. When storm damage
                occurs, repairs may require historically appropriate materials and methods that
                exceed standard construction costs. Proper insurance documentation must capture
                these requirements to secure appropriate coverage.
              </p>

              <p className="mb-4">
                Our experience with historic property claims includes documenting the specific
                requirements for period-appropriate windows, original-profile trim and moldings,
                historic roofing materials, and architectural details that must be replicated
                rather than replaced with modern alternatives. This documentation supports
                coverage for the actual cost of compliant restoration, not just generic replacement.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Hidden Damage in Historic Construction
              </h3>
              <p className="mb-4">
                St. Petersburg's historic homes often feature construction methods uncommon in
                modern buildings: plaster and lath walls, original single-pane windows, wood
                structural elements, and roofing systems with longer expected lifespans. Storm
                damage to these systems manifests differently than in modern construction, and
                proper assessment requires understanding historic building techniques.
              </p>

              <p className="mb-4">
                Our 43 years of claims experience includes extensive work with historic properties.
                We know where water intrusion hides in plaster walls, how wind affects original
                windows differently than modern units, and what supplemental documentation is
                needed when repairs reveal additional damage in historic structural systems.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Coordinating with Preservation Boards
              </h3>
              <p>
                For properties in designated historic districts, restoration work may require
                approval from local preservation boards. FCS coordinates with these authorities
                to ensure repair plans meet preservation standards while documenting any
                additional costs for insurance purposes. This coordination prevents delays and
                ensures your restoration maintains the property's historic character and any
                associated tax benefits or designation status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Restoration Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-brand-green rounded-xl">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                  Commercial Restoration for Downtown St. Petersburg
                </h2>
              </div>

              <p className="text-gray-600 mb-6">
                St. Petersburg's downtown has transformed into one of Florida's most vibrant urban
                centers, with a mix of historic commercial buildings, modern offices, boutique
                hotels, restaurants, and mixed-use developments. Commercial disaster recovery in
                this environment requires understanding complex insurance structures and minimizing
                business interruption.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Business Interruption Coordination</span>
                    <p className="text-sm text-gray-600">
                      We document lost business time and coordinate with BI coverage to minimize
                      financial impact during restoration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Multi-Tenant Considerations</span>
                    <p className="text-sm text-gray-600">
                      Commercial properties with multiple tenants require coordination between
                      property owner and tenant insurance policies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Code Upgrade Requirements</span>
                    <p className="text-sm text-gray-600">
                      Florida's 50% rule may trigger significant code upgrades for older downtown
                      buildings—we document these requirements for coverage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800">Large Loss Expertise</span>
                    <p className="text-sm text-gray-600">
                      Commercial claims from $250,000 to $25 million require experienced contractors
                      with bonding capacity and carrier relationships.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-dark transition-colors"
              >
                Discuss Commercial Restoration <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-green-bg rounded-xl p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-brand-green-dark mb-1">$75M+</div>
                <div className="text-gray-600 text-sm">Claims Handled</div>
              </div>
              <div className="bg-brand-green-bg rounded-xl p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-brand-green-dark mb-1">$25M</div>
                <div className="text-gray-600 text-sm">Bonding Capacity</div>
              </div>
              <div className="bg-brand-green-bg rounded-xl p-6 text-center">
                <Calendar className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-brand-green-dark mb-1">43</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="bg-brand-green-bg rounded-xl p-6 text-center">
                <FileCheck className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-brand-green-dark mb-1">100%</div>
                <div className="text-gray-600 text-sm">Prime Contractor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flood & NFIP Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-600 rounded-xl">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                Flood Damage & NFIP Claims in St. Petersburg
              </h2>
            </div>

            <div className="bg-amber-500/20 border-l-4 border-amber-400 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-200 mb-2">Critical Coverage Distinction</h3>
                  <p className="text-amber-100">
                    NFIP flood insurance only covers direct physical damage from flood water contact.
                    Damage above the flood line from moisture migration—even if caused by the flood—is
                    NOT covered. Understanding this distinction before a flood event can mean the
                    difference between full recovery and significant uninsured losses.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-200 mb-6">
                St. Pete Beach, Treasure Island, Pass-a-Grille, and Tierra Verde face Florida's
                highest flood risk zones. Understanding NFIP coverage limitations—and where private
                flood insurance may provide broader protection—is essential for St. Petersburg
                waterfront property owners.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">What NFIP Covers</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Direct flood water contact damage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Building materials below flood line</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Electrical/HVAC if flood-contacted</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Emergency mitigation costs</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">What NFIP Excludes</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>Moisture damage above flood line</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>Mold from humidity (not direct contact)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>Basement/below-grade limitations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>Exterior improvements (landscaping)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-200">
                Our 43 years of insurance experience includes extensive NFIP flood claim work.
                We understand how to properly document flood damage to maximize covered claims
                while helping property owners understand where coverage gaps may require
                alternative funding. For St. Petersburg barrier island properties, this expertise
                is essential for realistic recovery planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Insurance Restoration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FCS manages every aspect of insurance restoration from emergency assessment
              through final claim settlement, leveraging 43 years of insurance expertise
              to protect your interests.
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
            Why St. Petersburg Property Owners Choose FCS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                43 Years Insurance Expertise
              </h3>
              <p className="text-gray-600">
                Our founder worked 7 years as an Allstate adjuster before 28 years as a restoration
                contractor. We understand claims from both sides—what adjusters look for and what
                documentation gets claims approved.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Landmark className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Historic Property Specialists
              </h3>
              <p className="text-gray-600">
                St. Petersburg's historic districts require restoration contractors who understand
                preservation requirements and can document the additional costs of period-appropriate
                materials for insurance coverage.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Prime Contractor Only
              </h3>
              <p className="text-gray-600">
                FCS always serves as prime contractor, never a subcontractor. Your St. Petersburg
                property gets direct accountability, single-point responsibility, and our full
                $25M bonding capacity on every project.
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
                Request Your St. Petersburg Property Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're facing hurricane damage, flood recovery, fire restoration, or a
                disputed insurance claim, FCS provides expert assessment and restoration services
                backed by 43 years of insurance industry experience.
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
                    Certified Xactimate estimates for insurance submission
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Historic property restoration expertise
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Supplemental claim support for underpaid claims
                  </span>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Emergency Assistance Available</h3>
                <p className="text-gray-200 mb-4">
                  For immediate assistance with storm damage to your St. Petersburg property:
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
        title="St. Petersburg Insurance Restoration FAQs"
        description="Common questions about insurance restoration, storm damage claims, and disaster recovery in St. Petersburg, Florida."
      />

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving St. Petersburg and Pinellas County Beach Communities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Florida Construction Specialists provides insurance restoration services throughout
              St. Petersburg, including Downtown, Old Northeast, Snell Isle, Shore Acres, and
              all Pinellas County beach communities from Clearwater to Pass-a-Grille.
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
            St. Petersburg's Insurance Restoration Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From emergency damage assessment to final claim settlement, Florida Construction
            Specialists brings 43 years of insurance industry expertise to your St. Petersburg
            restoration project. We've worked both sides of the claims process—and now we work for you.
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
