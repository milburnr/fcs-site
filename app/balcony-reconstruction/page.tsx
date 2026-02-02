import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, AlertTriangle, Droplets, Wrench, ClipboardCheck, Users, FileText, HardHat, ThermometerSun, Scale, Clock, MapPin } from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceAreaLinks } from "@/components/InternalLinks";
import { ContentImage, ContentParallax } from "@/components/ContentImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balcony Reconstruction Tampa | Condo Balcony Repair Florida | FCS",
  description: "Expert balcony reconstruction Tampa and balcony repair Florida services. Specialized condo balcony restoration, waterproofing Tampa Bay, SB4-D compliance. Licensed contractor with $25M+ completed.",
  keywords: "balcony reconstruction Tampa, balcony repair Florida, condo balcony restoration, balcony waterproofing Tampa Bay, balcony structural repair, concrete balcony repair, HOA balcony reconstruction",
};

const features = [
  "Complete structural balcony reconstruction",
  "Traffic-bearing waterproofing systems",
  "Rebar treatment and replacement",
  "Post-tension cable evaluation",
  "Railing and guard replacement",
  "Concrete restoration and repair",
  "HOA and condo association coordination",
  "Multi-unit phased construction",
  "SB4-D compliance remediation",
  "Preventive maintenance programs"
];

const warningSignsList = [
  { sign: "Visible cracks in concrete surfaces", severity: "Moderate to High" },
  { sign: "Rust staining from corroded rebar", severity: "High" },
  { sign: "Spalling or delaminating concrete", severity: "Critical" },
  { sign: "Water ponding that doesn't drain", severity: "Moderate" },
  { sign: "Soft or spongy areas when walked on", severity: "Critical" },
  { sign: "Loose or wobbly railings", severity: "Critical" },
  { sign: "Efflorescence (white mineral deposits)", severity: "Moderate" },
  { sign: "Visible rebar exposure", severity: "Critical" }
];

const faqs = [
  {
    "question": "How much does balcony reconstruction cost in Tampa Bay?",
    "answer": "Balcony reconstruction costs in Tampa Bay typically range from $15,000 to $50,000 per balcony depending on size, extent of damage, waterproofing system selected, and railing requirements. Building-wide projects involving dozens of balconies often qualify for volume pricing. Florida Construction Specialists provides detailed estimates after thorough structural assessment, and we work with HOAs and condo associations on phased approaches to manage reserve fund impacts."
  },
  {
    "question": "What causes balcony failures in Florida?",
    "answer": "Florida's humid subtropical climate creates a perfect storm for balcony deterioration. The primary causes include water intrusion through failed waterproofing, salt air exposure that accelerates rebar corrosion, inadequate original slope-to-drain design, carbonation of concrete that destroys the protective environment around rebar, and construction defects from the original build. Once water reaches reinforcing steel, the corrosion cycle begins and causes concrete to crack and spall from the inside out."
  },
  {
    "question": "How long does balcony reconstruction take?",
    "answer": "Individual balcony reconstruction typically takes 2-4 weeks per unit depending on the scope of work required. Building-wide projects are phased over several months to minimize disruption—we typically work on 4-8 units simultaneously while rotating through the building. A 50-unit building might take 6-9 months for complete balcony reconstruction. We coordinate closely with HOA boards and property managers on scheduling to accommodate owner needs."
  },
  {
    "question": "Do you work with HOAs and condo associations?",
    "answer": "Yes, condominium and HOA balcony projects represent a significant portion of our work. We understand the unique requirements including board approval processes, reserve fund considerations, owner communication needs, and phased construction approaches. We provide detailed presentations for board meetings, maintain clear documentation for all parties, and coordinate access schedules that respect owner privacy and minimize disruption."
  },
  {
    "question": "What waterproofing systems do you use for balconies?",
    "answer": "We install traffic-bearing waterproofing systems designed for pedestrian use and Florida's climate. Our preferred systems include hot-applied rubberized asphalt membranes, cold-applied liquid membranes, and sheet membrane systems depending on balcony conditions and budget. All systems include proper slope-to-drain, perimeter flashing, and drain connections. We only use manufacturer-approved systems that carry 10-20 year warranties."
  },
  {
    "question": "How does SB4-D affect balcony inspections?",
    "answer": "Florida Senate Bill 4-D requires milestone structural inspections for buildings 3 stories or higher that are 30 years old (25 years within 3 miles of the coast). These inspections frequently identify balcony deficiencies including concrete deterioration, waterproofing failures, and structural concerns. Buildings must remediate these findings, and Florida Construction Specialists has completed numerous SB4-D-related balcony reconstruction projects throughout Tampa Bay."
  },
  {
    "question": "Can you repair just part of a balcony or is full reconstruction required?",
    "answer": "The appropriate scope depends on the extent of deterioration. Localized spalling with minimal rebar corrosion can often be addressed with partial repairs. However, if corrosion is widespread, waterproofing has failed throughout, or concrete carbonation has progressed significantly, full reconstruction is typically more cost-effective than repeated partial repairs. Our structural assessment determines the most appropriate and economical approach for each situation."
  },
  {
    "question": "What is your service area for balcony reconstruction?",
    "answer": "Florida Construction Specialists provides balcony reconstruction services throughout the Tampa Bay metropolitan area including Tampa, St. Petersburg, Clearwater, Sarasota, Bradenton, and surrounding communities. We focus on commercial and multi-family projects with minimum project values of $100,000, making us ideal for condominium buildings, apartment complexes, and commercial properties with multiple balconies."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Balcony Reconstruction", href: "/balcony-reconstruction/" },
];

export default function BalconyReconstructionPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Balcony Reconstruction Tampa"
        serviceDescription="Expert balcony reconstruction and repair services in Tampa Bay. Specialized in condo balcony restoration, waterproofing systems, and SB4-D compliance for multi-family buildings throughout Florida."
        minPrice="100000"
      />

      <Breadcrumb items={[
        { name: "Services", href: "/services/" },
        { name: "Balcony Reconstruction", href: "/balcony-reconstruction/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Balcony reconstruction and waterproofing in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Tampa Bay's Condo & Multi-Family Balcony Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Balcony Reconstruction Tampa & Florida Gulf Coast
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Expert balcony repair and reconstruction for condominiums, apartments, and commercial buildings. From structural assessment through waterproofing installation, we deliver complete balcony restoration solutions that protect your investment and ensure resident safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Balcony Assessment
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

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering Review</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$25M+ Completed Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">SB4-D Remediation Specialists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Tampa Bay's Trusted Balcony Reconstruction Contractor
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Florida Construction Specialists has established itself as Tampa Bay's premier balcony reconstruction contractor, delivering comprehensive restoration solutions for condominiums, apartment complexes, and commercial buildings throughout the region. With more than two decades of experience and over $25 million in successfully completed projects, we bring unmatched expertise to every balcony repair and reconstruction project we undertake.
              </p>
              <p>
                Our focus on multi-family and commercial properties means we understand the unique challenges these projects present. From navigating HOA board approval processes to coordinating construction access across dozens of individual units, we've developed proven systems that minimize disruption while maintaining the highest quality standards. We work closely with property managers, association boards, and building engineers to ensure every project meets both structural requirements and community expectations.
              </p>
              <p>
                As Florida's building inspection requirements have intensified following legislative changes, balcony reconstruction has become an increasingly critical concern for aging condominium buildings. Florida Construction Specialists has responded by developing specialized expertise in SB4-D compliance remediation, helping buildings address milestone inspection findings and structural reserve study requirements. Our team includes professionals experienced in concrete restoration, waterproofing installation, and structural repair—all essential components of comprehensive balcony reconstruction.
              </p>
              <p>
                Notable projects include the Tiara Condominium's $4.9 million balcony and waterproofing reconstruction, along with numerous multi-family projects throughout Pinellas, Hillsborough, Manatee, and Sarasota counties. Whether your building requires assessment of a few problem balconies or complete reconstruction of all exterior platforms, Florida Construction Specialists delivers the expertise, resources, and proven track record your project demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break - Balcony Work in Progress */}
      <ContentParallax
        src="/images/tampa-condo-balcony-restoration/tampa-condo-balcony-restoration-small.webp"
        alt="Condo balcony restoration work in Tampa Bay"
        title="Protecting Florida's Multi-Family Properties"
        subtitle="Expert balcony reconstruction for condominiums and apartment communities"
      />

      {/* Why Balconies Fail in Florida */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <ThermometerSun className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Balconies Fail in Florida's Climate
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the environmental factors that destroy balconies helps property owners recognize problems early and make informed decisions about reconstruction.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">The Humid Subtropical Challenge</h3>
                <p>
                  Florida's humid subtropical climate creates one of the most challenging environments for concrete structures anywhere in North America. Tampa Bay experiences average relative humidity levels exceeding 75%, combined with average annual rainfall approaching 50 inches. This moisture-rich environment means balcony surfaces rarely dry completely, creating persistent conditions that accelerate concrete deterioration.
                </p>
                <p>
                  The combination of high humidity and temperature fluctuations causes thermal cycling that stresses concrete and waterproofing systems. Daytime temperatures frequently exceed 90°F during summer months, while nighttime temperatures may drop 20-30 degrees. This daily expansion and contraction creates micro-cracking in concrete surfaces and stresses waterproofing membranes, eventually causing failures that allow water intrusion.
                </p>
                <p>
                  Florida's intense UV exposure further compounds these challenges. Ultraviolet radiation breaks down organic components in waterproofing coatings and sealants, causing them to become brittle and crack. Exposed concrete surfaces experience carbonation at accelerated rates due to this UV exposure, reducing the alkaline protection that normally shields reinforcing steel from corrosion.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Salt Air Exposure and Chloride Attack</h3>
                <p>
                  Coastal and near-coastal properties face an additional aggressive factor: airborne chlorides from the Gulf of Mexico and Tampa Bay. Salt-laden air can travel miles inland, depositing chloride ions on concrete surfaces throughout the Tampa Bay region. These chlorides penetrate into concrete through the pore structure, eventually reaching the reinforcing steel embedded within.
                </p>
                <p>
                  When chloride concentrations at the rebar level exceed a critical threshold—typically around 0.2% by weight of cement—they destroy the passive oxide layer that normally protects steel from corrosion. Once this protective layer is compromised, corrosion begins regardless of the concrete's pH level. This chloride-induced corrosion is particularly insidious because it can occur even in concrete that appears sound on the surface.
                </p>
                <p>
                  Properties within three miles of saltwater experience dramatically accelerated deterioration. Florida's building code recognizes this reality by requiring milestone structural inspections at 25 years for buildings in this coastal zone, compared to 30 years for inland properties. Many Tampa Bay condominiums fall within this aggressive exposure zone, making regular balcony assessment essential.
                </p>
              </div>

              {/* Inline image break */}
              <ContentImage
                src="/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-display.webp"
                alt="Exterior waterproofing membrane application on balcony structure"
                caption="Professional waterproofing systems protect against Florida's aggressive moisture environment"
                position="center"
              />

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Water Intrusion Mechanisms</h3>
                <p>
                  Water finds its way into balcony structures through multiple pathways, and understanding these mechanisms is essential for effective reconstruction. The most common entry points include failed waterproofing membranes, cracked concrete surfaces, deteriorated sealant joints, improperly flashed railings, and compromised penetrations at door thresholds. Florida's intense rain events—including afternoon thunderstorms that deliver inches of rainfall in minutes—test these systems relentlessly.
                </p>
                <p>
                  Inadequate slope-to-drain represents one of the most common original construction defects we encounter. Balconies should maintain a minimum slope of ¼ inch per foot toward drainage points, but many older buildings were constructed with insufficient slope or have experienced differential settlement that creates ponding conditions. Standing water dramatically increases hydrostatic pressure on waterproofing systems and accelerates deterioration of all components.
                </p>
                <p>
                  Capillary action draws water through hairline cracks that appear too small to matter. Once water enters the concrete matrix, it migrates through the pore structure, carrying chlorides and other corrosive agents deep into the structure. This moisture then reaches the rebar, initiating the corrosion cycle that ultimately destroys balcony integrity from within.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">The Rebar Corrosion Cycle</h3>
                <p>
                  Reinforcing steel corrosion represents the primary structural failure mechanism in Florida balconies. The process begins when oxygen and moisture reach the rebar, but accelerates dramatically when chlorides are present. As steel corrodes, it forms rust—iron oxide compounds that occupy significantly more volume than the original steel. This expansion creates tremendous internal pressure within the concrete.
                </p>
                <p>
                  The expansive pressure from corroding rebar causes concrete to crack and delaminate, a process called spalling. These cracks allow additional water and oxygen to reach the steel, accelerating corrosion in a self-reinforcing cycle. What begins as minor surface cracking can progress to complete structural failure as rebar cross-sections diminish and concrete sections separate from the structure.
                </p>
                <p>
                  By the time rust staining appears on concrete surfaces, significant corrosion has already occurred. The reddish-brown stains indicate that corrosion products are migrating to the surface, meaning water pathways extend from the rebar through the full concrete section. Early detection through professional assessment can identify corrosion before visible symptoms appear, allowing for less extensive and less expensive interventions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Concrete Carbonation and pH Reduction</h3>
                <p>
                  Fresh concrete maintains a highly alkaline environment with pH levels around 12-13, which naturally protects embedded steel through a process called passivation. However, carbon dioxide from the atmosphere gradually reacts with cement compounds, reducing concrete's pH in a process called carbonation. When carbonation reaches the rebar level and pH drops below approximately 9.5, the passive protection disappears and corrosion can begin.
                </p>
                <p>
                  Carbonation progresses from exposed surfaces inward at rates influenced by concrete quality, humidity levels, and CO2 concentration. In Florida's warm, humid environment, carbonation rates are accelerated compared to drier climates. Older buildings with minimal concrete cover over rebar may experience carbonation reaching the steel within 20-30 years, initiating corrosion even without chloride contamination.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Original Construction Defects</h3>
                <p>
                  Many Florida balcony failures trace back to deficiencies in original construction. During building booms, quality control sometimes suffered as contractors rushed to meet demand. Common defects we encounter include inadequate concrete cover over rebar, improper concrete consolidation leaving voids and honeycombing, insufficient waterproofing or slope-to-drain, improperly embedded railing posts, and missing or inadequate flashing details.
                </p>
                <p>
                  These original defects may not cause immediate problems but create vulnerabilities that Florida's aggressive environment eventually exploits. A railing post with inadequate embedment may remain stable for years before corrosion weakens the connection. Concrete with insufficient cover may appear sound until carbonation or chlorides reach the rebar and initiate rapid deterioration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break - Construction Detail */}
      <ContentParallax
        src="/images/construction/construction-large.webp"
        alt="Commercial construction details and reinforcement"
        title="Expert Structural Assessment"
        subtitle="Our team identifies deterioration before it becomes a safety hazard"
        overlayOpacity={0.6}
      />

      {/* Warning Signs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-brand-gold mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Signs Your Balcony Needs Professional Attention
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Early recognition of deterioration symptoms enables timely intervention, often reducing repair scope and cost while preventing safety hazards.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="prose prose-lg text-gray-600">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Visible Concrete Damage</h3>
              <p>
                <strong>Surface cracks</strong> in balcony concrete may indicate simple shrinkage or signal more serious structural concerns. Hairline cracks less than 1/16 inch wide often result from normal concrete curing, but wider cracks or those that follow reinforcing steel patterns suggest active deterioration. Cracks that leak water or show staining around their edges indicate failed waterproofing and water penetration into the structure.
              </p>
              <p>
                <strong>Spalling concrete</strong>—areas where the surface is breaking away in flakes or chunks—represents one of the most serious warning signs. Spalling typically indicates rebar corrosion has progressed to the point where expanding rust is forcing concrete away from the steel. When you can see or probe exposed rebar, immediate professional assessment is essential as structural capacity may be compromised.
              </p>
              <p>
                <strong>Delamination</strong> occurs when horizontal layers of concrete separate from each other, often due to corrosion of the top mat of reinforcing steel. Delaminated areas may appear intact but sound hollow when struck. This condition is particularly dangerous because large sections of concrete can suddenly detach and fall, creating serious safety hazards for anyone below the balcony.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 mt-8">Moisture-Related Symptoms</h3>
              <p>
                <strong>Rust staining</strong> appearing on concrete surfaces indicates active corrosion of embedded steel. The iron oxide compounds (rust) migrate through the concrete and deposit on surfaces as reddish-brown stains. Rust staining often appears at crack locations, along the undersides of balconies, or around railing post bases. By the time staining is visible, significant steel section loss may have already occurred.
              </p>
              <p>
                <strong>Water ponding</strong> that doesn't drain within hours after rain indicates inadequate slope or blocked drainage. Standing water accelerates deterioration of waterproofing systems and increases hydrostatic pressure that forces water into the concrete. Ponding also creates slip hazards and can cause water intrusion into units below. Proper balconies should drain completely within a short time after rainfall ends.
              </p>
              <p>
                <strong>Efflorescence</strong>—white mineral deposits on concrete surfaces—indicates water is moving through the concrete and depositing dissolved minerals as it evaporates. While efflorescence itself is not structurally damaging, it confirms that water is penetrating and migrating through the concrete, potentially carrying chlorides to the reinforcing steel.
              </p>
            </div>

            <div>
              <div className="bg-red-50 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Critical Warning Signs
                </h3>
                <ul className="space-y-4">
                  {warningSignsList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className={`px-2 py-1 rounded text-xs font-bold flex-shrink-0 ${
                        item.severity === "Critical" ? "bg-red-600 text-white" :
                        item.severity === "High" ? "bg-orange-500 text-white" :
                        "bg-yellow-500 text-gray-900"
                      }`}>
                        {item.severity}
                      </span>
                      <span className="text-gray-700">{item.sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="prose prose-lg text-gray-600">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Structural Movement Indicators</h3>
                <p>
                  <strong>Soft or spongy areas</strong> when walking on a balcony indicate serious deterioration of the concrete slab. These areas may feel different underfoot or visibly deflect under load. Soft spots typically indicate extensive delamination or concrete deterioration that has significantly reduced the slab's structural capacity. Immediate professional evaluation is critical.
                </p>
                <p>
                  <strong>Loose or wobbly railings</strong> represent both a safety hazard and an indicator of underlying problems. Railing posts embedded in concrete may become loose due to corrosion of the embedded portion, deterioration of the surrounding concrete, or inadequate original installation. Florida Building Code requires railings to resist significant lateral loads, and loose railings may not meet these requirements.
                </p>
                <p>
                  <strong>Separation between the balcony and building</strong> indicates potential structural distress. While minor caulk joint gaps may simply need sealant replacement, visible separation of the balcony slab from the building structure warrants immediate engineering evaluation to determine whether structural connections are compromised.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <ClipboardCheck className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Comprehensive Balcony Assessment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accurate assessment determines appropriate repair scope, prevents costly over-engineering or dangerous under-engineering, and provides the documentation needed for HOA decision-making.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-600 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Visual Inspection and Documentation</h3>
                <p>
                  Every assessment begins with systematic visual inspection of all balcony surfaces, including tops, undersides, perimeters, and connections to the building structure. Our inspectors document visible deterioration using photographs, measurements, and detailed notes. We map crack patterns, measure crack widths, and record the location and extent of spalling, staining, and other symptoms.
                </p>
                <p>
                  For multi-unit buildings, we inspect representative samples of balconies and all balconies showing visible distress. This approach balances thoroughness with practicality, identifying patterns that indicate systemic issues while documenting individual unit conditions for repair prioritization. Visual inspection alone, however, cannot detect subsurface deterioration that may be more extensive than surface symptoms suggest.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Sounding and Delamination Detection</h3>
                <p>
                  Chain drag or hammer sounding represents a critical assessment technique for detecting delamination—horizontal separations within the concrete slab that aren't visible on the surface. The inspector drags a chain across the concrete surface or taps with a hammer, listening for changes in sound quality. Sound concrete produces a clear, ringing tone, while delaminated areas produce a dull, hollow sound.
                </p>
                <p>
                  Sounding often reveals deterioration far more extensive than visible damage suggests. It's common to find that rust staining at a few locations indicates widespread subsurface delamination as corrosion has progressed along the rebar mat. Accurate delamination mapping is essential for determining repair versus reconstruction scope and developing realistic budgets.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Core Sampling and Laboratory Analysis</h3>
                <p>
                  When deterioration is identified, core samples provide definitive information about concrete condition and contamination levels. Cylindrical cores, typically 2-4 inches in diameter, are extracted from balcony slabs and sent to specialized laboratories for analysis. Testing can determine chloride content at various depths, carbonation depth, concrete strength, and presence of other deleterious conditions.
                </p>
                <p>
                  Chloride profiling—measuring chloride concentration at incremental depths—reveals whether contamination has reached the rebar level and helps predict future deterioration rates. This information directly influences repair decisions: if chlorides have penetrated deeply throughout the slab, partial repairs may be ineffective and full reconstruction becomes the appropriate approach.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Rebar Assessment</h3>
                <p>
                  Evaluating reinforcing steel condition requires exposing rebar at representative locations by removing deteriorated concrete. Inspectors assess the degree of corrosion, measure remaining steel cross-section, and evaluate whether existing reinforcement can continue to serve its structural function after repairs. Severe section loss may require supplemental reinforcement or rebar replacement.
                </p>
                <p>
                  Cover depth measurement—determining how much concrete protects the rebar from the surface—helps explain deterioration patterns and predict future performance. Insufficient original cover accelerates carbonation and chloride penetration to the rebar level. This information influences reconstruction details, as new concrete may need to provide greater cover than originally constructed.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Structural Engineering Review</h3>
                <p>
                  Licensed structural engineers evaluate assessment findings to determine whether deterioration has compromised structural capacity. This review considers the original design, extent and pattern of deterioration, remaining steel section, and current loading requirements. Engineers determine whether balconies can continue in service, require immediate shoring, or should be restricted from use pending repairs.
                </p>
                <p>
                  For extensive reconstruction projects, structural engineers design remediation approaches that restore or enhance original structural capacity. This may include supplemental reinforcement, modified connection details, or complete replacement sections. Engineering involvement ensures that reconstruction meets current Florida Building Code requirements and provides appropriate structural performance.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Scope Development and Budgeting</h3>
                <p>
                  Assessment findings inform detailed scope development that specifies exactly what work each balcony requires. Scopes may range from localized repairs addressing isolated deterioration to complete reconstruction including concrete removal, rebar replacement, new concrete placement, waterproofing installation, and railing replacement. Accurate scopes prevent surprises during construction and enable reliable budgeting.
                </p>
                <p>
                  For condominium associations, we prepare detailed reports suitable for board presentations and owner communication. These reports explain findings in accessible language, present repair options with associated costs, and provide recommendations based on building conditions and client priorities. This documentation supports informed decision-making and helps associations plan reserve fund allocations appropriately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reconstruction Methods */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Wrench className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Balcony Reconstruction Methods and Techniques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Effective balcony reconstruction combines proven concrete repair techniques with modern waterproofing systems to restore structural integrity and prevent future deterioration.
            </p>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Partial Repairs vs. Full Reconstruction</h3>
              <p>
                The decision between partial repairs and full reconstruction depends on deterioration extent, contamination levels, and long-term cost-effectiveness. Partial repairs address localized deterioration while preserving sound concrete, making them appropriate when damage is limited to specific areas and chloride contamination hasn't spread throughout the slab. This approach costs less initially and minimizes disruption.
              </p>
              <p>
                However, partial repairs in concrete with widespread contamination often prove futile—new deterioration develops adjacent to repaired areas as corrosion continues in the remaining original concrete. When chloride testing indicates contamination throughout the slab or delamination mapping reveals extensive subsurface damage, full reconstruction typically provides better long-term value despite higher initial cost.
              </p>
              <p>
                Full reconstruction involves removing all deteriorated concrete (and often all concrete to the structural slab), replacing or treating reinforcing steel, placing new concrete to proper profile and slope, and installing comprehensive waterproofing systems. This approach eliminates contaminated material, provides opportunity to correct original construction defects, and establishes a fresh baseline for the balcony's service life.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Concrete Removal Techniques</h3>
              <p>
                Selective concrete removal requires carefully controlled demolition to remove deteriorated material without damaging sound concrete or reinforcing steel that will remain. Techniques include pneumatic chipping hammers for larger areas, hand chipping for detailed work around rebar and edges, and hydrodemolition (high-pressure water) for removing deteriorated concrete while leaving sound concrete intact and creating excellent bonding surfaces.
              </p>
              <p>
                For full reconstruction, saw-cutting defines precise removal boundaries and prevents damage from propagating into adjacent areas. Controlled demolition removes concrete in sections, with debris managed to protect finishes below and adjacent to the work area. Dust and noise mitigation measures address occupant comfort during construction.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Reinforcing Steel Treatment and Replacement</h3>
              <p>
                Exposed rebar requires treatment before new concrete placement. Lightly corroded steel with minimal section loss is typically cleaned to remove rust and coated with corrosion-inhibiting primers or zinc-rich coatings that restore passivation. More heavily corroded rebar with significant section loss may require supplemental bars placed alongside the original steel to restore structural capacity.
              </p>
              <p>
                Severely corroded rebar—or steel in contaminated concrete that cannot be fully removed—may require complete replacement. New reinforcing steel is placed to match or exceed original design, with proper cover depths and spacing. Welding or mechanical connections splice new bars to remaining sound reinforcement where continuous bars are required.
              </p>
              <p>
                Epoxy-coated or galvanized reinforcement provides enhanced corrosion resistance in aggressive Florida environments. While adding cost, these upgraded materials offer significant protection against future chloride attack and are particularly valuable in coastal exposure conditions. Stainless steel reinforcement provides even greater durability and may be appropriate for critical applications.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Post-Tension Considerations</h3>
              <p>
                Many Florida condominium balconies utilize post-tensioned concrete construction, where high-strength steel tendons stressed after concrete placement provide structural capacity. Post-tensioned balconies require specialized assessment and repair approaches that account for the stressed tendons running through the slabs.
              </p>
              <p>
                Concrete removal in post-tensioned structures must carefully avoid damaging tendons, which remain under thousands of pounds of tension. Inadvertent tendon damage can cause sudden, dangerous releases of stored energy. Our teams are trained in post-tensioned concrete repair protocols, including tendon location, protection during construction, and proper repair procedures if tendons are exposed or damaged.
              </p>
              <p>
                When post-tension tendons are corroded or damaged, specialized repairs may include tendon de-tensioning and replacement, splice repairs, or alternative reinforcement strategies. Licensed structural engineers experienced with post-tensioned concrete design these repairs to maintain structural integrity while addressing deterioration.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Concrete Placement and Finishing</h3>
              <p>
                New balcony concrete must be designed for Florida's aggressive environment. Mix designs include corrosion-inhibiting admixtures, optimized water-cement ratios for low permeability, and appropriate aggregate selection. Proper placement technique ensures complete consolidation around reinforcement without segregation, creating dense concrete that resists water and chloride penetration.
              </p>
              <p>
                Critical to waterproofing performance is establishing proper slope to drain—typically minimum ¼ inch per foot toward drainage points. Finish grade is carefully controlled during placement, with screeding and floating operations creating the specified drainage profile. Premature finishing that traps bleed water must be avoided, as this creates weak surface layers prone to deterioration.
              </p>
              <p>
                Curing is essential for concrete strength and durability development. Florida's heat and low humidity can cause rapid moisture loss that prevents complete cement hydration. Our specifications require wet curing or curing compound application immediately after finishing, with protection maintained for minimum periods to ensure concrete achieves specified properties.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Railing Replacement</h3>
              <p>
                Balcony reconstruction typically includes railing replacement, as existing railings often exhibit corrosion, inadequate structural capacity, or code deficiencies. Current Florida Building Code requirements specify minimum railing heights, load resistance criteria, and baluster spacing that older railings may not meet.
              </p>
              <p>
                Modern railing systems include aluminum, stainless steel, and composite options with various infill choices. Mounting methods must provide secure attachment to the reconstructed slab while maintaining waterproofing integrity—surface-mounted posts with proper base flashing often prove superior to embedded posts that penetrate waterproofing membranes.
              </p>
              <p>
                Glass panel railings offer enhanced views and contemporary aesthetics, while cable railings provide open sightlines with minimal visual obstruction. Each system has specific structural requirements, maintenance needs, and cost profiles. We help clients select railing systems that balance aesthetics, durability, maintenance, and budget considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break - Waterproofing */}
      <ContentParallax
        src="/images/fcs-commercial-exterior-waterproofing/fcs-commercial-exterior-waterproofing-large.webp"
        alt="Commercial waterproofing membrane installation"
        title="Industry-Leading Waterproofing Solutions"
        subtitle="Traffic-bearing membranes designed for Florida's demanding climate"
        overlayOpacity={0.55}
      />

      {/* Waterproofing Systems */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Droplets className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Balcony Waterproofing Systems for Florida's Climate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper waterproofing is essential to protect reconstructed balconies from Florida's aggressive moisture environment and maximize service life.
            </p>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Traffic-Bearing Membrane Systems</h3>
              <p>
                Balcony waterproofing must withstand pedestrian traffic, furniture loads, and Florida's intense UV exposure while maintaining watertight integrity. Traffic-bearing membranes accomplish this through multi-layer systems that combine waterproofing with wear-resistant top surfaces. Unlike roofing membranes that remain protected under ballast or pavers, balcony membranes directly receive foot traffic and must resist abrasion without damage.
              </p>
              <p>
                These systems typically include a primer coat that enhances adhesion to the concrete substrate, the primary waterproofing membrane (liquid-applied or sheet), reinforcing fabric or mesh for crack-bridging capability, and a protective topcoat with aggregate for traction and wear resistance. The complete system may range from 60 to 120 mils in total thickness, depending on the specific products and application requirements.
              </p>
              <p>
                Color options allow aesthetic coordination with building finishes. Standard colors include gray, tan, and terra cotta, with custom color matching available for many systems. UV-stable pigments maintain color consistency despite Florida's intense sun exposure, though some fading over years of service is normal.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Hot-Applied and Cold-Applied Systems</h3>
              <p>
                <strong>Hot-applied rubberized asphalt membranes</strong> are heated to approximately 400°F during application, creating a monolithic membrane that bonds tenaciously to properly prepared concrete. These systems offer excellent waterproofing performance and self-healing capability—minor punctures tend to reseal as the rubberized asphalt flows slightly under Florida's warm temperatures. Hot-applied systems require specialized equipment and trained applicators but provide outstanding durability.
              </p>
              <p>
                <strong>Cold-applied liquid membranes</strong> are applied without heating, typically using spray, roller, or squeegee methods. Multiple coats build up to specified thickness with reinforcing fabric installed between coats at transitions and detail areas. Cold-applied systems offer greater application flexibility and are well-suited for smaller balconies and complex geometries. They require careful thickness control during application to achieve specified coverage.
              </p>
              <p>
                Each approach has advantages for specific project conditions. Hot-applied systems may be preferred for large, open balconies where heating equipment can be efficiently utilized. Cold-applied systems suit projects with limited access, occupied buildings where heat and odor must be minimized, or complex layouts requiring detailed work.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Sheet Membrane Systems</h3>
              <p>
                Prefabricated sheet membranes provide consistent thickness and factory-controlled quality. Modified bitumen sheets, EPDM, and TPO membranes are rolled out and adhered to the substrate, with seams heat-welded or adhesive-bonded. Sheet membranes require separate wear surface installation—typically applied traffic coatings or pedestal-mounted pavers—to protect them from direct foot traffic.
              </p>
              <p>
                Sheet systems work well on larger balconies with relatively simple geometries. They're less adaptable to complex shapes, numerous penetrations, or irregular surfaces where liquid-applied membranes can more easily conform to conditions. Seam integrity is critical; properly executed seams provide reliable performance, but poorly made seams represent potential failure points.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Slope-to-Drain Requirements</h3>
              <p>
                Effective drainage is fundamental to waterproofing system longevity. Industry standards require minimum ¼ inch per foot slope (2%) toward drainage points, with positive drainage throughout all balcony areas. Standing water accelerates UV degradation, promotes biological growth, creates slip hazards, and increases hydrostatic pressure on the membrane system.
              </p>
              <p>
                During reconstruction, concrete placement must achieve specified slopes while accommodating existing door thresholds and adjacent conditions. Where original construction provided inadequate slope, lightweight concrete topping or tapered insulation systems can establish proper drainage profile without excessive weight or thickness. Drainage pathways must remain clear from all areas to scuppers or interior drains.
              </p>
              <p>
                Scupper drains through guardrail walls and interior floor drains each have advantages and limitations. Scuppers are simple and visible for maintenance but can be blocked by debris and may cause staining on exterior walls. Interior drains are less visible but require routing through the building structure and need regular maintenance to prevent clogging.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Flashing and Detail Work</h3>
              <p>
                Transitions and penetrations represent the most vulnerable points in any waterproofing system. Door thresholds, railing posts, wall-to-floor junctions, expansion joints, and drain connections all require carefully executed flashing details to maintain waterproof integrity. Failure at these details causes the majority of waterproofing problems.
              </p>
              <p>
                Our specifications require membrane extensions up wall surfaces with termination above anticipated water levels. Sealant joints between membrane and dissimilar materials accommodate differential movement. Drain assemblies include clamping rings that compress the membrane between components, creating watertight connections even under hydrostatic pressure.
              </p>
              <p>
                Pre-fabricated transition components address common detail configurations with factory-manufactured pieces designed for specific applications. These components reduce field fabrication and associated quality variability. Complex or unusual conditions may require custom details designed by waterproofing consultants and fabricated to specific project requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Manufacturer Warranties</h3>
              <p>
                Major waterproofing manufacturers offer system warranties ranging from 10 to 20 years when their products are installed by trained applicators according to specified procedures. These warranties typically cover material defects and workmanship within the warranty period, providing repair or replacement if failures occur.
              </p>
              <p>
                Warranty availability requires using approved products as a complete system, application by manufacturer-certified contractors, compliance with specified application conditions and procedures, and inspection by manufacturer representatives at critical stages. Our waterproofing subcontractors maintain current certifications with major manufacturers including Tremco, Neogard, and Plidek.
              </p>
              <p>
                Understanding warranty coverage and limitations is important for property owners. Most warranties require ongoing maintenance including periodic inspections, keeping drains clear, and addressing minor damage before it propagates. Warranty claims require documentation of proper maintenance, and exclusions typically apply to damage from improper use or maintenance neglect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Condo and HOA Projects */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Condominium and HOA Balcony Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-family balcony reconstruction presents unique coordination challenges that require experienced contractors who understand association dynamics and owner needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Multi-Unit Project Coordination</h3>
              <p>
                Building-wide balcony reconstruction requires orchestrating work across dozens or hundreds of individual units while maintaining livability for residents. Our project managers develop detailed logistics plans addressing material staging, debris removal, equipment access, and work sequencing. Clear protocols establish when workers will be in each area and what access owners must provide.
              </p>
              <p>
                Communication systems keep all parties informed throughout the project. Regular written updates advise the board and property manager of progress, upcoming work, and any issues requiring attention. Individual owner notifications provide advance notice before work begins on their unit, explaining what to expect and any actions required on their part.
              </p>
              <p>
                Consistent subcontractor crews working throughout the project develop familiarity with building conditions and resident expectations. This continuity improves quality and efficiency while reducing the adjustment period that occurs when new workers encounter each unit's specific conditions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Phased Construction Approaches</h3>
              <p>
                Few associations can or should close all balconies simultaneously for reconstruction. Phased approaches work on groups of units in sequence, restoring balcony access to each group before moving to the next. Typical phasing might address one building section at a time, work through floors systematically, or prioritize units based on deterioration severity.
              </p>
              <p>
                Phase duration and sequencing balance multiple factors including weather considerations, material curing times, inspection schedules, and resident impact. We develop phase plans that maintain steady progress while allowing each completed section adequate cure time before returning to service. Seasonal considerations may influence scheduling—initiating major concrete work during cooler months can ease curing challenges.
              </p>
              <p>
                Phased construction extends overall project duration but spreads costs over time, potentially aligning with reserve fund planning and assessment collection schedules. We work with boards to develop phasing that matches their financial capabilities and timeline requirements.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Board Communication and Approvals</h3>
              <p>
                Association boards bear fiduciary responsibility for major expenditures like balcony reconstruction. We support informed decision-making by providing clear, complete information at each project stage. Initial presentations explain assessment findings, repair options, and associated costs in terms accessible to board members who may lack construction backgrounds.
              </p>
              <p>
                As projects progress, regular reporting keeps boards informed of schedule status, budget tracking, and any issues requiring their attention or decision. We document all aspects of the work with photographs, daily reports, and test results that create a complete project record. This documentation supports reserve study updates and demonstrates proper stewardship of association funds.
              </p>
              <p>
                Owner meetings provide opportunities to explain upcoming work, answer questions, and address concerns before construction begins. Proactive communication reduces complaints during construction and builds understanding of why the work is necessary and what owners can expect.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Owner Access Coordination</h3>
              <p>
                Balcony reconstruction requires access through individual units for some work phases. Coordinating access across dozens of units—occupied by owners and tenants with varying schedules—demands careful planning and flexibility. We work with property managers to develop access protocols that respect owner privacy while enabling efficient construction.
              </p>
              <p>
                Advance notice requirements give owners time to prepare for access. Standard protocols might require 48-72 hours written notice before interior access, with flexibility for owners who need alternative scheduling. Key or code access arrangements enable work to proceed when owners aren't present, with security measures protecting owner property.
              </p>
              <p>
                Snowbird units and rental properties present particular challenges, as owners may be unavailable for extended periods. Early identification of these units enables advance coordination to ensure access doesn't delay overall project progress.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Minimizing Resident Disruption</h3>
              <p>
                Construction impacts residents through noise, dust, restricted access, and the presence of workers near living spaces. Thoughtful planning and execution minimize these impacts while maintaining construction productivity. Work hour limitations respect resident expectations—typically no work before 8:00 AM or after 6:00 PM on weekdays, with additional restrictions on weekends.
              </p>
              <p>
                Dust control measures including barriers, air filtration, and cleanup protocols keep construction impacts contained. Daily cleanup restores common areas to presentable condition so residents don't encounter debris throughout project duration. Noise-generating activities like concrete breaking are scheduled during less disruptive hours when possible.
              </p>
              <p>
                Maintaining building services and access throughout construction requires careful coordination. Elevator usage for material movement must not unduly impact resident access. Pathway closures are minimized and clearly marked with alternative routes. Pool, fitness, and other amenity impacts are scheduled and communicated in advance when unavoidable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SB4-D Connection */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Scale className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida SB4-D and Balcony Inspection Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recent Florida legislation has intensified focus on structural condition of aging buildings, with balconies receiving particular attention during required inspections.
            </p>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p>
              Florida Senate Bill 4-D, enacted in response to the 2021 Surfside condominium collapse, requires milestone structural inspections for buildings three stories or higher. Buildings must undergo initial inspection when they reach 30 years of age—or 25 years if located within three miles of the coastline. Subsequent inspections are required every 10 years thereafter.
            </p>
            <p>
              These milestone inspections must be performed by licensed engineers or architects who evaluate the building's structural components, explicitly including balconies and exterior elevated elements. Inspectors assess concrete condition, reinforcement integrity, waterproofing effectiveness, and overall structural adequacy. Findings categorize conditions as acceptable, requiring maintenance, or requiring substantial structural repair.
            </p>
            <p>
              Balcony deficiencies feature prominently in many milestone inspection reports. Inspectors commonly identify concrete deterioration, rebar corrosion, waterproofing failures, and inadequate drainage as conditions requiring remediation. Buildings must address these findings, with timeframes depending on severity—critical structural deficiencies require immediate action while less urgent items may be addressed through planned maintenance programs.
            </p>
            <p>
              The legislation also requires Structural Integrity Reserve Studies (SIRS) that evaluate major structural components and establish reserve funding for future repairs and replacement. Balconies must be included in these studies with realistic cost projections for eventual reconstruction. Associations can no longer waive or reduce reserve funding for structural components, ensuring funds will be available when reconstruction becomes necessary.
            </p>
            <p>
              Florida Construction Specialists has extensive experience addressing milestone inspection findings through balcony reconstruction and repair projects. We work with building engineers to develop remediation approaches that satisfy inspection requirements while providing long-term structural and waterproofing performance. Our involvement often begins when inspection findings identify balcony deficiencies, guiding associations through assessment, scope development, and construction phases.
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-sm mt-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                How We Help with SB4-D Compliance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span>Detailed assessment translating inspection findings into actionable repair scopes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span>Budget development for reserve study updates and special assessment planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span>Coordination with inspecting engineers throughout remediation process</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <span>Documentation supporting reinspection and compliance certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Building2 className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Balcony Reconstruction Project Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our portfolio demonstrates proven capability delivering complex multi-family balcony reconstruction projects throughout Tampa Bay.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark">Tiara Condominium</h3>
                  <p className="text-brand-green font-semibold">$4.9 Million | Riviera Beach</p>
                </div>
              </div>
              <div className="prose text-gray-600">
                <p>
                  This landmark project addressed extensive balcony deterioration throughout a high-rise condominium tower. Scope included complete waterproofing replacement on all residential balconies, structural concrete repairs addressing years of deferred maintenance, new traffic-bearing membrane systems, and railing upgrades to current code requirements.
                </p>
                <p>
                  Work was phased over multiple construction seasons to align with association reserve funding and minimize seasonal resident impacts. Coordination challenges included maintaining building access, protecting interior finishes, and working at significant heights on an oceanfront property. The completed project restored balcony functionality and extended the waterproofing service life by decades.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark">Multi-Family Portfolio</h3>
                  <p className="text-brand-green font-semibold">Various Projects | Tampa Bay Region</p>
                </div>
              </div>
              <div className="prose text-gray-600">
                <p>
                  Beyond individual landmark projects, Florida Construction Specialists has completed balcony reconstruction work across dozens of condominium and apartment properties throughout the Tampa Bay metropolitan area. These projects range from targeted repairs addressing specific problem balconies to comprehensive building-wide reconstruction programs.
                </p>
                <p>
                  Common elements across these projects include thorough pre-construction assessment, clear communication with associations and property managers, quality materials and workmanship, and reliable schedule performance. Our experience across this portfolio has refined our understanding of multi-family balcony reconstruction requirements and the logistics necessary to execute successfully.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects/" className="btn-primary">
              View All Projects <ArrowRight className="w-4 h-4 ml-2 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Include */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <HardHat className="w-12 h-12 text-brand-green mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Complete Balcony Reconstruction Services
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists delivers comprehensive balcony reconstruction services throughout the Tampa Bay region. As a prime general contractor, we maintain full project control and accountability from initial assessment through final completion and warranty.
              </p>
              <p className="text-gray-600 mb-6">
                Our experienced team has completed over $25 million in projects, bringing the expertise and resources needed for balcony reconstruction projects ranging from $100,000 to multi-million dollar building-wide programs.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Our Balcony Reconstruction Services Include:
              </h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-12 text-center font-heading">
            Our Balcony Reconstruction Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", desc: "Comprehensive evaluation of balcony conditions including sounding, sampling, and engineering review to determine repair scope." },
              { step: "2", title: "Pre-Construction", desc: "Detailed scope development, budgeting, board presentations, and phasing plans tailored to your building's needs." },
              { step: "3", title: "Construction", desc: "Expert execution with strict quality control, timeline management, and ongoing communication with all stakeholders." },
              { step: "4", title: "Completion", desc: "Final inspections, warranty documentation, and maintenance guidance for long-term waterproofing performance." },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Choose FCS for Balcony Reconstruction in Tampa Bay?
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor—never a subcontractor. We bring two decades of experience and $25M+ in completed projects to every balcony reconstruction job.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Direct accountability and project control on every balcony reconstruction job.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Proven Track Record</h3>
              <p className="text-gray-600">$25M+ in completed projects including major balcony reconstruction.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Multi-Family Experts</h3>
              <p className="text-gray-600">Deep experience with condos, HOAs, and occupied building construction.</p>
            </div>
            <div className="card text-center p-6">
              <Clock className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">20+ Years Experience</h3>
              <p className="text-gray-600">Two decades serving Tampa Bay's commercial construction needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <MapPin className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Balcony Reconstruction Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Florida Construction Specialists provides expert balcony reconstruction services throughout the Tampa Bay metropolitan area and surrounding Florida Gulf Coast communities.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center mb-8">
              Our balcony reconstruction team serves condominiums, apartment complexes, and commercial buildings in Tampa, St. Petersburg, Clearwater, Sarasota, Bradenton, Largo, Palm Harbor, Dunedin, Tarpon Springs, New Port Richey, and surrounding communities. We focus on commercial and multi-family projects with minimum scope of $100,000, making us the ideal partner for buildings with multiple balconies requiring assessment or reconstruction.
            </p>
          </div>
        </div>
      </section>

      <ServiceAreaLinks service="balcony-reconstruction" serviceName="Balcony Reconstruction" />

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Balcony Reconstruction FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Address Your Balcony Reconstruction Needs?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a comprehensive balcony assessment. We specialize in multi-family and commercial projects throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Balcony Assessment
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
