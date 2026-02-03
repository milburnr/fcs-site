import Link from "next/link";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/Schema"
import { Phone, Building2, History, Shield, Award, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata = {
  title: "Historic Restoration & Preservation Tampa FL",
  description:
    "Distinguished leaders in historic restoration and preservation in Florida. We blend traditional craftsmanship with modern techniques to preserve Florida's architectural heritage.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Historic Restoration Preservation", href: "/historic-restoration-preservation/" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Tampa Historic Restoration Permits and Regulations",
    "href": "/tampa-historic-restoration-permits-and-regulations/",
    "description": "Navigate Tampa's historic restoration permit process including COA requirements and SHPO review."
  },
  {
    "title": "Preserving Tampa's Cultural Heritage",
    "href": "/preserving-tampas-cultural-heritage-through-restoration/",
    "description": "How thoughtful restoration projects maintain Tampa Bay's architectural legacy."
  },
  {
    "title": "Architectural Styles in Tampa's Historic Restoration",
    "href": "/architectural-styles-in-tampas-historic-restoration/",
    "description": "Understanding the diverse architectural heritage of Tampa's historic districts."
  },
  {
    "title": "Historic Tax Credits for Commercial Buildings",
    "href": "/historic-tax-credits-commercial-buildings/",
    "description": "Maximize ROI with federal and state historic preservation tax incentives."
  }
];

const faqs = [
  {
    question: "How do I determine if my Tampa property is historically significant?",
    answer: "Historic significance can be established through several pathways. Individual properties may be listed on the National Register of Historic Places or designated locally by Tampa's Historic Preservation Commission. Properties within established historic districts like Ybor City or Hyde Park may contribute to the district's significance even without individual designation. The Florida Master Site File maintains comprehensive records of surveyed properties, and our team can help assess your building's historic status and preservation potential."
  },
  {
    question: "What approvals are required for historic preservation projects in Tampa?",
    answer: "Approval requirements depend on your property's designation level. Projects in Ybor City require Certificate of Appropriateness from the Barrio Latino Commission. Other locally designated historic districts require Architectural Review Commission approval. Individual landmarks need Historic Preservation Commission review. Federal tax credit projects must receive certification through the three-part application process managed by SHPO and the National Park Service. We coordinate all required approvals to ensure smooth project progression."
  },
  {
    question: "Can I receive federal tax credits for my Tampa historic preservation project?",
    answer: "The 20% Federal Historic Preservation Tax Credit is available for certified historic structures used for income-producing purposes. Qualifying projects must comply with the Secretary of Interior's Standards and involve substantial rehabilitation expenditures exceeding the building's adjusted basis. While owner-occupied residences don't qualify for the 20% credit, they may be eligible for state tax credits or local incentives. Commercial, rental residential, and mixed-use projects typically qualify for the federal program."
  },
  {
    question: "How long does a typical historic preservation project take in Tampa?",
    answer: "Project timelines vary significantly based on scope and complexity. Simple preservation maintenance might require 2-6 weeks, while comprehensive restoration can take 12-24 months. Regulatory review processes typically add 2-6 months to overall timelines, depending on the approval level required. Federal tax credit projects require additional time for the three-part application process, particularly if amendments are needed. We develop realistic schedules that account for regulatory requirements and preservation-specific complexities."
  },
  {
    question: "What makes historic preservation construction more expensive than regular renovation?",
    answer: "Historic preservation requires specialized materials, skilled craftsmen, and compliance with preservation standards that add complexity and cost. Factors include custom millwork replication, specialty conservation materials, skilled heritage tradespeople, regulatory compliance documentation, and careful protection of existing historic fabric during work. However, available tax credits and incentives often offset these premiums, and the enhanced property value typically justifies the additional investment."
  },
  {
    question: "Can I update my historic building's systems for energy efficiency?",
    answer: "Yes, the Secretary of Interior's Standards permit energy efficiency improvements that don't compromise character-defining features. Common approaches include adding insulation in concealed locations, upgrading HVAC equipment while maintaining historic register locations, installing energy-efficient lighting that matches historic fixture appearance, and improving building envelope performance through reversible interventions. Each improvement must be evaluated for its impact on historic character and approved through appropriate review processes."
  },
  {
    question: "What happens if preservation work is done without proper approvals?",
    answer: "Unauthorized work on designated historic properties can result in significant penalties and complications. Tampa's recent ordinance amendments (24-4) allow fines up to $15,000 for irreparable damage to contributing structures. Unauthorized work can also disqualify projects from tax credit programs and require costly remediation to restore damaged historic features. Federal tax credit projects that deviate from approved plans risk losing certification and must repay credits received. Always obtain required approvals before beginning any work on historic properties."
  },
  {
    question: "How do I find qualified contractors for historic preservation work in Tampa?",
    answer: "Historic preservation requires contractors with specific experience and understanding of heritage building techniques. Look for contractors with demonstrated experience in historic projects, relationships with preservation consultants and heritage tradespeople, knowledge of local preservation review processes, and successful completion of tax credit projects. Florida Construction Specialists maintains all necessary expertise and professional relationships to ensure successful preservation outcomes."
  }
];

export default function HistoricRestorationPage() {
  const features = [
    {
      icon: History,
      title: "Authentic Restoration",
      description:
        "We source authentic materials and employ specialized restoration methods to ensure your project respects the original character and integrity of the building.",
    },
    {
      icon: Building2,
      title: "All Property Types",
      description:
        "From historic homes to commercial landmarks, condos to unique commercial buildings, we have the expertise to handle any historic restoration project.",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description:
        "We ensure every project complies with local, state, and federal standards and regulations, working closely with historians, architects, and conservation experts.",
    },
    {
      icon: Award,
      title: "Grant Assistance",
      description:
        "We provide all necessary documentation to secure grants and historic assistance programs, interfacing with all city, county, and state regulatory bodies.",
    },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ServiceSchema 
        serviceName="Historic Restoration & Preservation"
        serviceDescription="Distinguished leaders in historic restoration and preservation in Florida. We blend traditional craftsmanship with modern techniques to preserve Florida's architectural heritage while meeting Secretary of Interior standards."
      />
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
          <div className="absolute inset-0 bg-[url('/images/historic-preservation/historic-preservation-display.webp')] bg-cover bg-center opacity-30" />
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 2600 131" className="w-full h-16 fill-white">
            <path d="M0 0L2600 0 2600 69.1 0 0z" opacity="1" />
            <path d="M0 0L2600 0 2600 69.1 0 69.1z" opacity="0.5" />
            <path d="M2600 0L0 0 0 130.1 2600 69.1z" opacity="0.25" />
          </svg>
        </div>

        <div className="container-custom relative z-10 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Tampa, FL Historic Restoration and Preservation
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Distinguished leaders in preserving and restoring Florida&apos;s
              rich architectural heritage with meticulous attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Get Free Consultation
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Historic Restoration and Preservation in Tampa, Florida
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Florida Construction Specialists stands as Tampa Bay's premier historic restoration and preservation contractor, bringing decades of specialized experience to the complex field of heritage building conservation. Our expertise spans Tampa's diverse architectural heritage—from the Mediterranean Revival landmarks of Hyde Park to the vernacular workers' cottages of Ybor City's National Historic Landmark District.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Historic preservation requires far more than general construction expertise. Success demands deep understanding of period building methods, traditional materials, regulatory frameworks, and the Secretary of the Interior's Standards for Rehabilitation. Our team combines master craftsmen skilled in heritage trades with project managers experienced in navigating Tampa's preservation review processes and federal tax credit programs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Every historic structure tells a story—whether it's the elegance of a Mediterranean Revival social club, the industrial heritage of a cigar factory, or the simple dignity of a wood-frame cottage. Our preservation work honors these stories while ensuring these irreplaceable buildings continue serving Tampa's community for future generations.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa's Historic Districts and Preservation Framework
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Tampa's historic preservation program operates under Tampa City Code Chapter 27, establishing comprehensive protection for the city's most significant architectural heritage. This regulatory framework creates a multi-tiered system of designation and protection that guides all restoration and preservation work within the city.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Ybor City National Historic Landmark District
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Ybor City represents the crown jewel of Tampa's historic preservation efforts. Designated as a National Historic Landmark District in 1990, this 370-acre area contains approximately 950 contributing historic structures spanning from the 1880s through the 1930s. The district operates under dual jurisdiction—both federal oversight through the National Park Service and local regulation through Tampa's Barrio Latino Commission.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Preservation projects within Ybor City require careful coordination with the Barrio Latino Commission, which reviews all exterior alterations for compatibility with the district's historic character. The commission's design review process considers factors including architectural style, materials, scale, proportion, and visibility from public rights-of-way. Our extensive experience working within these guidelines ensures smooth regulatory approval for projects ranging from simple facade maintenance to complex adaptive reuse developments.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Hyde Park Historic District
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Listed on the National Register of Historic Places, Hyde Park showcases Tampa's early suburban development and contains the city's finest collection of Mediterranean Revival architecture. The district's tree-lined streets feature elegant commercial buildings, grand residences, and intimate neighborhood-scale development that defines Tampa's early 20th-century prosperity.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Hyde Park projects require approval from Tampa's Architectural Review Commission, which evaluates proposed work for compatibility with the district's refined architectural character. Preservation challenges in Hyde Park often involve maintaining the delicate balance between commercial viability and residential charm that defines the neighborhood's unique appeal.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Locally Designated Historic Properties
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Beyond formal historic districts, Tampa maintains individual landmark designations for properties of exceptional architectural or historical significance. These locally designated properties receive protection under Tampa's preservation ordinance and require Historic Preservation Commission approval for exterior alterations, new construction, and demolition.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Secretary of the Interior's Standards for Rehabilitation
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Secretary of the Interior's Standards for Rehabilitation provide the fundamental framework for all preservation projects seeking federal tax credits or grant funding. These ten standards establish principles for appropriate treatment of historic properties, emphasizing preservation of character-defining features while allowing compatible contemporary adaptations.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Standards 1-5: Character Preservation</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Use compatible with historic character</li>
                  <li>• Retain and preserve historic character</li>
                  <li>• Recognize each property's historical layers</li>
                  <li>• Preserve significant architectural features</li>
                  <li>• Preserve distinctive materials and features</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Standards 6-10: Treatment Guidelines</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Repair rather than replace historic features</li>
                  <li>• Use gentle cleaning methods</li>
                  <li>• Protect archaeological resources</li>
                  <li>• Make compatible new additions</li>
                  <li>• Design reversible alterations</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Florida Construction Specialists has successfully guided dozens of Tampa projects through the federal tax credit certification process. Our understanding of how these standards apply to different architectural styles and building types ensures that your preservation project qualifies for available incentives while achieving your functional objectives.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa's Unique Preservation Challenges
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Florida's subtropical climate creates specific preservation challenges that require specialized approaches and materials. Our expertise addresses these environmental factors while maintaining historic authenticity.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Climate and Material Considerations
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Tampa's high humidity, intense solar exposure, and salt air create accelerated deterioration of historic building materials. Wood frame structures face termite damage and rot, masonry buildings experience mortar deterioration and efflorescence, metal elements corrode rapidly without proper maintenance, and historic roofing materials require specialized replacement and repair approaches.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-brand-green-dark text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Material Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Climate Impact</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Preservation Approach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Heart Pine Lumber</td>
                    <td className="border border-gray-300 px-4 py-3">Termite damage, moisture infiltration</td>
                    <td className="border border-gray-300 px-4 py-3">Species-matched repair, moisture barriers</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Clay Barrel Tiles</td>
                    <td className="border border-gray-300 px-4 py-3">Thermal cycling, wind uplift</td>
                    <td className="border border-gray-300 px-4 py-3">Proper fastening, matching replacements</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Lime Stucco</td>
                    <td className="border border-gray-300 px-4 py-3">Shrinkage cracking, water penetration</td>
                    <td className="border border-gray-300 px-4 py-3">Compatible repair mortars, proper curing</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Cast Iron Elements</td>
                    <td className="border border-gray-300 px-4 py-3">Corrosion, paint failure</td>
                    <td className="border border-gray-300 px-4 py-3">Proper surface preparation, compatible coatings</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Hurricane and Storm Preparedness
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Historic buildings in Tampa must be prepared for hurricane conditions while maintaining their architectural character. We develop storm preparedness strategies that protect historic elements through removable storm shutters, strengthened roof attachments, emergency stabilization plans, and regular maintenance programs that identify vulnerable elements before storm seasons.
            </p>
          </div>
        </div>
      </section>

      {/* Historic Tax Credits and Financial Incentives */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Federal Historic Preservation Tax Credits
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Federal Historic Preservation Tax Credit program provides a 20% income tax credit for qualified rehabilitation expenditures on certified historic structures used for income-producing purposes. This program represents the most significant financial incentive available for historic preservation projects and can dramatically improve project economics for qualifying developments.
            </p>
            
            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Qualification Requirements
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To qualify for the 20% credit, projects must meet specific criteria including certification as a historic structure through individual National Register listing or contribution to a registered historic district, use for income-producing purposes such as commercial, rental residential, or industrial use, compliance with the Secretary of the Interior's Standards for Rehabilitation, and qualified rehabilitation expenditures that exceed the building's adjusted basis.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border-l-4 border-brand-green">
                <h4 className="font-bold text-brand-green-dark mb-3">Project Requirements</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Certified historic structure</li>
                  <li>• Income-producing use</li>
                  <li>• Secretary of Interior Standards compliance</li>
                  <li>• Substantial rehabilitation (QRE &gt; adjusted basis)</li>
                  <li>• Three-part application process</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-brand-green">
                <h4 className="font-bold text-brand-green-dark mb-3">Financial Benefits</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• 20% of qualified expenditures</li>
                  <li>• Dollar-for-dollar tax reduction</li>
                  <li>• Transferable to investors</li>
                  <li>• Can combine with other incentives</li>
                  <li>• 5-year compliance period</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Three-Part Application Process
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Federal tax credit certification requires a three-part application submitted to the Florida Division of Historical Resources (SHPO) and the National Park Service. Part 1 evaluates the building's historic significance, Part 2 reviews the proposed rehabilitation plan for Standards compliance, and Part 3 certifies completion of the rehabilitation according to approved plans.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Florida Construction Specialists coordinates directly with preservation consultants and tax credit specialists to ensure your project meets all certification requirements. Our experience with the application process helps avoid delays and rejections that can derail project financing and timelines.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa's Local Historic Preservation Incentives
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Beyond federal tax credits, Tampa offers local incentives to encourage historic preservation throughout the city's designated districts and individual landmarks.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Preservation Property Tax Exemption
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Tampa's Historic Preservation Property Tax Exemption (Ordinance 2019-38) provides up to 10 years of ad valorem tax exemption for qualified rehabilitation of locally designated historic properties. The exemption applies to the increased assessed value resulting from restoration work, providing significant long-term savings for property owners who invest in authentic preservation.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Preservation Loan Fund
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Tampa Historic Preservation Loan Fund offers low-interest financing for facade improvements, emergency stabilization, and accessibility improvements to contributing properties within historic districts. These revolving loan funds help property owners address immediate preservation needs while planning larger restoration projects.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Preservation Project Types and Costs
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Historic preservation encompasses various treatment approaches, each with different cost implications and regulatory requirements. Understanding these distinctions helps property owners select appropriate preservation strategies for their goals and budgets.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-brand-green-dark text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left">Treatment Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Scope of Work</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Cost Range (per sq ft)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Preservation Maintenance</td>
                    <td className="border border-gray-300 px-4 py-3">Routine upkeep, minor repairs</td>
                    <td className="border border-gray-300 px-4 py-3">$15 - $35</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Restoration</td>
                    <td className="border border-gray-300 px-4 py-3">Return to specific historical appearance</td>
                    <td className="border border-gray-300 px-4 py-3">$125 - $300</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Rehabilitation</td>
                    <td className="border border-gray-300 px-4 py-3">Adapt for contemporary use</td>
                    <td className="border border-gray-300 px-4 py-3">$200 - $450</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Emergency Stabilization</td>
                    <td className="border border-gray-300 px-4 py-3">Immediate threat mitigation</td>
                    <td className="border border-gray-300 px-4 py-3">$75 - $200</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Specialized Preservation Techniques
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Historic preservation requires specialized knowledge of traditional building materials, construction methods, and conservation techniques often unfamiliar to contemporary construction professionals.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Masonry Conservation
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Tampa's historic buildings feature diverse masonry types requiring specific conservation approaches. Our masonry specialists understand the properties of lime-based mortars used in early construction, techniques for cleaning historic brick and stone without damage, methods for consolidating deteriorated masonry units, and approaches for repointing that match original mortar composition and tooling.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Wood Element Restoration
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Florida's historic buildings feature extensive millwork, decorative elements, and structural components crafted from old-growth lumber with characteristics that cannot be replicated with contemporary materials. Our craftsmen specialize in Dutchman repairs that preserve maximum original material, replication of deteriorated millwork using traditional joinery methods, consolidation treatments for structurally compromised wood elements, and pest management strategies that protect wood without damaging historic fabric.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Window Restoration
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Original windows represent significant character-defining features that should be preserved whenever feasible. The Secretary of Interior's Standards strongly favor restoration over replacement for these important architectural elements. Our window restoration services include sash repair and rebuilding, hardware restoration and replication, glazing compound renewal, weatherstripping installation that maintains historic appearance, and storm window systems that provide energy efficiency without compromising historic character.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-feature"
              >
                <feature.icon className="w-12 h-12 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 bg-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8 font-heading">
              Types of Historic Properties We Restore
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h4 className="text-lg font-bold text-white">
                  Condos & Apartments
                </h4>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h4 className="text-lg font-bold text-white">
                  Office Buildings
                </h4>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h4 className="text-lg font-bold text-white">
                  Commercial Buildings
                </h4>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h4 className="text-lg font-bold text-white">
                  Retail Spaces
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/balcony-reconstruction/"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-brand-green hover:text-white transition-all"
            >
              <h3 className="text-lg font-bold text-brand-green-dark group-hover:text-white mb-2">
                Balcony Reconstruction
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 text-sm">
                Commercial balcony restoration and exterior waterproofing.
              </p>
              <span className="inline-flex items-center text-brand-green group-hover:text-white mt-4 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            <Link
              href="/commercial-construction/"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-brand-green hover:text-white transition-all"
            >
              <h3 className="text-lg font-bold text-brand-green-dark group-hover:text-white mb-2">
                Commercial Construction
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 text-sm">
                Full-service commercial construction for all project types.
              </p>
              <span className="inline-flex items-center text-brand-green group-hover:text-white mt-4 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            <Link
              href="/disaster-recovery/"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-brand-green hover:text-white transition-all"
            >
              <h3 className="text-lg font-bold text-brand-green-dark group-hover:text-white mb-2">
                Disaster Recovery
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 text-sm">
                Fast and reliable disaster recovery and restoration services.
              </p>
              <span className="inline-flex items-center text-brand-green group-hover:text-white mt-4 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions About Historic Preservation in Tampa
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-brand-green pl-6">
                <h3 className="font-bold text-brand-green-dark mb-2 text-lg">How do I determine if my Tampa property is historically significant?</h3>
                <p className="text-gray-700">Historic significance can be established through several pathways. Individual properties may be listed on the National Register of Historic Places or designated locally by Tampa's Historic Preservation Commission. Properties within established historic districts like Ybor City or Hyde Park may contribute to the district's significance even without individual designation. The Florida Master Site File maintains comprehensive records of surveyed properties, and our team can help assess your building's historic status and preservation potential.</p>
              </div>
              
              <div className="border-l-4 border-brand-green pl-6">
                <h3 className="font-bold text-brand-green-dark mb-2 text-lg">What approvals are required for historic preservation projects in Tampa?</h3>
                <p className="text-gray-700">Approval requirements depend on your property's designation level. Projects in Ybor City require Certificate of Appropriateness from the Barrio Latino Commission. Other locally designated historic districts require Architectural Review Commission approval. Individual landmarks need Historic Preservation Commission review. Federal tax credit projects must receive certification through the three-part application process managed by SHPO and the National Park Service. We coordinate all required approvals to ensure smooth project progression.</p>
              </div>
              
              <div className="border-l-4 border-brand-green pl-6">
                <h3 className="font-bold text-brand-green-dark mb-2 text-lg">Can I receive federal tax credits for my Tampa historic preservation project?</h3>
                <p className="text-gray-700">The 20% Federal Historic Preservation Tax Credit is available for certified historic structures used for income-producing purposes. Qualifying projects must comply with the Secretary of Interior's Standards and involve substantial rehabilitation expenditures exceeding the building's adjusted basis. While owner-occupied residences don't qualify for the 20% credit, they may be eligible for state tax credits or local incentives. Commercial, rental residential, and mixed-use projects typically qualify for the federal program.</p>
              </div>
              
              <div className="border-l-4 border-brand-green pl-6">
                <h3 className="font-bold text-brand-green-dark mb-2 text-lg">How long does a typical historic preservation project take in Tampa?</h3>
                <p className="text-gray-700">Project timelines vary significantly based on scope and complexity. Simple preservation maintenance might require 2-6 weeks, while comprehensive restoration can take 12-24 months. Regulatory review processes typically add 2-6 months to overall timelines, depending on the approval level required. Federal tax credit projects require additional time for the three-part application process, particularly if amendments are needed. We develop realistic schedules that account for regulatory requirements and preservation-specific complexities.</p>
              </div>
              
              <div className="border-l-4 border-brand-green pl-6">
                <h3 className="font-bold text-brand-green-dark mb-2 text-lg">What makes historic preservation construction more expensive than regular renovation?</h3>
                <p className="text-gray-700">Historic preservation requires specialized materials, skilled craftsmen, and compliance with preservation standards that add complexity and cost. Factors include custom millwork replication, specialty conservation materials, skilled heritage tradespeople, regulatory compliance documentation, and careful protection of existing historic fabric during work. However, available tax credits and incentives often offset these premiums, and the enhanced property value typically justifies the additional investment.</p>
              </div>
              
              <div className="border-l-4 border-brand-green pl-6">
                <h3 className="font-bold text-brand-green-dark mb-2 text-lg">Can I update my historic building's systems for energy efficiency?</h3>
                <p className="text-gray-700">Yes, the Secretary of Interior's Standards permit energy efficiency improvements that don't compromise character-defining features. Common approaches include adding insulation in concealed locations, upgrading HVAC equipment while maintaining historic register locations, installing energy-efficient lighting that matches historic fixture appearance, and improving building envelope performance through reversible interventions. Each improvement must be evaluated for its impact on historic character and approved through appropriate review processes.</p>
              </div>
              
              <div className="border-l-4 border-brand-green pl-6">
                <h3 className="font-bold text-brand-green-dark mb-2 text-lg">What happens if preservation work is done without proper approvals?</h3>
                <p className="text-gray-700">Unauthorized work on designated historic properties can result in significant penalties and complications. Tampa's recent ordinance amendments (24-4) allow fines up to $15,000 for irreparable damage to contributing structures. Unauthorized work can also disqualify projects from tax credit programs and require costly remediation to restore damaged historic features. Federal tax credit projects that deviate from approved plans risk losing certification and must repay credits received. Always obtain required approvals before beginning any work on historic properties.</p>
              </div>
              
              <div className="border-l-4 border-brand-green pl-6">
                <h3 className="font-bold text-brand-green-dark mb-2 text-lg">How do I find qualified contractors for historic preservation work in Tampa?</h3>
                <p className="text-gray-700">Historic preservation requires contractors with specific experience and understanding of heritage building techniques. Look for contractors with demonstrated experience in historic projects, relationships with preservation consultants and heritage tradespeople, knowledge of local preservation review processes, and successful completion of tax credit projects. Florida Construction Specialists maintains all necessary expertise and professional relationships to ensure successful preservation outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Preserving Tampa's Heritage for Future Generations
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Historic preservation represents more than construction—it's an investment in community identity, cultural heritage, and sustainable development. Tampa's historic buildings embody the stories of the immigrants who built Ybor City, the entrepreneurs who shaped downtown, and the families who created the city's distinctive neighborhoods.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Every preservation project presents unique challenges and opportunities. From the elaborate Mediterranean Revival landmarks that define Tampa's architectural identity to the modest vernacular buildings that housed working families, each structure requires careful evaluation and appropriate treatment strategies. Success depends on understanding the building's historical significance, architectural character, and contemporary potential.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Florida Construction Specialists brings the specialized expertise, regulatory knowledge, and skilled craftsmanship necessary for successful historic preservation projects. Our comprehensive approach ensures that your project meets preservation standards while achieving your development objectives—whether that's creating distinctive commercial space, unique residential opportunities, or community-serving facilities.
            </p>
            
            <div className="bg-white p-6 rounded-lg border-l-4 border-brand-green">
              <h3 className="font-bold text-brand-green-dark mb-4 text-xl">Our Historic Preservation Commitment</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-700 space-y-2">
                  <li>• Compliance with Secretary of Interior Standards</li>
                  <li>• Expert navigation of local review processes</li>
                  <li>• Specialized heritage trade partnerships</li>
                  <li>• Federal tax credit coordination</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>• Authentic material sourcing and replication</li>
                  <li>• Climate-appropriate conservation techniques</li>
                  <li>• Comprehensive project documentation</li>
                  <li>• Long-term preservation planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Start Your Historic Preservation Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Whether you're planning a comprehensive restoration, adaptive reuse, or preservation maintenance project, Florida Construction Specialists provides the expertise to honor Tampa's architectural heritage while meeting your contemporary needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

    </>
  );
}