import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, AlertTriangle } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import { CodeReference } from "@/components/CodeReference";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/condo-remediation-clearwater/' },
  title: "Condo Remediation Clearwater | SB4-D",
  description: "Condo remediation and structural restoration in Clearwater by Florida Construction Specialists. SB4-D compliance milestone inspections.",
  openGraph: {
    title: "Condo Remediation Clearwater | SB4-D",
    description: "Condo remediation and structural restoration in Clearwater by Florida Construction Specialists. SB4-D compliance milestone inspections.",
    url: "https://floridaconstructionspecialists.com/condo-remediation-clearwater/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Why are Clearwater Beach condominiums particularly vulnerable to structural deterioration?",
    answer: "Clearwater Beach condominiums sit on a barrier island fully exposed to the Gulf of Mexico, creating one of the most aggressive environments for reinforced concrete structures in Florida. Constant salt spray penetrates concrete surfaces and reaches embedded reinforcing steel, initiating corrosion that causes concrete spalling and structural section loss. The cycle of wetting from Gulf moisture and drying from sun exposure accelerates chloride penetration. High humidity averaging 75 to 85 percent year-round keeps moisture trapped in concrete pores. Beach-area condominiums typically show signs of concrete distress 10 to 15 years earlier than comparable inland structures, making proactive inspection and remediation essential for Clearwater Beach associations."
  },
  {
    question: "What does Florida's SB4-D law require for Clearwater condominium associations?",
    answer: "Senate Bill 4-D requires condominium associations to complete milestone structural inspections at 25 years after initial Certificate of Occupancy, or at 30 years for buildings not within 3 miles of the coast. Since virtually all Clearwater condominiums are within 3 miles of the Gulf, the 25-year threshold applies across the city. Phase 1 inspections involve a licensed engineer examining the building's structural components and common areas. If Phase 1 identifies substantial structural deterioration, a Phase 2 inspection with more detailed testing is required. Associations must also complete Structural Integrity Reserve Studies and fully fund reserves for structural maintenance, eliminating the previous option to waive reserve funding. We help Clearwater associations prepare for and respond to both inspection phases."
  },
  {
    question: "How does FCS approach concrete restoration on Clearwater's waterfront condominiums?",
    answer: "Our concrete restoration process for Clearwater waterfront condos begins with comprehensive condition assessment including visual survey, delamination sounding, half-cell potential testing to map active corrosion, and chloride content analysis at various depths. Based on assessment findings, we develop repair specifications that address both existing damage and corrosion prevention. Repair methods range from localized spall repair with corrosion-inhibiting admixtures to full-depth concrete removal and replacement with marine-grade concrete mixes. For buildings with widespread chloride contamination, we may recommend cathodic protection systems, migrating corrosion inhibitor application, or protective membrane coatings. Every restoration plan accounts for the building's remaining service life and the cost-effectiveness of repair versus replacement."
  },
  {
    question: "Can Clearwater condo associations phase remediation work to manage costs?",
    answer: "Yes, phasing is a common approach for Clearwater associations managing significant remediation budgets. We work with association boards to develop multi-year remediation plans that prioritize safety-critical structural repairs in early phases while scheduling less urgent cosmetic and preventive work for subsequent phases. Typical phasing prioritizes exposed structural elements like balconies and walkways first, then building envelope waterproofing, then parking structure repairs, and finally aesthetic restoration. However, SB4-D compliance timelines may constrain phasing options if structural deterioration is identified as substantial during milestone inspections. We help associations balance financial planning with regulatory deadlines."
  },
  {
    question: "What is the scope of parking garage remediation for Clearwater Beach condominiums?",
    answer: "Parking structures at Clearwater Beach condominiums experience accelerated deterioration because they combine the beach's aggressive salt environment with direct vehicle-carried moisture, de-icing chemical residue from visitors' vehicles, and constant wetting-drying cycles on exposed decks. Common repair scope includes concrete deck overlay or replacement, expansion joint repair, post-tension tendon evaluation and repair, waterproof membrane application, drainage system rehabilitation, and structural steel corrosion treatment. Ground-level parking areas in VE flood zones face additional challenges from storm surge exposure. We phase parking garage work to maintain resident access throughout construction, typically working one level or section at a time."
  },
  {
    question: "How does FCS minimize disruption to Clearwater condo residents during remediation?",
    answer: "Occupied building remediation requires careful planning to maintain livability throughout construction. We establish clear communication protocols with the association board, provide regular updates to residents through the property manager, and set defined work hours that respect quiet enjoyment. For balcony and exterior work, we install containment scaffolding that allows balcony access when work crews are not present. Interior common area work is scheduled in phases that maintain at least one functioning elevator, one pool access point, and continuous emergency egress. On Clearwater Beach where parking is limited, we coordinate our staging and equipment placement to minimize impact on resident parking. Material deliveries are scheduled during off-peak hours to avoid congestion on Mandalay Avenue and Gulf Boulevard."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/commercial/" },
  { name: "Condo Remediation", href: "/condo-remediation-tampa/" },
  { name: "Clearwater", href: "/condo-remediation-clearwater/" },
];

export default function CondoRemediationClearwaterPage() {
  return (
    <>
      <LocalBusinessSchema city="Clearwater" service="Condo Remediation" />
      <ServiceSchema
        serviceName="Condo Remediation"
        serviceDescription="Condominium remediation and structural restoration in Clearwater, FL. SB4-D compliance, milestone inspections, concrete repair, waterfront building restoration. Licensed CBC1262722, 40+ years experience."
        city="Clearwater"
        minPrice="100000"
        serviceCategories={["Concrete Restoration", "Structural Remediation", "SB4-D Compliance", "Milestone Inspections", "Parking Garage Repair"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/southwinds-condo-front/southwinds-condo-front-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Clearwater, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Condo Remediation in Clearwater, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Clearwater's condominium stock faces the most aggressive structural deterioration environment in Tampa Bay. Barrier island buildings endure relentless salt spray, Gulf humidity, and hurricane wind loads that accelerate concrete corrosion decades ahead of inland structures. Florida Construction Specialists delivers the structural assessment, concrete restoration, and SB4-D compliance expertise that Clearwater associations need to protect their buildings and their residents.
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
                Schedule a Building Assessment
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SB4-D Hub Callout */}
      <section className="py-4 bg-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex items-center gap-3 text-sm">
            <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <p className="text-blue-800">
              <strong>SB4-D Compliance Resource:</strong> For comprehensive compliance checklists, deadlines, cost guidance, and Clearwater-specific requirements, visit our{' '}
              <Link href="/sb4d-compliance/clearwater/" className="underline font-semibold hover:text-blue-600">SB4-D Compliance Guide for Clearwater</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Clearwater Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Clearwater's Barrier Island Condo Stock Faces an Urgent Remediation Timeline
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Clearwater contains one of the highest concentrations of waterfront condominiums in the Tampa Bay region. The barrier island stretching from Clearwater Beach through Sand Key hosts dozens of mid-rise and high-rise condominium buildings, many constructed during the development booms of the 1970s, 1980s, and early 2000s. These buildings now face the convergence of two forces: the natural deterioration accelerated by their extreme Gulf exposure, and Florida's SB4-D legislation that requires milestone structural inspections and fully funded reserves for structural maintenance.
              </p>
              <p className="mb-6">
                The structural challenges facing Clearwater's beach condominiums are fundamentally different from those of inland buildings. Salt-laden Gulf air continuously deposits chloride ions on concrete surfaces, where they penetrate through pores and micro-cracks to reach the reinforcing steel within. Once chloride concentrations at the rebar level exceed a critical threshold, corrosion initiates regardless of whether the concrete surface appears sound. The corrosion products expand to several times the volume of the original steel, creating internal pressure that cracks and spalls the surrounding concrete. On a barrier island where salt exposure is constant and inescapable, this process operates at an accelerated pace.
              </p>
              <p className="mb-6">
                Mainland Clearwater condominiums, while less exposed than their beach counterparts, still operate in a coastal environment with elevated humidity and measurable salt air influence. Buildings along the Intracoastal Waterway, in the Harbor Oaks area, and throughout central Clearwater experience salt exposure that exceeds typical inland conditions. The 1970s and 1980s construction boom produced mainland condominiums that have now reached or exceeded the 25-year milestone inspection threshold under SB4-D.
              </p>
              <p>
                Florida Construction Specialists works with Clearwater condominium associations across both the barrier island and mainland to assess building conditions, develop remediation plans, execute structural repairs, and achieve SB4-D compliance. Our principal's 43 years of combined construction and insurance industry experience, including work as an Executive General Adjuster, provides a perspective on building condition assessment and restoration cost management that benefits every association we serve.
              </p>
            </div>

            <CodeReference
              code="Florida Statute 553.899"
              section="Milestone Inspections for Condominium and Cooperative Buildings"
              description="Requires structural inspections of condominium buildings 3 stories or higher. Clearwater's barrier island condos on Sand Key, Island Estates, and Clearwater Beach fall within the 3-mile coastal zone, triggering the accelerated 25-year inspection timeline. Gulf salt spray and hurricane exposure accelerate structural deterioration."
              link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View F.S. 553.899"
            />
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/southwinds-condo-rear/southwinds-condo-rear-display.webp"
        alt="Condominium building remediation on Clearwater's waterfront"
        title="Protecting Clearwater's Condominium Investments"
        subtitle="Structural restoration, SB4-D compliance, and concrete repair for barrier island and mainland buildings"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Condo Remediation Services for Clearwater's Waterfront Buildings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Comprehensive remediation capabilities for Clearwater's unique condominium challenges, from barrier island concrete restoration to SB4-D compliance management.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "SB4-D Milestone Inspections",
                description: "Coordination with licensed engineers for Phase 1 and Phase 2 milestone structural inspections required under Florida law. We prepare buildings for inspection, assist associations in understanding findings, and develop remediation plans that address identified structural concerns within compliance timelines."
              },
              {
                icon: Building2,
                title: "Concrete Restoration",
                description: "Comprehensive concrete repair for Clearwater's salt-exposed condominiums. Spall repair, delamination correction, rebar exposure treatment, corrosion-inhibiting concrete replacement, and protective coating application. Specialized techniques for beach-area buildings with severe chloride contamination."
              },
              {
                icon: Shield,
                title: "Balcony and Walkway Repair",
                description: "Structural assessment and restoration of exterior balconies, walkways, and breezeways on Clearwater condominiums. These exposed horizontal surfaces are typically the first building elements to show corrosion-related distress, particularly on Gulf-facing elevations where salt exposure is most intense."
              },
              {
                icon: HardHat,
                title: "Parking Structure Remediation",
                description: "Concrete deck repair, post-tension tendon evaluation, waterproof membrane installation, expansion joint replacement, and drainage system rehabilitation for Clearwater condo parking structures. Beach-area garages face dual exposure from salt air and vehicle-carried moisture."
              },
              {
                icon: FileCheck,
                title: "Building Envelope Restoration",
                description: "Waterproofing membrane replacement, window and door sealant renewal, stucco repair, and exterior coating systems for Clearwater condominiums. Beach buildings require marine-grade waterproofing systems capable of withstanding continuous salt spray and wind-driven rain."
              },
              {
                icon: Briefcase,
                title: "Reserve Study Support",
                description: "Structural condition data and remediation cost projections that support Structural Integrity Reserve Studies required under SB4-D. We provide associations with detailed repair cost estimates, component useful life assessments, and multi-year remediation budget planning."
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
              Why Clearwater Condo Remediation Requires Coastal Expertise
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Condo remediation contractors working on Clearwater's barrier island operate in conditions that inland contractors rarely encounter. Scaffolding and swing stages must be engineered for Gulf wind loads. Concrete repair materials must cure properly in salt-laden, high-humidity air. Protective coatings must be compatible with the continuous salt spray environment. And all exterior work must account for weather windows that close abruptly during the summer thunderstorm season.
              </p>
              <p className="mb-6">
                The <a href="https://www.clearwater-fl.com/gov/depts/pwa/ds/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Clearwater Development Services Department</a> requires permits for structural remediation work on condominiums. Repair projects that alter structural elements, modify building envelopes, or affect fire-rated assemblies require engineering documentation and plan review. Beach-area projects may also require temporary construction permits for scaffolding, staging areas, and material delivery zones on public rights-of-way. We manage the full permitting process for remediation projects.
              </p>
              <p className="mb-6">
                Clearwater Beach's condominium inventory includes buildings that range from 4-story walkups to 15-story towers, each with different structural systems, exposure conditions, and remediation requirements. Gulf-front buildings with direct wave exposure experience the most severe salt loading, while buildings set back from the beach or along the Intracoastal Waterway face different but still significant coastal exposure. Our assessment process evaluates each building based on its specific exposure conditions, construction materials, age, and maintenance history.
              </p>
              <p>
                Sand Key, the barrier island south of Clearwater Beach connected by the Sand Key Bridge, hosts a significant cluster of condominium towers with many buildings now reaching the 25-year milestone inspection threshold. The Mandalay Shores area of Clearwater Beach and the high-rises along Gulf Boulevard are similarly positioned for mandatory inspections. Mainland condominiums in the Harbor Oaks neighborhood, near Morton Plant Hospital, and throughout central Clearwater also require attention as they approach their milestone inspection deadlines. We serve associations across all of these Clearwater submarkets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Clearwater Condo Remediation Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured approach to condominium remediation designed for Clearwater's coastal environment and SB4-D compliance requirements.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Building Condition Assessment",
                description: "Comprehensive evaluation of structural and building envelope conditions. Visual inspection, delamination sounding, corrosion mapping, chloride testing, and carbonation depth measurement. For Clearwater beach condominiums, we pay particular attention to Gulf-facing elevations, balcony connections, and parking structure decks where salt exposure is most severe.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Engineering and Remediation Planning",
                description: "Working with licensed structural engineers, we develop remediation specifications based on assessment findings. Plans prioritize safety-critical repairs, address SB4-D compliance requirements, and provide the association with clear cost projections and phasing options that balance urgency with financial capacity.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Permitting and Association Coordination",
                description: "We submit permit applications to the City of Clearwater, coordinate with the association board on construction timing and resident communication, and establish logistics plans for material delivery and staging. Beach-area projects receive detailed plans for causeway deliveries and limited-access site management.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Remediation Execution",
                description: "Experienced crews perform concrete repair, structural restoration, waterproofing, and coating application using materials specified for Clearwater's coastal environment. Work proceeds systematically by building elevation or section, maintaining resident access to units, amenities, and parking throughout construction.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Documentation and Compliance Closeout",
                description: "Complete documentation of all repairs including photographic records, material certifications, quality test results, and engineering certifications of completed work. This documentation package supports SB4-D compliance records, insurance renewals, and future reserve study updates for the association.",
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
        title="Clearwater Condo Remediation FAQ"
        description="Common questions about condominium remediation and SB4-D compliance in Clearwater, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Clearwater" currentService="condo-remediation" currentServiceName="Condo Remediation" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Protect Your Clearwater Condominium Investment
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your condominium's structural condition and SB4-D compliance needs. We provide honest assessments, clear remediation plans, and the coastal restoration expertise Clearwater buildings require.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Building Assessment
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>Engineering Coordination</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="condo-remediation-clearwater" />
    </>
  );
}
