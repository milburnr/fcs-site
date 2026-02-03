import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Historic Restoration Challenges Tampa | Solutions",
  description: "Navigate Tampa historic restoration challenges: regulatory compliance, hazardous materials, structural issues, code requirements. FCS provides expert solutions for complex projects.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Challenges in Historic Restoration Projects in Tampa", href: "/challenges-in-historic-restoration-projects-in-tampa/" },
];


const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "How can I minimize surprises during historic restoration?",
    answer: "Invest in comprehensive pre-construction investigation including structural assessment, environmental surveys, and exploratory demolition in concealed areas. While this increases upfront costs, it reduces costly changes during construction and enables more accurate budgeting. Buildings with significant deferred maintenance or unknown construction history warrant more extensive investigation."
  },
  {
    question: "What if regulatory requirements conflict with each other?",
    answer: "Conflicts between building codes and preservation standards are common. The Florida Building Code - Existing Building provides flexibility for historic structures, and most preservation review authorities understand the need for code compliance. Working with authorities early to identify potential conflicts and develop acceptable solutions prevents delays. Documentation showing that preservation-sensitive alternatives were explored strengthens requests for code modifications."
  },
  {
    question: "How long should I expect a historic restoration project to take?",
    answer: "Most commercial historic restoration projects require 18-36 months from initial planning through completion. This includes 3-6 months for assessment and design, 3-6 months for regulatory approvals and permitting, and 12-24 months for construction. Projects seeking federal tax credits add 3-6 months for the Part 1/Part 2 application review process. Complex projects involving structural intervention or extensive environmental remediation may extend longer."
  },
  {
    question: "Is it worth pursuing federal historic tax credits given the complexity?",
    answer: "For qualified projects, the 20% federal tax credit can significantly offset the higher costs of historic restoration. The credit applies to qualified rehabilitation expenditures—not just the historic-specific work but most construction costs on certified rehabilitation projects. For a $2 million rehabilitation, the credit could exceed $400,000. Our team manages the application process to maximize credit value while minimizing administrative burden."
  },
  {
    question: "What happens if we discover issues after construction begins?",
    answer: "Discovery of unforeseen conditions during construction is common in historic restoration. Effective project management includes protocols for documenting conditions, evaluating options, and making timely decisions. For tax credit projects, significant scope changes require consultation with SHPO to ensure continued compliance. Adequate contingency budgeting provides financial flexibility to address discoveries without derailing the project."
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/historic-preservation/historic-preservation-display.webp"
            alt="Historic building restoration challenges"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Challenges in Historic Restoration Projects in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Historic restoration projects in Tampa present unique challenges—from regulatory compliance and hazardous materials to structural deficiencies and material sourcing. Here&apos;s how experienced contractors overcome them.
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
                Historic restoration projects in Tampa demand a level of expertise that goes far beyond conventional construction. From navigating the multi-layered regulatory environment to managing unexpected discoveries behind century-old walls, these projects test even experienced contractors. Understanding these challenges—and having strategies to address them—is essential for protecting your investment and achieving successful outcomes.
              </p>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists has encountered and overcome virtually every challenge that Tampa&apos;s historic buildings can present. Our experience with projects throughout Ybor City, Hyde Park, Tampa Heights, and other historic districts has equipped us with the knowledge and relationships needed to navigate complex restoration projects successfully.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Regulatory and Compliance Challenges
              </h2>
              
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Navigating Multiple Review Authorities
              </h3>
              <p className="text-gray-600 mb-6">
                Tampa&apos;s historic properties often fall under multiple jurisdictions, each with its own review process and standards. A project in Ybor City, for example, may require approval from:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Barrio Latino Commission:</strong> Reviews all exterior alterations and new construction within the Ybor City Historic District</li>
                <li><strong>Tampa Historic Preservation Commission:</strong> Reviews individually designated historic properties</li>
                <li><strong>Florida Division of Historical Resources (SHPO):</strong> Reviews projects seeking federal historic tax credits</li>
                <li><strong>National Park Service:</strong> Certifies federal tax credit applications</li>
                <li><strong>City of Tampa Building Department:</strong> Reviews all projects for building code compliance</li>
              </ul>

              <p className="text-gray-600 mb-6">
                Each authority applies different standards and operates on different timelines. Coordinating approvals requires understanding each review process, anticipating potential conflicts between requirements, and sequencing applications appropriately. Our <Link href="/services/historic-restoration/shpo-compliance/" className="text-brand-green-dark hover:underline">SHPO compliance services</Link> streamline this complex coordination.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Secretary of the Interior&apos;s Standards Compliance
              </h3>
              <p className="text-gray-600 mb-6">
                Projects seeking federal historic tax credits must comply with the Secretary of the Interior&apos;s Standards for Rehabilitation—ten principles governing appropriate treatment of historic properties. These standards can conflict with owner preferences, modern building practices, and even local code requirements. Common compliance challenges include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Designing compatible additions that are differentiated from but don&apos;t detract from historic fabric</li>
                <li>Integrating modern mechanical systems without damaging character-defining features</li>
                <li>Balancing energy efficiency improvements with preservation of historic windows</li>
                <li>Finding code-compliant solutions for egress, accessibility, and life safety that preserve historic character</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Building Code Compliance in Historic Structures
              </h3>
              <p className="text-gray-600 mb-6">
                Historic buildings were constructed under building codes—or no codes at all—that differ dramatically from current requirements. The Florida Building Code provides some flexibility for historic structures through the Florida Building Code - Existing Building provisions, but achieving compliance often requires creative solutions. Common code challenges include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Means of egress:</strong> Historic buildings often have narrow stairs, limited exits, and corridor widths that don&apos;t meet current standards</li>
                <li><strong>ADA accessibility:</strong> Integrating ramps, elevators, and accessible restrooms while preserving historic character</li>
                <li><strong>Structural capacity:</strong> Historic floor systems may not meet current load requirements for proposed uses</li>
                <li><strong>Fire protection:</strong> Sprinkler systems, fire-rated assemblies, and compartmentalization in buildings with exposed historic elements</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Environmental and Hazardous Material Challenges
              </h2>
              
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Asbestos-Containing Materials
              </h3>
              <p className="text-gray-600 mb-6">
                Buildings constructed before 1980 commonly contain asbestos in insulation, flooring, roofing, plaster, and mechanical systems. Federal EPA regulations (40 CFR Part 61, Subpart M—the Asbestos NESHAP) and Florida Building Code Section 105.9 require asbestos surveys and proper abatement before renovation or demolition work. Key requirements include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Building permits must include an asbestos notification statement</li>
                <li>Licensed asbestos inspectors must survey the building before work begins</li>
                <li>Abatement must be performed by licensed asbestos contractors</li>
                <li>Proper notification to EPA and disposal at approved facilities</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Lead-Based Paint
              </h3>
              <p className="text-gray-600 mb-6">
                Virtually all buildings constructed before 1978 contain lead-based paint. EPA&apos;s Renovation, Repair, and Painting (RRP) Rule requires certified renovators and specific work practices when disturbing lead paint in pre-1978 buildings. Historic restoration projects must address lead paint on:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Interior and exterior wood trim and millwork</li>
                <li>Window sashes and frames</li>
                <li>Doors and door frames</li>
                <li>Plaster walls and ceilings</li>
                <li>Metal components including radiators and piping</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Other Environmental Concerns
              </h3>
              <p className="text-gray-600 mb-6">
                Tampa&apos;s historic buildings may also present challenges from mold (particularly in Florida&apos;s humid climate), underground storage tanks, contaminated soil from historic industrial uses, and PCBs in older electrical equipment. Comprehensive environmental assessments early in the project help identify these issues before they become costly surprises.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Structural and Material Challenges
              </h2>
              
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Hidden Structural Deficiencies
              </h3>
              <p className="text-gray-600 mb-6">
                Historic buildings often conceal structural problems behind finished surfaces. Common issues discovered during restoration include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Termite damage:</strong> Tampa&apos;s climate makes wood structures particularly vulnerable to subterranean termites and drywood termites</li>
                <li><strong>Foundation deterioration:</strong> Brick piers, rubble foundations, and early concrete may have deteriorated significantly</li>
                <li><strong>Roof structure damage:</strong> Water infiltration, biological decay, and structural movement affect historic roof framing</li>
                <li><strong>Masonry deterioration:</strong> Spalling brick, failed mortar joints, and corroded embedded metals in historic masonry walls</li>
                <li><strong>Previous modifications:</strong> Structural elements removed or compromised by earlier renovations</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Historic Material Sourcing
              </h3>
              <p className="text-gray-600 mb-6">
                The Secretary of the Interior&apos;s Standards require replacing deteriorated historic materials with matching materials when repair is not feasible. Finding period-appropriate replacement materials presents significant challenges:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Historic brick:</strong> Color, texture, and size variations require sourcing from salvage dealers or custom manufacturers</li>
                <li><strong>Clay roof tiles:</strong> Spanish barrel tiles and other historic profiles may require specialized suppliers or custom production</li>
                <li><strong>Heart pine lumber:</strong> Old-growth heart pine for structural and finish applications is increasingly scarce</li>
                <li><strong>Historic window glass:</strong> Wavy glass, seeded glass, and other historic glazing types</li>
                <li><strong>Decorative elements:</strong> Terra cotta ornament, cast stone details, and ornamental plaster</li>
              </ul>

              <p className="text-gray-600 mb-6">
                Our <Link href="/services/historic-restoration/material-sourcing/" className="text-brand-green-dark hover:underline">historic material sourcing services</Link> tap into networks of salvage dealers, specialty manufacturers, and craftspeople to locate or fabricate appropriate replacement materials.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Cost Considerations for Common Challenges
              </h2>
              <p className="text-gray-600 mb-6">
                Understanding the cost implications of common challenges helps develop realistic budgets. The following table reflects typical Tampa-area costs for addressing these issues:
              </p>

              {/* Cost Table */}
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-brand-green-dark text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Challenge</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Typical Cost Range</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Timeline Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Asbestos Survey & Testing</td>
                      <td className="border border-gray-300 px-4 py-3">$3,000 - $15,000</td>
                      <td className="border border-gray-300 px-4 py-3">2-4 weeks</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Asbestos Abatement (per sq ft)</td>
                      <td className="border border-gray-300 px-4 py-3">$15 - $50</td>
                      <td className="border border-gray-300 px-4 py-3">2-8 weeks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Lead Paint Abatement (per sq ft)</td>
                      <td className="border border-gray-300 px-4 py-3">$8 - $25</td>
                      <td className="border border-gray-300 px-4 py-3">1-4 weeks</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Structural Engineering Assessment</td>
                      <td className="border border-gray-300 px-4 py-3">$5,000 - $25,000</td>
                      <td className="border border-gray-300 px-4 py-3">2-6 weeks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Foundation Repair/Underpinning</td>
                      <td className="border border-gray-300 px-4 py-3">$50,000 - $300,000</td>
                      <td className="border border-gray-300 px-4 py-3">4-12 weeks</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Historic Window Restoration (per window)</td>
                      <td className="border border-gray-300 px-4 py-3">$800 - $2,500</td>
                      <td className="border border-gray-300 px-4 py-3">Varies</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Custom Historic Brick Matching</td>
                      <td className="border border-gray-300 px-4 py-3">$3 - $12 per brick</td>
                      <td className="border border-gray-300 px-4 py-3">8-16 weeks lead time</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Tax Credit Application Management</td>
                      <td className="border border-gray-300 px-4 py-3">$15,000 - $50,000</td>
                      <td className="border border-gray-300 px-4 py-3">3-6 months review</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Local Historic Commission Review</td>
                      <td className="border border-gray-300 px-4 py-3">$500 - $5,000 (fees + documentation)</td>
                      <td className="border border-gray-300 px-4 py-3">1-3 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 mb-6">
                We recommend budgeting a 15-25% contingency for historic restoration projects to address unforeseen conditions discovered during construction. Projects with comprehensive pre-construction investigation typically experience fewer surprises and tighter contingency utilization.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Project Management Challenges
              </h2>
              
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Scheduling Complexity
              </h3>
              <p className="text-gray-600 mb-6">
                Historic restoration projects require longer schedules than comparable new construction due to:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Extended regulatory review periods</li>
                <li>Specialized trade availability</li>
                <li>Long lead times for custom materials</li>
                <li>Methodical investigation and documentation requirements</li>
                <li>Weather sensitivity of certain restoration work</li>
                <li>Coordination with ongoing building operations (for occupied buildings)</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Skilled Labor Availability
              </h3>
              <p className="text-gray-600 mb-6">
                Quality historic restoration requires craftspeople with specialized skills that are increasingly rare. Finding qualified tradespeople for historic masonry, plasterwork, wood restoration, and other specialized disciplines requires maintaining strong relationships within the preservation community. Florida Construction Specialists has cultivated a network of skilled craftspeople experienced in traditional building methods.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Strategies for Overcoming Challenges
              </h2>
              <p className="text-gray-600 mb-6">
                Successful historic restoration projects employ proactive strategies to identify and address challenges before they impact budget and schedule:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">Comprehensive Pre-Construction Investigation:</strong>
                    <p className="text-gray-600">Invest in thorough assessment before design development to identify structural, environmental, and material conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">Early Regulatory Engagement:</strong>
                    <p className="text-gray-600">Meet with review authorities during conceptual design to understand concerns and requirements before significant design investment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">Phased Approval Strategy:</strong>
                    <p className="text-gray-600">Sequence regulatory approvals to identify conflicts early and maintain project momentum</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">Experienced Project Team:</strong>
                    <p className="text-gray-600">Assemble architects, engineers, and contractors with demonstrated historic preservation expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">Appropriate Contingencies:</strong>
                    <p className="text-gray-600">Budget realistically for unknowns with contingencies appropriate to building condition and scope</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">Material Lead Time Management:</strong>
                    <p className="text-gray-600">Identify specialty materials early and initiate procurement before construction begins</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">How can I minimize surprises during historic restoration?</h3>
                  <p className="text-gray-600">Invest in comprehensive pre-construction investigation including structural assessment, environmental surveys, and exploratory demolition in concealed areas. While this increases upfront costs, it reduces costly changes during construction and enables more accurate budgeting. Buildings with significant deferred maintenance or unknown construction history warrant more extensive investigation.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">What if regulatory requirements conflict with each other?</h3>
                  <p className="text-gray-600">Conflicts between building codes and preservation standards are common. The Florida Building Code - Existing Building provides flexibility for historic structures, and most preservation review authorities understand the need for code compliance. Working with authorities early to identify potential conflicts and develop acceptable solutions prevents delays. Documentation showing that preservation-sensitive alternatives were explored strengthens requests for code modifications.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">How long should I expect a historic restoration project to take?</h3>
                  <p className="text-gray-600">Most commercial historic restoration projects require 18-36 months from initial planning through completion. This includes 3-6 months for assessment and design, 3-6 months for regulatory approvals and permitting, and 12-24 months for construction. Projects seeking federal tax credits add 3-6 months for the Part 1/Part 2 application review process. Complex projects involving structural intervention or extensive environmental remediation may extend longer.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">Is it worth pursuing federal historic tax credits given the complexity?</h3>
                  <p className="text-gray-600">For qualified projects, the 20% federal tax credit can significantly offset the higher costs of historic restoration. The credit applies to qualified rehabilitation expenditures—not just the historic-specific work but most construction costs on certified rehabilitation projects. For a $2 million rehabilitation, the credit could exceed $400,000. Our team manages the application process to maximize credit value while minimizing administrative burden.</p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h3 className="font-bold text-brand-green-dark mb-2">What happens if we discover issues after construction begins?</h3>
                  <p className="text-gray-600">Discovery of unforeseen conditions during construction is common in historic restoration. Effective project management includes protocols for documenting conditions, evaluating options, and making timely decisions. For tax credit projects, significant scope changes require consultation with SHPO to ensure continued compliance. Adequate contingency budgeting provides financial flexibility to address discoveries without derailing the project.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Partner with Tampa&apos;s Historic Restoration Experts
              </h2>
              <p className="text-gray-600 mb-6">
                The challenges of historic restoration require a contractor who has encountered them before—and developed effective strategies for overcoming them. Florida Construction Specialists brings this experience to every project, from initial assessment through final completion and tax credit certification.
              </p>
              
              <p className="text-gray-600 mb-6">
                <Link href="/contact/" className="text-brand-green-dark hover:underline font-semibold">Contact us today</Link> to discuss your historic restoration project. We&apos;ll provide an honest assessment of the challenges your building presents and outline strategies for addressing them successfully.
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
            Contact Florida Construction Specialists today for expert guidance on your historic restoration challenges.
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
