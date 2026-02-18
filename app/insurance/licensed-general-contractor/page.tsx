import type { Metadata } from "next";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import {
  CheckCircle,
  Shield,
  Award,
  Phone,
  Building2,
  FileText,
  Users,
  HardHat
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance/licensed-general-contractor/' },
  title: "Licensed General Contractor | Insurance Restoration | FCS Tampa",
  description: "Explore licensed general contractor insurance restoration from Florida Construction Specialists. Licensed CBC serving Tampa Bay since 1982. Contact us today.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance", href: "/insurance/" },
  { name: "Licensed General Contractor", href: "/insurance/licensed-general-contractor/" },
];

const faqs = [
  {
    question: "What does it mean that you're always the prime contractor?",
    answer: "As the prime contractor, FCS holds the direct contract with the property owner and takes full responsibility for the project. We're never a subcontractor working under another company. This means single-point accountability, direct communication, and complete control over quality and timeline—critical factors for insurance restoration.",
  },
  {
    question: "What is your Florida contractor license number?",
    answer: "FCS holds Florida Certified Building Contractor license CBC1262722. This state-level license authorizes us to perform any type of construction project throughout Florida, including commercial, residential, and restoration work of any value.",
  },
  {
    question: "How long have you been doing insurance restoration?",
    answer: "Florida Construction Specialists is the merger of Florida Restoration Team and Shamblin Construction, companies that have operated in Florida since 1982. Our leadership team has 40+ years of experience in large loss insurance restoration, with over 300 completed projects totaling more than $25 million.",
  },
  {
    question: "Do you work directly with insurance companies?",
    answer: "Yes, we work directly with insurance adjusters, engineers, and carriers throughout the restoration process. However, our contract and allegiance is always with the property owner. We facilitate professional communication while protecting your interests.",
  },
  {
    question: "What size projects do you handle?",
    answer: "We specialize in large loss restoration, typically $500,000 and above. This includes substantial fire damage, hurricane damage, water damage, and other major insurance claims across commercial properties, condominium associations, and high-value residential estates.",
  },
  {
    question: "Do you have direct access to structural engineers?",
    answer: "Yes, FCS has a dedicated engineering partner and architectural draftsman. This direct access allows us to assess structural damage, develop repair plans, and create necessary documentation without the delays of coordinating separate firms—speeding up the claims and restoration process.",
  },
];

const qualifications = [
  {
    icon: Award,
    title: "CBC1262722",
    description: "Florida Certified General Contractor license authorizing statewide construction.",
  },
  {
    icon: Building2,
    title: "40+ Years",
    description: "Experience in large loss insurance restoration throughout Florida.",
  },
  {
    icon: Shield,
    title: "Prime Contractor",
    description: "Always the prime—never a subcontractor. Single-point accountability.",
  },
  {
    icon: Users,
    title: "Integrated Team",
    description: "Dedicated engineering partner, architectural draftsman, and certified estimators.",
  },
];

const relatedLinks = [
  { href: "/insurance/", label: "Insurance Services Overview" },
  { href: "/insurance/building-consultant/", label: "Building Consultant" },
  { href: "/insurance/certified-estimating/", label: "Certified Estimating" },
  { href: "/about/", label: "About FCS" },
];

export default function LicensedGeneralContractorPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Licensed General Contractor Services"
        serviceDescription="Florida-licensed general contractor (CBC1262722) for insurance restoration. Always prime contractor with 40+ years experience in large loss commercial and residential restoration."
        minPrice="250000"
      serviceCategories={["Licensed Contracting","Permit Management","Code Compliance","Quality Assurance"]}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-blue-400" />
              <span className="text-blue-200 font-medium">CBC1262722 | Always Prime Contractor</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Licensed General Contractor
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Florida-licensed and fully insured. 40+ years of experience in large loss insurance restoration. 
              We're always the prime contractor—never a subcontractor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-white/30"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Qualifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The credentials and experience that make FCS the right choice for insurance restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-7 h-7 text-brand-green-dark" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Why Prime Contractor Status Matters</h2>
            <p>
              In insurance restoration, the contractor structure directly impacts outcomes. When you hire FCS, 
              you're hiring the company that will actually perform and manage your restoration—not a middleman 
              who will subcontract the work.
            </p>

            <h3>Benefits of Working with the Prime Contractor</h3>
            <ul>
              <li><strong>Single Point of Accountability:</strong> One contract, one responsible party, no finger-pointing</li>
              <li><strong>Direct Communication:</strong> You talk directly to decision-makers, not intermediaries</li>
              <li><strong>Quality Control:</strong> We manage every aspect of your project to our standards</li>
              <li><strong>Timeline Control:</strong> No waiting on subcontractor availability</li>
              <li><strong>Cost Efficiency:</strong> No markup layers between you and the actual work</li>
            </ul>

            <h2>Our License and Insurance</h2>
            <p>
              FCS holds Florida Certified General Contractor license <strong>CBC1262722</strong>, issued by the 
              Florida Department of Business and Professional Regulation. This state-level certification authorizes 
              us to perform any type of construction project throughout Florida.
            </p>
            <p>
              We maintain comprehensive insurance coverage including general liability, workers' compensation, 
              and professional liability—protecting you throughout the restoration process.
            </p>

            <h2>Large Loss Specialists</h2>
            <p>
              We focus on substantial insurance claims where our expertise makes the greatest difference:
            </p>
            <ul>
              <li>Commercial properties: $500,000+</li>
              <li>Multi-family buildings: $500,000+</li>
              <li>High-value residential: $500,000+</li>
            </ul>
            <p>
              Our 40+ years of experience includes 300+ completed projects totaling more than $25 million in
              restoration value throughout Tampa Bay and Florida.
            </p>

            <h2>Bonding Capacity and Financial Accountability</h2>
            <p>
              Large loss insurance restoration projects require a contractor with the financial standing to guarantee completion. FCS's bonding capacity supports projects exceeding $10 million, providing insurance carriers the assurance that the contractor can complete the full scope of work without financial risk. This bonding capacity is a critical qualification that separates licensed general contractors from smaller firms—carriers will not approve payment schedules on multi-million dollar restorations to contractors who cannot demonstrate the financial stability to see the project through.
            </p>
            <p>
              For property owners and HOA boards, bonding capacity translates directly to project security. On a $2 million condominium re-roofing project or a $5 million commercial building restoration, the performance bond ensures that the work will be completed to the contract scope regardless of circumstances. This protection is particularly important during Florida's hurricane season, when demand for restoration contractors surges and under-capitalized firms regularly fail mid-project.
            </p>

            <h2>Scope That Requires Licensed General Contractor Authority</h2>
            <p>
              Many large loss restoration projects involve work that only a licensed general contractor can legally perform in Florida. Unlicensed or specialty-only contractors cannot pull permits for structural modifications, coordinate load-bearing wall reconstruction, manage multi-trade restoration sequencing, or ensure code upgrade compliance across disciplines. FCS handles the full range of licensed GC scope:
            </p>
            <ul>
              <li><strong>Structural modifications and load-bearing wall reconstruction</strong> requiring engineering review and sealed drawings</li>
              <li><strong>Multi-trade coordination</strong> across roofing, mechanical, electrical, plumbing, fire suppression, and interior trades—all under a single contract and permit set</li>
              <li><strong>Code upgrade compliance</strong> where the Florida Building Code requires improvements beyond simple in-kind replacement, including hurricane-resistance upgrades, accessibility modifications, and energy code compliance</li>
              <li><strong>Complex phasing plans</strong> for occupied buildings where restoration must proceed while tenants or businesses continue to operate</li>
            </ul>
            <p>
              On a $500,000+ structural restoration requiring engineering review, or a $1–5 million multi-trade commercial restoration project, the difference between a licensed general contractor and a specialty contractor is not just legal compliance—it is the difference between a coordinated, code-compliant restoration and a fragmented process that invites delays, disputes, and failed inspections.
            </p>

            <h2>Subcontractor Management for Large Losses</h2>
            <p>
              Insurance carriers sometimes attempt to parcel large loss projects across multiple separate contractors—one for roofing, another for interiors, a third for mechanical systems. This approach creates coordination gaps, schedule conflicts, and accountability disputes that ultimately delay completion and increase costs. As prime contractor, FCS manages all trades under one contract. Our project managers coordinate every subcontractor, sequence every phase, and maintain a single schedule that the carrier, property owner, and building department can all track. The result is faster completion, cleaner inspections, and a single point of accountability from mobilization through certificate of completion.
            </p>
            <p>
              Consider a $3 million hurricane restoration on a 150-unit condominium complex. The project requires roofing, structural steel repair, window and sliding door replacement, stucco and waterproofing, interior drywall and paint, flooring, mechanical system repair, fire alarm restoration, and elevator modernization. Without a licensed general contractor managing every trade under a single permit set and schedule, the property owner faces months of coordination delays, duplicated general conditions costs, and finger-pointing between contractors when inspection failures occur. FCS eliminates that complexity by serving as the single prime contractor with direct accountability for scope, schedule, quality, and budget across every discipline.
            </p>

            <h2>Insurance Carrier Communication and Documentation</h2>
            <p>
              Large loss claims require ongoing communication with the insurance carrier throughout the restoration process. FCS maintains detailed project documentation—daily logs, progress photographs, material submittals, inspection reports, and change order records—that satisfies both the carrier's reporting requirements and the property owner's need for transparency. Our project managers produce weekly status reports that carriers can use to authorize progress payments, and our closeout documentation package ensures the final payment release proceeds without delays or disputes. This level of documentation is standard on every FCS project, whether the restoration scope is $500,000 or $10 million.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Licensed General Contractor?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact FCS for your insurance restoration project. Always the prime contractor.
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <HighLevelForm variant="commercial" />
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <InternalLinks title="Related Services" links={relatedLinks} />
        </div>
      </section>
    </>
  );
}
