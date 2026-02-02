import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, AlertTriangle, FileText, Wrench, Users, DollarSign, Home, FileCheck, Scale, Umbrella, Wind, Droplets, HardHat } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Insurance Restoration Sarasota FL | Hurricane Ian Recovery | 43 Years Claims Experience | FCS",
  description: "Sarasota insurance restoration contractor with 43 years claims experience from adjuster to contractor. Hurricane Ian recovery specialists. Luxury property claims, barrier island restoration on Siesta Key, Longboat Key, Lido Key. $250K-$50M projects.",
  keywords: "insurance restoration Sarasota, Hurricane Ian restoration Sarasota, flood damage Siesta Key, luxury property restoration Sarasota, Longboat Key storm damage, Lido Key hurricane repair, insurance claim contractor Sarasota, high-value home restoration",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/disaster-recovery/" },
  { name: "Insurance Restoration Sarasota", href: "/insurance-restoration-sarasota/" },
];

const insuranceExperience = [
  { stat: "43", label: "Years Insurance Industry Experience" },
  { stat: "7", label: "Years as Insurance Adjuster" },
  { stat: "28", label: "Years Insurance Restoration" },
  { stat: "$75M+", label: "In Claims Handled" },
];

const sarasotaAreas = [
  {
    area: "Siesta Key",
    description: "World-famous barrier island with high-value beachfront properties. Extensive Hurricane Ian surge damage requiring specialized coastal restoration and luxury finish work.",
    riskLevel: "Extreme",
  },
  {
    area: "Longboat Key",
    description: "Exclusive barrier island spanning Sarasota and Manatee counties. Multi-million dollar estates requiring museum-quality restoration and comprehensive insurance documentation.",
    riskLevel: "Extreme",
  },
  {
    area: "Lido Key",
    description: "St. Armands Circle adjacent island community. High-value condominiums and homes facing Gulf exposure with complex HOA insurance coordination requirements.",
    riskLevel: "Extreme",
  },
  {
    area: "St. Armands",
    description: "Historic shopping district and residential area connected to Lido Key. Commercial properties and residences with unique preservation requirements.",
    riskLevel: "High",
  },
  {
    area: "Downtown Sarasota",
    description: "Urban core including bayfront high-rises, cultural district buildings, and historic properties. Complex commercial claims and multi-story restoration.",
    riskLevel: "High",
  },
  {
    area: "Southgate",
    description: "Established mainland neighborhood with mid-century homes and proximity to Siesta Key. Frequent wind damage and localized flooding during major storms.",
    riskLevel: "Moderate",
  },
];

const luxuryFinishes = [
  "Italian marble and natural stone flooring",
  "Custom millwork and architectural woodwork",
  "High-end appliance systems (Sub-Zero, Wolf, Miele)",
  "Smart home automation and integration",
  "Designer lighting and electrical systems",
  "Custom cabinetry and built-ins",
  "Specialty plaster and Venetian finishes",
  "Impact-resistant windows and luxury hardware",
  "Pool houses, outdoor kitchens, and lanais",
  "Wine cellars and climate-controlled storage",
];

const ianLessons = [
  {
    title: "Documentation Is Everything",
    description: "Hurricane Ian claims that were properly documented from day one processed 60% faster. Pre-loss inventories, immediate post-storm photography, and systematic damage cataloging made the difference between full recovery and underpayment.",
    icon: FileText,
  },
  {
    title: "Flood vs. Wind Matters",
    description: "Ian brought both surge flooding and Category 4 winds to Sarasota. Properties with separate flood and windstorm policies faced complex attribution questions. Understanding which policy covers what damage requires insurance expertise.",
    icon: Scale,
  },
  {
    title: "Supplemental Claims Are Normal",
    description: "Hidden damage from Ian continues to emerge in Sarasota properties years later. Moisture behind walls, compromised structural connections, and delayed mold development warrant supplemental claims—but require expert documentation.",
    icon: FileCheck,
  },
  {
    title: "Code Upgrades Add Complexity",
    description: "Properties damaged beyond 50% required complete code upgrades under Florida's substantial improvement rules. Many Sarasota owners were surprised by elevation requirements and impact window mandates.",
    icon: HardHat,
  },
];

const sarasotaFaqs = [
  {
    question: "What makes FCS different from other insurance restoration contractors in Sarasota?",
    answer: "FCS's owner brings 43 years of insurance industry experience—7 years as a field adjuster for Allstate and 28 years running a statewide insurance restoration firm. This isn't just construction experience; it's deep expertise from both sides of the claims process. We know exactly how adjusters evaluate claims, what documentation carriers require, and how to present scope of work that gets approved. For Sarasota's high-value properties, this expertise means faster claim processing, fewer disputes, and more complete settlements. We've handled claims as the adjuster, built claims as the contractor, and navigated disputes through appraisal and arbitration.",
  },
  {
    question: "How does FCS handle Hurricane Ian damage that's still being discovered in Sarasota?",
    answer: "Hurricane Ian struck Sarasota in September 2022, but damage continues to emerge in many properties. Hidden moisture behind walls, compromised roof deck attachments, corroding electrical systems, and delayed mold development are common discoveries during renovation or inspection. FCS specializes in supplemental claims—documenting newly discovered damage, preparing detailed scope changes, and negotiating with carriers for additional coverage. Our experience shows that 30-40% of large Ian claims in Sarasota warranted supplements that property owners didn't know they could file.",
  },
  {
    question: "What areas of Sarasota faced the worst Hurricane Ian damage?",
    answer: "Sarasota's barrier islands—Siesta Key, Longboat Key, and Lido Key—experienced the most severe damage from Hurricane Ian's storm surge, which reached 6-8 feet in some locations. Bayfront properties in downtown Sarasota, waterfront homes along Sarasota Bay, and low-lying areas throughout the county also sustained significant flooding. Wind damage affected the entire county, with older roofing systems and pre-hurricane-code construction suffering the most extensive damage. Many properties in these areas are still undergoing restoration or haven't yet begun reconstruction.",
  },
  {
    question: "How do you handle luxury property insurance claims in Sarasota?",
    answer: "High-value properties on Longboat Key, Siesta Key, and Lido Key require specialized claim handling. Standard insurance estimates often undervalue custom finishes, imported materials, and specialty systems. FCS provides detailed documentation of luxury components including custom millwork, natural stone, designer fixtures, smart home systems, and architectural details. We work with specialty appraisers when needed and understand the extended replacement cost provisions common in high-value homeowner policies. Our goal is ensuring your claim captures the true cost of restoring your property to its pre-loss condition.",
  },
  {
    question: "What's the difference between NFIP flood coverage and private flood insurance for Sarasota properties?",
    answer: "NFIP (National Flood Insurance Program) coverage maxes out at $250,000 for residential buildings—inadequate for most Sarasota barrier island properties. NFIP also only covers direct flood contact damage; moisture migration and mold above the flood line are excluded. Private flood policies may offer higher limits ($1M+), broader coverage terms, and replacement cost provisions. However, policy terms vary significantly. Sarasota property owners should review their flood coverage carefully—many Ian victims discovered coverage gaps when filing claims. FCS helps property owners understand what their policies actually cover.",
  },
  {
    question: "How long does insurance restoration typically take in Sarasota?",
    answer: "Timeline varies significantly based on damage extent and insurance process efficiency. For large loss projects ($500K+), expect: emergency stabilization (1-5 days), insurance adjuster inspection (1-4 weeks post-filing), scope agreement (4-12 weeks), permitting through Sarasota County (6-12 weeks for major work), construction (4-12 months depending on scope). Complete rebuilds of luxury properties can extend to 18-24 months. Ian-related claims still being processed in 2024-2025 face additional delays from carrier backlogs and contractor availability constraints.",
  },
  {
    question: "Does FCS work directly with insurance companies in Sarasota?",
    answer: "Yes. We have extensive experience working directly with all major insurance carriers, independent adjusters, and third-party administrators handling Sarasota claims. Our background includes direct contracts with major carriers and participation in catastrophe response programs. We communicate in the insurance industry's language, use Xactimate estimating software, and provide documentation that meets carrier requirements. This professional approach typically results in smoother claim processing. However, when disputes arise, we also have experience with the appraisal and arbitration processes.",
  },
  {
    question: "What should I do if my Sarasota insurance claim was denied or underpaid?",
    answer: "Underpaid claims are common after major events like Hurricane Ian when carriers face overwhelming claim volumes. First, request a detailed written explanation of the denial or payment calculation. Review your policy for applicable coverage, limits, and exclusions. FCS can provide an independent damage assessment and certified estimate to compare against the carrier's determination. If significant discrepancies exist, options include supplemental documentation, formal carrier appeals, the appraisal process, or engaging a public adjuster or attorney. Our 43 years of claims experience helps identify the best path forward for your specific situation.",
  },
  {
    question: "How do Sarasota County building codes affect insurance restoration?",
    answer: "Florida Building Code and Sarasota County amendments significantly impact restoration scope. If repair costs exceed 50% of building value, the entire structure must meet current code—not just damaged portions. For barrier island properties, this often triggers elevation requirements (minimum FEMA base flood elevation plus freeboard), impact-resistant windows and doors throughout, enhanced roof tie-downs, and updated electrical and plumbing. These code upgrades can add 20-40% to project costs. Code upgrade coverage in your policy, if available, helps offset these costs. FCS ensures all restoration work meets current requirements while documenting code-related costs for insurance purposes.",
  },
  {
    question: "What documentation does FCS provide for Sarasota insurance claims?",
    answer: "FCS provides comprehensive documentation including: detailed initial damage assessment with photo and video evidence, moisture mapping and testing reports, Xactimate estimates matching insurance industry standards, line-item scope of work with material specifications, code upgrade requirements and cost breakdowns, daily progress reports during construction, change order documentation for supplemental claims, final completion documentation with warranty information. For luxury properties, we include detailed documentation of custom finishes, specialty materials, and systems requiring replacement. This thorough documentation supports maximum claim recovery.",
  },
];

const costData = [
  { category: "Water/Flood Damage Restoration", range: "$18,000 - $85,000", timeline: "2-6 weeks", notes: "Higher on barrier islands due to salt water damage" },
  { category: "Hurricane Roof Repair/Replacement", range: "$55,000 - $550,000", timeline: "6-16 weeks", notes: "Luxury roofing materials extend timeline" },
  { category: "Fire & Smoke Damage Restoration", range: "$95,000 - $2.2M+", timeline: "4-12 months", notes: "Luxury finishes require specialty restoration" },
  { category: "Complete Property Reconstruction", range: "$500,000 - $15M+", timeline: "12-24 months", notes: "Barrier island properties with full code upgrades" },
];

const processSteps = [
  { step: 1, title: "Damage Assessment & Documentation", description: "Comprehensive inspection with detailed photo/video documentation, moisture mapping, and scope development tailored to insurance requirements" },
  { step: 2, title: "Insurance Claim Support", description: "Xactimate estimates, adjuster meeting coordination, coverage analysis, and claims negotiation leveraging 43 years of insurance experience" },
  { step: 3, title: "Scope Agreement & Planning", description: "Detailed restoration planning, engineering assessments, material specifications, and timeline development once coverage is confirmed" },
  { step: 4, title: "Permitting & Approvals", description: "Navigate Sarasota County permitting, FEMA requirements for flood zones, and barrier island building regulations" },
  { step: 5, title: "Professional Restoration", description: "Quality construction by licensed professionals with ongoing progress documentation and insurance coordination" },
  { step: 6, title: "Completion & Closeout", description: "Final inspections, warranty documentation, insurance sign-off, and supplemental claim filing if additional damage was discovered" },
];

export default function InsuranceRestorationSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Insurance Restoration" />
      <ServiceSchema
        serviceName="Insurance Restoration Services"
        serviceDescription="Professional insurance restoration services in Sarasota, FL with 43 years of claims experience. Hurricane Ian recovery specialists serving Siesta Key, Longboat Key, Lido Key, and Sarasota County. Luxury property claims expertise with projects from $250,000 to $25 million. Direct insurance company coordination."
        city="Sarasota"
        minPrice="250000"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Insurance Restoration Services in Sarasota, FL"
        description="Comprehensive guide to insurance restoration services in Sarasota from Florida's most experienced insurance restoration contractor. Hurricane Ian recovery, luxury property claims, barrier island expertise, and 43 years of claims experience from adjuster to contractor."
        datePublished="2024-01-15"
        dateModified="2025-01-18"
        slug="/insurance-restoration-sarasota/"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Hurricane Ian damage restoration in Sarasota by Florida Construction Specialists"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/95 via-brand-green-forest/90 to-brand-green-dark/95" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Sarasota County, Florida</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 ml-2">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-white font-semibold">43 Years Insurance Experience</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Insurance Restoration in Sarasota:<br />
              <span className="text-brand-gold">The Claims Expert's Contractor</span>
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              When Hurricane Ian devastated Sarasota's barrier islands in 2022, property owners discovered that insurance 
              restoration isn't just about construction—it's about navigating one of the most complex claims environments in Florida history.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              FCS brings 43 years of insurance industry experience: 7 years as an Allstate adjuster, 28 years operating 
              a statewide insurance restoration firm, and unmatched expertise in high-value property claims. We don't just 
              rebuild—we ensure your claim captures every dollar you're entitled to recover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Claim Assessment
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

      {/* Insurance Experience Stats */}
      <section className="py-8 bg-brand-green-dark border-t border-white/10">
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

      {/* Post-Ian Reality Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-100 rounded-xl">
                <Wind className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Sarasota After Hurricane Ian: The Ongoing Recovery
              </h2>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Hurricane Ian Impact: September 28, 2022</h3>
                  <p className="text-amber-900">
                    Hurricane Ian made landfall as a Category 4 storm, bringing catastrophic storm surge of 6-8 feet 
                    to Sarasota's barrier islands and sustained winds exceeding 150 mph. Two years later, many 
                    properties remain unrestored, claims remain disputed, and hidden damage continues to emerge.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Hurricane Ian transformed Sarasota's insurance landscape. What was already Florida's most complex 
                claims environment became exponentially more challenging as property owners faced unprecedented 
                damage to some of the state's most valuable real estate.
              </p>

              <p className="mb-6">
                The barrier islands—Siesta Key, Longboat Key, Lido Key—experienced the worst of Ian's fury. Storm 
                surge inundated ground floors and garages. Wind tore roofs from luxury estates. Salt water corroded 
                electrical systems and HVAC equipment. Properties that appeared salvageable from the outside often 
                revealed catastrophic damage once walls were opened.
              </p>

              <p className="mb-6">
                For Sarasota property owners, the insurance claims process became nearly as challenging as the 
                storm damage itself. Carriers faced overwhelming claim volumes. Adjusters struggled to properly 
                assess luxury finishes and custom construction. Disputes over flood versus wind damage—and which 
                policy covers what—led to delays, underpayments, and denials that many property owners are still 
                fighting years later.
              </p>

              <p className="mb-6">
                This is precisely the environment where FCS's 43 years of insurance industry experience proves 
                invaluable. We've handled claims from both sides—as the adjuster making coverage decisions and 
                as the contractor documenting damage and rebuilding properties. We understand why claims get 
                denied, what documentation supports approval, and how to navigate disputes when they arise.
              </p>

              <p>
                For Sarasota property owners still dealing with Ian damage—whether actively under construction, 
                awaiting claim resolution, or just discovering hidden damage—FCS provides the insurance expertise 
                and construction capability to achieve full recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ian Lessons Learned */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Lessons from Hurricane Ian Claims in Sarasota
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            After processing millions in Ian-related claims throughout Sarasota County, we've identified critical 
            factors that separate successful claim recoveries from underpaid or denied claims.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {ianLessons.map((lesson) => (
              <div key={lesson.title} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-green/10 rounded-lg">
                    <lesson.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark text-xl mb-2">{lesson.title}</h3>
                    <p className="text-gray-600">{lesson.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Sarasota's Barrier Islands: High-Value Property Restoration
              </h2>

              <p className="text-gray-600 mb-6">
                Sarasota County encompasses some of Florida's most valuable residential real estate. Longboat Key 
                estates routinely exceed $5 million. Siesta Key beachfront properties command premium prices for 
                their proximity to America's #1 rated beach. Lido Key condominiums and homes offer luxury living 
                steps from St. Armands Circle. These properties require restoration contractors who understand 
                not just construction, but the unique insurance considerations of high-value claims.
              </p>

              <p className="text-gray-600 mb-8">
                Standard insurance restoration contractors often lack experience with luxury properties. They 
                submit estimates based on standard finishes when your home features imported marble, custom 
                millwork, and designer fixtures. They don't understand extended replacement cost provisions or 
                how to document custom features for proper claim valuation. The result is systematic underpayment 
                of high-value claims.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
                Sarasota Service Areas & Risk Assessment
              </h3>

              <div className="space-y-4 mb-8">
                {sarasotaAreas.map((area) => (
                  <div key={area.area} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-brand-green-dark text-lg">{area.area}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        area.riskLevel === 'Extreme' ? 'bg-red-100 text-red-700' :
                        area.riskLevel === 'High' ? 'bg-amber-100 text-amber-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {area.riskLevel} Risk
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
                Luxury Finish Restoration Expertise
              </h3>

              <p className="text-gray-600 mb-4">
                Sarasota's luxury properties feature finishes and systems that require specialized restoration 
                approaches. Standard contractors may not recognize—or know how to properly document—custom 
                elements that significantly impact claim value. FCS ensures every luxury component is properly 
                identified, documented, and included in your claim scope:
              </p>

              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {luxuryFinishes.map((finish) => (
                  <div key={finish} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{finish}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
                Understanding Flood vs. Wind Coverage in Sarasota
              </h3>

              <p className="text-gray-600 mb-4">
                Hurricane Ian brought both storm surge flooding and Category 4 winds to Sarasota, creating 
                complex coverage questions that many property owners are still navigating. Understanding which 
                policy covers what damage is critical for maximum claim recovery:
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <Droplets className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">Flood Insurance (NFIP or Private)</h4>
                    <p className="text-blue-900 text-sm">
                      Covers damage from rising water—storm surge, river overflow, or surface water accumulation. 
                      NFIP only covers direct flood contact (not moisture above the flood line). Private flood 
                      policies may have broader coverage but vary significantly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wind className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-800 mb-1">Windstorm Insurance</h4>
                    <p className="text-blue-900 text-sm">
                      Covers damage from wind and wind-driven rain. If wind breaches the building envelope 
                      (broken window, torn roof), resulting water damage is generally covered under wind policy. 
                      Separate deductible typically applies for named storms.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-8">
                FCS's insurance background proves invaluable in these complex attribution situations. We 
                document damage in ways that clearly establish causation, helping ensure appropriate coverage 
                is applied. When damage involves both flood and wind, proper documentation can mean the 
                difference between partial and full recovery.
              </p>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Sarasota Property's Insurance Restoration <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Insurance Claim Support</h3>
                <p className="text-gray-200 mb-4">
                  43 years of insurance experience at your service. We understand claims from both sides—adjuster 
                  and contractor—and use that expertise to maximize your recovery.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full mb-3"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
                <Link
                  href="/contact/"
                  className="flex items-center justify-center gap-2 bg-white/20 text-white font-semibold py-3 px-6 rounded-full hover:bg-white/30 transition-colors w-full"
                >
                  Request Claim Assessment
                </Link>
              </div>

              {/* Hurricane Ian Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-amber-800 mb-2">Hurricane Ian Claims</h4>
                    <p className="text-amber-900 text-sm mb-3">
                      Still dealing with Ian damage or an unresolved claim? Many Sarasota property owners 
                      qualify for supplemental claims as hidden damage emerges.
                    </p>
                    <Link
                      href="/contact/"
                      className="text-amber-700 font-semibold text-sm hover:text-amber-900"
                    >
                      Get a Second Opinion →
                    </Link>
                  </div>
                </div>
              </div>

              <RelatedServices city="Sarasota" currentService="insurance-restoration" />
              <NearbyLocations currentCity="Sarasota" service="disaster-recovery" serviceName="Disaster Recovery" />
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Sarasota Insurance Restoration Costs & Timelines
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Sarasota's luxury property market and barrier island construction requirements typically result in 
            15-25% higher restoration costs than mainland Tampa Bay. These ranges reflect our experience with 
            Sarasota County projects—actual costs depend on property specifics and insurance coverage.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Restoration Category</th>
                  <th className="px-6 py-4 text-left">Typical Cost Range</th>
                  <th className="px-6 py-4 text-left">Timeline</th>
                  <th className="px-6 py-4 text-left">Sarasota Considerations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-brand-green-dark">{item.category}</td>
                    <td className="px-6 py-4 text-gray-700">{item.range}</td>
                    <td className="px-6 py-4 text-gray-700">{item.timeline}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 text-center mt-4">
            * Costs as of 2025. Barrier island properties typically 15-25% above mainland rates due to access, 
            materials, and code requirements. Projects over $1M common for luxury properties.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            The FCS Insurance Restoration Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our process is built on 43 years of insurance industry experience. Every step is designed to 
            support maximum claim recovery while delivering quality restoration for Sarasota property owners.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sarasota-Specific Expertise */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Sarasota County Expertise That Matters
              </h2>
              <p className="text-gray-200 mb-6">
                Insurance restoration in Sarasota requires contractors who understand the unique combination 
                of luxury properties, barrier island construction requirements, and post-Ian claims complexity. 
                FCS brings both the insurance expertise and local knowledge required for successful recovery.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Sarasota County Building Department:</strong> Established relationships expedite permitting for major restoration projects, including complex barrier island work</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>FEMA Flood Zone Requirements:</strong> Deep understanding of substantial improvement rules, elevation requirements, and flood-resistant construction mandated on barrier islands</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Luxury Property Experience:</strong> Extensive portfolio of high-value restorations on Longboat Key, Siesta Key, and Lido Key with specialty finish expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Hurricane Ian Claims Knowledge:</strong> Direct experience with the specific challenges of Ian claims including carrier backlogs, attribution disputes, and supplemental documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span><strong>Sarasota County Emergency Management:</strong> Understanding of local emergency protocols, debris removal coordination, and post-storm restoration priorities</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$75M+</div>
                <div className="text-gray-300 text-sm">Insurance Claims Handled</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">250+</div>
                <div className="text-gray-300 text-sm">Properties Restored</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Shield className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">43</div>
                <div className="text-gray-300 text-sm">Years Insurance Expertise</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <Home className="w-10 h-10 text-brand-gold mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">$25M</div>
                <div className="text-gray-300 text-sm">Maximum Project Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Sarasota Chooses FCS for Insurance Restoration
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Scale className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Both Sides of Claims</h3>
              <p className="text-gray-600">
                43 years experience from both adjuster and contractor perspectives. We know how claims are 
                evaluated, what documentation matters, and how to present scope that gets approved.
              </p>
            </div>
            <div className="card text-center p-8">
              <Award className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Luxury Property Expertise</h3>
              <p className="text-gray-600">
                Extensive experience with Sarasota's high-value properties. We understand custom finishes, 
                know how to document luxury components, and ensure your claim captures true replacement cost.
              </p>
            </div>
            <div className="card text-center p-8">
              <FileCheck className="w-14 h-14 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">Complete Claim Support</h3>
              <p className="text-gray-600">
                From initial documentation through supplemental claims and dispute resolution. We guide 
                the entire process, ensuring nothing is overlooked and maximum recovery is achieved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={sarasotaFaqs}
        title="Sarasota Insurance Restoration FAQs"
      />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Sarasota's Insurance Restoration Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're still recovering from Hurricane Ian, facing a new insurance claim, or discovering 
            hidden damage in your property, FCS brings 43 years of insurance expertise to ensure maximum 
            recovery. Serving Siesta Key, Longboat Key, Lido Key, St. Armands, Downtown Sarasota, and all 
            of Sarasota County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Claim Assessment
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
