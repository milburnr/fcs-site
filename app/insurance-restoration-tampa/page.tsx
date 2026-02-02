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
  Wind,
  Flame,
  Search,
  ClipboardCheck,
  FileCheck,
  Scale,
  Home,
  HardHat,
  Briefcase,
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
  title: "Insurance Restoration Tampa | 43 Years Claims Experience",
  description:
    "Tampa's most trusted insurance restoration contractor with 43 years experience on BOTH sides of the claims process. Former adjuster, certified Xactimate estimates. Hurricane, flood, fire damage. Commercial & large loss specialists. Call (813) 420-7561.",
  keywords:
    "insurance restoration Tampa, property damage restoration Tampa, hurricane damage contractor Tampa, commercial insurance restoration, large loss restoration Tampa, insurance claim contractor Tampa, certified Xactimate estimates, flood damage restoration Tampa, fire damage Tampa, storm damage contractor",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Disaster Recovery", href: "/disaster-recovery/" },
  { name: "Insurance Restoration Tampa", href: "/insurance-restoration-tampa/" },
];

const trustBadges = [
  { icon: Briefcase, label: "43 Years Insurance Industry" },
  { icon: ClipboardCheck, label: "Certified Xactimate" },
  { icon: Shield, label: "Licensed CGC#1522434" },
  { icon: Award, label: "$75M+ Claims Handled" },
];

const insuranceExperience = [
  { stat: "43", label: "Years Insurance Industry Experience" },
  { stat: "7", label: "Years as Insurance Adjuster (Allstate)" },
  { stat: "28", label: "Years Insurance Restoration Contractor" },
  { stat: "$75M+", label: "In Claims Successfully Handled" },
];

const services = [
  {
    icon: Wind,
    title: "Hurricane & Storm Damage",
    description:
      "Complete hurricane restoration from emergency tarping through full reconstruction. Wind damage, roof systems, structural repairs, and water intrusion mitigation for Tampa's most vulnerable commercial and residential properties.",
  },
  {
    icon: Droplets,
    title: "Flood Damage Restoration",
    description:
      "NFIP and private flood claim expertise. We understand the critical distinction between covered direct flood damage and excluded adjacent damage—knowledge that protects Tampa property owners from claim surprises.",
  },
  {
    icon: Flame,
    title: "Fire & Smoke Restoration",
    description:
      "Comprehensive fire damage restoration including structural evaluation, smoke remediation, water damage from firefighting, and complete reconstruction. Tampa commercial and high-value residential properties.",
  },
  {
    icon: FileCheck,
    title: "Insurance Claim Management",
    description:
      "From initial documentation through final payment. Certified Xactimate estimates, adjuster coordination, supplemental claims, scope negotiations—all guided by our 43 years on both sides of the claims process.",
  },
  {
    icon: Search,
    title: "Hidden Damage Discovery",
    description:
      "Our adjuster background taught us exactly where damage hides. Systematic protocols using moisture meters, thermal imaging, and decades of claims experience ensure nothing is missed in your Tampa property assessment.",
  },
  {
    icon: Scale,
    title: "Disputed Claim Support",
    description:
      "When claims are denied or underpaid, our independent certified estimates and claims expertise help document why additional coverage may be warranted. Experience with appraisal and arbitration processes.",
  },
];

const tampaNeighborhoods = [
  "Hyde Park",
  "Davis Islands",
  "Downtown Tampa",
  "Channelside",
  "Westshore",
  "South Tampa",
  "Carrollwood",
  "New Tampa",
  "Temple Terrace",
  "Ybor City",
  "Harbour Island",
  "Bayshore",
];

const damageTypes = [
  {
    icon: Wind,
    title: "Hurricane & Wind Damage",
    description: "Tampa sits in one of the most hurricane-vulnerable metropolitan areas in the nation. When the next major storm impacts Hillsborough County, FCS brings 43 years of hurricane claim experience to bear—from emergency response through complete reconstruction.",
  },
  {
    icon: Droplets,
    title: "Flood Damage",
    description: "Tampa's low elevation, proximity to Tampa Bay, and summer thunderstorms create significant flood risk. Our NFIP expertise ensures proper documentation of covered damage while helping property owners understand policy limitations.",
  },
  {
    icon: Flame,
    title: "Fire Damage",
    description: "Fire claims extend far beyond visible burn areas. Our comprehensive approach addresses structural damage, smoke contamination throughout the building, and water damage from firefighting—all properly documented for insurance coverage.",
  },
  {
    icon: AlertTriangle,
    title: "Wind-Driven Rain",
    description: "Often the most disputed damage category. Wind-driven rain through compromised building envelopes is typically covered under windstorm policies—distinct from flood. Our expertise in this distinction protects Tampa property owners.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Emergency Response",
    description:
      "Rapid mobilization for large loss situations. Initial damage assessment, emergency stabilization coordination, and preliminary scope development within 24-48 hours for significant Tampa property losses.",
  },
  {
    step: 2,
    title: "Comprehensive Documentation",
    description:
      "Systematic damage documentation including photography, measurements, moisture mapping, and hidden damage discovery. Our adjuster background ensures nothing is missed that affects your Tampa claim.",
  },
  {
    step: 3,
    title: "Certified Xactimate Estimates",
    description:
      "Industry-standard estimates that adjusters recognize and respect. Our estimates use the same methodology insurance companies use, reducing disputes and accelerating Tampa claim processing.",
  },
  {
    step: 4,
    title: "Adjuster Coordination",
    description:
      "We speak the insurance industry's language. Meeting coordination, scope discussions, and professional communication that comes from 43 years on both sides of the claims process.",
  },
  {
    step: 5,
    title: "Reconstruction & Restoration",
    description:
      "Complete property restoration with premium materials and craftsmanship. Code-compliant work that meets both insurance requirements and Florida Building Code for Tampa properties.",
  },
  {
    step: 6,
    title: "Supplemental Claims & Closeout",
    description:
      "Hidden damage discovered during reconstruction is properly documented for supplemental claims. Final documentation, warranty delivery, and complete project closeout for your Tampa property.",
  },
];

const tampaFaqs = [
  {
    question: "What makes FCS different from other insurance restoration contractors in Tampa?",
    answer:
      "FCS's owner brings 43 years of insurance industry experience from both sides of the claims process—7 years as a field adjuster for Allstate evaluating and settling claims, followed by 28 years operating a statewide insurance restoration firm. This dual perspective is extraordinarily rare in Tampa's construction industry. We understand exactly how adjusters evaluate damage, what documentation carriers require, and how to present scope of work that gets approved. For Tampa property owners, this translates to faster claim processing, fewer disputes, and more complete settlements. We've handled claims as the adjuster AND built claims as the contractor—experience that directly benefits every Tampa client.",
  },
  {
    question: "How does Tampa's hurricane vulnerability affect insurance restoration?",
    answer:
      "Tampa sits in one of the most hurricane-vulnerable major metro areas in the United States. The city has been fortunate to avoid direct major hurricane impacts in recent decades, but this luck has created complacency while simultaneously driving insurance market instability. Many Tampa commercial properties and high-rises haven't been tested by Category 3+ winds. When the next major hurricane impacts Hillsborough County, the scale of damage will be unprecedented. FCS's catastrophe response experience—including deployment to Hurricane Harvey in Texas and Hurricane Irma throughout Florida—positions us to respond rapidly when Tampa needs us most.",
  },
  {
    question: "Why is Tampa experiencing an insurance crisis, and how does FCS help?",
    answer:
      "Tampa and all of Florida face a property insurance crisis: major carriers have withdrawn from the state, premiums have increased 40-100%+ in recent years, and coverage is increasingly difficult to obtain. This environment makes proper claim handling more critical than ever. Insurance companies are scrutinizing claims more carefully, and underpayment is increasingly common. FCS's insurance expertise helps Tampa property owners document damage thoroughly, present claims professionally, and negotiate effectively. Our certified Xactimate estimates and adjuster-level documentation give your claim the best possible foundation in this challenging market.",
  },
  {
    question: "What Tampa areas and property types does FCS serve for insurance restoration?",
    answer:
      "FCS provides insurance restoration services throughout Tampa and Hillsborough County, from Hyde Park and Davis Islands to Downtown Tampa, Westshore, South Tampa, Carrollwood, New Tampa, and Temple Terrace. We specialize in large loss commercial properties ($250,000+ claims) including office buildings, retail centers, hotels, municipal buildings, and industrial facilities. We also handle high-value residential properties and multi-family complexes. Our focus on larger projects allows us to dedicate the resources and expertise these complex Tampa claims require.",
  },
  {
    question: "What is a supplemental claim and why are they common in Tampa restoration projects?",
    answer:
      "A supplemental claim is filed when additional covered damage is discovered after the initial claim has been processed. This is extremely common in Tampa's large loss situations where hidden damage only becomes apparent during demolition and reconstruction. Tampa's humid climate promotes moisture migration and mold development in wall cavities. Hurricane damage often affects structural connections not visible without invasive inspection. Fire creates smoke damage in unexpected areas. FCS's systematic approach documents this discovered damage properly, with photos, measurements, and detailed scope, supporting successful supplement processing. Our experience on both sides of claims helps Tampa property owners recover the full value of their covered losses.",
  },
  {
    question: "How does FCS handle flood damage claims differently in Tampa?",
    answer:
      "Flood insurance through NFIP operates under completely different rules than standard property insurance—rules that many Tampa property owners don't understand until claim time. NFIP only covers direct physical damage from flood water contact. Damage above the high-water mark from moisture migration, humidity, or mold is specifically excluded, even though the flood caused those conditions. This critical distinction significantly affects Tampa flood claims. FCS's expertise ensures proper documentation of the high-water mark, systematic photography of direct flood contact damage, and realistic expectations about coverage limitations. We help Tampa property owners maximize covered damage while understanding what falls outside NFIP coverage.",
  },
  {
    question: "Can FCS help if my Tampa insurance claim was denied or underpaid?",
    answer:
      "Yes. Our insurance industry background includes experience with appraisal and arbitration processes when claims become disputed. We can review existing claims, provide independent certified Xactimate estimates, and document why additional coverage may be warranted based on policy terms and damage conditions. While FCS is not a public adjuster, our expertise in claims documentation often helps resolve Tampa disputes. For severely contested claims, we can recommend qualified public adjusters or attorneys who specialize in Florida insurance disputes. Our role is providing the professional documentation and construction expertise that supports your position.",
  },
  {
    question: "What should Tampa property owners do immediately after major storm damage?",
    answer:
      "First, ensure safety and document everything with photos and video before any cleanup—this initial documentation is crucial for your claim. Report the loss to your insurance company promptly. Take reasonable steps to prevent further damage (emergency tarping, water extraction, board-up) but document these efforts and keep all receipts. Don't begin permanent repairs until damage is properly documented by your adjuster. For large losses, contact FCS early. Our initial assessment can help ensure proper documentation from the start and identify hidden damage that might otherwise be missed. Early involvement of experienced professionals often results in more complete Tampa claim settlements.",
  },
  {
    question: "How long does insurance restoration take for large Tampa commercial properties?",
    answer:
      "Timeline varies significantly based on damage extent, building complexity, and insurance process efficiency. A straightforward Tampa commercial restoration might take 6-12 months from damage to completion. Complex projects like complete rebuilds can extend to 18-24 months or longer for major facilities. The insurance claim process itself—from initial inspection through final payment—often takes 3-6 months for large losses, sometimes longer in today's challenging Florida insurance environment. FCS provides detailed schedules during pre-construction planning and works to accelerate both the claims process and reconstruction timeline for Tampa property owners.",
  },
  {
    question: "Does FCS have experience with large-scale Tampa area disaster recovery projects?",
    answer:
      "Yes. FCS has completed major insurance restoration projects throughout the Tampa Bay region including the Turner Agri-Civic Center, a $12.5 million disaster recovery project demonstrating our capacity for large-scale Tampa area work. Our portfolio includes hurricane damage restoration, major fire losses, flood recovery, and complete commercial property rebuilds. We've deployed to catastrophe zones including Hurricane Harvey in Texas and Hurricane Irma throughout Florida. This large loss experience, combined with our insurance industry background, positions FCS as Tampa's premier choice for significant property damage restoration.",
  },
];

const internalLinks = [
  { href: "/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/hurricane-damage-tampa/", label: "Hurricane Damage Tampa" },
  { href: "/flood-damage-restoration-tampa/", label: "Flood Damage Tampa" },
  { href: "/fire-damage-restoration-tampa/", label: "Fire Damage Tampa" },
  { href: "/contact/", label: "Schedule Assessment" },
];

export default function InsuranceRestorationTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Insurance Restoration" />
      <ServiceSchema
        serviceName="Insurance Restoration"
        serviceDescription="Tampa's most experienced insurance restoration contractor with 43 years claims expertise from both sides—former adjuster AND contractor. Specializing in large loss commercial restoration, hurricane damage, flood damage, and fire damage. Certified Xactimate estimates and complete claim management."
        city="Tampa"
        minPrice="250000"
      />
      <FAQSchema faqs={tampaFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Insurance restoration contractor Tampa - hurricane damage repair"
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
              <span className="text-brand-gold font-semibold">Serving Tampa & Hillsborough County</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Insurance Restoration in Tampa:<br />
              <span className="text-brand-gold">The Adjuster's Contractor</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl leading-relaxed">
              Tampa's only insurance restoration contractor with 43 years of claims experience from 
              <strong className="text-white"> both sides of the process</strong>—7 years as an insurance adjuster, 
              28 years as a restoration contractor.
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              We understand exactly how adjusters evaluate damage, what documentation carriers require, 
              and how to present scope of work that gets approved. This dual perspective translates to 
              faster claims, fewer disputes, and more complete settlements for Tampa property owners.
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
                Why Tampa Property Owners Trust FCS for Insurance Restoration
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Florida Construction Specialists occupies a unique position in Tampa's disaster recovery 
                industry. Our founder's career began in 1982 as a field adjuster for Allstate Insurance, 
                spending seven years evaluating claims, determining coverage, and understanding exactly 
                how carriers assess damage and process large losses. That insider knowledge became the 
                foundation for a 28-year career operating a statewide insurance restoration firm that 
                became a trusted name for major carriers throughout Florida.
              </p>

              <p className="text-gray-600 mb-6">
                This dual perspective—having worked both as the adjuster evaluating claims AND as the 
                contractor rebuilding properties—is extraordinarily rare in Tampa's construction industry. 
                Most contractors learn insurance processes through trial and error. We learned them from 
                the inside, understanding not just what adjusters look for, but <em>why</em> they look for it, 
                how coverage decisions are made, and what documentation actually supports claim approval.
              </p>

              <p className="text-gray-600 mb-6">
                For Tampa property owners facing major disaster damage, this experience translates directly 
                to better outcomes. Our certified Xactimate estimates speak the same language adjusters use. 
                Our documentation meets carrier requirements because we helped develop those requirements. 
                Our scope presentations anticipate objections because we've sat on the other side of the table. 
                The result: faster claim processing, fewer disputes, and more complete settlements.
              </p>

              <p className="text-gray-600 mb-8">
                Today, FCS serves as the prime general contractor for large loss disaster recovery 
                throughout Tampa and Hillsborough County. We specialize in commercial properties, 
                municipal buildings, and high-value residential reconstruction—the complex projects 
                where insurance expertise matters most. Our portfolio includes hurricane damage totaling 
                tens of millions of dollars, major fire losses, flood recovery, and complete property rebuilds.
              </p>

              {/* Case Study Highlight */}
              <div className="bg-gradient-to-r from-brand-green-dark to-brand-green rounded-xl p-6 mb-8 text-white">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Award className="w-6 h-6 text-brand-gold" />
                  Featured Tampa Area Project: Turner Agri-Civic Center
                </h3>
                <p className="text-gray-200 mb-4">
                  This $12.5 million disaster recovery project demonstrates FCS's capacity for large-scale 
                  Tampa Bay area insurance restoration. From comprehensive damage documentation through 
                  complete reconstruction, our team managed every aspect of this major facility's restoration, 
                  working directly with insurance carriers and local officials to restore this important 
                  community asset.
                </p>
                <div className="flex items-center gap-4 text-brand-gold font-semibold">
                  <span>$12.5M Project Value</span>
                  <span>•</span>
                  <span>Complete Facility Restoration</span>
                </div>
              </div>

              {/* Target Audience Section */}
              <div className="bg-brand-green-bg rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-brand-green" />
                  Who We Serve in Tampa
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Commercial Property Owners</span>
                      <p className="text-sm text-gray-600">
                        Office buildings, retail, industrial, hotels—large loss claims $250K+
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Municipal Buildings</span>
                      <p className="text-sm text-gray-600">
                        Government facilities, civic centers, public infrastructure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Multi-Family & HOAs</span>
                      <p className="text-sm text-gray-600">
                        Condominium associations, apartment complexes, townhome communities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">High-Value Residential</span>
                      <p className="text-sm text-gray-600">
                        Custom homes, waterfront properties, estates with significant claims
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
                      Need Insurance Restoration for Your Tampa Property?
                    </h4>
                    <p className="text-gray-600">
                      43 years experience on both sides of the claims process.
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
                  Whether you're filing a new claim or need help with a disputed settlement, 
                  our 43 years of insurance expertise is available for your Tampa property.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-amber-400 transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* Insurance Market Alert */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Tampa Insurance Market
                </h3>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Crisis:</span> Major carriers leaving Florida
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Premiums:</span> Up 40-100%+ in recent years
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Scrutiny:</span> Claims examined more carefully
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Documentation:</span> More critical than ever
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">FCS Advantage:</span> Adjuster-level expertise
                  </li>
                </ul>
                <p className="text-amber-800 text-sm mt-4">
                  In today's challenging market, professional documentation and presentation 
                  is essential for fair claim settlements.
                </p>
              </div>

              {/* Related Services */}
              <RelatedServices city="Tampa" currentService="insurance-restoration" />

              {/* Nearby Locations */}
              <NearbyLocations
                currentCity="Tampa"
                service="insurance-restoration"
                serviceName="Insurance Restoration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <ContentParallax
        src="/images/hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp"
        alt="Insurance restoration work in Tampa"
        title="43 Years of Insurance Expertise"
        subtitle="From adjuster to contractor—we know claims from both sides"
        overlayOpacity={0.6}
      />

      {/* Why Insurance Background Matters */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
                Why FCS's Insurance Background Matters for Tampa Property Owners
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Most contractors learn insurance processes by guesswork. We learned them from the inside—and 
                that difference directly impacts your claim outcome.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-14 h-14 bg-brand-green-bg rounded-xl flex items-center justify-center mb-4">
                  <FileCheck className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Certified Xactimate Estimates</h3>
                <p className="text-gray-600 mb-4">
                  Insurance companies use Xactimate for claim evaluation. So do we. Our certified estimates 
                  speak the exact language adjusters understand, using the same line items, pricing databases, 
                  and formatting. This isn't just helpful—it's often the difference between approval and dispute.
                </p>
                <p className="text-gray-600">
                  When your Tampa claim arrives at the adjuster's desk in a format they immediately 
                  recognize as professional and complete, it sets the tone for the entire process.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-14 h-14 bg-brand-green-bg rounded-xl flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Documentation That Gets Approved</h3>
                <p className="text-gray-600 mb-4">
                  Seven years of adjusting taught us exactly what documentation carriers need—and what 
                  they reject. Our damage reports include the specific details adjusters require: proper 
                  measurements, code references, manufacturer specifications, and photographic evidence 
                  positioned to support each line item.
                </p>
                <p className="text-gray-600">
                  This isn't generic construction documentation. It's insurance-ready presentation that 
                  anticipates questions and provides answers before they're asked.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-14 h-14 bg-brand-green-bg rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Adjuster-Level Communication</h3>
                <p className="text-gray-600 mb-4">
                  We've sat on both sides of the claims desk. This means productive meetings, not 
                  adversarial standoffs. We understand the adjuster's constraints, speak their technical 
                  language, and present scope in ways that facilitate approval rather than trigger disputes.
                </p>
                <p className="text-gray-600">
                  For Tampa property owners, this translates to faster processing, professional 
                  relationships with carriers, and significantly reduced claim friction.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-14 h-14 bg-brand-green-bg rounded-xl flex items-center justify-center mb-4">
                  <DollarSign className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Claim Maximization Expertise</h3>
                <p className="text-gray-600 mb-4">
                  We know where damage hides because we spent years looking for it as adjusters. Our 
                  systematic protocols find covered damage that surface inspections miss—moisture in 
                  wall cavities, structural movement from wind pressure, smoke contamination in 
                  unexpected areas, code-required upgrades.
                </p>
                <p className="text-gray-600">
                  Finding this damage early allows proper documentation and supplemental claims before 
                  problems worsen—protecting Tampa property owners' financial interests.
                </p>
              </div>
            </div>

            <div className="bg-brand-green-dark rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">The FCS Difference in Numbers</h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Our insurance background produces measurable results for Tampa property owners—faster 
                claims, better documentation, more complete settlements.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-brand-gold">43</div>
                  <div className="text-gray-300 text-sm">Years Insurance Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold">$75M+</div>
                  <div className="text-gray-300 text-sm">Claims Handled</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold">100+</div>
                  <div className="text-gray-300 text-sm">Large Loss Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold">$25M</div>
                  <div className="text-gray-300 text-sm">Bonding Capacity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Damage Covered */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Types of Damage We Restore in Tampa
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive insurance restoration services for all major damage categories affecting 
              Tampa commercial and residential properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {damageTypes.map((type) => (
              <div
                key={type.title}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Insurance Restoration Services in Tampa
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete insurance restoration solutions from emergency response through final 
              reconstruction—guided by 43 years of claims expertise.
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

      {/* Tampa-Specific Risks Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Tampa's Unique Disaster Risks and Insurance Challenges
              </h2>

              <p className="text-gray-600 mb-6">
                Tampa occupies one of the most hurricane-vulnerable positions of any major U.S. 
                metropolitan area. The city's location on Tampa Bay, low coastal elevation, and 
                dense development create catastrophic potential that insurance markets are 
                increasingly pricing into coverage—when coverage is available at all.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Wind className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hurricane Vulnerability</h4>
                    <p className="text-gray-600 text-sm">
                      Tampa hasn't experienced a direct major hurricane hit since 1921, creating 
                      complacency while the area has grown into a major metropolis. When the next 
                      major storm impacts Hillsborough County, the scale of damage will be unprecedented. 
                      Our catastrophe response experience positions us to help Tampa recover.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Storm Surge & Flooding</h4>
                    <p className="text-gray-600 text-sm">
                      Tampa Bay's funnel shape amplifies storm surge. Many Tampa neighborhoods—from 
                      Davis Islands to South Tampa to Hyde Park—face significant surge risk. Summer 
                      thunderstorms bring flash flooding. Understanding NFIP vs. standard policy 
                      coverage is critical for Tampa property owners.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Insurance Market Crisis</h4>
                    <p className="text-gray-600 text-sm">
                      Major carriers have withdrawn from Florida, premiums have skyrocketed, and 
                      coverage is increasingly difficult to obtain. In this environment, proper 
                      claim documentation and presentation is more critical than ever. FCS's 
                      insurance expertise helps Tampa property owners navigate this challenging market.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Aging Commercial Infrastructure</h4>
                    <p className="text-gray-600 text-sm">
                      Many Tampa commercial buildings and high-rises were constructed before modern 
                      building codes. When disaster strikes, repairs often trigger code upgrade 
                      requirements—significantly increasing project scope and cost. FCS helps 
                      Tampa property owners document and claim code-required improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Tampa Areas We Serve
              </h3>
              <p className="text-gray-600 mb-6">
                FCS provides insurance restoration services throughout Tampa and Hillsborough County, 
                from waterfront properties to commercial districts to residential neighborhoods.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
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

              {/* Hillsborough County Resources */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Hillsborough County Emergency Resources
                </h4>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Hillsborough County Emergency Management: (813) 236-3800</li>
                  <li>• Tampa Building Department: (813) 274-3100</li>
                  <li>• Florida Division of Emergency Management</li>
                  <li>• National Hurricane Center forecasts</li>
                </ul>
                <p className="text-blue-800 text-sm mt-4">
                  After documenting damage and contacting your insurer, call FCS for professional 
                  damage assessment and insurance restoration services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Claim Process Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              The Insurance Claim Process: How FCS Helps Tampa Property Owners
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              From initial documentation through final payment, our 43 years of claims experience 
              guides every step of your Tampa insurance restoration project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-green-dark font-bold text-xl">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Unlike contractors who learn insurance by guesswork, FCS's process was developed 
              from inside the insurance industry. We know what carriers need because we used to be them.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-8 rounded-lg hover:bg-amber-400 transition-colors"
            >
              Start Your Tampa Claim <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose FCS Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Tampa Property Owners Choose Florida Construction Specialists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                43 Years Insurance Experience
              </h3>
              <p className="text-gray-600">
                Seven years as an adjuster, 28 years as a restoration contractor. We understand 
                insurance claims from both sides—knowledge that directly benefits Tampa property 
                owners through faster claims and better settlements.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Prime Contractor Accountability
              </h3>
              <p className="text-gray-600">
                FCS always serves as prime contractor, never a subcontractor. Your Tampa project 
                gets direct accountability, single-point responsibility, and our full $25M 
                bonding capacity backing every commitment.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Large Loss Specialists
              </h3>
              <p className="text-gray-600">
                We specialize in claims from $250,000 to $25 million—the complex Tampa projects 
                where insurance expertise matters most. Our portfolio includes the $12.5M Turner 
                Agri-Civic Center and major commercial restorations throughout Tampa Bay.
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
                Request Your Tampa Insurance Restoration Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're facing new disaster damage, dealing with an underpaid claim, or 
                planning disaster preparedness for your Tampa property, FCS's 43 years of insurance 
                expertise is available to help protect your interests.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Comprehensive damage assessment by insurance experts
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Certified Xactimate estimates that adjusters recognize
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Documentation meeting carrier requirements
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    43 years experience on both sides of the claims process
                  </span>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Emergency Response Available</h3>
                <p className="text-gray-200 mb-4">
                  For immediate assistance with Tampa disaster damage, contact our team directly:
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-lg hover:bg-amber-400 transition-colors"
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
        title="Tampa Insurance Restoration FAQs"
        description="Common questions about insurance restoration, claims process, and disaster recovery for Tampa, Florida commercial and residential properties."
      />

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving Tampa and Hillsborough County
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Florida Construction Specialists provides insurance restoration services throughout 
              Tampa, from Downtown and Hyde Park to South Tampa, Westshore, Carrollwood, New Tampa, 
              and surrounding Hillsborough County communities.
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
      <section className="section bg-gradient-to-br from-red-800 via-red-900 to-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Tampa's Insurance Expert Contractor
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            When disaster strikes your Tampa property, trust the contractor with 43 years of 
            insurance industry experience from both sides of the claims process. Faster claims, 
            better documentation, more complete settlements—that's the FCS difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Damage Assessment
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
