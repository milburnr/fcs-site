import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Clock, ArrowRight, FileCheck, HardHat, Briefcase, AlertTriangle } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance-restoration-st-petersburg/' },
  title: "Insurance Restoration St. Pete | Storm Damage",
  description: "Insurance restoration in St. Petersburg by Florida Construction Specialists. Hurricane damage large-loss commercial claims.",
  openGraph: {
    title: "Insurance Restoration St. Pete | Storm Damage",
    description: "Insurance restoration in St. Petersburg by Florida Construction Specialists. Hurricane damage large-loss commercial claims.",
    url: "https://floridaconstructionspecialists.com/insurance-restoration-st-petersburg/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Why does St. Petersburg face higher insurance restoration demand than most Florida cities?",
    answer: "St. Petersburg's peninsula geography creates dual water exposure from both Tampa Bay and the Gulf of Mexico, meaning storms can push water into the city from multiple directions simultaneously. This is unlike mainland coastal cities where storm surge comes from a single direction. The city also sits at relatively low elevation across much of its land area, with neighborhoods like Shore Acres, Coquina Key, and Pinellas Point particularly vulnerable to flooding. Combined with an aging commercial building stock and a dense concentration of waterfront condominiums, St. Petersburg experiences proportionally higher large-loss insurance claims after major weather events than communities shielded by the peninsula."
  },
  {
    question: "What types of insurance restoration projects does FCS handle in St. Petersburg?",
    answer: "We handle large-loss commercial and multi-family insurance restoration throughout St. Petersburg. This includes hurricane wind and water damage repair to commercial buildings, storm surge and flood damage restoration in low-lying areas, fire damage reconstruction, structural repair after catastrophic events, and building envelope restoration following weather-related failures. Our St. Petersburg insurance restoration projects typically involve commercial properties, condominium buildings, institutional facilities, and multi-family complexes where claim values range from one hundred thousand to several million dollars. We do not handle residential single-family insurance claims."
  },
  {
    question: "How does FCS's insurance industry background benefit St. Petersburg property owners?",
    answer: "Our principal spent years working as an Executive General Adjuster before entering general contracting, which means we understand the claims process from the carrier's perspective. This dual expertise allows us to prepare documentation that meets the specific evidentiary standards insurance adjusters require, scope repairs in the format carriers expect, and communicate with adjusters using the terminology and documentation practices they recognize. For St. Petersburg property owners navigating complex claims after storms, this translates to more complete damage documentation, fewer scope disputes, and faster claims resolution. We do not act as public adjusters, but our construction scope documentation naturally supports the claims process."
  },
  {
    question: "What is the timeline for insurance restoration on commercial properties in St. Petersburg?",
    answer: "Timelines vary significantly based on claim complexity, damage scope, and carrier response times. Emergency stabilization and temporary repairs begin immediately when we are engaged. Permanent restoration work on moderate commercial claims typically takes 3 to 6 months from insurance approval to completion. Large-loss claims involving structural damage, multiple building systems, or complex carrier negotiations can take 6 to 12 months. St. Petersburg's peninsula location adds a layer of complexity because material delivery and subcontractor availability are often constrained after regional storm events when the entire Tampa Bay area is competing for restoration resources. We maintain relationships with suppliers and subcontractors that prioritize our projects."
  },
  {
    question: "Does FCS coordinate directly with insurance carriers on St. Petersburg restoration projects?",
    answer: "Yes, we coordinate directly with insurance carriers, their adjusters, and their engineering consultants throughout the restoration process. We prepare detailed damage assessments with photographic documentation, develop construction scopes that align with standard insurance estimating formats, and participate in scope review meetings with carrier representatives. Our documentation includes line-item breakdowns, material specifications, and engineering justifications for repair methods that give adjusters the information they need to process claims efficiently. This direct carrier coordination reduces the disputes and delays that arise when restoration contractors submit incomplete or non-standard documentation."
  },
  {
    question: "How does storm surge risk in St. Petersburg affect insurance restoration planning?",
    answer: "Storm surge is the defining insurance restoration risk in St. Petersburg because the peninsula's low elevation and dual water exposure create surge potential from both Tampa Bay and the Gulf of Mexico. A hurricane making landfall north of St. Petersburg can push Gulf water into the bay, creating surge on the east side of the city, while a storm approaching from the south pushes surge directly into the Gulf-facing western shore. This means commercial buildings across St. Petersburg face surge risk regardless of whether they are on the bay side or Gulf side. Our restoration planning accounts for both the water damage from surge events and the subsequent mold, corrosion, and structural deterioration that follow salt water inundation of building systems."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Insurance Restoration", href: "/insurance/" },
  { name: "St. Petersburg", href: "/insurance-restoration-st-petersburg/" },
];

export default function InsuranceRestorationStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Insurance Restoration" />
      <ServiceSchema
        serviceName="Insurance Restoration"
        serviceDescription="Insurance restoration and storm damage repair in St. Petersburg, FL. Large-loss commercial claims, hurricane damage, carrier documentation and coordination. Licensed CBC1262722, 40+ years experience."
        city="St. Petersburg"
        minPrice="100000"
        serviceCategories={["Hurricane Damage Restoration", "Large-Loss Commercial Claims", "Storm Surge Repair", "Fire Damage Reconstruction", "Building Envelope Restoration"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving St. Petersburg, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Insurance Restoration in St. Petersburg, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              When storms cross the peninsula, St. Petersburg's commercial buildings face damage from both Gulf and Bay exposure. Florida Construction Specialists restores large-loss commercial and multi-family properties throughout Pinellas County, combining 40+ years of construction expertise with executive-level insurance industry experience to navigate complex claims and deliver thorough restoration.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Since 1982</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Building2 className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">{BUSINESS_INFO.projectsCompleted}+ Projects</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Request a Claims Consultation
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* St. Petersburg Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              The Peninsula's Insurance Restoration Reality: Exposure from Every Direction
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Insurance restoration in St. Petersburg is shaped by a geographic vulnerability that no other major Tampa Bay city shares. The Pinellas peninsula sits between two large bodies of water -- Tampa Bay on the east and the Gulf of Mexico on the west -- with much of the city at low elevation. When tropical systems affect the region, St. Petersburg does not get storm damage from one direction. It gets it from every direction. Gulf-side winds drive surge into western neighborhoods, bay-side counterflows push water inland from the east, and rainfall pools in low-lying areas that have limited drainage capacity because the water table sits close to the surface across most of the peninsula.
              </p>
              <p className="mb-6">
                This multi-directional exposure profile produces insurance claims that are often more complex than what carriers and contractors encounter in mainland markets. A commercial building in downtown St. Petersburg might sustain wind damage to the roof, water intrusion through compromised building envelope on the bay-facing elevation, and flood damage at ground level from storm surge -- three distinct damage mechanisms requiring three different repair approaches, all from a single weather event. The Mahaffey Theater waterfront district, the downtown office buildings, the Gateway corridor commercial properties, and the waterfront condo towers along Beach Drive and Shore Acres all face this compound exposure when major storms track through the region.
              </p>
              <p className="mb-6">
                The insurance market in Pinellas County reflects this risk. Commercial property insurance premiums in St. Petersburg are among the highest in Florida, and carriers scrutinize claims carefully. This environment rewards property owners who work with restoration contractors that understand insurance documentation standards, scope repairs in formats carriers recognize, and can defend repair methodologies when adjusters challenge scope items. Florida Construction Specialists operates at this intersection of construction expertise and insurance industry knowledge.
              </p>
              <p>
                Our principal's career began in the insurance industry as an Executive General Adjuster before transitioning to general contracting. This background is not a marketing angle -- it fundamentally shapes how we approach insurance restoration in St. Petersburg. We understand what adjusters need to see in damage documentation, how carriers evaluate repair scopes, and where disputes typically arise between property owners and insurance companies. This knowledge allows us to prepare restoration scopes that withstand carrier scrutiny while ensuring property owners receive the complete repair their buildings require.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/hurricane-insurance-restoration/hurricane-insurance-restoration-display.webp"
        alt="Insurance restoration work on storm-damaged commercial property in St. Petersburg"
        title="Restoring St. Petersburg After the Storm"
        subtitle="Large-loss commercial restoration with insurance industry expertise across Pinellas County"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Insurance Restoration Capabilities for St. Petersburg's Exposure Profile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Comprehensive restoration services addressing the multi-directional storm damage patterns unique to peninsula commercial properties.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Hurricane and Wind Damage",
                description: "Structural and building envelope restoration after hurricane wind events. St. Petersburg's coastal wind zone requirements mean commercial buildings sustain damage when systems exceed design thresholds. We restore roof systems, exterior walls, window and door assemblies, and structural connections damaged by high wind events, documenting all work for insurance claim support."
              },
              {
                icon: Building2,
                title: "Storm Surge and Flood Restoration",
                description: "Comprehensive restoration of commercial buildings impacted by storm surge and flooding. Peninsula low-lying areas including Shore Acres, Coquina Key, Pinellas Point, and parts of downtown face surge risk from both bay and Gulf water. We address structural damage, contaminated building materials, MEP system replacement, and mold remediation after water inundation events."
              },
              {
                icon: Shield,
                title: "Large-Loss Claims Management",
                description: "Coordination of complex insurance claims on commercial properties where damage values exceed one hundred thousand dollars. We prepare carrier-grade damage documentation, participate in scope review meetings, coordinate with independent adjusters and engineering consultants, and manage the restoration scope through supplemental claim submissions when hidden damage is discovered during construction."
              },
              {
                icon: HardHat,
                title: "Emergency Stabilization",
                description: "Immediate response to prevent additional damage after catastrophic events. Board-up, temporary roofing, water extraction, structural shoring, and emergency power are deployed to stabilize St. Petersburg commercial properties while permanent restoration plans are developed and insurance claims are processed."
              },
              {
                icon: FileCheck,
                title: "Building Envelope Restoration",
                description: "Repair and replacement of exterior wall systems, roofing, windows, and weatherproofing compromised by storm events. St. Petersburg's peninsula exposure means building envelopes experience wind-driven rain from shifting directions during storms, often revealing pre-existing vulnerabilities that complicate insurance scoping."
              },
              {
                icon: Award,
                title: "Fire and Catastrophic Damage",
                description: "Complete reconstruction of commercial buildings after fire, explosion, or other catastrophic loss events. We manage demolition of damaged areas, structural repair, complete system replacement, and interior reconstruction, coordinating with fire marshals, insurance investigators, and local building officials throughout the process."
              }
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-brand-green-dark" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Insurance Restoration Expertise Rooted in Peninsula Experience
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Effective insurance restoration in St. Petersburg requires understanding both the construction challenges of peninsula buildings and the insurance ecosystem that funds their repair. Contractors who excel at construction but lack insurance industry knowledge leave claim value on the table. Contractors who understand insurance but lack construction depth produce restoration work that does not adequately address the damage. We operate at the intersection of both disciplines.
              </p>
              <p className="mb-6">
                The <a href="https://www.stpete.org/building_and_development_review/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of St. Petersburg Development Services Department</a> permits restoration construction work that involves structural modifications, building envelope replacement, or changes to building systems. After major storm events, the city may implement expedited permitting processes for emergency repairs. We maintain relationships with the building department that support efficient permit processing during both normal operations and post-storm surge periods when permit volume increases dramatically.
              </p>
              <p className="mb-6">
                St. Petersburg's commercial building inventory presents distinct insurance restoration challenges depending on location and building type. Downtown office towers along the bayfront face wind and water damage patterns specific to high-rise coastal construction, where upper floors sustain wind damage while lower levels may experience surge. Gateway corridor commercial buildings, while set back from the waterfront, are not immune to hurricane damage -- wind events affect the entire peninsula regardless of bay proximity. Waterfront condo buildings in Shore Acres, Isla del Sol, and Coquina Key often generate the most complex insurance claims because they combine structural damage, unit-level interior damage, common area damage, and association-versus-individual-owner insurance coverage questions.
              </p>
              <p className="mb-6">
                Post-storm restoration in Pinellas County also faces practical logistics challenges. The peninsula has limited access points -- essentially I-275 and US-19 -- which means material deliveries and subcontractor access can be constrained after major events when everyone on the peninsula is competing for the same limited transportation capacity. We maintain material supply relationships and subcontractor commitments that prioritize our St. Petersburg projects during high-demand post-storm periods.
              </p>
              <p>
                Our documentation practices throughout every insurance restoration project are designed to withstand carrier scrutiny. Photographic documentation of pre-repair conditions, detailed scope breakdowns aligned with insurance estimating platforms, material specifications that justify repair methods, and progress documentation that tracks work against the approved claim scope. This level of documentation discipline comes from our principal's years of reviewing claims from the carrier side and understanding exactly what adjusters need to approve restoration work without unnecessary disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            St. Petersburg Insurance Restoration Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A systematic approach that addresses both the construction requirements and insurance documentation needs of peninsula property restoration.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Emergency Response and Stabilization",
                description: "Immediate deployment to secure your St. Petersburg property and prevent additional damage. We document existing conditions thoroughly during stabilization, establishing the baseline evidence that supports subsequent insurance claims. Emergency measures are scoped and documented as separate line items from permanent repairs.",
                icon: AlertTriangle,
              },
              {
                step: "02",
                title: "Damage Assessment and Claims Documentation",
                description: "Comprehensive property inspection with photographic documentation, damage categorization by cause and building system, and preliminary scope development. Our documentation follows insurance industry standards, organizing damage by coverage category and presenting findings in formats that adjusters can process efficiently.",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Scope Development and Carrier Coordination",
                description: "We develop detailed restoration scopes, participate in joint inspections with carrier adjusters and engineers, and negotiate scope agreement. Our insurance industry background allows us to anticipate carrier questions and address them proactively in our scope submissions, reducing the dispute cycle that delays many restoration projects.",
                icon: Building2,
              },
              {
                step: "04",
                title: "Permitted Restoration Construction",
                description: "Once the claim scope is agreed upon, we secure permits through the City of St. Petersburg and execute restoration work using qualified Pinellas County subcontractors. We manage supplemental claims when hidden damage is discovered during construction, documenting the newly revealed conditions before proceeding with additional repairs.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Completion and Claims Closeout",
                description: "Final inspections, Certificate of Occupancy restoration, and comprehensive project documentation that supports claim closure. We provide the carrier with completion certificates, material warranties, and compliance documentation that facilitate final payment processing. Our closeout documentation also serves as the baseline record for future claim events.",
                icon: Award,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="St. Petersburg Insurance Restoration FAQ"
        description="Common questions about insurance restoration and storm damage repair in St. Petersburg, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="St. Petersburg" currentService="insurance-restoration" currentServiceName="Insurance Restoration" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Discuss Your St. Petersburg Insurance Restoration Needs
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a claims consultation on your damaged commercial property in St. Petersburg. Our combined construction and insurance industry expertise ensures thorough restoration and effective claims management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request a Claims Consultation
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>Executive General Adjuster Background</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="insurance-restoration-st-petersburg" />
    </>
  );
}
