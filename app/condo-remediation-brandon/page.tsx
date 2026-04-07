import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, AlertTriangle, ClipboardCheck } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/condo-remediation-brandon/' },
  title: "Condo Remediation Brandon | SB 4-D Compliance",
  description: "Condo remediation and structural repair in Brandon FL. SB 4-D milestone inspections concrete restoration.",
  openGraph: {
    title: "Condo Remediation Brandon | SB 4-D Compliance",
    description: "Condo remediation and structural repair in Brandon FL. SB 4-D milestone inspections concrete restoration.",
    url: "https://floridaconstructionspecialists.com/condo-remediation-brandon/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "How does SB 4-D affect condominium buildings in Brandon since it is unincorporated?",
    answer: "SB 4-D applies to all condominium buildings in Florida regardless of municipal incorporation status. For Brandon condominiums, milestone inspections and structural integrity reserve studies are administered through Hillsborough County Building Services since Brandon is unincorporated. Condo associations in Brandon must comply with the same inspection deadlines, reserve funding requirements, and remediation timelines as condominiums in incorporated cities. The key difference is that all inspection reports, engineering assessments, and repair permits go through county processes rather than a municipal building department."
  },
  {
    question: "What types of condominium buildings are most common in the Brandon area?",
    answer: "Brandon's condo stock is predominantly low-rise and mid-rise suburban construction, typically two to four stories. Unlike coastal cities with high-rise waterfront condominiums, Brandon's condo communities are mostly garden-style or walk-up buildings in planned communities. Common complexes include the developments along Bloomingdale Avenue, the Valrico border area, and communities near Westfield Brandon Mall. Many of these buildings were constructed in the 1980s and 1990s during Brandon's initial suburban growth phase, making them prime candidates for milestone inspections and remediation work as they approach thirty and forty years of age."
  },
  {
    question: "What are the most common structural issues found in Brandon condominium buildings?",
    answer: "The most frequent remediation issues in Brandon condominiums involve concrete deterioration from moisture intrusion, balcony and walkway waterproofing failures, stucco cracking and water penetration through the building envelope, roof system aging, and inadequate drainage around building foundations. Brandon's inland location means less salt spray exposure than coastal condos, but the community's heavy rainfall, high humidity, and seasonal temperature fluctuations still cause significant concrete carbonation and rebar corrosion over time. Flat-roof condo buildings are particularly susceptible to ponding water damage."
  },
  {
    question: "How does the milestone inspection process work for Brandon condos through Hillsborough County?",
    answer: "Condominium associations in Brandon must engage a licensed engineer or architect to perform milestone inspections at the intervals required by SB 4-D. The inspector submits findings to both the condo association and Hillsborough County Building Services. If the inspection identifies structural deficiencies requiring remediation, the association must develop a repair plan, obtain necessary permits through the county, and complete repairs within the timeframes specified by the engineering assessment. We work directly with condo associations and their engineers to develop remediation plans and execute repairs efficiently through the county permitting process."
  },
  {
    question: "What does a typical condo remediation project cost in the Brandon area?",
    answer: "Remediation costs for Brandon condominiums vary widely based on the scope of structural issues found during milestone inspections. Minor concrete spalling repair and waterproofing work may cost fifty thousand to one hundred fifty thousand dollars for a typical building. More extensive projects involving structural concrete replacement, building envelope remediation, or major drainage corrections can range from two hundred thousand to over one million dollars per building. We provide detailed remediation estimates based on engineering assessments so associations can plan financially and satisfy SB 4-D reserve funding requirements."
  },
  {
    question: "Can FCS help a Brandon condo association prepare for its first milestone inspection?",
    answer: "Yes, we regularly assist Brandon condo associations with pre-inspection preparation. This includes conducting preliminary visual assessments of common structural concerns, identifying areas that may need attention before the formal engineering inspection, and helping boards understand what milestone inspections involve and how to budget for potential remediation. While we do not perform the milestone inspections themselves, those must be done by a licensed engineer or architect, we work closely with engineering firms throughout the Tampa Bay area and can coordinate the full process from inspection through completed repairs."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Condo Remediation", href: "/condo-remediation/" },
  { name: "Brandon", href: "/condo-remediation-brandon/" },
];

export default function CondoRemediationBrandonPage() {
  return (
    <>
      <LocalBusinessSchema city="Brandon" service="Condo Remediation" />
      <ServiceSchema
        serviceName="Condo Remediation"
        serviceDescription="Condominium structural remediation and SB 4-D compliance in Brandon, FL. Milestone inspection support, concrete restoration, building envelope repair for suburban condo communities. Licensed CBC1262722, 40+ years experience."
        city="Brandon"
        minPrice="50000"
        serviceCategories={["Structural Concrete Repair", "Building Envelope Remediation", "Milestone Inspection Support", "Balcony and Walkway Repair", "Waterproofing Systems"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/southwinds-condo-rear/southwinds-condo-rear-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Brandon & Eastern Hillsborough County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Condo Remediation in Brandon, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Brandon's suburban condominium communities face the same SB 4-D compliance requirements as high-rise towers on the coast. Florida Construction Specialists provides structural remediation, concrete restoration, and building envelope repair for condo associations across eastern Hillsborough County, guiding boards through the milestone inspection and repair process with experienced project management and transparent budgeting.
            </p>

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
                Schedule a Remediation Assessment
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
              <strong>SB4-D Compliance Resource:</strong> For comprehensive compliance checklists, deadlines, and cost guidance, visit our{' '}
              <Link href="/sb4d-compliance/" className="underline font-semibold hover:text-blue-600">SB4-D Compliance Hub</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Brandon's Suburban Condo Communities Need Remediation Expertise Now
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Brandon's condominium stock represents a different profile than the high-rise towers lining Tampa's Bayshore Boulevard or the beachfront properties in St. Petersburg. Most Brandon condominiums are low-rise garden-style or walk-up buildings, two to four stories tall, built during the community's suburban expansion from the early 1980s through the 2000s. These buildings may lack the dramatic height of coastal condos, but they face the same structural aging challenges, the same SB 4-D compliance requirements, and the same need for professional remediation when milestone inspections reveal deterioration.
              </p>
              <p className="mb-6">
                SB 4-D, the Florida legislation passed in response to the Surfside condominium collapse, applies equally to condominiums in unincorporated Hillsborough County. Brandon condo associations must arrange milestone inspections at the required intervals and maintain adequate structural integrity reserve funds. For buildings at or past thirty years of age, and many in Brandon's established neighborhoods have reached that threshold, these requirements create an urgent need for qualified remediation contractors who understand both the engineering requirements and the financial realities facing suburban condo associations.
              </p>
              <p className="mb-6">
                The remediation challenges in Brandon condos differ from coastal properties in important ways. While coastal condominiums contend with salt spray accelerating rebar corrosion and concrete spalling, Brandon's inland condos face moisture-driven deterioration from different sources. Over fifty inches of annual rainfall, combined with high ambient humidity and seasonal temperature cycling, causes concrete carbonation, waterproofing membrane failure, and stucco deterioration over decades. Flat-roof condo buildings, common in Brandon's garden-style communities, are particularly prone to ponding water damage that leads to roof deck deterioration and interior water intrusion.
              </p>
              <p>
                Florida Construction Specialists works with Brandon condo associations to navigate every phase of the remediation process. From pre-inspection preparation through completed structural repairs, we provide the project management, engineering coordination, and construction execution that these projects demand. Our experience with Hillsborough County's permitting process for remediation work ensures that repairs are properly documented and approved, protecting both the association and individual unit owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/railing-replacement-best-practices-condos/railing-replacement-best-practices-condos-display.webp"
        alt="Condominium railing and balcony remediation work"
        title="Protecting Brandon's Condo Communities"
        subtitle="SB 4-D compliance, structural repair, and building envelope restoration for suburban condominiums"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Condo Remediation Services for Brandon Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Comprehensive remediation capabilities addressing the specific structural and envelope challenges found in Brandon's suburban condominium buildings.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Structural Concrete Restoration",
                description: "Repair of deteriorated concrete in load-bearing elements including columns, beams, floor slabs, and foundation walls. We remove compromised concrete, treat corroded reinforcing steel, and restore structural members using engineered repair materials that match the strength and performance requirements of the original design."
              },
              {
                icon: Shield,
                title: "Building Envelope Remediation",
                description: "Comprehensive repair of exterior wall systems including stucco restoration, joint sealant replacement, window and door flashing repair, and exterior coating application. Brandon's rainfall exposure makes building envelope integrity critical for preventing the moisture intrusion that accelerates interior structural deterioration."
              },
              {
                icon: Building2,
                title: "Balcony and Walkway Repair",
                description: "Structural assessment and repair of exterior balconies, elevated walkways, and exterior stairways. These elements receive direct weather exposure and are among the first components to show deterioration in Brandon's suburban condo buildings. We address structural framing, waterproofing membranes, railings, and walking surfaces."
              },
              {
                icon: HardHat,
                title: "Roof System Restoration",
                description: "Flat roof and low-slope roof remediation for garden-style condo buildings. Brandon's heavy rainfall and standing water issues make roof system performance critical. We repair or replace roof membranes, improve drainage systems, and address roof deck deterioration caused by years of moisture exposure."
              },
              {
                icon: FileCheck,
                title: "Milestone Inspection Support",
                description: "Pre-inspection preparation and post-inspection remediation planning for SB 4-D compliance. We coordinate with structural engineers to develop repair scopes, provide detailed cost estimates for association budgeting, and execute approved remediation plans through Hillsborough County's permitting process."
              },
              {
                icon: ClipboardCheck,
                title: "Reserve Study Coordination",
                description: "Support for structural integrity reserve studies required by SB 4-D. We help associations understand the relationship between reserve funding requirements and actual remediation costs, providing realistic construction cost data that enables accurate reserve planning and assessment calculations."
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
              Understanding Brandon's Condo Remediation Landscape
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Brandon's condominium communities are spread across several distinct neighborhoods, each with its own building characteristics and remediation needs. The complexes along Bloomingdale Avenue and in the Valrico border area tend to be 1990s and 2000s construction with wood-frame upper stories on concrete first floors. Communities closer to the SR 60 corridor and near Westfield Brandon often date to the 1980s with full concrete block construction. Understanding these different building types is essential for accurate remediation planning because each structural system presents different deterioration patterns and repair approaches.
              </p>
              <p className="mb-6">
                Since Brandon is unincorporated, all remediation permits go through <a href="https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/building-and-renovations/permits-and-inspections" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Hillsborough County Building Services</a>. This means the county reviews structural repair plans, issues building permits, conducts inspections during remediation work, and signs off on completed repairs. We have extensive experience with the county's permitting process for condo remediation projects and maintain working relationships with the plan reviewers and inspectors who handle these specialized structural repair permits.
              </p>
              <p className="mb-6">
                One challenge specific to suburban condo remediation in Brandon is working within active residential communities where residents remain in their units during repairs. Unlike commercial renovation where buildings can be vacated, condo remediation typically occurs while families are living in their homes. This requires careful scheduling to minimize noise, dust, and disruption. We develop phasing plans that address the most critical structural repairs first while maintaining safe access and habitable conditions for residents throughout the project.
              </p>
              <p>
                HOA and condo association management adds another layer of complexity. Many Brandon condo associations are self-managed or use smaller property management companies that may not have experience with large-scale remediation projects. We work directly with boards, providing clear communication about repair scopes, timelines, and costs that board members can present to unit owners at association meetings. Our detailed documentation supports the board's fiduciary responsibility and helps justify special assessments when necessary to fund required repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Brandon Condo Remediation Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured approach to condo remediation that addresses SB 4-D compliance while respecting the needs of Brandon residents.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Engineering Assessment Review",
                description: "We review the structural engineer's milestone inspection report or existing condition assessment to understand the full scope of required repairs. We meet with the condo board and engineer to clarify findings, prioritize repairs by urgency, and develop a preliminary remediation approach.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Remediation Design and Budgeting",
                description: "Working with the engineer of record, we develop detailed repair specifications, construction sequencing plans, and accurate cost estimates. This information enables the association to plan financially, whether through existing reserves, special assessments, or construction financing.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Permitting Through Hillsborough County",
                description: "We prepare and submit structural repair permit applications to Hillsborough County Building Services, including engineered repair plans, material specifications, and quality assurance documentation. Our familiarity with the county's review process for remediation permits helps minimize approval timelines.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Phased Remediation Construction",
                description: "We execute repairs in a phased sequence that prioritizes structural safety while minimizing resident disruption. Work areas are properly contained and protected, access routes are maintained, and residents receive advance notice of work affecting their units or common areas.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Documentation and Compliance Closeout",
                description: "Completed repairs are documented with engineering verification, inspection sign-offs from Hillsborough County, and comprehensive records suitable for SB 4-D compliance files. We provide the association with complete remediation documentation for their records and future milestone inspections.",
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
        title="Brandon Condo Remediation FAQ"
        description="Common questions about condominium remediation and SB 4-D compliance in Brandon, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Brandon" currentService="condo-remediation" currentServiceName="Condo Remediation" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Address Your Brandon Condo's Remediation Needs
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your condominium's structural remediation or SB 4-D compliance needs. We will review your engineering assessment, provide detailed cost estimates, and help your board plan for required repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Board Consultation
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
    </>
  );
}
