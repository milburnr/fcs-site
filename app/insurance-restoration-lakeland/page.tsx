import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, AlertTriangle, FileCheck, Users, Wrench, ClipboardCheck, Home, DollarSign, HardHat, FileText, Droplets, Wind, Flame, Search, Factory, MapPin, TreeDeciduous } from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Insurance Restoration Lakeland FL | Property Damage | FCS",
  description: "Lakeland's most experienced insurance restoration contractor. 43 years claims expertise—former adjuster AND contractor. Storm damage, fire restoration, commercial property recovery in Polk County. Serving Downtown, Lake Morton, Dixieland, and South Lakeland.",
  keywords: "insurance restoration Lakeland, property damage restoration Polk County, storm damage Lakeland FL, commercial restoration Lakeland, fire damage restoration Lakeland, insurance claim contractor Polk County, industrial restoration Tampa Orlando corridor",
};

const insuranceExperience = [
  { stat: "43", label: "Years Insurance Industry Experience" },
  { stat: "7", label: "Years as Insurance Adjuster (Allstate)" },
  { stat: "28", label: "Years Insurance Restoration Contractor" },
  { stat: "$75M+", label: "In Claims Handled" }
];

const lakelandAreas = [
  { name: "Downtown Lakeland", description: "Historic commercial buildings and Munn Park district restoration" },
  { name: "Lake Morton", description: "High-value lakefront residential and commercial properties" },
  { name: "Lake Hollingsworth", description: "Established neighborhoods and Florida Southern College area" },
  { name: "Dixieland Historic District", description: "Historic homes requiring specialized restoration approaches" },
  { name: "South Lakeland", description: "Growing commercial corridors and newer developments" },
  { name: "North Lakeland Industrial", description: "Warehouse and distribution facilities along I-4 corridor" }
];

const lakelandFaqs = [
  {
    question: "How is insurance restoration different for inland Lakeland properties compared to coastal areas?",
    answer: "Lakeland's inland position creates distinctly different damage patterns than coastal Florida. While you're protected from salt corrosion and direct storm surge, Polk County faces intense wind damage, tornado risk during hurricanes, tree and debris impact, and significant flooding from rain accumulation rather than tidal surge. Our 43 years of claims experience includes extensive work throughout Central Florida's inland communities. We understand that Lakeland wind damage often involves tree impact on roofs and structures—a different documentation approach than coastal salt spray or surge damage. Insurance adjusters evaluate these claims differently, and our expertise ensures proper documentation for inland damage patterns."
  },
  {
    question: "Does FCS have experience with industrial and warehouse restoration in Lakeland?",
    answer: "Absolutely. Lakeland's position along the I-4 corridor between Tampa and Orlando makes it a major logistics and distribution hub. FCS has extensive experience with industrial facility restoration including warehouses, distribution centers, manufacturing plants, and cold storage facilities. Industrial claims involve specialized considerations: business interruption for logistics operations, equipment damage, inventory loss documentation, and restoration timelines that minimize operational disruption. Our commercial restoration experience includes projects up to $25 million, and we understand the urgency of restoring facilities that serve the Tampa-Orlando supply chain."
  },
  {
    question: "What areas of Lakeland does FCS serve for insurance restoration?",
    answer: "FCS provides insurance restoration services throughout all of Lakeland and Polk County. This includes Downtown Lakeland and the Munn Park historic district, Lake Morton and Lake Hollingsworth neighborhoods, the Dixieland Historic District, South Lakeland's growing commercial areas, North Lakeland's industrial corridor, and surrounding communities including Auburndale, Winter Haven, Bartow, and Mulberry. For large loss projects ($250,000+), we serve all of Polk County with the same level of expertise we bring to our Tampa Bay core markets."
  },
  {
    question: "How does Polk County's tornado risk affect insurance claims?",
    answer: "Polk County consistently ranks among Florida's highest counties for tornado activity, particularly during hurricane events when outer bands spawn tornadoes. Tornado damage creates unique claims situations: damage paths may be narrow but total, affecting some structures while leaving adjacent properties untouched. Insurance claims for tornado damage require precise documentation of the damage path, clear distinction between tornado damage and other wind damage, and understanding of how tornado coverage applies under windstorm policies. Our claims experience includes numerous tornado damage projects throughout Central Florida."
  },
  {
    question: "Can FCS help with fire damage restoration for Lakeland commercial properties?",
    answer: "Yes, fire damage restoration is a core FCS capability, and we have particular experience with commercial and industrial fire losses. Lakeland's industrial properties—warehouses, manufacturing facilities, and distribution centers—face fire risks that require specialized restoration approaches. Fire damage extends far beyond visible burn areas through heat exposure and smoke migration. Our assessment includes thermal damage evaluation, smoke contamination mapping, water damage from firefighting efforts, and structural evaluation. For commercial properties, we also coordinate business interruption documentation to support those claims."
  },
  {
    question: "What should Lakeland property owners do when hurricane damage occurs?",
    answer: "First, ensure safety and document everything with photos and video before any cleanup—this is crucial for your claim. Contact your insurance company to report the loss. Perform only emergency mitigation (tarping, board-up) until the adjuster inspects. For significant damage, contact FCS early. Our initial assessment helps ensure proper documentation, identifies hidden damage that surface inspections miss, and positions your claim for fair settlement. Lakeland's inland location means damage often differs from coastal expectations—tree damage, wind-driven debris, and localized flooding patterns require knowledgeable documentation."
  },
  {
    question: "Does FCS work with all insurance carriers for Lakeland claims?",
    answer: "Yes, FCS works with all major insurance carriers, independent adjusters, and Citizens Property Insurance Corporation. Our 43 years of insurance industry experience—including 7 years as an Allstate adjuster—means we speak the insurance industry's language fluently. We use Xactimate estimating software, provide documentation in carrier-standard formats, and maintain professional relationships that facilitate claim processing. This is particularly important in Polk County where many property owners carry Citizens coverage due to Florida's challenging insurance market."
  },
  {
    question: "How long does insurance restoration typically take in Lakeland?",
    answer: "Timeline varies significantly based on damage extent and claim complexity. A straightforward commercial restoration might take 6-12 months from damage to completion. Complex projects or complete rebuilds can extend to 18-24 months. The insurance claim process itself—from initial inspection through final payment—often takes 3-6 months for large losses. FCS provides detailed schedules during pre-construction planning. For Lakeland industrial properties where business interruption impacts are significant, we prioritize restoration sequences that allow partial operations to resume as quickly as possible."
  },
  {
    question: "What makes FCS different from other restoration contractors in Polk County?",
    answer: "FCS's owner has 43 years of insurance industry experience—7 years as a field adjuster for Allstate and 28 years running a statewide insurance restoration firm. This dual perspective from both sides of the claims process is extraordinarily rare. We understand exactly how adjusters evaluate claims, what documentation carriers require, and how to present scope that gets approved. For Lakeland property owners, this means faster claim processing, fewer disputes, and more complete settlements. We're not learning the insurance process at your expense—we've lived it from both sides."
  },
  {
    question: "Does FCS handle historic property restoration in Lakeland's historic districts?",
    answer: "Yes, FCS has experience with historic property restoration that requires balancing insurance claim requirements with historic preservation considerations. Lakeland's Dixieland Historic District and other historic areas contain properties where restoration must respect original materials and construction methods while meeting current building codes. Insurance claims for historic properties often involve discussions about replacement with like-kind materials versus modern alternatives. Our experience navigating these situations helps ensure both insurance coverage and historic integrity are preserved."
  }
];

const commercialServices = [
  "Warehouse and distribution center restoration",
  "Manufacturing facility recovery",
  "Retail and office building restoration",
  "Cold storage and refrigerated facility repair",
  "Multi-tenant commercial property restoration",
  "Industrial equipment damage documentation"
];

const residentialServices = [
  "High-value lakefront home restoration",
  "Historic district property restoration",
  "Wind and tree damage repair",
  "Roof damage and replacement",
  "Water intrusion remediation",
  "Complete property reconstruction"
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Disaster Recovery", href: "/disaster-recovery/" },
  { name: "Insurance Restoration Lakeland", href: "/insurance-restoration-lakeland/" },
];

export default function InsuranceRestorationLakelandPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Insurance Restoration Lakeland"
        serviceDescription="Lakeland's most experienced insurance restoration contractor with 43 years claims expertise. Commercial, industrial, and residential property damage restoration throughout Polk County. Storm damage, fire restoration, and complete insurance claim management."
        minPrice="50000"
      />

      <Breadcrumb items={[
        { name: "Services", href: "/services/" },
        { name: "Disaster Recovery", href: "/disaster-recovery/" },
        { name: "Insurance Restoration Lakeland", href: "/insurance-restoration-lakeland/" },
      ]} />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Insurance restoration services in Lakeland, Polk County"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Lakeland & Polk County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Insurance Restoration in Lakeland:<br />
              <span className="text-brand-gold">43 Years of Claims Expertise</span>
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              When property damage strikes in Polk County, you need a contractor who truly understands 
              insurance claims—from both sides of the process.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              FCS brings 43 years of insurance industry experience to Lakeland: 7 years as an Allstate 
              adjuster, 28 years operating a statewide insurance restoration firm. We understand inland 
              Florida's unique damage patterns—wind, tornadoes, tree damage, and flooding—and how to 
              document them for maximum claim recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Lakeland Assessment
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

      {/* Introduction - Lakeland Focus */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Insurance Restoration Expertise for Inland Florida
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Lakeland occupies a unique position in Florida's property damage landscape. Located along the 
                I-4 corridor between Tampa and Orlando, Polk County faces distinct challenges that differ 
                significantly from coastal communities. While you're protected from direct storm surge and 
                saltwater corrosion, inland Central Florida experiences intense wind damage, one of Florida's 
                highest tornado frequencies during hurricane season, substantial tree and debris damage, and 
                flooding from accumulated rainfall rather than tidal forces.
              </p>
              
              <p className="mb-6">
                These differences matter enormously for insurance claims. Adjusters evaluate inland damage 
                differently than coastal damage. Documentation requirements vary. Coverage questions arise 
                around tree damage, debris impact, and fresh water versus salt water flooding. Property owners 
                who don't understand these distinctions often receive inadequate settlements—not because 
                carriers are acting in bad faith, but because claims aren't properly documented for inland 
                damage patterns.
              </p>
              
              <p className="mb-6">
                Florida Construction Specialists brings 43 years of insurance industry experience to Lakeland 
                property owners. Our principal spent seven years as a field adjuster for Allstate Insurance, 
                evaluating claims throughout Florida including extensive work in inland communities. He then 
                operated a statewide insurance restoration firm for 28 years, handling over $75 million in 
                claims. This dual perspective—understanding claims from both the adjuster's desk and the 
                contractor's perspective—enables us to document and present Lakeland claims for fair settlement.
              </p>
              
              <p className="mb-6">
                Today, FCS serves Lakeland and Polk County with the same expertise we bring to our Tampa Bay 
                core markets. We specialize in commercial and industrial properties—warehouses, distribution 
                centers, manufacturing facilities, and retail/office buildings that form Lakeland's economic 
                backbone. We also handle high-value residential properties, particularly in established 
                neighborhoods around Lake Morton, Lake Hollingsworth, and the historic Dixieland district.
              </p>
              
              <p>
                For Lakeland property owners facing significant damage, FCS represents rare combination of 
                construction excellence and insurance expertise, applied specifically to inland Florida's 
                unique damage patterns. We don't just rebuild—we ensure your claim captures the full scope 
                of covered damage so you can restore your property completely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inland vs Coastal Damage Differences */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <TreeDeciduous className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Inland Florida Damage: What Makes Lakeland Different
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                Understanding how inland damage differs from coastal damage is essential for proper insurance 
                claims in Polk County. Adjusters who primarily handle coastal claims may not fully appreciate 
                inland damage patterns—and property owners who don't understand these differences may not 
                document their damage effectively.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Wind Damage Without Salt Corrosion</h3>
              <p className="mb-4">
                Coastal properties face compound damage from wind plus salt spray corrosion. Salt accelerates 
                metal deterioration, damages HVAC systems, and creates long-term maintenance issues even after 
                visible storm damage is repaired. Lakeland properties don't face this challenge—but that 
                doesn't mean wind damage is less severe.
              </p>
              
              <p className="mb-4">
                Inland wind damage often presents differently. Without the coastal tree removal common in 
                developed beachfront areas, Lakeland properties face significant tree hazards. Mature oaks, 
                pines, and other trees become projectiles in high winds, causing structural damage that 
                differs from wind-only damage. Falling trees can collapse roof sections, penetrate walls, 
                and cause catastrophic damage that pure wind rarely achieves.
              </p>
              
              <p className="mb-4">
                Tree impact damage requires specific documentation approaches. The point of impact, direction 
                of fall, and extent of penetration affect how damage is evaluated. Secondary damage from 
                water intrusion through tree openings must be distinguished from other water damage. FCS's 
                experience with inland claims ensures proper documentation of tree-related damage patterns.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Tornado Risk in Polk County</h3>
              <p className="mb-4">
                Polk County consistently ranks among Florida's most tornado-prone counties. During hurricane 
                events, outer rain bands frequently spawn tornadoes as they move across Central Florida. These 
                tornadoes create damage patterns distinctly different from sustained hurricane winds.
              </p>
              
              <p className="mb-4">
                Tornado damage tends to be severe but localized—a narrow path of destruction where one property 
                is devastated while neighbors escape unscathed. This creates unique claims situations. 
                Documentation must clearly establish the tornado's path and your property's position within 
                it. The total destruction common in tornado paths differs from the distributed damage of 
                hurricane winds.
              </p>
              
              <p className="mb-4">
                Insurance coverage for tornado damage falls under windstorm coverage in most Florida policies, 
                but claims handling differs. The concentrated severity of tornado damage often exceeds 
                what adjusters expect from general windstorm claims. Proper documentation of tornado damage 
                requires understanding these differences and presenting claims accordingly.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Flooding: Rainfall vs. Storm Surge</h3>
              <p className="mb-4">
                Lakeland's flooding comes from accumulated rainfall and drainage system overwhelm rather than 
                coastal storm surge. This distinction matters significantly for insurance coverage. Storm 
                surge flooding is clearly flood damage requiring flood insurance. But rainfall flooding 
                can create coverage questions—particularly when wind damage allows rain entry before 
                external flooding occurs.
              </p>
              
              <p className="mb-4">
                Wind-driven rain that enters through storm-damaged openings is generally covered under 
                windstorm policies as part of the wind damage event. Standing water from drainage overwhelm 
                or rising water tables is flood damage requiring NFIP or private flood coverage. When both 
                occur simultaneously—as commonly happens during major storms—properly attributing damage 
                to the correct coverage becomes critical.
              </p>
              
              <p className="mb-4">
                Polk County's chain of lakes and relatively flat terrain create localized flooding patterns 
                that differ from coastal surge. Lake levels rise, retention ponds overflow, and low-lying 
                areas flood from accumulated rainfall. Understanding these patterns helps document flood 
                damage accurately and identify which coverage applies to specific damage areas.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Debris and Secondary Damage</h3>
              <p className="mb-4">
                Inland areas often experience more debris damage than coastal areas where pre-storm preparation 
                removes loose items and where fewer trees exist to become projectiles. In established Lakeland 
                neighborhoods, debris includes not just natural materials but fencing, pool enclosures, 
                outdoor furniture, and materials from damaged structures that become windborne.
              </p>
              
              <p>
                Debris impact creates damage that must be properly documented. Impact points on roofing, 
                siding damage from flying objects, broken windows and doors, and penetration damage all 
                require specific documentation. FCS's experience ensures debris damage is captured completely 
                in initial claim documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial and Industrial Focus */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Commercial & Industrial Restoration: Lakeland's Economic Engine
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                Lakeland's position along the I-4 corridor makes it a critical logistics and distribution hub 
                between Tampa and Orlando. The city's industrial and commercial properties form the backbone 
                of Central Florida's supply chain—and when disaster damage strikes these facilities, rapid, 
                expert restoration becomes essential.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Warehouse and Distribution Center Restoration</h3>
              <p className="mb-4">
                Lakeland's warehouse district serves national retailers, e-commerce operations, and regional 
                distributors. These facilities range from traditional warehouse buildings to modern 
                high-bay distribution centers with sophisticated material handling systems. Damage to 
                these facilities creates ripple effects throughout supply chains, making restoration 
                urgency and business interruption documentation critical.
              </p>
              
              <p className="mb-4">
                Warehouse damage often involves large roof areas susceptible to wind damage, dock doors and 
                loading areas vulnerable to debris impact, and interior systems including lighting, fire 
                suppression, and HVAC that may suffer secondary damage. Water intrusion through damaged 
                roofing can affect stored inventory, creating claims that span both building coverage and 
                contents coverage.
              </p>
              
              <p className="mb-4">
                FCS understands warehouse restoration priorities. We develop phased restoration plans that 
                can restore partial operations while completing full repairs. We document business 
                interruption carefully—lost revenue, extra expediting costs, customer relationship impacts—to 
                support those claims. Our experience with large commercial facilities includes projects up 
                to $25 million, giving us the capacity and expertise these projects require.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Manufacturing Facility Recovery</h3>
              <p className="mb-4">
                Lakeland's manufacturing sector includes food processing, phosphate operations, building 
                materials production, and diverse light manufacturing. Manufacturing facility damage creates 
                complex claims involving building coverage, equipment coverage, business interruption, and 
                potentially environmental considerations.
              </p>
              
              <p className="mb-4">
                Manufacturing restoration requires understanding production processes to minimize downtime. 
                Phased restoration that brings critical production areas online first can dramatically 
                reduce business interruption losses. Equipment assessment determines what can be cleaned 
                and restored versus what requires replacement—a determination with significant cost and 
                timeline implications.
              </p>
              
              <p className="mb-4">
                FCS's approach to manufacturing restoration integrates insurance expertise with construction 
                capability. We coordinate equipment evaluation with specialized vendors while managing 
                building restoration. We document equipment damage thoroughly to support equipment 
                breakdown or property coverage claims. We understand that every day of lost production 
                represents significant financial impact.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Cold Storage and Refrigerated Facilities</h3>
              <p className="mb-4">
                Lakeland hosts significant cold storage capacity serving Florida's food distribution networks. 
                Refrigerated facility damage creates urgent situations—when cooling systems fail, perishable 
                inventory faces rapid spoilage. These claims involve building damage, refrigeration system 
                damage or contamination, and inventory losses that can dwarf the building claim.
              </p>
              
              <p className="mb-4">
                Restoration of refrigerated facilities requires coordinated response. Emergency cooling 
                may preserve inventory while permanent repairs proceed. Refrigeration system evaluation 
                determines contamination extent and repair feasibility. Building envelope restoration 
                must maintain the insulation values required for efficient cold storage operations.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Retail and Office Properties</h3>
              <p className="mb-4">
                Lakeland's retail corridors along South Florida Avenue, US-98, and the growing South 
                Lakeland commercial district include substantial commercial real estate. Retail and 
                office property damage affects tenant operations, creating landlord-tenant coordination 
                requirements alongside insurance claims.
              </p>
              
              <p className="mb-4">
                Multi-tenant commercial properties involve complex claims with multiple interested parties. 
                The landlord's building coverage, tenant improvement coverage, individual tenant business 
                interruption claims, and coordination among these coverages require experienced management. 
                FCS helps property owners navigate these complexities while maintaining tenant relationships 
                during restoration.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Business Interruption Documentation</h3>
              <p className="mb-4">
                For commercial and industrial properties, business interruption coverage often represents 
                claims value equal to or exceeding building damage. Yet many property owners fail to 
                document business interruption properly, leaving significant coverage unused.
              </p>
              
              <p>
                FCS helps commercial clients document business interruption from day one. We track 
                restoration timeline impacts on operations. We identify extra expenses incurred to maintain 
                partial operations—expedited shipping, temporary facilities, overtime labor. We coordinate 
                with accountants and business owners to establish pre-loss baseline revenue. This 
                documentation supports substantial business interruption recoveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fire Damage Restoration */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-orange-600 rounded-xl">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Fire Damage Restoration in Lakeland
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                Fire damage affects Lakeland properties year-round, independent of hurricane season. 
                Commercial fires, industrial incidents, and residential fires all require specialized 
                restoration approaches that address not just visible damage but the full extent of 
                heat, smoke, and water damage throughout affected structures.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Industrial Fire Restoration</h3>
              <p className="mb-4">
                Lakeland's industrial facilities face fire risks from manufacturing processes, electrical 
                systems, and stored materials. Industrial fires often burn hotter and longer than residential 
                fires, causing more extensive structural damage. They may also involve hazardous materials, 
                chemical contamination, or environmental concerns that affect restoration approach.
              </p>
              
              <p className="mb-4">
                Industrial fire claims are among the most complex. Building damage, equipment damage, 
                inventory loss, environmental cleanup, and business interruption combine into multi-faceted 
                claims requiring careful coordination. FCS has experience managing these complex claims, 
                ensuring each coverage element is properly documented and claimed.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Commercial Fire Recovery</h3>
              <p className="mb-4">
                Commercial fire damage extends beyond the fire origin through smoke migration, heat exposure, 
                and firefighting water. HVAC systems distribute smoke throughout buildings. Heat affects 
                materials well beyond visible char. Water from fire suppression—often thousands of gallons—
                creates secondary damage requiring immediate attention.
              </p>
              
              <p className="mb-4">
                FCS's fire restoration approach addresses all damage categories systematically. We assess 
                structural integrity after heat exposure. We map smoke contamination throughout affected 
                areas. We coordinate water extraction and drying to prevent mold development. We document 
                each damage type for proper claim presentation.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Smoke and Soot Remediation</h3>
              <p className="mb-4">
                Smoke damage often exceeds fire damage in affected area. Smoke particles penetrate porous 
                materials, contaminate hidden spaces, and leave persistent odors that resist surface cleaning. 
                Different fire types produce different smoke characteristics—protein fires, synthetic fires, 
                and wood fires each require specific remediation approaches.
              </p>
              
              <p className="mb-4">
                Proper smoke remediation goes beyond surface cleaning. Contents must be evaluated for 
                cleaning feasibility versus replacement. HVAC systems require thorough cleaning or 
                replacement to prevent redistributing smoke particles. Structural cavities may need 
                treatment to address accumulated smoke deposits. FCS ensures smoke damage is fully 
                addressed, not just cosmetically masked.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Water Damage from Firefighting</h3>
              <p className="mb-4">
                Firefighting efforts routinely cause water damage exceeding the original fire damage. 
                Thousands of gallons flow through structures during suppression, saturating building 
                materials, flooding lower floors, and creating conditions for mold growth if not 
                properly addressed.
              </p>
              
              <p>
                This water damage is part of the fire claim—it's consequential damage from a covered event. 
                But it requires timely response: water extraction within hours, structural drying within 
                days. Delayed response leads to secondary damage that may complicate claims. FCS coordinates 
                immediate water response with overall fire restoration planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lakeland Service Areas */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Serving All of Lakeland and Polk County
            </h2>
            
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              FCS provides insurance restoration services throughout Lakeland and the greater Polk County 
              area. Our experience spans diverse neighborhoods, property types, and damage patterns.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lakelandAreas.map((area) => (
                <div key={area.name} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-brand-green-dark mb-2">{area.name}</h3>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-brand-green-bg rounded-xl p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 text-center">
                Polk County Communities We Serve
              </h3>
              <p className="text-gray-700 text-center">
                Beyond Lakeland, FCS provides insurance restoration services throughout Polk County including 
                <strong> Auburndale, Winter Haven, Bartow, Mulberry, Lake Wales, Haines City, Plant City</strong> 
                (Hillsborough County), and surrounding communities. For large loss projects, we serve all of 
                Central Florida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Claim Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Navigating Insurance Claims in Polk County
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-8">
                Our 43 years of insurance industry experience—including 7 years as an adjuster—gives 
                Lakeland property owners an advantage few contractors can offer. We don't just understand 
                construction; we understand how insurance claims work from the inside.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Documentation That Adjusters Accept</h3>
              <p className="mb-4">
                Insurance claims require specific documentation formats. Estimates submitted in non-standard 
                formats create friction and delays. Documentation that doesn't address coverage questions 
                leads to disputes. FCS provides documentation that adjusters can work with:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Xactimate estimates</strong> using the same software, pricing databases, and line items adjusters use</li>
                <li><strong>Organized photographs</strong> with clear labeling by location and damage type</li>
                <li><strong>Moisture documentation</strong> with readings and mapping that supports water damage claims</li>
                <li><strong>Scope justification</strong> explaining why specific repairs are necessary</li>
                <li><strong>Code compliance references</strong> supporting code-required upgrades</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Working with All Carriers</h3>
              <p className="mb-4">
                FCS works with all insurance carriers serving Polk County, including Citizens Property 
                Insurance Corporation, which insures many Florida properties due to the challenging 
                private insurance market. We understand each carrier's processes, documentation 
                requirements, and claims handling approaches.
              </p>
              
              <p className="mb-4">
                Our professional relationships with carriers and adjusters facilitate claim processing. 
                We're known for accurate documentation, fair estimates, and professional communication. 
                This reputation—built over decades of claims experience—benefits every project we handle.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Supplemental Claims</h3>
              <p className="mb-4">
                Large loss claims routinely require supplemental claims as hidden damage is discovered 
                during restoration. This is normal—not a sign of problems. Initial inspections can't 
                identify all damage, particularly moisture intrusion, structural issues, and damage 
                behind finished surfaces.
              </p>
              
              <p className="mb-4">
                FCS has extensive experience preparing supplemental claims. We document discovered damage 
                thoroughly, explain its relationship to the original covered event, and present supplements 
                in formats that facilitate approval. Our supplemental claim documentation consistently 
                captures covered damage that might otherwise be missed.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Dispute Resolution</h3>
              <p>
                Most claims proceed smoothly with professional documentation and communication. When 
                disputes arise, FCS provides the documentation and expertise to support resolution—
                whether through direct negotiation, the appraisal process, or other mechanisms. Our 
                experience from both sides of claims helps us navigate disputes effectively while 
                maintaining professional relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Insurance Experience Matters */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Why Insurance Experience Matters for Lakeland Property Owners
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 mb-10">
              <p className="text-xl mb-8 text-center">
                The difference between a contractor who understands insurance and one who doesn't can mean 
                tens of thousands of dollars in claim recovery—plus months of frustration avoided.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-800 mb-4">Without Insurance Expertise</h3>
                <ul className="space-y-2 text-red-900">
                  <li>• Estimates in wrong format, rejected by adjusters</li>
                  <li>• Inland damage patterns not properly documented</li>
                  <li>• Hidden damage discovered but not claimed</li>
                  <li>• Tree damage attribution issues delay settlement</li>
                  <li>• Business interruption underdocumented</li>
                  <li>• Settlement covers 60-70% of actual costs</li>
                </ul>
              </div>
              <div className="bg-brand-green-bg rounded-xl p-6 border-l-4 border-brand-green">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">With FCS Insurance Expertise</h3>
                <ul className="space-y-2 text-brand-green-dark">
                  <li>• Xactimate estimates meet carrier standards</li>
                  <li>• Inland damage documented for proper evaluation</li>
                  <li>• Hidden damage identified and claimed</li>
                  <li>• Tree and tornado damage properly attributed</li>
                  <li>• Business interruption fully documented</li>
                  <li>• Fair settlement reflecting actual restoration costs</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">The FCS Difference</h3>
              <p className="text-gray-700 mb-4">
                FCS's owner spent 7 years as an Allstate field adjuster before spending 28 years running 
                an insurance restoration firm. This dual perspective is extraordinarily rare—most contractors 
                learn insurance processes through trial and error. We learned them from the inside.
              </p>
              <p className="text-gray-700">
                For Lakeland property owners, this means we know exactly what adjusters look for, how 
                coverage decisions are made, and what documentation supports claim approval. We've 
                handled claims as the adjuster, built claims as the contractor, and navigated disputes 
                through appraisal. This comprehensive experience translates to smoother projects and 
                better outcomes for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Lists */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Insurance Restoration Services in Lakeland
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                Commercial & Industrial
              </h3>
              <ul className="space-y-3">
                {commercialServices.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6 flex items-center gap-2">
                <Home className="w-6 h-6" />
                Residential Restoration
              </h3>
              <ul className="space-y-3">
                {residentialServices.map((item) => (
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

      {/* Common Damage Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Common Damage Types in Polk County
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-green rounded-full mb-4">
                  <Wind className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-brand-green-dark mb-2">Wind Damage</h3>
                <p className="text-gray-600 text-sm">
                  Hurricane winds, tornadoes, severe thunderstorms causing roof, siding, and structural damage
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-green rounded-full mb-4">
                  <TreeDeciduous className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-brand-green-dark mb-2">Tree Impact</h3>
                <p className="text-gray-600 text-sm">
                  Fallen trees and large debris causing roof penetration, wall damage, and structural failure
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-brand-green-dark mb-2">Water Damage</h3>
                <p className="text-gray-600 text-sm">
                  Wind-driven rain intrusion, flooding from accumulated rainfall, and drainage overwhelm
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 rounded-full mb-4">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-brand-green-dark mb-2">Fire Damage</h3>
                <p className="text-gray-600 text-sm">
                  Structural fire damage, smoke contamination, and water damage from firefighting efforts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-red-600 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                After Damage Occurs: What Lakeland Property Owners Should Do
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
                <h3 className="font-bold text-amber-800 mb-2">Critical First Steps</h3>
                <ol className="text-amber-900 space-y-2">
                  <li><strong>1. Ensure safety</strong> — Don't enter unsafe structures</li>
                  <li><strong>2. Document everything</strong> — Photos and video BEFORE cleanup</li>
                  <li><strong>3. Report the claim</strong> — Contact your insurance carrier promptly</li>
                  <li><strong>4. Mitigate further damage</strong> — Emergency tarping and board-up only</li>
                  <li><strong>5. Contact FCS</strong> — Early involvement protects your claim</li>
                </ol>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">Why Early FCS Involvement Matters</h3>
              <p className="mb-4">
                Contacting FCS early—even before the adjuster's inspection—positions your claim for success. 
                We can guide initial documentation to capture damage that surface inspections miss. We 
                can identify hidden damage through moisture testing and systematic assessment. We can 
                prepare for the adjuster meeting with proper documentation.
              </p>
              
              <p className="mb-4">
                Early involvement doesn't mean premature repairs. We understand the claims process—damage 
                must be documented and inspected before permanent repairs begin. But proper documentation 
                from day one often makes the difference between adequate and inadequate claim settlements.
              </p>
              
              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">What NOT to Do</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Don't clean up before documenting</strong> — Evidence disappears once removed</li>
                <li><strong>Don't make permanent repairs before inspection</strong> — Adjusters can't evaluate what they can't see</li>
                <li><strong>Don't accept initial settlement as final</strong> — Supplemental claims are normal for large losses</li>
                <li><strong>Don't dispose of damaged materials</strong> — Keep samples for potential disputes</li>
                <li><strong>Don't hire unqualified contractors</strong> — Verify licensing, insurance, and restoration experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema 
        items={lakelandFaqs} 
        title="Insurance Restoration Lakeland: Frequently Asked Questions" 
      />

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link 
              href="/disaster-recovery/" 
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group"
            >
              <Wind className="w-8 h-8 text-brand-green mb-4" />
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors">
                Storm & Disaster Recovery
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive disaster recovery services for hurricane, flood, and fire damage throughout Tampa Bay.
              </p>
              <span className="inline-flex items-center text-brand-green font-semibold text-sm mt-3">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link 
              href="/commercial-construction-tampa/" 
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group"
            >
              <Building2 className="w-8 h-8 text-brand-green mb-4" />
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors">
                Commercial Construction
              </h3>
              <p className="text-gray-600 text-sm">
                Full-service commercial construction and tenant improvements throughout the Tampa Bay region.
              </p>
              <span className="inline-flex items-center text-brand-green font-semibold text-sm mt-3">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link 
              href="/preconstruction/" 
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow group"
            >
              <ClipboardCheck className="w-8 h-8 text-brand-green mb-4" />
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors">
                Preconstruction Services
              </h3>
              <p className="text-gray-600 text-sm">
                Detailed planning, estimating, and value engineering before construction begins.
              </p>
              <span className="inline-flex items-center text-brand-green font-semibold text-sm mt-3">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Lakeland's Insurance Restoration Expert
            </h2>
            <p className="text-xl text-white/90 mb-4">
              When property damage strikes in Polk County, you need more than a contractor—you need 
              43 years of insurance expertise working for you.
            </p>
            <p className="text-lg text-white/80 mb-8">
              FCS understands inland Florida's unique damage patterns, Lakeland's commercial and industrial 
              restoration needs, and how to document claims for fair settlement. From Downtown to South 
              Lakeland, from warehouses to historic homes, we bring the experience that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="btn-cta">
                Schedule Lakeland Assessment
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
              Licensed Florida State Certified General Contractor CGC#1522434 | Serving Lakeland & Polk County
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
