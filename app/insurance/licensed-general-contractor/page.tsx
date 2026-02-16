import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
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
  description: "Explore licensed general contractor insurance restoration from Florida Construction Specialists. Licensed CBC serving Tampa Bay since 1983. Contact us today.",
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
    answer: "We specialize in large loss restoration, typically $250,000 and above for residential and $500,000+ for commercial projects. This includes substantial fire damage, hurricane damage, water damage, and other major insurance claims.",
  },
  {
    question: "Do you have an in-house engineer?",
    answer: "Yes, FCS has both an in-house engineer and architectural draftsman. This allows us to assess structural damage, develop repair plans, and create necessary documentation without relying on third parties—speeding up the claims and restoration process.",
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
    title: "In-House Team",
    description: "Engineer, architectural draftsman, and certified estimators on staff.",
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
      <LocalBusinessSchema service="Licensed General Contractor" />
      <ServiceSchema
        serviceName="Licensed General Contractor Services"
        serviceDescription="Florida-licensed general contractor (CBC1262722) for insurance restoration. Always prime contractor with 40+ years experience in large loss commercial and residential restoration."
        minPrice="250000"
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
              <li>High-value residential: $250,000+</li>
            </ul>
            <p>
              Our 40+ years of experience includes 300+ completed projects totaling more than $25 million in 
              restoration value throughout Tampa Bay and Florida.
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
