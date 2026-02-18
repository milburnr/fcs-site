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
  Users,
  FileText,
  Building2,
  ClipboardCheck
} from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance/building-consultant/' },
  title: "Building Consultant | Insurance Claims Expert | FCS Tampa",
  description: "Building Consultant Insurance Claims Expert across Tampa Bay. Full-service licensed CBC with 40+ years of commercial and residential experience. Read more.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance", href: "/insurance/" },
  { name: "Building Consultant", href: "/insurance/building-consultant/" },
];

const faqs = [
  {
    question: "What does a building consultant do for insurance claims?",
    answer: "A building consultant provides expert assessment of property damage, determines the full scope of necessary repairs, prepares detailed documentation for insurance claims, and represents the property owner's interests throughout the claims process. We ensure no damage is overlooked and that repair estimates reflect true restoration costs.",
  },
  {
    question: "When should I hire a building consultant?",
    answer: "Hire a building consultant immediately after significant property damage, before accepting any insurance settlement. Early involvement ensures proper documentation, prevents missed damage, and strengthens your claim. We're particularly valuable for large loss claims ($250K+), disputed claims, or complex commercial properties.",
  },
  {
    question: "How is a building consultant different from a public adjuster?",
    answer: "Building consultants focus on construction expertise—assessing damage, determining repair methods, and estimating costs. Public adjusters focus on policy interpretation and claim negotiation. FCS provides both construction expertise and claims management, offering comprehensive representation without the typical public adjuster percentage fees.",
  },
  {
    question: "Do you work with insurance companies?",
    answer: "Yes, we work directly with insurance adjusters, engineers, and carriers. However, our client is always the property owner. We provide professional documentation and communication that facilitates fair claim resolution while protecting your interests.",
  },
  {
    question: "What types of damage do you assess?",
    answer: "We assess all types of property damage including fire, water, wind, hurricane, hail, flood, mold, structural damage, and more. Our dedicated engineering partner evaluates structural concerns, while our estimators document all damage with Xactimate-certified estimates.",
  },
  {
    question: "Can you help with denied or underpaid claims?",
    answer: "Absolutely. We frequently help property owners whose claims were denied or underpaid. Our detailed assessments often reveal damage the original adjuster missed, and our professional documentation supports appeals, appraisals, or litigation if necessary.",
  },
];

const services = [
  {
    icon: ClipboardCheck,
    title: "Damage Assessment",
    description: "Comprehensive evaluation of all property damage, including hidden damage that adjusters often miss.",
  },
  {
    icon: FileText,
    title: "Scope Development",
    description: "Detailed repair scope that captures every element needed for proper restoration.",
  },
  {
    icon: Building2,
    title: "Cost Estimation",
    description: "Xactimate-certified estimates that reflect true repair costs in the Tampa Bay market.",
  },
  {
    icon: Users,
    title: "Owner Representation",
    description: "We represent your interests in all communications with insurance companies.",
  },
];

const relatedLinks = [
  { href: "/insurance/", label: "Insurance Services Overview" },
  { href: "/insurance/certified-estimating/", label: "Certified Estimating" },
  { href: "/insurance/appraisal-arbitration/", label: "Appraisal & Arbitration" },
  { href: "/expert-witness/", label: "Expert Witness" },
];

export default function BuildingConsultantPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Building Consultant Services"
        serviceDescription="Expert building consultant services for insurance claims in Tampa Bay. Professional damage assessment, scope development, and property owner representation with 40+ years experience."
        minPrice="1000"
      serviceCategories={["Building Assessment","Damage Documentation","Repair Specifications","Code Compliance Review"]}
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
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-blue-200 font-medium">Property Owner Advocate</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building Consultant
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Expert construction consulting for insurance claims. We assess damage, develop repair scopes, 
              and represent property owners' interests throughout the claims process.
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

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Building Consultant Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting services that protect your interests and maximize your insurance recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-brand-green-dark" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
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
            <h2>Why Property Owners Need a Building Consultant</h2>
            <p>
              When significant property damage occurs, insurance companies deploy teams of adjusters, engineers, and experts to evaluate your claim. These professionals work for the insurance company, not for you. Their job is to settle claims efficiently—which often means quickly and for as little as possible.
            </p>
            <p>
              Without equal expertise on your side, you may accept a settlement that falls far short of true repair costs. You may not realize until repairs begin that the insurance estimate missed critical damage, used outdated pricing, or excluded code-required upgrades that Florida law requires insurers to cover.
            </p>
            <p>
              Florida Construction Specialists serves as your building consultant, bringing over 40 years of construction experience to your insurance claim. Our dedicated engineering partner, certified estimators, and project managers work exclusively for you—ensuring every element of damage is documented and properly valued.
            </p>

            <h3>What a Building Consultant Does for Your Claim</h3>
            <p>
              A building consultant provides comprehensive support throughout the insurance claims process:
            </p>
            <ul>
              <li><strong>Damage Assessment:</strong> Thorough inspection of your property to identify all damage—including hidden damage in wall cavities, above ceilings, and in areas the adjuster's quick walkthrough missed.</li>
              <li><strong>Repair Scope Development:</strong> Detailed determination of every repair needed to restore your property to pre-loss condition, including materials, methods, and labor requirements.</li>
              <li><strong>Cost Estimation:</strong> Professional Xactimate estimates using current Tampa Bay market pricing—not the outdated national averages many insurance adjusters rely on.</li>
              <li><strong>Documentation:</strong> Comprehensive photographic evidence, written reports, and supporting materials that substantiate your claim.</li>
              <li><strong>Owner Representation:</strong> Professional communication with adjusters, engineers, and insurance representatives on your behalf.</li>
              <li><strong>Claim Negotiation Support:</strong> Expert guidance through the settlement process, including supplemental claims for additional damage discovered during repairs.</li>
            </ul>

            <h3>Building Consultant vs. Public Adjuster: Understanding the Difference</h3>
            <p>
              Property owners often confuse building consultants with public adjusters. While both help policyholders with insurance claims, they serve different functions:
            </p>
            <ul>
              <li><strong>Public Adjusters</strong> focus on policy interpretation, claim negotiation, and documentation review. They're licensed to negotiate directly with insurance companies. Most charge 10-20% of the claim settlement.</li>
              <li><strong>Building Consultants</strong> bring construction expertise—understanding how buildings are built, how they fail, and what repairs actually cost. FCS combines this construction knowledge with claims management capabilities.</li>
            </ul>
            <p>
              Florida Construction Specialists offers both: the construction expertise of a building consultant and the claims advocacy typically associated with public adjusters—without the percentage-based fees that public adjusters charge. This makes our services particularly valuable for large loss claims where percentage fees would be substantial.
            </p>

            <h3>The FCS Building Consultant Advantage</h3>
            <p>
              What sets FCS apart from other consulting options:
            </p>
            <ul>
              <li><strong>Direct Engineering Access:</strong> Our dedicated engineering partner provides structural assessments without the delays and costs of coordinating separate engineering firms. This is particularly important for claims involving structural damage, foundation issues, or building stability concerns.</li>
              <li><strong>Construction Background:</strong> Our estimates reflect real construction costs because we actually build and restore properties. We know what repairs cost in Tampa Bay because we perform them daily.</li>
              <li><strong>Xactimate Certification:</strong> We prepare estimates in the same software format insurance companies use, eliminating translation issues and ensuring our documentation is readily comparable to the adjuster's estimate.</li>
              <li><strong>End-to-End Capability:</strong> As a licensed general contractor, FCS can handle both the consulting work and the actual restoration. This continuity ensures the repair scope we develop translates directly into quality restoration work.</li>
              <li><strong>Large Loss Experience:</strong> We specialize in substantial claims ranging from $225,000 to $45 million. This experience means we understand the complexities of major property damage that smaller contractors may never encounter.</li>
            </ul>

            <h3>When to Hire a Building Consultant</h3>
            <p>
              The ideal time to engage a building consultant is immediately after significant property damage—before the insurance adjuster arrives if possible. Early involvement provides several advantages:
            </p>
            <ul>
              <li><strong>Proper Documentation:</strong> We can photograph and document conditions before any cleanup or temporary repairs alter the scene.</li>
              <li><strong>Scope Control:</strong> We ensure the initial claim captures all damage, reducing the need for supplemental claims later.</li>
              <li><strong>Expert Presence:</strong> Having construction expertise present during the adjuster's inspection often results in more thorough initial estimates.</li>
            </ul>
            <p>
              That said, it's never too late to engage a building consultant. We regularly help property owners whose initial claims were denied, significantly underpaid, or are stalled in disputes. Our assessment often reveals damage the original adjuster missed, and our documentation supports appeals, appraisals, or litigation as needed.
            </p>

            <h3>Types of Claims We Support</h3>
            <p>
              FCS provides building consultant services for all types of property damage:
            </p>
            <ul>
              <li><strong>Hurricane and Wind Damage:</strong> Roof damage, structural impacts, water intrusion, and debris damage from tropical storms and hurricanes.</li>
              <li><strong>Water Damage:</strong> Pipe failures, appliance leaks, roof leaks, and flooding—including hidden damage and secondary mold concerns.</li>
              <li><strong>Fire and Smoke Damage:</strong> Direct fire damage, smoke permeation, and water damage from firefighting efforts.</li>
              <li><strong>Hail Damage:</strong> Roof impacts, siding damage, and mechanical equipment damage from hailstorms.</li>
              <li><strong>Flood Damage:</strong> Rising water damage requiring specialized flood insurance expertise.</li>
              <li><strong>Structural Damage:</strong> Foundation issues, settling, and structural failures requiring engineering assessment.</li>
              <li><strong>Vehicle Impact:</strong> Damage from vehicles striking buildings.</li>
              <li><strong>Vandalism:</strong> Intentional damage requiring comprehensive repair.</li>
            </ul>

            <h3>Commercial Property Focus</h3>
            <p>
              While we serve both residential and commercial property owners, our particular expertise lies in commercial properties:
            </p>
            <ul>
              <li>Office buildings and professional complexes</li>
              <li>Retail centers and shopping plazas</li>
              <li>Industrial facilities and warehouses</li>
              <li>Multi-family residential (apartments, condominiums)</li>
              <li>Hospitality properties (hotels, restaurants)</li>
              <li>Healthcare facilities and medical offices</li>
              <li>Educational institutions</li>
              <li>Houses of worship</li>
            </ul>
            <p>
              Commercial claims involve complexities that residential claims don't—business interruption, compliance with commercial building codes, ADA accessibility requirements, and specialized systems (HVAC, fire suppression, security). Our commercial construction background ensures these elements are properly addressed.
            </p>

            <h3>Tampa Bay Building Consultant Services</h3>
            <p>
              Florida Construction Specialists provides building consultant services throughout the Tampa Bay region, including Tampa, St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, and surrounding communities in Hillsborough, Pinellas, Pasco, Polk, and Manatee counties.
            </p>
            <p>
              If your property has suffered significant damage, don't navigate the insurance process alone. Contact FCS for expert building consultant services that protect your interests and ensure fair claim resolution.
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
            Need a Building Consultant?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don't navigate your insurance claim alone. Contact FCS for expert building consulting services.
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
