import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, AlertTriangle, FileCheck, Users, Wrench, ClipboardCheck, Home, DollarSign, HardHat, FileText, Droplets, Wind, Flame, Search } from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceAreaLinks } from "@/components/InternalLinks";
import { ContentImage, ContentParallax } from "@/components/ContentImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storm & Disaster Recovery | 43 Years Insurance Restoration Experience",
  description: "Tampa Bay's most experienced insurance restoration contractor. 43 years claims experience from both sides—adjuster AND contractor. Large loss commercial and residential disaster recovery. Hurricane, flood, fire, and storm damage restoration.",
  keywords: "disaster recovery Tampa, storm damage restoration Florida, insurance restoration contractor, large loss restoration, hurricane damage repair Tampa Bay, commercial property restoration, flood damage restoration Florida, NFIP claims, insurance claim contractor",
};

const coreServices = [
  "Hurricane damage restoration",
  "Storm damage assessment and repair",
  "Fire and smoke damage restoration",
  "Flood damage recovery",
  "Complete insurance claim management",
  "Large loss commercial restoration",
  "Multi-family and HOA disaster recovery",
  "Complete property reconstruction",
  "Emergency stabilization and tarping",
  "Supplemental claim documentation"
];

const insuranceExperience = [
  { stat: "43", label: "Years Insurance Industry Experience" },
  { stat: "7", label: "Years as Insurance Adjuster (Allstate)" },
  { stat: "28", label: "Years Insurance Restoration Contractor" },
  { stat: "$75M+", label: "In Claims Handled" }
];

const faqs = [
  {
    question: "What makes FCS different from other restoration contractors?",
    answer: "FCS's owner has 43 years of insurance industry experience—7 years as a field adjuster for Allstate and 28 years running a statewide insurance restoration firm. This dual perspective from both sides of the claims process is extremely rare in the construction industry. We understand exactly how adjusters evaluate claims, what documentation carriers require, and how to present scope of work that gets approved. This expertise results in faster claim processing, fewer disputes, and more complete settlements for our clients."
  },
  {
    question: "Do you work directly with insurance companies?",
    answer: "Yes, FCS has extensive experience working directly with all major insurance carriers, independent adjusters, and claims professionals. Our background includes direct contracts with major carriers and participation in catastrophe response programs. We speak the insurance industry's language, use industry-standard estimating software (Xactimate), and provide documentation that meets carrier requirements. This professional relationship with carriers often results in smoother claim processing."
  },
  {
    question: "What is considered a 'large loss' property claim?",
    answer: "In the insurance industry, large loss typically refers to claims exceeding $250,000. These claims require experienced contractors who understand complex insurance processes, can provide certified estimates, and have the bonding capacity and resources to handle substantial projects. FCS specializes in large loss claims ranging from $250,000 to $25 million or more, including complete building rebuilds, major hurricane damage, and multi-building commercial losses."
  },
  {
    question: "How quickly can FCS respond to disaster situations?",
    answer: "While FCS doesn't handle small emergency repairs, we mobilize quickly for large loss situations. Our team can begin damage assessment within 24-48 hours for significant losses. For major disasters, we have experience deploying to catastrophe zones—including Hurricane Harvey response in Texas and Hurricane Irma throughout Florida. Our emergency response includes immediate site assessment, stabilization recommendations, and preliminary scope development."
  },
  {
    question: "Does FCS handle the entire insurance claim process?",
    answer: "FCS assists throughout the entire claims process including comprehensive damage documentation, certified Xactimate estimates, adjuster meeting coordination, scope negotiations, and supplemental claim preparation. We provide the detailed documentation that supports fair settlements. While property owners maintain control of their claims, our expertise guides the process and helps ensure nothing is overlooked."
  },
  {
    question: "What is the difference between NFIP flood coverage and standard property insurance?",
    answer: "The National Flood Insurance Program (NFIP) operates under completely different rules than standard property insurance. NFIP only covers direct physical damage from flood water—it specifically excludes damage from moisture, mold, or water that enters through areas not directly contacted by flood water. This is a crucial distinction that many property owners don't understand until claim time. Additionally, NFIP has specific documentation requirements and strict timelines that must be followed."
  },
  {
    question: "How does FCS discover hidden damage that initial inspections miss?",
    answer: "Our 43 years of claims experience has taught us exactly where hidden damage occurs after various types of disasters. We use moisture meters, thermal imaging, and systematic inspection protocols to find damage that surface inspections miss. This includes moisture behind walls, structural movement, hidden mold development, and damage to building systems. Finding this damage early allows for proper documentation and supplemental claims before problems worsen."
  },
  {
    question: "What is a supplemental claim and when is it needed?",
    answer: "A supplemental claim is filed when additional damage is discovered after the initial claim has been processed. This is extremely common in large loss situations where hidden damage only becomes apparent during demolition or reconstruction. FCS has extensive experience preparing and negotiating supplemental claims. Our thorough documentation of discovered damage, including photos, measurements, and detailed scope, supports successful supplement processing."
  },
  {
    question: "Can FCS help if my insurance claim was denied or underpaid?",
    answer: "Yes. Our background includes experience with the appraisal and arbitration processes when claims become disputed. We can review existing claims, provide independent certified estimates, and help document why additional coverage may be warranted. While FCS is not a public adjuster, our expertise in claims documentation and negotiation often helps resolve disputes. For severely contested claims, we can recommend qualified public adjusters or attorneys."
  },
  {
    question: "What should I do immediately after disaster damage occurs?",
    answer: "First, ensure safety and document everything with photos and video before any cleanup. Contact your insurance company to report the claim. Take reasonable steps to prevent further damage (tarping, board-up) but don't begin permanent repairs until the damage is documented. Keep all receipts for emergency expenses. For large losses, contact FCS early—our initial assessment can help ensure proper documentation from the start and identify damage that might otherwise be missed."
  },
  {
    question: "Does FCS work on both commercial and residential properties?",
    answer: "Yes, FCS handles both commercial and high-value residential disaster recovery. Our commercial experience includes municipal buildings, manufacturing facilities, retail centers, hotels, and multi-family complexes. Residential work includes custom homes and high-value properties. For both sectors, we function as prime general contractor—never a subcontractor—maintaining full project control and accountability."
  },
  {
    question: "How does the insurance restoration process differ for commercial properties?",
    answer: "Commercial claims are significantly more complex, often involving business interruption coverage, multiple insurance policies, tenant considerations, code upgrade requirements, and higher documentation standards. Commercial claims also typically involve more parties—property owners, tenants, lenders, and multiple insurance carriers. FCS's experience with large commercial losses provides the expertise needed to navigate these complexities."
  },
  {
    question: "What Florida Building Code requirements apply to hurricane damage repairs?",
    answer: "Florida Building Code has specific requirements for repairs versus replacement. Generally, if damage exceeds 50% of the building's value, the entire building must be brought up to current code—not just the damaged portions. This can significantly impact project scope and cost. Additionally, window/door replacements in wind-borne debris regions must meet current impact-resistance or protection requirements. FCS ensures all work meets current code requirements."
  },
  {
    question: "How long does a typical large loss restoration project take?",
    answer: "Timeline varies significantly based on damage extent, building complexity, and insurance process efficiency. A straightforward commercial restoration might take 6-12 months from damage to completion. Complex projects like complete rebuilds can extend to 18-24 months. The insurance claim process itself—from initial inspection through final payment—often takes 3-6 months for large losses. FCS provides detailed schedules during pre-construction planning."
  },
  {
    question: "What areas does FCS serve for disaster recovery?",
    answer: "FCS provides disaster recovery services throughout the greater Tampa Bay region including Hillsborough County (Tampa, Brandon, Plant City), Pinellas County (St. Petersburg, Clearwater), Pasco County, Polk County (Lakeland, Winter Haven), Manatee County (Bradenton), and Sarasota County. For major catastrophe events, we have deployed statewide and to other states including Texas during Hurricane Harvey."
  },
  {
    question: "Is FCS licensed, bonded, and insured for large projects?",
    answer: "Yes. FCS holds Florida State Certified General Contractor license CGC#1522434, with bonding capacity for projects up to $25 million. We maintain comprehensive general liability insurance, workers' compensation coverage, and builder's risk insurance options. Our licensing, bonding, and insurance meet the requirements of all major insurance carriers and large commercial property owners."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Disaster Recovery", href: "/disaster-recovery/" },
];

export default function DisasterRecoveryPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Storm & Disaster Recovery"
        serviceDescription="Tampa Bay's most experienced insurance restoration contractor with 43 years claims experience. Large loss commercial and residential disaster recovery including hurricane, flood, fire, and storm damage restoration."
        minPrice="250000"
      />

      <Breadcrumb items={[
        { name: "Services", href: "/services/" },
        { name: "Disaster Recovery", href: "/disaster-recovery/" },
      ]} />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Hurricane damage restoration by Florida Construction Specialists"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">43 Years Insurance Industry Experience</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Storm & Disaster Recovery:<br />
              <span className="text-brand-gold">The Insurance Expert's Contractor</span>
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              When disaster strikes your commercial property or high-value home, you need a contractor 
              who truly understands insurance claims—from both sides of the process.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              FCS brings 43 years of insurance industry experience: 7 years as an Allstate adjuster, 
              28 years operating a statewide insurance restoration firm, and deep expertise in large loss 
              claims from $250,000 to $25 million. With OSHA-certified safety associates on staff, we speak insurance fluently because we've lived it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Disaster Assessment
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

      {/* Executive Summary */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              The Contractor Insurance Companies Respect
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Florida Construction Specialists occupies a unique position in the disaster recovery industry. 
                Our founder's career began in 1982 as a field adjuster for Allstate Insurance, spending seven 
                years evaluating claims, determining coverage, and understanding exactly how carriers assess 
                damage and process large losses. That insider knowledge became the foundation for a 28-year 
                career operating a statewide insurance restoration firm that became a trusted name for major 
                carriers throughout Florida.
              </p>
              
              <p className="mb-6">
                This dual perspective—having worked both as the adjuster evaluating claims AND as the contractor 
                rebuilding properties—is extraordinarily rare in the construction industry. Most contractors 
                learn insurance processes through trial and error. We learned them from the inside, understanding 
                not just what adjusters look for, but why they look for it, how coverage decisions are made, 
                and what documentation actually supports claim approval.
              </p>
              
              <p className="mb-6">
                Today, FCS serves as the prime general contractor for large loss disaster recovery throughout 
                Tampa Bay. We specialize in commercial properties, municipal buildings, and high-value residential 
                reconstruction—the complex projects where insurance expertise matters most. Our portfolio includes 
                hurricane damage totaling tens of millions of dollars, major fire losses, flood recovery, and 
                complete property rebuilds.
              </p>
              
              <p className="mb-6">
                When you hire FCS, you're not just hiring a contractor. You're hiring 43 years of claims 
                experience that helps ensure your property is properly documented, your claim is fairly evaluated, 
                and your restoration meets both insurance requirements and building codes. We've handled claims 
                as the adjuster, we've built claims as the contractor, and we've navigated disputes through 
                appraisal and arbitration. This comprehensive experience translates to smoother projects, 
                faster claim resolution, and more complete settlements for our clients.
              </p>
              
              <p>
                For property owners facing significant disaster damage, FCS represents the rare combination of 
                construction excellence and insurance expertise. We understand that disaster recovery isn't just 
                about rebuilding—it's about navigating a complex process while protecting your financial interests. 
                That's what 43 years of insurance industry experience enables us to do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break - Hurricane Restoration */}
      <ContentParallax
        src="/images/hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp"
        alt="Hurricane damage restoration project in Florida"
        title="When Disaster Strikes, We Respond"
        subtitle="43 years of insurance restoration experience at your service"
        overlayOpacity={0.6}
      />

      {/* Hurricane Damage Restoration */}
      <section id="hurricane-restoration" className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <Wind className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Hurricane Damage Restoration
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                Florida's hurricane season brings the potential for catastrophic property damage every year. 
                From June through November, commercial and residential property owners face the risk of wind 
                damage, water intrusion, structural failure, and complete property loss. FCS has restored 
                properties after every major hurricane to impact Tampa Bay and Central Florida, accumulating 
                extensive experience with hurricane damage assessment, insurance claims, and reconstruction.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Understanding Hurricane Damage Categories</h3>
              <p className="mb-4">
                Hurricane damage presents in multiple forms, often simultaneously, making accurate assessment 
                critical for proper claim documentation. Direct wind damage occurs when sustained winds or gusts 
                physically impact the structure—tearing off roofing materials, breaking windows, collapsing 
                walls, or causing structural movement. This damage is typically covered under standard property 
                insurance policies, though deductibles for hurricane damage are often calculated as a percentage 
                of the building's insured value rather than a flat amount.
              </p>
              
              <p className="mb-4">
                Wind-driven rain creates a secondary damage category that many property owners don't fully 
                understand. When wind damages the building envelope—even small openings like a missing shingle 
                or compromised flashing—rain can enter the structure. This water damage is generally covered 
                as part of the windstorm claim because the wind created the opening that allowed water entry. 
                However, distinguishing wind-driven rain damage from flood damage becomes critical for coverage 
                determination. Flood damage requires separate flood insurance coverage.
              </p>

              <p className="mb-4">
                Structural damage from hurricanes ranges from obvious (collapsed sections, shifted walls) to 
                subtle (racked door frames, cracked foundations, compromised connections). Our assessment 
                protocols examine not just visible damage but indicators of structural movement that may 
                affect long-term building integrity. This includes checking door and window operations, 
                examining wall-to-roof connections, evaluating foundation condition, and assessing the 
                structural diaphragm.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Roof Damage Assessment</h3>
              <p className="mb-4">
                Roofing systems suffer the most hurricane damage, and proper assessment requires understanding 
                both obvious and hidden damage patterns. Visible damage includes missing shingles or tiles, 
                damaged flashing, compromised ridge caps, and torn underlayment. However, significant damage 
                often isn't visible from the ground or even from a casual roof inspection.
              </p>

              <p className="mb-4">
                Wind can damage shingles without removing them—breaking the seal strip that holds shingles 
                in place, causing granule loss that reduces shingle life, or creating creases that will 
                eventually fail. Metal roofing can sustain panel displacement, fastener loosening, or seam 
                separation. Tile roofs often experience cracked tiles (which may not be visible from above), 
                shifted tiles, and damaged underlayment beneath tiles that appear intact. Built-up and 
                modified bitumen commercial roofing can suffer membrane punctures, seam failures, and 
                flashing damage.
              </p>

              <p className="mb-4">
                Our roof assessments go beyond visual inspection to include thermal scanning for moisture 
                intrusion, systematic documentation of every roof section, and evaluation against the 
                specific roofing system manufacturer's damage criteria. This thorough approach ensures 
                all roof damage is captured in the initial claim documentation.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Emergency Stabilization: Tarping and Board-Up</h3>
              <p className="mb-4">
                After hurricane damage, property owners have a duty to mitigate further damage—and insurance 
                policies require reasonable mitigation efforts. Emergency tarping covers roof openings to 
                prevent additional water intrusion. Board-up services secure broken windows, doors, and 
                openings against weather and unauthorized entry. These emergency services are typically 
                covered under the insurance policy as part of the loss.
              </p>

              <p className="mb-4">
                However, the quality and completeness of emergency work matters significantly. Improper 
                tarping that allows continued water entry, or inadequate board-up that permits additional 
                damage, can complicate claims and may shift some responsibility to the property owner. 
                FCS coordinates with qualified emergency service providers and oversees stabilization efforts 
                to ensure proper protection of the property.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Restoration vs. Rebuild: Critical Decision Points</h3>
              <p className="mb-4">
                One of the most important decisions after hurricane damage is whether to restore the existing 
                structure or pursue complete reconstruction. This decision involves insurance coverage, 
                building codes, cost factors, and property owner goals.
              </p>

              <p className="mb-4">
                Florida Building Code includes a "50% rule" that affects this decision significantly. If the 
                cost to repair damage exceeds 50% of the building's market value (excluding land), the entire 
                building must be brought up to current code—not just the damaged portions. This can transform 
                a straightforward roof replacement into a project requiring window and door upgrades, 
                structural reinforcement, electrical system updates, and other code compliance work.
              </p>

              <p className="mb-4">
                Insurance coverage also affects this decision. Replacement cost policies may cover complete 
                reconstruction at current standards. Actual cash value policies may only cover depreciated 
                value, potentially making restoration more practical even if rebuilding would be preferred. 
                Code upgrade coverage, if included in the policy, can offset some of the costs when code 
                requirements increase project scope.
              </p>

              <p className="mb-4">
                FCS provides detailed analysis of both options, including accurate cost estimates, timeline 
                comparisons, and coverage implications. Our experience with building code requirements and 
                insurance coverage helps property owners make informed decisions about the best path forward 
                for their specific situation.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Florida Building Code Requirements</h3>
              <p className="mb-4">
                Hurricane repairs in Florida must meet specific building code requirements that vary by 
                location and damage extent. The Wind-Borne Debris Region (WBDR) encompasses areas within 
                one mile of the coast and in designated high-velocity hurricane zones. Properties in the 
                WBDR have stricter requirements for window and door protection, with any replacement windows 
                required to meet impact-resistance standards or be protected by approved shutters.
              </p>

              <p className="mb-4">
                Roof repairs and replacements must meet current Florida Building Code wind resistance 
                requirements, which have increased substantially since many existing buildings were 
                constructed. This includes enhanced fastening schedules, improved underlayment requirements, 
                and stricter flashing details. When roof covering is removed, secondary water resistance 
                (sealed roof deck) may be required.
              </p>

              <p>
                FCS maintains current knowledge of Florida Building Code requirements and ensures all 
                hurricane restoration work meets applicable standards. Our in-house engineering capability 
                allows us to evaluate structural requirements and coordinate with local building officials 
                on code interpretation for specific project conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break - Storm Damage */}
      <ContentParallax
        src="/images/hurricane-restoration/hurricane-restoration-large.webp"
        alt="Storm damage restoration and emergency repairs"
        title="Complete Property Recovery"
        subtitle="From emergency stabilization to full reconstruction"
        overlayOpacity={0.55}
      />

      {/* Flood Damage and NFIP Coverage */}
      <section id="flood-damage" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-600 rounded-xl">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Flood Damage and NFIP Coverage
              </h2>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Critical Coverage Distinction</h3>
                  <p className="text-amber-900">
                    Flood insurance through NFIP operates under completely different rules than standard 
                    property insurance. Understanding these differences before a flood event can mean the 
                    difference between full recovery and significant uninsured losses.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Understanding the National Flood Insurance Program</h3>
              <p className="mb-4">
                The National Flood Insurance Program (NFIP), administered by FEMA, provides flood insurance 
                in communities that agree to adopt and enforce floodplain management ordinances. Standard 
                property insurance policies specifically exclude flood damage, making NFIP coverage essential 
                for properties in flood-prone areas—and valuable even for properties outside designated 
                flood zones, since floods can occur anywhere.
              </p>

              <p className="mb-4">
                NFIP policies come with important coverage limitations that many property owners don't 
                discover until claim time. Maximum coverage limits are $250,000 for residential buildings 
                and $500,000 for commercial buildings, with separate limits for contents coverage. These 
                limits may be inadequate for large commercial properties or high-value homes, creating a 
                need for excess flood insurance from private carriers.
              </p>

              <p className="mb-4">
                Perhaps more importantly, NFIP policies operate under specific coverage rules that differ 
                fundamentally from standard property insurance. Understanding these rules is essential for 
                proper claim documentation and realistic recovery expectations.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Direct Flood Damage vs. Adjacent Damage: The Critical Distinction</h3>
              <p className="mb-4">
                <strong>This is one of the most misunderstood aspects of flood insurance</strong>, and our 
                43 years of claims experience has shown us how this distinction affects real claims.
              </p>

              <p className="mb-4">
                NFIP coverage applies only to direct physical damage from flood water contact. If flood 
                water rises to three feet in your building, NFIP covers the damage to building components 
                and contents that were actually touched by the flood water—from the floor up to the three-foot 
                level. Damage above that level, even if caused by moisture or humidity from the flood event, 
                is NOT covered under NFIP.
              </p>

              <p className="mb-4">
                This distinction has enormous practical implications. Consider a commercial building where 
                flood water reaches four feet. The drywall, insulation, and electrical components below 
                four feet are covered. But the moisture that migrated upward through the drywall, causing 
                damage and mold growth at the six-foot level, is not covered—even though the flood event 
                caused that moisture to be present. The mold that developed above the flood line due to 
                elevated humidity is not covered.
              </p>

              <p className="mb-4">
                This "adjacent damage" exclusion means that flood claims often cover significantly less than 
                property owners expect. Total restoration costs might reach $500,000, while NFIP coverage 
                applies to only $300,000 of direct flood contact damage. This gap can be financially 
                devastating for unprepared property owners.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Flood Zone Implications</h3>
              <p className="mb-4">
                FEMA flood zone designations affect both insurance requirements and premium costs. Special 
                Flood Hazard Areas (SFHAs)—zones beginning with A or V—represent areas with at least a 1% 
                annual chance of flooding (the "100-year flood"). Properties in SFHAs with federally-backed 
                mortgages are required to carry flood insurance.
              </p>

              <p className="mb-4">
                Zone designations also affect premium rates substantially. Properties in high-risk zones pay 
                significantly more than those in moderate or low-risk zones. However, zone designation 
                doesn't prevent flooding—properties in Zone X (minimal flood risk) still flood, and many 
                flood claims come from properties outside SFHAs.
              </p>

              <p className="mb-4">
                For commercial properties, understanding your flood zone affects not just insurance 
                decisions but also building code requirements. Substantial improvement projects in SFHAs 
                may require elevation or other flood mitigation measures. FCS helps property owners 
                navigate these requirements during disaster recovery planning.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Documentation Requirements for Flood Claims</h3>
              <p className="mb-4">
                NFIP claims have specific documentation requirements that differ from standard insurance 
                claims. A Proof of Loss form must be submitted within 60 days of the flood event (extensions 
                are sometimes available but must be requested). This signed, sworn statement documents the 
                claimed damages and amounts.
              </p>

              <p className="mb-4">
                Proper documentation should establish the high-water mark clearly, as this determines 
                coverage limits. Photographs showing water levels on walls, along with documentation of 
                damaged contents at specific heights, support accurate claim determination. Any damaged 
                materials removed before documentation can create claim issues.
              </p>

              <p className="mb-4">
                FCS assists with comprehensive flood damage documentation, including detailed photography, 
                accurate measurements, and systematic cataloging of damage by location and elevation. Our 
                experience with flood claims helps ensure documentation meets NFIP requirements while 
                capturing all covered damage.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Common Claim Denials and How to Avoid Them</h3>
              <p className="mb-4">
                Understanding common reasons for flood claim denials helps property owners avoid these pitfalls:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Late Proof of Loss:</strong> Missing the 60-day deadline without an approved extension results in claim denial. FCS helps coordinate timely documentation submission.</li>
                <li><strong>Earth movement exclusion:</strong> Damage from mudslides, sinkholes, or earth movement—even if associated with flooding—is typically excluded.</li>
                <li><strong>Basement limitations:</strong> Coverage for basement and below-grade areas is severely limited under NFIP, covering only certain building equipment.</li>
                <li><strong>Exterior property:</strong> Landscaping, walkways, swimming pools, and other exterior improvements are excluded.</li>
                <li><strong>Moisture and mold above flood line:</strong> As discussed, damage from moisture migration or mold growth above the direct flood contact level is not covered.</li>
                <li><strong>Inadequate documentation:</strong> Claims without proper photographs, measurements, and itemized damage lists may be underpaid or denied.</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Private Flood Insurance Differences</h3>
              <p className="mb-4">
                Private flood insurance has grown substantially as an alternative to NFIP. Private policies 
                may offer higher coverage limits, broader coverage terms, and different pricing than NFIP. 
                Some private policies cover damage that NFIP excludes, including certain mold damage, 
                additional living expenses, and replacement cost coverage.
              </p>

              <p className="mb-4">
                However, private flood policies vary significantly by carrier. Coverage terms, exclusions, 
                and claims processes differ from NFIP and from each other. Property owners should carefully 
                review policy terms, particularly regarding adjacent damage, mold coverage, and claims 
                documentation requirements.
              </p>

              <p>
                FCS works with all types of flood insurance coverage and understands the documentation 
                requirements for both NFIP and major private flood carriers. Our experience with flood 
                claims from both the adjuster and contractor perspectives helps ensure proper claim handling 
                regardless of coverage type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wind Damage Assessment */}
      <section id="wind-damage" className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Wind Damage Assessment
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                Wind damage assessment requires expertise to identify both obvious and hidden damage. Our 
                experience as insurance adjusters taught us exactly what to look for—and what's commonly 
                missed on initial inspections.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Hidden Wind Damage: What Surface Inspections Miss</h3>
              <p className="mb-4">
                The most significant wind damage isn't always visible. Surface inspections often miss damage 
                that will cause problems months or years later—or damage that's covered but unclaimed because 
                no one documented it properly.
              </p>

              <p className="mb-4">
                Roofing damage extends beyond missing shingles. Wind can break the seal strips that hold 
                asphalt shingles flat, creating lifted edges that don't lay properly but might not be obvious 
                from ground level. These unsealed shingles will eventually fail, often causing leaks long 
                after the storm event when they're no longer associated with covered damage. Proper inspection 
                identifies seal strip damage immediately, while it's still part of the covered claim.
              </p>

              <p className="mb-4">
                Granule loss on asphalt shingles indicates damage even without visible tears or missing 
                material. High winds can abrade shingle surfaces, removing the protective granules that 
                shield the asphalt from UV degradation. This damage shortens shingle life substantially 
                and may warrant replacement under insurance coverage.
              </p>

              <p className="mb-4">
                Structural movement from wind pressure may not be visible but can affect building integrity. 
                Racked frames cause doors and windows to bind. Shifted walls create cracks that worsen over 
                time. Compromised connections between walls and roof may not fail immediately but represent 
                significant damage that should be documented and claimed.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Comprehensive Roof Inspection Protocols</h3>
              <p className="mb-4">
                Our roof inspections follow systematic protocols developed through years of claims experience. 
                We divide the roof into sections for detailed documentation, photograph each section, and 
                note any damage or potential damage. This creates a complete record that supports claim 
                documentation.
              </p>

              <p className="mb-4">
                Inspection points include: ridge and hip cap condition, all flashing details (wall flashing, 
                valley flashing, vent and pipe flashings), gutter and edge metal condition, individual 
                shingle or tile condition, underlayment exposure or damage, and evidence of previous repairs. 
                For commercial flat roofs, we examine membrane condition, seam integrity, drainage, and 
                penetration seals.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Window, Door, and Opening Damage</h3>
              <p className="mb-4">
                Windows and doors represent both damage points and water entry points. Impact damage from 
                wind-borne debris may crack glass, break seals, or damage frames. Wind pressure alone can 
                distort frames, break seal integrity, or compromise weatherstripping. Even without obvious 
                damage, windows and doors that don't operate smoothly after a storm may indicate structural 
                movement affecting the building frame.
              </p>

              <p className="mb-4">
                Documenting window and door damage is particularly important because replacement requirements 
                in Florida's Wind-Borne Debris Region can significantly affect costs. If damaged windows 
                require replacement, current code requires impact-resistant units or approved shutters—a 
                substantial upgrade from older non-impact windows.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">What Adjusters Often Miss</h3>
              <p className="mb-4">
                Insurance adjusters handling storm damage face time pressure and volume challenges, especially 
                during catastrophe events when they may inspect dozens of properties daily. This pressure 
                leads to missed damage—not from incompetence but from the practical limitations of rapid 
                assessments.
              </p>

              <p className="mb-4">
                Common oversights include: seal strip damage on shingles that appear intact, granule loss 
                across large roof areas, flashing damage at difficult-to-access locations, soffit and fascia 
                damage, interior ceiling damage from minor water intrusion, window seal failures, and 
                structural movement affecting door operation.
              </p>

              <p>
                FCS's detailed documentation and systematic inspection often identifies covered damage 
                that initial adjustments miss. This documentation supports supplemental claims that capture 
                the full scope of covered damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Damage Restoration */}
      <section id="fire-damage" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-orange-600 rounded-xl">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Fire Damage Restoration
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                Fire damage extends far beyond the area of direct flame contact. Comprehensive restoration 
                addresses structural damage, smoke and soot contamination, water damage from firefighting 
                efforts, and the complex insurance claims that accompany significant fire losses.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Comprehensive Fire Damage Assessment</h3>
              <p className="mb-4">
                Fire damage assessment begins with understanding how fire affected the structure. Direct 
                flame damage may be limited to certain areas, but heat exposure affects materials well 
                beyond the visible burn area. Elevated temperatures can weaken structural steel, degrade 
                concrete, damage electrical wiring insulation, and compromise roof assemblies even where 
                no visible flame damage exists.
              </p>

              <p className="mb-4">
                Our assessment includes thermal damage evaluation throughout the structure, not just in 
                obviously fire-damaged areas. We examine structural connections, electrical systems, 
                plumbing (heat can damage PVC piping and weaken solder joints), and building systems 
                that may have been affected by heat exposure.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Smoke and Soot Damage</h3>
              <p className="mb-4">
                Smoke and soot travel throughout structures via HVAC systems, natural air movement, and 
                pressure differentials during the fire event. Areas far from the fire origin may have 
                significant smoke contamination requiring professional remediation.
              </p>

              <p className="mb-4">
                Smoke damage varies by the materials burned. Protein fires (kitchen fires) produce 
                difficult-to-remove residues with strong odors. Synthetic material fires create toxic 
                soot that adheres aggressively to surfaces. Wood fires produce large quantities of 
                particulate. The type of smoke affects cleaning methods and restoration approaches.
              </p>

              <p className="mb-4">
                Proper smoke damage restoration requires more than surface cleaning. Smoke particles 
                penetrate porous materials, contaminate HVAC systems, and settle in hidden areas. 
                Complete restoration includes thorough cleaning of all surfaces, HVAC system cleaning 
                or replacement, and treatment of structural cavities where smoke accumulates.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Water Damage from Firefighting</h3>
              <p className="mb-4">
                Firefighting efforts often cause water damage exceeding the original fire damage. 
                Thousands of gallons of water may flow through a structure during fire suppression, 
                saturating building materials, flooding lower floors, and creating conditions for 
                mold growth if not properly addressed.
              </p>

              <p className="mb-4">
                This water damage is covered under fire insurance claims—it's part of the fire loss, 
                not a separate event. However, proper documentation of water damage extent, timely 
                water extraction, and appropriate drying are essential. Delayed or inadequate water 
                damage response can lead to secondary damage (mold, deterioration) that may complicate 
                claims.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Structural Evaluation After Fire</h3>
              <p className="mb-4">
                Structural evaluation determines whether fire-damaged elements can be repaired or must 
                be replaced. Wood framing exposed to fire requires assessment of char depth and remaining 
                structural capacity. Steel exposed to high temperatures may have lost strength and require 
                replacement. Concrete can spall and weaken from thermal exposure.
              </p>

              <p className="mb-4">
                FCS's in-house engineering capability allows us to evaluate structural damage and develop 
                appropriate repair or replacement approaches. This professional evaluation supports 
                insurance claim documentation and ensures restoration work addresses all structural concerns.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">The Fire Restoration Process</h3>
              <p>
                Fire restoration follows a systematic process: emergency stabilization (securing the 
                structure, temporary weatherproofing), water extraction and drying, debris removal, 
                structural evaluation, smoke and soot remediation, reconstruction, and final cleaning 
                and restoration. Throughout this process, proper documentation supports the insurance 
                claim, and coordination with adjusters ensures scope agreement before work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Damage Discovery */}
      <section id="hidden-damage" className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Hidden Damage Discovery
              </h2>
            </div>

            <div className="bg-brand-green-bg border-l-4 border-brand-green p-6 mb-8">
              <p className="text-brand-green-dark font-medium">
                <strong>This is where 43 years of claims experience truly matters.</strong> We've seen 
                thousands of damage patterns and know exactly where to look for problems that surface 
                inspections miss. Proper hidden damage identification often makes the difference between 
                adequate and inadequate claim settlements.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">What Initial Inspections Miss</h3>
              <p className="mb-4">
                Initial damage inspections, whether by property owners, adjusters, or contractors, 
                typically identify obvious damage while missing significant problems hidden within 
                the building structure. This isn't negligence—it's the practical limitation of 
                non-destructive inspection methods.
              </p>

              <p className="mb-4">
                Water intrusion damage is particularly prone to being missed initially. Water from 
                roof damage, window leaks, or wall penetrations can travel along framing members, 
                collecting in areas far from the entry point. Insulated wall cavities hide moisture 
                for weeks while damage develops. Ceiling assemblies trap water above visible surfaces. 
                Flooring systems conceal moisture that promotes mold growth and structural deterioration.
              </p>

              <p className="mb-4">
                Structural damage can also be hidden. Racked frames may not show obvious signs until 
                finish materials are removed. Connection damage at wall-to-roof or wall-to-foundation 
                joints isn't visible without opening the structure. Foundation damage may only be 
                apparent through symptoms like cracking or door binding rather than direct observation.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Moisture Intrusion Behind Walls</h3>
              <p className="mb-4">
                Water inside wall cavities is the most common hidden damage we encounter. Even small 
                amounts of moisture intrusion can cause significant problems when trapped in enclosed 
                spaces. Insulation retains water, keeping framing members wet for extended periods. 
                Paper-faced drywall provides food source for mold. OSB sheathing swells and deteriorates 
                when wet.
              </p>

              <p className="mb-4">
                Identifying moisture intrusion requires more than visual inspection. We use professional 
                moisture meters to test drywall, framing, and sheathing at multiple locations. Thermal 
                imaging can identify temperature differentials that suggest moisture presence. In some 
                cases, inspection openings are necessary to directly examine wall cavity conditions.
              </p>

              <p className="mb-4">
                The key is timing. Moisture that's identified and addressed within days typically 
                causes limited damage. Moisture that remains hidden for weeks develops into mold 
                contamination, wood decay, and extensive remediation requirements. Early detection 
                through proper inspection protects both the property and the claim.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Mold Development Timeline</h3>
              <p className="mb-4">
                Understanding mold development helps explain why timely hidden damage discovery matters. 
                Under favorable conditions (moisture, warmth, organic food source), mold can begin 
                growing within 24-48 hours. However, visible mold colonies typically take 1-3 weeks 
                to develop to the point of obvious presence.
              </p>

              <p className="mb-4">
                This timeline creates a window where water intrusion occurs, conditions develop 
                favorable to mold growth, but nothing visible indicates the problem. By the time 
                mold becomes visible, contamination has spread through wall cavities, HVAC systems, 
                and other areas. Remediation at this point is far more extensive than if moisture 
                was identified and dried within the first few days.
              </p>

              <p className="mb-4">
                For insurance purposes, mold coverage varies significantly by policy. Some policies 
                cover mold remediation when mold results from a covered water intrusion event. Others 
                exclude mold entirely or cap coverage at relatively low limits. Identifying and 
                documenting moisture intrusion before mold develops preserves coverage options and 
                reduces remediation scope.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Technology-Assisted Assessment</h3>
              <p className="mb-4">
                Modern inspection technology helps identify hidden damage without destructive exploration 
                of the structure. Professional moisture meters detect elevated moisture content in 
                building materials. Different meter types work for different materials—pin-type meters 
                for wood, capacitance meters for masonry and drywall.
              </p>

              <p className="mb-4">
                Thermal imaging (infrared cameras) identifies temperature differences that often 
                indicate moisture presence. Wet materials register differently than dry materials, 
                creating thermal patterns that reveal water intrusion paths and accumulation areas. 
                Thermal imaging is non-destructive and can scan large areas quickly.
              </p>

              <p className="mb-4">
                Borescopes and inspection cameras allow visual examination inside wall cavities, 
                ceiling spaces, and other enclosed areas through small inspection holes. This minimizes 
                destructive exploration while providing direct visual confirmation of conditions.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Supplemental Claims for Discovered Damage</h3>
              <p className="mb-4">
                Hidden damage discovered after initial claim settlement requires supplemental claims 
                to capture the additional covered damage. This is extremely common in large loss 
                situations—it's unusual for initial inspections to identify all damage, and insurance 
                processes accommodate this reality.
              </p>

              <p className="mb-4">
                Successful supplemental claims require clear documentation showing the discovered 
                damage, its relationship to the original covered event, and why it wasn't identified 
                initially. FCS provides detailed supplemental claim documentation including photographs, 
                moisture readings, inspection reports, and revised scope of work.
              </p>

              <p>
                Our experience with supplemental claims—both as adjusters who processed them and as 
                contractors who prepared them—helps ensure discovered damage is properly documented 
                and presented for coverage consideration. This expertise often captures significant 
                additional coverage that property owners would otherwise miss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break - Claims */}
      <ContentParallax
        src="/images/hurricane-restoration-construction/hurricane-restoration-construction-large.webp"
        alt="Insurance restoration construction in progress"
        title="Expert Insurance Claim Navigation"
        subtitle="43 years experience from both sides of the claims process"
        overlayOpacity={0.6}
      />

      {/* Insurance Claim Process */}
      <section id="insurance-claims" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                The Insurance Claim Process
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                Navigating insurance claims for large losses requires understanding how the process 
                works, what documentation carriers require, and how to protect your interests throughout. 
                Our 43 years of claims experience—including 7 years as an insurance adjuster—provides 
                insight that most contractors simply don't have.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Documenting Damage Properly</h3>
              <p className="mb-4">
                Proper damage documentation begins immediately after the event, before any cleanup, 
                debris removal, or emergency repairs. This initial documentation establishes the 
                condition that will be evaluated for coverage and serves as the foundation for the 
                entire claim.
              </p>

              <p className="mb-4">
                Photographs should be comprehensive: overall views of each affected area, medium 
                shots showing context, and close-ups of specific damage. Video walkthroughs provide 
                additional context and can capture details that static photos miss. Include photos 
                of undamaged areas as well—this establishes baseline condition for comparison.
              </p>

              <p className="mb-4">
                Written documentation should include dates and times, damage descriptions, witness 
                information if relevant, and immediate actions taken. Keep all receipts for emergency 
                services, temporary repairs, and mitigation efforts—these costs are typically covered 
                as part of the loss.
              </p>

              <p className="mb-4">
                For commercial properties, document any business interruption impacts: revenue loss, 
                extra expenses, and operational disruptions. This information supports business 
                interruption coverage claims where applicable.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Working with Your Insurance Carrier</h3>
              <p className="mb-4">
                Report claims promptly—most policies require notification "as soon as practicable" 
                after a loss. Delayed reporting can create coverage questions. Provide factual 
                information about the loss without speculating about causes or extent. Request 
                a claim number and adjuster assignment timeline.
              </p>

              <p className="mb-4">
                Understand your policy before the adjuster visit. Know your coverage limits, 
                deductible amounts (particularly hurricane deductibles, which are often percentage-based), 
                and any special coverage endorsements. If you have replacement cost coverage, understand 
                how it works—many policies pay actual cash value initially, with replacement cost 
                difference paid after repairs are completed.
              </p>

              <p className="mb-4">
                Be present for adjuster inspections when possible, or have a knowledgeable representative 
                present. Point out damage you've observed, share your documentation, and ask questions 
                about the process and timeline. Adjusters appreciate organized property owners who 
                facilitate the inspection process.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">The Adjustment Process Explained</h3>
              <p className="mb-4">
                After reporting, your carrier assigns an adjuster to evaluate the claim. This may be 
                a staff adjuster employed by the carrier or an independent adjuster working under 
                contract. For catastrophe events, carriers deploy catastrophe (CAT) teams—adjusters 
                brought in from other areas to handle claim volume.
              </p>

              <p className="mb-4">
                The adjuster inspects the property, documents damage, and prepares an estimate using 
                industry-standard software (typically Xactimate). This estimate includes line items 
                for labor, materials, equipment, and overhead/profit. The adjuster's estimate represents 
                the carrier's initial position on claim value.
              </p>

              <p className="mb-4">
                Coverage determination happens separately from damage evaluation. Even documented damage 
                may be excluded if it doesn't fall within policy coverage—this is why understanding 
                your policy matters. The adjuster applies policy terms to determine what portion of 
                documented damage is covered.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Certified Estimates: FCS's Approach</h3>
              <p className="mb-4">
                FCS provides certified Xactimate estimates that meet insurance industry standards. 
                These estimates use the same software, pricing databases, and format that adjusters 
                use, allowing direct comparison and negotiation. Our estimates are prepared by personnel 
                with claims background, ensuring they address coverage considerations as well as 
                construction scope.
              </p>

              <p className="mb-4">
                Certified estimates differ from standard contractor quotes by providing the detail 
                and justification that insurance evaluation requires. Each line item includes 
                scope description, quantity, unit pricing, and justification where relevant. 
                This level of detail supports productive discussion with adjusters and carriers.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Negotiating Fair Settlements</h3>
              <p className="mb-4">
                Initial claim estimates often undervalue losses, not necessarily through bad faith 
                but through incomplete information, different damage interpretations, or pricing 
                disagreements. Negotiation is a normal part of the large loss claims process.
              </p>

              <p className="mb-4">
                Effective negotiation requires documentation, not argument. When we believe a claim 
                is undervalued, we prepare detailed documentation showing why additional scope is 
                warranted. This includes photographs, moisture readings, manufacturer requirements, 
                code citations, and pricing justification. Professional, documented disagreement 
                is far more effective than contentious dispute.
              </p>

              <p className="mb-4">
                FCS participates in scope meetings with adjusters, reviewing the claim together and 
                reaching agreement on disputed items. Our background as adjusters helps—we understand 
                what adjusters can approve, what requires supervisor involvement, and how to present 
                information effectively.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">When to Involve Public Adjusters</h3>
              <p className="mb-4">
                Public adjusters represent policyholders in insurance claims, working on behalf of 
                the property owner rather than the carrier. They're licensed professionals who 
                specialize in claims documentation, negotiation, and settlement.
              </p>

              <p className="mb-4">
                Public adjusters can be valuable when claims become contentious, when property owners 
                lack time or expertise to manage complex claims, or when initial settlements seem 
                significantly inadequate. However, public adjusters charge fees (typically 10% of 
                the settlement), so their involvement should be weighed against expected benefit.
              </p>

              <p className="mb-4">
                FCS is not a public adjuster and doesn't represent clients in claim disputes. However, 
                we provide the documentation and expertise that supports claims whether managed by 
                property owners directly, through public adjusters, or with attorney involvement.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Appraisal and Arbitration</h3>
              <p className="mb-4">
                Most property insurance policies include an appraisal clause that provides for dispute 
                resolution when policyholder and carrier cannot agree on loss value. Either party 
                can invoke appraisal, which involves each side selecting an appraiser. The two 
                appraisers select an umpire, and agreement between any two of the three determines 
                the loss value.
              </p>

              <p className="mb-4">
                Appraisal addresses value disputes, not coverage disputes. If the carrier agrees 
                damage is covered but disputes the amount, appraisal can resolve the disagreement. 
                Coverage disputes require different resolution—potentially litigation.
              </p>

              <p>
                FCS has experience with the appraisal process, both preparing documentation that 
                supports appraisal proceedings and providing expert testimony on construction scope 
                and pricing. This experience helps clients navigate disputed claims toward fair resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working with Adjusters and Carriers */}
      <section id="adjuster-relations" className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Working with Adjusters and Carriers
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                Having spent seven years as an insurance adjuster, our principal understands the 
                adjustment process from the inside. This perspective shapes how FCS approaches 
                carrier relationships—professionally, respectfully, and effectively.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Building Productive Relationships</h3>
              <p className="mb-4">
                Adversarial approaches to insurance claims rarely produce good results. Adjusters 
                are professionals doing a job, often under significant pressure during catastrophe 
                events. Treating them as adversaries creates resistance; treating them as professionals 
                facilitates cooperation.
              </p>

              <p className="mb-4">
                FCS approaches adjuster relationships as collaborative problem-solving. We share the 
                same goal—accurately determining claim value so the property can be properly restored. 
                Disagreements about scope or pricing are normal and can be resolved through professional 
                discussion and documentation.
              </p>

              <p className="mb-4">
                Our industry background helps. Adjusters recognize contractors who understand the 
                claims process, use proper terminology, and provide documentation in formats they 
                can work with. This credibility facilitates productive working relationships.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Documentation Standards</h3>
              <p className="mb-4">
                Insurance documentation has specific standards that facilitate claim processing. 
                Estimates should use industry-standard software and pricing databases. Photographs 
                should be organized logically with clear labeling. Reports should be factual and 
                specific rather than vague or argumentative.
              </p>

              <p className="mb-4">
                FCS documentation meets industry standards because we understand what adjusters need 
                to evaluate and approve claims. Our estimates are Xactimate-formatted with appropriate 
                detail. Our photographs are organized by location and damage type. Our reports 
                provide the factual basis for scope items.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Communication Best Practices</h3>
              <p className="mb-4">
                Effective communication with adjusters includes: timely responses to requests, clear 
                and specific questions rather than vague complaints, professional disagreement with 
                documentation support, and realistic timelines and expectations.
              </p>

              <p className="mb-4">
                We recommend keeping written records of all claim communications, including phone 
                conversations (documented in follow-up emails). This creates a record that protects 
                all parties and ensures nothing is forgotten or miscommunicated.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Understanding the Adjuster's Perspective</h3>
              <p className="mb-4">
                Adjusters face constraints that property owners and contractors don't always understand. 
                They have authority limits requiring supervisor approval for larger amounts. They're 
                evaluated on file closure and accuracy. During catastrophe events, they may be handling 
                dozens of claims simultaneously while working long hours in difficult conditions.
              </p>

              <p className="mb-4">
                Understanding these constraints helps manage expectations and approach claims productively. 
                When we know an adjuster needs documentation to support a decision, we provide it. 
                When we know an amount exceeds field authority, we prepare for longer approval timelines.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">When Claims Get Contentious</h3>
              <p className="mb-4">
                Despite best efforts, some claims become contentious. Disagreements about coverage, 
                disputes about scope, or carrier delays can strain relationships. When this occurs, 
                maintaining professionalism remains important—escalating conflict rarely helps and 
                often delays resolution.
              </p>

              <p>
                FCS helps clients navigate contentious claims by providing clear documentation, 
                recommending appropriate escalation steps, and maintaining focus on resolution. 
                When claims require public adjuster involvement, attorney representation, or appraisal, 
                we support those processes with professional documentation and testimony as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Loss Commercial vs Residential */}
      <section id="large-loss" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Large Loss: Commercial vs. Residential
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                Large loss claims—typically those exceeding $250,000—require contractors with the 
                capacity, experience, and insurance expertise to handle complex projects. FCS 
                specializes in large loss work for both commercial and high-value residential properties.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Defining Large Loss</h3>
              <p className="mb-4">
                In insurance terminology, large loss refers to claims significant enough to require 
                specialized handling. Carriers often assign dedicated large loss adjusters or teams 
                to these claims rather than standard field adjusters. The threshold varies by carrier 
                but typically begins around $250,000.
              </p>

              <p className="mb-4">
                Large loss claims involve complexity beyond just dollar amount. They typically require 
                detailed documentation, multiple inspections, scope negotiations, and extended timelines. 
                Contractors handling large loss work need bonding capacity, financial stability to 
                handle payment timing, and expertise with complex claim processes.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Commercial Claim Complexity</h3>
              <p className="mb-4">
                Commercial large losses present challenges beyond residential claims. Multiple 
                insurance policies may apply—property coverage, business interruption, equipment 
                breakdown, ordinance or law coverage. Coordinating coverage among policies requires 
                expertise and documentation.
              </p>

              <p className="mb-4">
                Tenant considerations affect commercial losses. Properties with multiple tenants may 
                have tenant improvement coverage, lease requirements for restoration timelines, and 
                business interruption implications for both owner and tenants. Managing these 
                relationships while navigating insurance claims adds complexity.
              </p>

              <p className="mb-4">
                Business interruption coverage deserves particular attention. Documenting lost 
                revenue, extra expenses, and restoration timelines to support business interruption 
                claims requires coordination between business operations and insurance processes.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Multi-Party Claims: HOAs and Condominiums</h3>
              <p className="mb-4">
                Condominium and HOA claims involve multiple parties with overlapping interests. 
                Association master policies typically cover common elements and building structure, 
                while unit owner policies (HO-6) cover improvements and personal property. Determining 
                which policy covers which damage requires policy analysis and often involves dispute.
              </p>

              <p className="mb-4">
                FCS has experience with multi-party claims, coordinating between association coverage 
                and unit owner coverage to ensure complete restoration. Our documentation clearly 
                delineates which damage falls under which coverage, facilitating proper claim handling 
                across multiple policies.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">High-Value Residential</h3>
              <p>
                High-value residential claims share some commercial characteristics—significant dollar 
                amounts, complex coverage, and extended timelines. Custom homes often have unique 
                features requiring specialized restoration approaches. Replacement cost for high-end 
                finishes and custom elements may be disputed. FCS brings the same attention and expertise 
                to high-value residential large losses as to commercial projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Timeline */}
      <section id="timeline" className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Emergency Response Timeline
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                Large loss disaster recovery unfolds over months, not days. Understanding the typical 
                timeline helps property owners plan appropriately and maintain realistic expectations 
                throughout the process.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">First 24-48 Hours</h3>
              <p className="mb-4">
                The immediate post-disaster period focuses on safety and stabilization. Ensure 
                occupant safety, secure the property against further damage, and begin documentation 
                before cleanup. Contact your insurance carrier to report the loss. Arrange emergency 
                mitigation services if needed—tarping, board-up, water extraction.
              </p>

              <p className="mb-4">
                For large losses, this is also when to contact FCS. Early involvement allows proper 
                initial documentation, coordination of emergency services, and preparation for the 
                claims process. We can assess damage scope and begin planning even while emergency 
                stabilization continues.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Week 1 Priorities</h3>
              <p className="mb-4">
                The first week establishes the foundation for the entire claim and restoration process. 
                Complete initial documentation including comprehensive photography and written descriptions. 
                Coordinate with the assigned adjuster for initial inspection. Begin detailed damage 
                assessment to identify scope.
              </p>

              <p className="mb-4">
                Emergency mitigation should be substantially complete—structures dried, temporary 
                protection in place, ongoing damage prevention established. Document all emergency 
                work for inclusion in the claim.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Stabilization Phase (Weeks 2-4)</h3>
              <p className="mb-4">
                With emergency conditions addressed, the stabilization phase focuses on complete damage 
                assessment and claim development. Detailed inspections identify all damage including 
                hidden conditions. Estimates are prepared and submitted. Scope meetings with adjusters 
                resolve questions and reach agreement on covered repairs.
              </p>

              <p className="mb-4">
                This phase often reveals hidden damage requiring supplemental claims. Moisture testing, 
                exploratory openings, and systematic inspection may identify damage not apparent in 
                initial assessments.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Reconstruction Planning (Months 1-3)</h3>
              <p className="mb-4">
                With scope established and claim progressing, reconstruction planning begins. This 
                includes design development for any changes from original condition, permit applications, 
                contractor selection (if not already engaged), and detailed scheduling.
              </p>

              <p className="mb-4">
                Insurance processes continue during this phase. Initial claim payments may be received 
                (often actual cash value pending completion). Supplemental claims for discovered damage 
                are processed. Replacement cost holdback release is coordinated with reconstruction progress.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Project Completion (Months 3-18+)</h3>
              <p>
                Construction timeline varies dramatically based on project scope and complexity. 
                A straightforward restoration might complete in 3-6 months. Complete rebuilds of 
                complex structures can extend to 18-24 months or longer. Throughout construction, 
                FCS coordinates with insurance for progress payments and addresses any supplemental 
                scope discovered during work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Case Studies: FCS Disaster Recovery Projects
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                FCS's disaster recovery experience spans decades and includes some of the largest 
                insurance restoration projects in Central Florida. These case studies illustrate 
                our capabilities and approach to complex disaster recovery.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Turner Agri-Center: $12.5 Million Hurricane Charley Rebuild</h3>
                <p className="mb-4">
                  When Hurricane Charley devastated the Turner Agri-Center at the Florida State 
                  Fairgrounds in 2004, FCS was selected as prime contractor for the complete rebuild. 
                  This 160,000+ square foot agricultural exhibition facility required total reconstruction 
                  after catastrophic wind damage.
                </p>
                <p className="mb-4">
                  The project included demolition of the destroyed structure, new construction meeting 
                  current Florida Building Code requirements, coordination with multiple stakeholders, 
                  and management of complex insurance claims. The rebuild was completed successfully, 
                  creating a modern facility that continues serving Florida's agricultural community.
                </p>
                <p className="text-brand-green font-semibold">
                  Project Value: $12.5 million | Timeline: 18 months | Complete rebuild from hurricane damage
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Historic Sebring Fire Station: $900K Hurricane Restoration with FEMA Compliance</h3>
                <p className="mb-4">
                  Hurricane Charley also severely damaged the historic Sebring Fire Station #1, a 
                  building with historical significance requiring careful restoration approach. The 
                  project involved both insurance coverage and FEMA public assistance funding, 
                  requiring navigation of both claims processes.
                </p>
                <p className="mb-4">
                  FCS managed the restoration to preserve historical character while meeting current 
                  building codes and FEMA documentation requirements. The project demonstrated our 
                  ability to handle the complexity of government-involved disaster recovery with 
                  multiple funding sources and compliance requirements.
                </p>
                <p className="text-brand-green font-semibold">
                  Project Value: $900,000 | Historic preservation | FEMA public assistance compliance
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Hardee County Municipal Buildings: $10 Million Hurricane Charley Recovery</h3>
                <p className="mb-4">
                  Hardee County suffered extensive damage to multiple municipal buildings during 
                  Hurricane Charley. FCS served as prime contractor for numerous county facilities, 
                  managing a portfolio of restoration projects totaling approximately $10 million.
                </p>
                <p className="mb-4">
                  The scope included county offices, public facilities, and essential services buildings. 
                  Each project required individual insurance claims, FEMA coordination, and phased 
                  construction to maintain county operations during restoration. FCS successfully 
                  completed all projects, helping Hardee County recover from one of the most destructive 
                  hurricanes in Florida history.
                </p>
                <p className="text-brand-green font-semibold">
                  Project Value: $10 million | Multiple municipal facilities | FEMA coordination
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Mulberry Phosphates: $2 Million Tornado Recovery</h3>
                <p className="mb-4">
                  Tornado damage to industrial facilities presents unique challenges. The Mulberry 
                  Phosphates project involved restoration of manufacturing operations while maintaining 
                  safety in an active industrial environment.
                </p>
                <p className="text-brand-green font-semibold">
                  Project Value: $2 million | Industrial facility | Tornado damage restoration
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Fire Loss Projects: Carlton Arms Apartments ($1M) and Wellington Polo Club ($500K)</h3>
                <p className="mb-4">
                  Fire losses require specialized restoration approaches addressing structural damage, 
                  smoke remediation, and water damage from firefighting. The Carlton Arms Apartments 
                  project involved restoration of multi-family residential units, requiring coordination 
                  with multiple unit owners and careful attention to habitability during construction.
                </p>
                <p className="mb-4">
                  The Wellington Polo Club project restored fire damage at a premier equestrian facility, 
                  requiring attention to both standard building restoration and specialized equestrian 
                  facility requirements.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Hurricane Harvey and Irma: Catastrophe Response</h3>
              <p className="mb-4">
                Our principal's insurance industry experience includes catastrophe response work during 
                major hurricane events. During Hurricane Harvey in Texas, our team worked on claims 
                totaling over $40 million, including major hotel properties and commercial facilities 
                throughout the Houston area.
              </p>

              <p className="mb-4">
                Hurricane Irma brought similar catastrophe work to Florida, with over $22 million in 
                claims handled in the Miami condominium market. This high-rise condominium work included 
                complex multi-party claims, water intrusion damage, and coordination among association 
                and unit owner coverage.
              </p>

              <p>
                This catastrophe response experience provides perspective that informs our current work. 
                We've seen how claims are handled in the most challenging conditions, what works and 
                what doesn't, and how to navigate the complexities of major disaster events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Property Owners Make */}
      <section id="common-mistakes" className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-red-600 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Common Mistakes Property Owners Make After Disaster Damage
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                After 43 years in the insurance industry—first as an adjuster evaluating claims, then as a 
                contractor helping property owners recover—we've seen the same mistakes repeated countless 
                times. These errors can significantly reduce claim settlements, delay recovery, or create 
                coverage disputes that could have been avoided.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Mistake #1: Cleaning Up Before Documenting</h3>
              <p className="mb-4">
                The natural instinct after disaster damage is to start cleaning immediately. Property owners 
                want to remove debris, dry out water, and begin restoring normalcy. Unfortunately, this 
                instinct can seriously damage insurance claims. Once damaged materials are removed, 
                debris is cleared, or conditions are altered, the evidence needed to document the full 
                extent of damage is gone.
              </p>
              <p className="mb-4">
                We've seen claims where significant damage was removed before documentation, leaving adjusters 
                unable to verify the claimed loss. Photographs of damage after cleanup rarely capture the same 
                evidence as photographs taken immediately after the event. Written descriptions created from 
                memory don't carry the same weight as real-time documentation.
              </p>
              <p className="mb-4">
                <strong>Best practice:</strong> Document everything with photos and video BEFORE any cleanup 
                begins. Walk through the entire property, capturing overall views, medium shots, and close-ups 
                of every damaged area. Only after thorough documentation should cleanup begin—and even then, 
                save samples of damaged materials when practical.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Mistake #2: Making Permanent Repairs Before Claim Inspection</h3>
              <p className="mb-4">
                Insurance policies require property owners to mitigate further damage—you can't let a roof 
                leak continue damaging the interior while waiting for an adjuster. However, there's a crucial 
                difference between emergency mitigation and permanent repairs. Emergency repairs (tarping a 
                damaged roof, boarding broken windows, extracting standing water) are covered and expected. 
                Permanent repairs made before the adjuster inspects can create major problems.
              </p>
              <p className="mb-4">
                When permanent repairs are completed before inspection, the adjuster can't verify the original 
                damage. Claims may be reduced or denied based on inability to confirm the loss. Even with 
                photographs, the adjuster's independent evaluation—which carriers rely on—becomes impossible.
              </p>
              <p className="mb-4">
                <strong>Best practice:</strong> Perform only emergency mitigation until the adjuster completes 
                their inspection. Keep all receipts for emergency work. If permanent repairs are absolutely 
                necessary before inspection (rare), document extensively and notify your carrier in writing 
                explaining why repairs couldn't wait.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Mistake #3: Accepting Initial Settlement as Final</h3>
              <p className="mb-4">
                Initial claim settlements, particularly during catastrophe events when adjusters are handling 
                enormous volumes, frequently undervalue losses. This isn't necessarily bad faith—it's the 
                practical reality of rapid assessments, incomplete information, and conservative initial 
                estimates. However, many property owners accept these initial numbers as final, leaving 
                significant covered damage unclaimed.
              </p>
              <p className="mb-4">
                Initial estimates often miss hidden damage that becomes apparent only during repairs. Scope 
                items may be undervalued or omitted. Replacement cost provisions may not be fully applied. 
                Code upgrade costs may be excluded from initial estimates even when coverage exists.
              </p>
              <p className="mb-4">
                <strong>Best practice:</strong> Review initial settlements carefully against your documentation. 
                Have a qualified contractor evaluate the estimate for completeness. File supplemental claims 
                when additional damage is discovered. Remember that you have the right to negotiate—initial 
                settlements are often just that: initial.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Mistake #4: Hiring Unqualified Contractors</h3>
              <p className="mb-4">
                After major disasters, contractors appear from everywhere—including many without proper 
                licensing, insurance, or disaster recovery experience. Property owners under pressure to 
                begin repairs sometimes hire whoever is available, leading to substandard work, abandoned 
                projects, and disputes that complicate both the restoration and the insurance claim.
              </p>
              <p className="mb-4">
                Unqualified contractors may not understand insurance documentation requirements, leading to 
                claims issues. Their estimates may not align with industry standards, creating scope disputes. 
                Poor quality work may need to be corrected, creating additional costs not covered by insurance.
              </p>
              <p className="mb-4">
                <strong>Best practice:</strong> Verify contractor licensing through the Florida DBPR website. 
                Confirm insurance coverage with certificates. Check references specifically for disaster 
                recovery work. For large losses, ensure the contractor has the bonding capacity and financial 
                stability for your project size.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Mistake #5: Not Understanding Your Policy</h3>
              <p className="mb-4">
                Most property owners don't read their insurance policies until they have a claim—and by then, 
                it's too late to address coverage gaps. Understanding policy terms, limits, deductibles, and 
                exclusions before a loss helps set realistic expectations and ensures you've secured appropriate 
                coverage. Understanding them after a loss at least helps you navigate the claims process effectively.
              </p>
              <p className="mb-4">
                Common policy misunderstandings include: hurricane deductibles (often 2-5% of dwelling coverage, 
                not a flat dollar amount), replacement cost requirements (repairs must be completed to receive 
                full replacement cost), flood exclusions (standard policies exclude flood—separate coverage required), 
                and code upgrade coverage (not automatically included, must be added as endorsement).
              </p>
              <p className="mb-4">
                <strong>Best practice:</strong> Read your policy. Understand your deductibles, particularly 
                hurricane deductibles. Know what's excluded. Verify you have flood coverage if needed. Consider 
                code upgrade and ordinance coverage. If you don't understand something, ask your agent or carrier 
                to explain it before you have a claim.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Mistake #6: Missing Documentation Deadlines</h3>
              <p className="mb-4">
                Insurance claims have deadlines that many property owners miss. NFIP flood claims require 
                Proof of Loss submission within 60 days. Some policies have time limits for reporting claims 
                or filing supplemental claims. Missing these deadlines can result in partial or complete 
                claim denial with no recourse.
              </p>
              <p className="mb-4">
                <strong>Best practice:</strong> Know your policy deadlines. Report claims immediately. Submit 
                required documentation on time. If you need extensions, request them in writing before deadlines 
                pass. Keep records of all submissions and communications.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Mistake #7: Failing to Document Business Interruption</h3>
              <p className="mb-4">
                For commercial properties with business interruption coverage, failing to properly document 
                lost revenue and extra expenses leaves significant coverage unused. Business interruption 
                claims require proof of lost income, documentation of extra expenses incurred to continue 
                operations, and clear connection between the covered damage and the business impact.
              </p>
              <p className="mb-4">
                <strong>Best practice:</strong> Document business interruption from day one. Keep records of 
                lost revenue compared to prior periods. Document all extra expenses with receipts and explanations. 
                Coordinate business interruption documentation with property damage claims for consistent presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Insurance Experience Matters */}
      <section id="why-experience-matters" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Why Insurance Experience Matters in Disaster Recovery
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8 text-center">
                The difference between a contractor who understands insurance and one who doesn't can be 
                tens or hundreds of thousands of dollars in claim value—plus months of frustration avoided.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-red-800 mb-4">Without Insurance Expertise</h3>
                  <ul className="space-y-2 text-red-900">
                    <li>• Estimates in wrong format, rejected by adjusters</li>
                    <li>• Hidden damage discovered but not properly claimed</li>
                    <li>• Supplemental claims denied due to poor documentation</li>
                    <li>• Scope disputes delay project for months</li>
                    <li>• Property owner caught between contractor and carrier</li>
                    <li>• Settlement covers 60-70% of actual repair costs</li>
                  </ul>
                </div>
                <div className="bg-brand-green-bg rounded-xl p-6 border-l-4 border-brand-green">
                  <h3 className="text-xl font-bold text-brand-green-dark mb-4">With FCS Insurance Expertise</h3>
                  <ul className="space-y-2 text-brand-green-dark">
                    <li>• Xactimate estimates meet carrier requirements</li>
                    <li>• Hidden damage identified, documented, and claimed</li>
                    <li>• Supplemental claims professionally prepared and approved</li>
                    <li>• Scope agreed efficiently through professional process</li>
                    <li>• Contractor and carrier speak same language</li>
                    <li>• Fair settlement reflecting actual restoration costs</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Speaking the Language</h3>
              <p className="mb-4">
                Insurance has its own vocabulary, processes, and expectations. Contractors without insurance 
                background often create friction simply by not understanding how the claims process works. 
                They submit estimates in formats adjusters can't use. They demand payments before scope is 
                agreed. They create adversarial relationships that slow claims and reduce settlements.
              </p>
              <p className="mb-4">
                FCS speaks insurance fluently because we lived it. We use Xactimate with the same line 
                items and pricing databases adjusters use. We understand what documentation adjusters need 
                to approve scope items. We know when supervisor approval is required and prepare accordingly. 
                This fluency makes the entire process smoother.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Knowing Where to Look</h3>
              <p className="mb-4">
                After thousands of claims, we know exactly where damage hides. We know that hurricane wind 
                pressure racks door frames before it breaks windows. We know that fire damage extends far 
                beyond char marks through heat exposure. We know that flood water travels inside walls 
                to areas above the visible water line.
              </p>
              <p className="mb-4">
                This knowledge comes from experience—from examining thousands of damaged properties, from 
                seeing what adjusters miss, from finding hidden damage months after events when it causes 
                secondary problems. A contractor without this experience may complete apparently successful 
                restoration only to have problems emerge later from undiscovered damage.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Understanding Coverage</h3>
              <p className="mb-4">
                Insurance policies contain specific coverages, exclusions, and conditions. Contractors 
                without insurance background may not understand which damage is covered, leading to either 
                claiming non-covered damage (creating disputes) or missing covered damage (leaving money 
                on the table).
              </p>
              <p className="mb-4">
                FCS understands coverage nuances. We know that wind-driven rain damage is covered differently 
                than flood damage. We know that code upgrade coverage may apply when bringing damaged 
                buildings to current standards. We know that mold coverage varies significantly by policy 
                and depends on the underlying cause. This understanding shapes how we document and present claims.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Professional Credibility</h3>
              <p>
                Adjusters and carriers work with contractors regularly. They quickly recognize contractors 
                who understand the process versus those who don't. Contractors with credibility—demonstrated 
                through proper documentation, reasonable estimates, and professional communication—get 
                claims processed more efficiently. FCS's 43-year track record in the insurance industry 
                provides credibility that benefits every project we handle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services List */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Comprehensive Disaster Recovery Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">Storm & Hurricane Damage</h3>
              <ul className="space-y-3">
                {["Wind damage repair", "Roof restoration and replacement", "Water intrusion remediation", "Structural damage repair", "Emergency tarping and board-up", "Window and door replacement"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">Fire & Flood Damage</h3>
              <ul className="space-y-3">
                {["Fire damage assessment", "Smoke and soot remediation", "Structural evaluation", "Flood damage restoration", "NFIP claim documentation", "Complete reconstruction"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">Insurance Claim Support</h3>
              <ul className="space-y-3">
                {["Certified Xactimate estimates", "Comprehensive damage documentation", "Adjuster meeting coordination", "Supplemental claim preparation", "Appraisal process support", "Large loss specialization"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">Commercial Restoration</h3>
              <ul className="space-y-3">
                {["Municipal building restoration", "Multi-family and HOA projects", "Industrial facility recovery", "Retail and office restoration", "Business interruption coordination", "FEMA public assistance compliance"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific Considerations */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Florida-Specific Disaster Recovery Considerations
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Florida's unique combination of hurricane exposure, flood risk, building codes, and insurance 
                market conditions creates disaster recovery challenges found nowhere else. Understanding 
                these Florida-specific factors is essential for successful property restoration.
              </p>
              
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Hurricane Deductibles</h3>
              <p className="mb-6">
                Unlike flat-dollar deductibles in most states, Florida hurricane deductibles are typically 
                calculated as a percentage of dwelling coverage—commonly 2%, 5%, or even 10%. On a property 
                insured for $1 million, a 5% hurricane deductible means $50,000 out of pocket before coverage 
                begins. This significantly impacts smaller claims and must be factored into restoration planning.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Assignment of Benefits (AOB) Reform</h3>
              <p className="mb-6">
                Florida's 2022 insurance reforms significantly changed how contractors can work with insurance 
                claims. Understanding current AOB rules, one-way attorney fee provisions, and claim assignment 
                regulations affects how disaster recovery contracts are structured and how claims proceed.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Florida Building Code Wind Requirements</h3>
              <p className="mb-6">
                Florida Building Code imposes the nation's strictest wind resistance requirements, particularly 
                in the High-Velocity Hurricane Zone (Miami-Dade and Broward counties) and the Wind-Borne 
                Debris Region. When hurricane damage repairs trigger code compliance requirements, project 
                scope and cost can increase substantially. Impact-resistant windows, enhanced roof attachments, 
                and secondary water resistance requirements may apply to repair projects depending on damage 
                extent and location.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Citizens Property Insurance</h3>
              <p className="mb-6">
                Many Florida property owners are insured through Citizens Property Insurance Corporation, the 
                state-created insurer of last resort. Citizens has specific claims processes, documentation 
                requirements, and contractor relationships that differ from private carriers. FCS has experience 
                working with Citizens claims and understands their particular requirements.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Flood Insurance Requirements</h3>
              <p>
                Florida's extensive flood zones create widespread flood insurance requirements. Understanding 
                the interaction between NFIP coverage, private flood insurance, and windstorm coverage is 
                essential when multiple damage types occur simultaneously—as commonly happens during hurricanes 
                when properties experience both wind damage and storm surge or flooding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreaLinks service="disaster-recovery" serviceName="Disaster Recovery" />

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Disaster Recovery FAQs" />

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              43 Years of Insurance Expertise.<br />
              Working for You.
            </h2>
            <p className="text-xl text-white/90 mb-4">
              When disaster strikes your commercial property or high-value home, you need more than 
              a contractor—you need a partner who truly understands insurance claims.
            </p>
            <p className="text-lg text-white/80 mb-8">
              FCS brings 43 years of insurance industry experience to your project. Seven years as an 
              adjuster. Twenty-eight years as an insurance restoration contractor. We've seen it from 
              both sides, and that perspective makes the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="btn-cta">
                Schedule Your Damage Assessment
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
            <p className="text-white/70 mt-6 text-sm">
              Licensed Florida State Certified General Contractor CGC#1522434 | Projects $250,000 to $25M+
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
