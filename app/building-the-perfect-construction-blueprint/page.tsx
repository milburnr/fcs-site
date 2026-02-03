import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, FileText, Ruler, Building2, AlertTriangle, Target, Lightbulb } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, ArticleSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Building the Perfect Construction Blueprint",
  description: "Master the art of construction blueprint development. Learn architectural design principles, structural engineering requirements, and site analysis techniques for Florida commercial projects.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Building the Perfect Construction Blueprint", href: "/building-the-perfect-construction-blueprint/" },
];

const internalLinks = [
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/crafting-the-ideal-commercial-blueprint-in-tampa-florida/", label: "Tampa Blueprint Guide" },
  { href: "/commercial-building-design-services-in-tampa/", label: "Commercial Design Services" },
  { href: "/pre-construction-services-tampa/", label: "Pre-Construction Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "The Essential Duties of a Construction Manager",
    "href": "/the-essential-duties-of-a-construction-manager-in-florida/",
    "description": "Understanding the construction manager's role in successful project delivery."
  },
  {
    "title": "CPM Scheduling to Prevent Delays",
    "href": "/cpm-scheduling-prevent-delays/",
    "description": "Using critical path method scheduling to keep projects on track."
  },
  {
    "title": "Avoid Commercial Construction Delays",
    "href": "/avoid-commercial-construction-delays-in-florida/",
    "description": "Common causes of delays and strategies to prevent them."
  },
  {
    "title": "The Stages of Construction Project Management",
    "href": "/the-stages-of-construction-project-management/",
    "description": "From preconstruction through closeout - managing each phase effectively."
  }
];

const blueprintElements = [
  {
    icon: FileText,
    title: "Clear Documentation",
    description: "Every dimension, specification, and detail must be documented precisely. Ambiguity leads to RFIs, delays, and cost overruns during construction.",
  },
  {
    icon: Ruler,
    title: "Accurate Scaling",
    description: "Drawings at appropriate scales (1/8\", 1/4\", full-size details) ensure contractors can accurately interpret spatial relationships and measurements.",
  },
  {
    icon: Building2,
    title: "Complete Coordination",
    description: "Architectural, structural, and MEP drawings must be coordinated to prevent conflicts between building systems during construction.",
  },
  {
    icon: Target,
    title: "Code Compliance",
    description: "Every element must comply with Florida Building Code, ADA requirements, fire codes, and local ordinances to ensure permit approval.",
  },
];

const commonMistakes = [
  {
    mistake: "Incomplete Specifications",
    consequence: "Contractors make assumptions or submit RFIs, causing delays and potential cost increases",
    solution: "Include detailed specifications for all materials, finishes, and installation methods",
  },
  {
    mistake: "Poor Drawing Coordination",
    consequence: "MEP systems conflict with structure, requiring expensive field modifications",
    solution: "Use BIM coordination meetings and clash detection before finalizing documents",
  },
  {
    mistake: "Ignoring Site Conditions",
    consequence: "Foundation issues, drainage problems, or utility conflicts discovered during construction",
    solution: "Commission thorough geotechnical and topographic surveys during design",
  },
  {
    mistake: "Undersized Systems",
    consequence: "HVAC, electrical, or plumbing systems inadequate for actual loads",
    solution: "Perform accurate load calculations with safety factors for Florida's climate",
  },
  {
    mistake: "Missing Details",
    consequence: "Contractors improvise solutions that may not meet code or design intent",
    solution: "Provide enlarged details for all complex conditions and transitions",
  },
];

const costFactors = [
  { factor: "Project Size", small: "Higher $/SF", medium: "Moderate $/SF", large: "Lower $/SF economies of scale" },
  { factor: "Complexity", small: "Simple shell", medium: "Standard buildout", large: "Custom/specialty" },
  { factor: "Site Conditions", small: "Flat, no issues", medium: "Some challenges", large: "Complex remediation" },
  { factor: "Timeline", small: "Standard pace", medium: "Accelerated", large: "Fast-track premium" },
  { factor: "Typical Design Fee", small: "5-7% of construction", medium: "7-9% of construction", large: "9-12% of construction" },
];

const faqs = [
  {
    question: "What's included in a complete commercial blueprint package?",
    answer: "A complete package includes: architectural drawings (floor plans, elevations, sections, details), structural drawings (foundation, framing, connections), MEP drawings (mechanical, electrical, plumbing, fire protection), civil drawings (site plan, grading, utilities), and specifications. The number of sheets depends on project complexity—typically 50-200+ sheets for commercial projects."
  },
  {
    question: "How does design-build improve blueprint quality?",
    answer: "When architects and builders work together from the start, blueprints benefit from construction expertise during design. The builder identifies constructability issues, value engineering opportunities, and potential coordination problems before documents are finalized. This collaborative approach produces more buildable documents with fewer change orders."
  },
  {
    question: "What software is used for modern construction blueprints?",
    answer: "Most commercial projects now use Building Information Modeling (BIM) software like Revit or ArchiCAD rather than traditional 2D CAD. BIM creates a 3D model that generates coordinated drawings, performs clash detection between systems, and provides quantity takeoffs for estimating. This technology significantly reduces documentation errors."
  },
  {
    question: "How do I know if my blueprints are permit-ready?",
    answer: "Permit-ready blueprints include: complete code analysis, structural engineer's sealed calculations, energy code compliance documentation, fire protection plans, accessibility (ADA) compliance details, and all required signatures. Experienced design teams know exactly what Hillsborough County and other Tampa Bay jurisdictions require."
  },
  {
    question: "What causes blueprint revisions and how can they be minimized?",
    answer: "Revisions typically result from: owner scope changes, permitting authority comments, value engineering decisions, or errors discovered during construction. Minimize revisions by defining scope clearly at project start, involving all stakeholders in design reviews, and using experienced design-build teams who catch issues early."
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ArticleSchema
        headline="Building the Perfect Construction Blueprint"
        description="Master the art of construction blueprint development for Florida commercial projects."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Professional construction blueprint development"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Building the Perfect Construction Blueprint
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Insights from Florida's leading design-build specialists on creating construction documents that translate vision into buildable reality—on time and on budget.
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Foundation of Every Successful Commercial Project
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-6">
                A construction blueprint is the universal language between designers and builders. When executed perfectly, it communicates every detail needed to construct a building exactly as envisioned. When flawed, it becomes a source of confusion, conflict, and cost overruns that can derail even well-funded projects.
              </p>
              <p className="text-gray-600 mb-6">
                At Florida Construction Specialists, we've built our reputation on producing construction documents that contractors love to work from. Our blueprints are complete, coordinated, and constructable—meaning they anticipate real-world building conditions and provide clear direction for every trade. This attention to documentation quality is why our projects consistently finish on schedule with minimal change orders.
              </p>
              <p className="text-gray-600 mb-6">
                The "perfect" blueprint isn't about artistic elegance—it's about communicating construction intent with precision and clarity. A beautiful rendering means nothing if the underlying construction documents don't specify how to actually build it. This guide explores what separates adequate blueprints from exceptional ones, and why that difference matters for your commercial construction project.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're developing an office building in downtown Tampa, a medical facility in Clearwater, or a retail center in Lakeland, these principles apply. Understanding what makes blueprints work helps you evaluate design teams, set expectations appropriately, and ultimately get better results from your construction investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Elements */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Four Pillars of Blueprint Excellence
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Every great construction blueprint shares these fundamental characteristics that enable smooth construction execution.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blueprintElements.map((element, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <element.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">{element.title}</h3>
                <p className="text-gray-600">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Design Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Architectural Design Considerations for Florida
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Florida's unique climate, regulatory environment, and market conditions require architectural approaches that differ from other regions. The perfect blueprint for a commercial building in Tampa Bay must address these Florida-specific considerations from the earliest design phases.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Climate-Responsive Design</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Building orientation to minimize solar heat gain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Deep overhangs and shading devices for energy efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">High-performance glazing with low SHGC ratings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Cool roof specifications to reduce cooling loads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Moisture management details for humid conditions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Storm Resistance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Impact-resistant windows or hurricane shutters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Enhanced roof attachment details for high winds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Continuous load path engineering from roof to foundation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Waterproofing details for wind-driven rain penetration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Emergency backup power for critical systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Engineering */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Structural Engineering for Florida Commercial Buildings
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Structural drawings form the skeleton of your blueprint package. In Florida, these documents must address challenges that don't exist in most other states—from extreme wind loads to problematic soil conditions prevalent throughout Tampa Bay.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6 font-heading">Foundation Considerations for Tampa Bay</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Soil Conditions</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Tampa Bay's geology varies from stable limestone to problematic sandy soils and high water tables. Geotechnical investigations are essential to specify appropriate foundation systems.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Spread footings for stable soils</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Deep foundations for poor bearing capacity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Sinkhole remediation when required</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Wind Load Design</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Commercial buildings in Tampa must be designed for ultimate wind speeds of 150+ mph. This affects every structural connection from foundation to roof.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Lateral force resisting systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Component and cladding pressures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Roof uplift resistance calculations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Common Blueprint Mistakes (And How to Avoid Them)
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              These documentation errors cause the majority of construction delays and cost overruns. Experienced design-build teams prevent them proactively.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Mistake</th>
                    <th className="px-6 py-4 text-left font-heading">Consequence</th>
                    <th className="px-6 py-4 text-left font-heading">Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {commonMistakes.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.mistake}</td>
                      <td className="px-6 py-4 text-red-600">{row.consequence}</td>
                      <td className="px-6 py-4 text-brand-green">{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Site Analysis */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Site Analysis: The Foundation of Great Blueprints
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Before pen touches paper (or cursor touches CAD), thorough site analysis must inform every design decision. In Tampa Bay, this analysis is particularly critical due to variable soil conditions, flood zones, and environmental considerations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <Lightbulb className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Geotechnical Survey</h3>
                <p className="text-gray-600 text-sm">
                  Soil borings reveal bearing capacity, water table depth, and potential sinkhole activity. This data drives foundation design and can significantly impact project cost.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <Lightbulb className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Topographic Survey</h3>
                <p className="text-gray-600 text-sm">
                  Accurate elevation data ensures proper drainage design, ADA accessibility, and coordination with existing utilities. Critical for flood zone compliance.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <Lightbulb className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">Environmental Assessment</h3>
                <p className="text-gray-600 text-sm">
                  Identifies wetlands, protected species, and contamination issues. Tampa Bay's environmental regulations require careful documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What's included in a complete commercial blueprint package?
                </h3>
                <p className="text-gray-600">
                  A complete package includes: architectural drawings (floor plans, elevations, sections, details), structural drawings (foundation, framing, connections), MEP drawings (mechanical, electrical, plumbing, fire protection), civil drawings (site plan, grading, utilities), and specifications. The number of sheets depends on project complexity—typically 50-200+ sheets for commercial projects.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How does design-build improve blueprint quality?
                </h3>
                <p className="text-gray-600">
                  When architects and builders work together from the start, blueprints benefit from construction expertise during design. The builder identifies constructability issues, value engineering opportunities, and potential coordination problems before documents are finalized. This collaborative approach produces more buildable documents with fewer change orders.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What software is used for modern construction blueprints?
                </h3>
                <p className="text-gray-600">
                  Most commercial projects now use Building Information Modeling (BIM) software like Revit or ArchiCAD rather than traditional 2D CAD. BIM creates a 3D model that generates coordinated drawings, performs clash detection between systems, and provides quantity takeoffs for estimating. This technology significantly reduces documentation errors.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  How do I know if my blueprints are permit-ready?
                </h3>
                <p className="text-gray-600">
                  Permit-ready blueprints include: complete code analysis, structural engineer's sealed calculations, energy code compliance documentation, fire protection plans, accessibility (ADA) compliance details, and all required signatures. Experienced design teams know exactly what Hillsborough County and other Tampa Bay jurisdictions require.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  What causes blueprint revisions and how can they be minimized?
                </h3>
                <p className="text-gray-600">
                  Revisions typically result from: owner scope changes, permitting authority comments, value engineering decisions, or errors discovered during construction. Minimize revisions by defining scope clearly at project start, involving all stakeholders in design reviews, and using experienced design-build teams who catch issues early.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready for Blueprint Excellence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our design-build approach delivers construction documents that contractors can build from efficiently. Let's discuss your commercial project.
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
