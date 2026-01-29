import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Adaptive Reuse of Historic Buildings in Tampa | Expert Restoration Services",
  description: "Transform Tampa's historic structures through adaptive reuse. FCS specializes in Ybor City, Hyde Park & Tampa Heights preservation projects with federal tax credit expertise.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Adaptive Reuse of Historic Buildings in Tampa", href: "/adaptive-reuse-of-historic-buildings-in-tampa/" },
];


const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/historic-preservation/historic-preservation-large.webp"
            alt="Historic building restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Adaptive Reuse of Historic Buildings in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Transforming Tampa&apos;s architectural heritage into vibrant modern spaces while preserving the character that makes Ybor City, Hyde Park, and Tampa Heights unique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
              <p className="text-gray-600 mb-6">
                Adaptive reuse represents one of the most sophisticated approaches to commercial construction, requiring specialized expertise to transform historic buildings into functional modern spaces while maintaining their architectural integrity. In Tampa, where neighborhoods like Ybor City, Hyde Park, and Tampa Heights contain irreplaceable 19th and early 20th-century structures, adaptive reuse projects require contractors who understand both preservation standards and contemporary building requirements.
              </p>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists brings decades of experience to Tampa&apos;s most challenging adaptive reuse projects. From converting historic cigar factories into boutique office spaces to transforming century-old social clubs into modern event venues, our team navigates the complex intersection of historic preservation regulations, building codes, and client vision.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                What Is Adaptive Reuse in Historic Preservation?
              </h2>
              <p className="text-gray-600 mb-6">
                Adaptive reuse is the process of repurposing an existing historic building for a use different from its original design while maintaining its historic character. Unlike demolition and new construction, adaptive reuse preserves the embodied energy, materials, and cultural significance of historic structures while meeting contemporary functional needs.
              </p>
              
              <p className="text-gray-600 mb-6">
                In Tampa, common adaptive reuse projects include converting former cigar factories into residential lofts, transforming historic warehouses into restaurants and breweries, repurposing social clubs like the Italian Club and Centro Español for events and hospitality, and adapting early commercial buildings for modern office use. Each project must comply with the Secretary of the Interior&apos;s Standards for Rehabilitation—the federal benchmark that governs how historic properties can be modified while retaining their historic character.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Tampa&apos;s Premier Historic Districts for Adaptive Reuse
              </h2>
              
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Ybor City National Historic Landmark District
              </h3>
              <p className="text-gray-600 mb-6">
                Ybor City stands as Tampa&apos;s crown jewel of historic preservation. Designated a National Historic Landmark District in 1990, this neighborhood contains approximately 950 contributing historic structures dating from the 1880s through the 1930s. The district&apos;s brick streets, ornate social clubs, and industrial cigar factories present extraordinary adaptive reuse opportunities—but also require navigating the Barrio Latino Commission&apos;s design review process under Tampa City Code Chapter 27.
              </p>
              
              <p className="text-gray-600 mb-6">
                Notable adaptive reuse successes in Ybor City include the Centro Ybor complex, the transformation of the historic Sanchez y Haya Building (Tampa&apos;s first reinforced concrete structure, built in 1910), and numerous cigar factory conversions. The Italian Club, originally constructed in 1918, exemplifies how these grand social halls can be sensitively adapted for contemporary event and hospitality uses while maintaining their historic grandeur.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Hyde Park Historic District
              </h3>
              <p className="text-gray-600 mb-6">
                Hyde Park&apos;s tree-lined streets feature Tampa&apos;s finest collection of early 20th-century residential and commercial architecture. Listed on the National Register of Historic Places, Hyde Park presents adaptive reuse opportunities for converting historic homes into professional offices, boutique retail, and bed-and-breakfast establishments. Projects here require approval from Tampa&apos;s Architectural Review Commission.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Tampa Heights Historic District
              </h3>
              <p className="text-gray-600 mb-6">
                Tampa Heights, one of the city&apos;s oldest neighborhoods, has experienced significant revitalization through adaptive reuse. The district&apos;s mix of Victorian, Craftsman, and Mediterranean Revival structures offers diverse opportunities for commercial conversion, particularly along the Florida Avenue and Nebraska Avenue corridors.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                The Adaptive Reuse Process: What Property Owners Need to Know
              </h2>
              <p className="text-gray-600 mb-6">
                Successful adaptive reuse projects in Tampa follow a structured process that balances preservation requirements with development goals:
              </p>
              
              <p className="text-gray-600 mb-4"><strong>1. Historic Significance Assessment:</strong> Before beginning any adaptive reuse project, you must determine your building&apos;s historic status. Is it individually listed on the National Register? Is it a contributing structure within a historic district? Is it locally designated under Tampa&apos;s historic preservation ordinance? Each designation carries different regulatory requirements and incentive opportunities.</p>
              
              <p className="text-gray-600 mb-4"><strong>2. Feasibility Study:</strong> Our team conducts comprehensive assessments evaluating structural conditions, environmental concerns (including asbestos and lead paint common in older buildings), code compliance pathways, and preliminary cost estimates. This phase identifies potential obstacles before significant investment.</p>
              
              <p className="text-gray-600 mb-4"><strong>3. Design Development:</strong> Working with preservation architects, we develop designs that satisfy the Secretary of the Interior&apos;s Standards while meeting your functional requirements. This often involves creative solutions for integrating modern HVAC, electrical, plumbing, and accessibility systems without compromising historic fabric.</p>
              
              <p className="text-gray-600 mb-4"><strong>4. Regulatory Approvals:</strong> Tampa&apos;s historic districts require Certificate of Appropriateness approval from the relevant review commission—the Barrio Latino Commission for Ybor City, the Architectural Review Commission for other local districts, or the Tampa Historic Preservation Commission for individually designated properties.</p>
              
              <p className="text-gray-600 mb-6"><strong>5. Tax Credit Applications:</strong> For projects seeking the 20% Federal Historic Preservation Tax Credit, we coordinate the three-part application process with the Florida Division of Historical Resources (SHPO) and the National Park Service, ensuring rehabilitation work meets certification requirements.</p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Adaptive Reuse Project Costs in Tampa
              </h2>
              <p className="text-gray-600 mb-6">
                Adaptive reuse costs vary significantly based on building condition, scope of work, and preservation requirements. The following ranges reflect typical Tampa-area commercial adaptive reuse projects:
              </p>

              {/* Cost Table */}
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-brand-green-dark text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Project Component</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Cost Range (per sq ft)</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Structural Assessment & Engineering</td>
                      <td className="border border-gray-300 px-4 py-3">$2 - $5</td>
                      <td className="border border-gray-300 px-4 py-3">Required for all adaptive reuse projects</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Hazardous Material Abatement</td>
                      <td className="border border-gray-300 px-4 py-3">$15 - $50</td>
                      <td className="border border-gray-300 px-4 py-3">Asbestos, lead paint removal common in pre-1978 buildings</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Structural Rehabilitation</td>
                      <td className="border border-gray-300 px-4 py-3">$75 - $200</td>
                      <td className="border border-gray-300 px-4 py-3">Foundation, masonry, roof structure repairs</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">MEP Systems (New Installation)</td>
                      <td className="border border-gray-300 px-4 py-3">$50 - $125</td>
                      <td className="border border-gray-300 px-4 py-3">HVAC, electrical, plumbing modernization</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Historic Facade Restoration</td>
                      <td className="border border-gray-300 px-4 py-3">$40 - $150</td>
                      <td className="border border-gray-300 px-4 py-3">Masonry cleaning, window restoration, ornamental repair</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Interior Buildout (Commercial)</td>
                      <td className="border border-gray-300 px-4 py-3">$100 - $250</td>
                      <td className="border border-gray-300 px-4 py-3">Office, retail, or hospitality fit-out</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-bold">Complete Adaptive Reuse (Total)</td>
                      <td className="border border-gray-300 px-4 py-3 font-bold">$200 - $450</td>
                      <td className="border border-gray-300 px-4 py-3">Full scope including all components above</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 mb-6">
                While adaptive reuse projects typically cost 15-25% more than new construction on a per-square-foot basis, the <Link href="/services/historic-restoration/historic-tax-credits/" className="text-brand-green-dark hover:underline">20% Federal Historic Tax Credit</Link> can significantly offset these costs for qualified rehabilitation expenditures. Combined with potential state and local incentives, adaptive reuse often delivers superior return on investment compared to new construction.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Federal and State Tax Credits for Adaptive Reuse
              </h2>
              <p className="text-gray-600 mb-6">
                The Federal Historic Preservation Tax Credit program provides a 20% income tax credit for qualified rehabilitation expenditures on certified historic structures used for income-producing purposes. To qualify, your project must:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Involve a certified historic structure (listed on the National Register or contributing to a registered historic district)</li>
                <li>Be used for income-producing purposes (commercial, rental residential, industrial)</li>
                <li>Meet the Secretary of the Interior&apos;s Standards for Rehabilitation</li>
                <li>Involve qualified rehabilitation expenditures exceeding the adjusted basis of the building</li>
              </ul>
              
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists has successfully guided dozens of Tampa-area projects through the three-part federal tax credit application process, working directly with the Florida Division of Historical Resources (SHPO) and the National Park Service to ensure certification approval. Our <Link href="/services/historic-restoration/shpo-compliance/" className="text-brand-green-dark hover:underline">SHPO compliance services</Link> streamline this complex process.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Tampa&apos;s Regulatory Framework for Adaptive Reuse
              </h2>
              <p className="text-gray-600 mb-6">
                Tampa City Code Chapter 27 establishes the regulatory framework for historic preservation and adaptive reuse. Key provisions include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Certificate of Appropriateness (COA):</strong> Required for exterior alterations, new construction, and demolition within historic districts</li>
                <li><strong>Barrio Latino Commission:</strong> Reviews all projects within the Ybor City Historic District</li>
                <li><strong>Architectural Review Commission:</strong> Reviews projects in other locally designated historic districts</li>
                <li><strong>Historic Preservation Commission:</strong> Reviews individually designated historic properties</li>
                <li><strong>Compliance Penalties:</strong> Recent amendments (24-4) allow fines up to $15,000 for irreparable damage to contributing historic structures</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Choose Florida Construction Specialists for Adaptive Reuse
              </h2>
              <p className="text-gray-600 mb-6">
                Adaptive reuse demands a contractor who understands that historic buildings require fundamentally different approaches than new construction. Florida Construction Specialists offers:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">Preservation Expertise:</strong>
                    <p className="text-gray-600">Deep understanding of Secretary of Interior Standards and Tampa&apos;s local preservation requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">Tax Credit Navigation:</strong>
                    <p className="text-gray-600">Proven track record guiding projects through federal and state tax credit programs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">Skilled Craftsmen:</strong>
                    <p className="text-gray-600">Access to tradespeople experienced in traditional building methods and materials</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">Regulatory Relationships:</strong>
                    <p className="text-gray-600">Established working relationships with Tampa&apos;s preservation review commissions</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Frequently Asked Questions About Adaptive Reuse in Tampa
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">How long does a typical adaptive reuse project take in Tampa?</h3>
                  <p className="text-gray-600">Commercial adaptive reuse projects typically require 12-24 months from initial assessment through completion. The timeline includes 2-4 months for feasibility study and design, 2-6 months for regulatory approvals and tax credit applications, and 8-14 months for construction. Complex projects involving significant structural work or federal tax credits may extend longer.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">Can any historic building be adaptively reused?</h3>
                  <p className="text-gray-600">Most historic buildings can be adapted for new uses, but feasibility depends on structural condition, environmental factors, zoning compatibility, and economic viability. Some buildings may require significant structural intervention, while others may have contamination issues that affect development costs. A professional feasibility study is essential before committing to any adaptive reuse project.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">What happens if my project doesn&apos;t meet Secretary of Interior Standards?</h3>
                  <p className="text-gray-600">Projects that fail to meet the Standards will not receive federal tax credit certification. Additionally, work that damages character-defining features of a locally designated historic property may result in fines up to $15,000 under Tampa&apos;s amended ordinance and could require costly remediation. Working with an experienced preservation contractor from the outset prevents these issues.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">Are there alternatives to the 20% federal tax credit?</h3>
                  <p className="text-gray-600">Yes. While the 20% credit is the most significant incentive, Tampa-area projects may also benefit from local property tax abatements, historic preservation grants, New Market Tax Credits in qualifying census tracts, and various economic development incentives. Non-income-producing properties may qualify for charitable contribution deductions through preservation easements.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">How do I know if my building qualifies as historic?</h3>
                  <p className="text-gray-600">Buildings may be designated at the local, state, or national level. The Florida Master Site File maintains records of surveyed historic properties. Tampa&apos;s Land Development Coordination division can confirm local designations. For National Register status, check the National Park Service database or consult with the Florida Division of Historical Resources.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Start Your Adaptive Reuse Project Today
              </h2>
              <p className="text-gray-600 mb-6">
                Tampa&apos;s historic buildings represent irreplaceable resources that, through thoughtful adaptive reuse, can serve new generations while maintaining their connection to our community&apos;s heritage. Whether you&apos;re considering converting a Ybor City cigar factory, a Hyde Park commercial building, or a Tampa Heights warehouse, Florida Construction Specialists provides the expertise to transform your vision into reality.
              </p>
              
              <p className="text-gray-600 mb-6">
                <Link href="/contact/" className="text-brand-green-dark hover:underline font-semibold">Contact us today</Link> for a complimentary consultation to discuss your adaptive reuse project. Our team will assess your property, outline regulatory requirements, identify available incentives, and provide preliminary cost estimates—giving you the information you need to make informed decisions about your historic property investment.
              </p>

          </div>
        </div>
      </section>

      {/* CTA */}
      
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

<section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today for a free consultation on your adaptive reuse project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
