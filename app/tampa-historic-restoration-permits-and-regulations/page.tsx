import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Tampa Historic Restoration Permits and Regulations",
  description: "Navigate Tampa's historic restoration permit process including COA requirements, building permits, SHPO review, and coordination of multiple regulatory approvals.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Historic Restoration Permits and Regulations", href: "/tampa-historic-restoration-permits-and-regulations/" },
];

const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
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
  },
  {
    "title": "Tampa's Historic Districts Restoration Rules",
    "href": "/tampas-historic-districts-restoration-rules/",
    "description": "Guidelines for restoration projects in Tampa's designated historic areas."
  }
];

const faqs = [
  {
    question: "Do I need both COA and building permits for historic restoration?",
    answer: "Generally yes. COA addresses historic preservation concerns (design appropriateness), while building permits address code compliance (structural, fire, electrical, etc.). These are separate reviews by different city departments. Both must be obtained before construction begins. Some minor work may be exempt from one or both requirements."
  },
  {
    question: "What happens if I start work without required approvals?",
    answer: "Work without required permits can result in stop-work orders, fines, and requirements to remove unauthorized work. For tax credit projects, beginning construction before Part 2 approval risks credit denial. Even after-the-fact approval may not be possible if work doesn't meet applicable standards. Obtaining proper approvals before construction protects against these risks."
  },
  {
    question: "How long does the entire permit process take?",
    answer: "Total time from project initiation to construction start typically ranges from 3-6 months for projects requiring both COA and tax credit review. Simple projects with only COA and building permit requirements may proceed faster. Complex projects, especially those requiring zoning variances or resolving code conflicts, may take longer. Early coordination and complete applications minimize delays."
  },
  {
    question: "Can I make changes during construction?",
    answer: "Changes during construction may require amended approvals. For COA projects, significant changes visible from exterior require amended approval. For tax credit projects, changes from approved Part 2 descriptions should be coordinated with SHPO before implementation. Minor changes may be acceptable; significant changes require formal amendment. Document all changes for Part 3 certification."
  },
  {
    question: "What if local and federal requirements conflict?",
    answer: "Conflicts occasionally arise between local design guidelines and Secretary of Interior Standards. Generally, tax credit requirements are inflexible—the Standards must be met. Local requirements may have more flexibility when applicants demonstrate that strict compliance would conflict with federal standards. Early identification and coordinated resolution prevents project delays."
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
            alt="Historic restoration permits"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Historic Restoration Permits and Regulations
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Comprehensive guide to navigating the permit and regulatory requirements for historic restoration projects in Tampa, from local approvals to federal tax credit certification.
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
              Historic restoration projects in Tampa navigate multiple regulatory frameworks that must be coordinated for successful project completion. Local historic preservation review, standard building permits, and—for projects seeking tax credits—state and federal preservation review all impose requirements that affect project design, documentation, and timeline.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists manages the permitting process as an integral part of our restoration services, ensuring that all required approvals are obtained in proper sequence and that work proceeds without regulatory complications. Our experience with Tampa's regulatory landscape enables efficient navigation that keeps projects on schedule.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Certificate of Appropriateness Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              Properties within Tampa's locally-designated historic districts or individually designated as local landmarks require Certificate of Appropriateness (COA) approval before undertaking visible exterior work. This preservation review ensures that proposed work complies with applicable design guidelines and maintains district character.
            </p>
            
            <p className="text-gray-600 mb-6">
              COA requirements apply in Ybor City (reviewed by the Barrio Latino Commission), Hyde Park, Seminole Heights, Tampa Heights, West Tampa, and other locally-designated areas. Individual landmarks outside these districts face similar review. Property owners should verify whether their property is subject to local historic preservation review before planning exterior modifications.
            </p>

            <p className="text-gray-600 mb-6">
              Application requirements typically include detailed project descriptions, architectural drawings showing existing and proposed conditions, material specifications, photographs documenting existing conditions and neighborhood context, and for larger projects, professional renderings or 3D visualizations. Complete applications receive faster review than those requiring supplemental submissions.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Building Permit Requirements
            </h2>
            <p className="text-gray-600 mb-6">
              Standard building permits apply to historic restoration just as they do to other construction work. The City of Tampa's building department reviews plans for structural adequacy, fire safety, electrical and mechanical systems, plumbing, and accessibility. These technical reviews occur independently of historic preservation review.
            </p>

            <p className="text-gray-600 mb-6">
              Historic buildings present unique building code challenges. Existing building provisions allow some flexibility for historic structures, recognizing that strict application of new construction standards may be impractical or inappropriate. However, life safety requirements—egress, fire protection, structural stability—remain essential regardless of historic status.
            </p>

            <p className="text-gray-600 mb-6">
              Coordination between preservation requirements and building codes requires care. Building officials may require changes that preservation standards would prohibit, or preservation staff may require approaches that complicate code compliance. Early identification of potential conflicts enables resolution before they become project obstacles.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              State Historic Preservation Office Review
            </h2>
            <p className="text-gray-600 mb-6">
              Projects seeking federal or state historic tax credits require review by the Florida Division of Historical Resources, which houses the State Historic Preservation Office (SHPO). SHPO review evaluates whether proposed work meets the Secretary of the Interior's Standards for Rehabilitation—the federal standards that govern tax credit eligibility.
            </p>

            <p className="text-gray-600 mb-6">
              The three-part tax credit application process includes Part 1 (Evaluation of Significance)—establishing that the building is listed on or eligible for the National Register of Historic Places, Part 2 (Description of Rehabilitation)—detailed description of proposed work and how it meets the Secretary of the Interior's Standards, and Part 3 (Request for Certification of Completed Work)—documentation that completed work matches approved Part 2 description.
            </p>

            <p className="text-gray-600 mb-6">
              Part 2 must be approved before construction begins. Working without Part 2 approval risks credit denial if reviewers determine that completed work doesn't meet the Standards. SHPO review typically requires 30-60 days; complex projects may require longer. Project schedules must account for these review timelines.
            </p>

            {/* Permits Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Tampa Historic Restoration Permit Summary</h3>
              <table className="min-w-full border border-gray-300">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Permit/Review</th>
                    <th className="px-4 py-2 text-left">Required For</th>
                    <th className="px-4 py-2 text-left">Typical Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr className="bg-white">
                    <td className="px-4 py-2">Certificate of Appropriateness</td>
                    <td className="px-4 py-2">Exterior work in historic districts</td>
                    <td className="px-4 py-2">2-8 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Building Permit</td>
                    <td className="px-4 py-2">All construction work</td>
                    <td className="px-4 py-2">2-6 weeks</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Tax Credit Part 1</td>
                    <td className="px-4 py-2">Properties not yet NR listed</td>
                    <td className="px-4 py-2">30-60 days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Tax Credit Part 2</td>
                    <td className="px-4 py-2">All tax credit projects</td>
                    <td className="px-4 py-2">30-90 days</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-2">Tax Credit Part 3</td>
                    <td className="px-4 py-2">After construction completion</td>
                    <td className="px-4 py-2">30-60 days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2">Zoning Variance (if needed)</td>
                    <td className="px-4 py-2">Nonconforming use/dimensions</td>
                    <td className="px-4 py-2">2-4 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Coordinating Multiple Review Processes
            </h2>
            <p className="text-gray-600 mb-6">
              Projects requiring both local COA approval and SHPO tax credit review must coordinate these parallel processes. While local and federal standards generally align, differences can create complications. Local review may impose requirements—specific materials, design details—that SHPO finds unnecessary or inappropriate, or vice versa.
            </p>

            <p className="text-gray-600 mb-6">
              Sequencing matters for project efficiency. COA approval should generally precede or accompany Part 2 tax credit submission, since NPS reviewers will question designs that haven't received local approval. Building permit review can proceed in parallel once design is sufficiently developed. Construction should not begin until both COA and Part 2 approval are secured.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists coordinates these parallel review processes, ensuring that applications are consistent, timelines are managed, and potential conflicts are identified and resolved early. Our relationships with local preservation staff and familiarity with SHPO expectations facilitate efficient reviews.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Special Permits and Reviews
            </h2>
            <p className="text-gray-600 mb-6">
              Depending on project specifics, additional permits and reviews may be required. Demolition permits for removal of any portion of a historic building require heightened justification in historic districts. Environmental permits may apply for properties affecting wetlands, waterways, or protected habitats. Health department permits apply to food service establishments.
            </p>

            <p className="text-gray-600 mb-6">
              Signage permits require both COA approval (in historic districts) and standard sign permits from the building department. Historic district sign guidelines typically restrict size, materials, illumination, and mounting methods to maintain district character while allowing effective business identification.
            </p>

            <p className="text-gray-600 mb-6">
              Alcohol beverage licenses, entertainment permits, and similar use-specific approvals may require multiple agency coordination. Projects in Ybor City's entertainment district face particular scrutiny regarding compatibility with the district's mix of entertainment venues, restaurants, and cultural attractions.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Documentation and Record Keeping
            </h2>
            <p className="text-gray-600 mb-6">
              Historic restoration projects generate substantial documentation that must be maintained for regulatory compliance and tax credit certification. Permit applications, approval letters, construction documents, change orders, and completion certificates all become part of the project record.
            </p>

            <p className="text-gray-600 mb-6">
              Tax credit projects require particular documentation rigor. Part 3 certification requires photographic evidence of completed work, comparison with Part 2 descriptions, and explanation of any changes from approved plans. Changes made during construction without SHPO approval may compromise credit certification.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists maintains comprehensive project documentation systems that support regulatory compliance, tax credit certification, and owner record-keeping needs. Our systematic approach ensures that required documentation is created, organized, and preserved throughout the project lifecycle.
            </p>

            {/* FAQ Section */}
            <div className="my-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800">Do I need both COA and building permits for historic restoration?</h4>
                  <p className="text-gray-600">Generally yes. COA addresses historic preservation concerns (design appropriateness), while building permits address code compliance (structural, fire, electrical, etc.). These are separate reviews by different city departments. Both must be obtained before construction begins. Some minor work may be exempt from one or both requirements.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What happens if I start work without required approvals?</h4>
                  <p className="text-gray-600">Work without required permits can result in stop-work orders, fines, and requirements to remove unauthorized work. For tax credit projects, beginning construction before Part 2 approval risks credit denial. Even after-the-fact approval may not be possible if work doesn't meet applicable standards. Obtaining proper approvals before construction protects against these risks.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">How long does the entire permit process take?</h4>
                  <p className="text-gray-600">Total time from project initiation to construction start typically ranges from 3-6 months for projects requiring both COA and tax credit review. Simple projects with only COA and building permit requirements may proceed faster. Complex projects, especially those requiring zoning variances or resolving code conflicts, may take longer. Early coordination and complete applications minimize delays.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">Can I make changes during construction?</h4>
                  <p className="text-gray-600">Changes during construction may require amended approvals. For COA projects, significant changes visible from exterior require amended approval. For tax credit projects, changes from approved Part 2 descriptions should be coordinated with SHPO before implementation. Minor changes may be acceptable; significant changes require formal amendment. Document all changes for Part 3 certification.</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800">What if local and federal requirements conflict?</h4>
                  <p className="text-gray-600">Conflicts occasionally arise between local design guidelines and Secretary of Interior Standards. Generally, tax credit requirements are inflexible—the Standards must be met. Local requirements may have more flexibility when applicants demonstrate that strict compliance would conflict with federal standards. Early identification and coordinated resolution prevents project delays.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Streamlined Permitting with Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists manages the complex permitting process as part of comprehensive restoration project services. Our experience with Tampa's regulatory requirements, relationships with review staff, and systematic approach to documentation enables efficient approvals that keep projects on schedule.
            </p>

            <p className="text-gray-600 mb-6">
              Contact us today to discuss permit requirements for your historic restoration project. We'll assess applicable requirements, develop a coordinated approval strategy, and manage the process from application through final certification.
            </p>

          </div>
        </div>
      </section>
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Historic Restoration Services"
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
            Contact Florida Construction Specialists today for expert permit management for your historic restoration project.
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
