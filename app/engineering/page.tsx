import Link from "next/link";
import type { Metadata } from "next";
import {
  ClipboardCheck,
  Phone,
  ArrowRight,
  Building2,
  Shield,
  Award,
  FileText,
  Users,
  CheckCircle,
  Calculator,
  HardHat,
  Search,
  Clock,
  Target
} from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO } from "@/lib/constants";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Engineering Coordination Services | Florida Construction Specialists",
  description: "Expert engineering coordination for construction projects. 43+ years experience, licensed contractor CBC1262722. Schedule consultation. Call (813) 420-7561.",
  keywords: [
    "engineering coordination tampa",
    "structural engineering coordination",
    "construction engineering services",
    "building assessment coordination",
    "SB4-D milestone inspection",
    "structural assessment coordination",
    "construction consulting engineering",
    "load calculation coordination",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Engineering Coordination", href: "/engineering/" },
];

const engineeringFaqs = [
  {
    question: "What is engineering coordination in construction?",
    answer: "Engineering coordination involves managing the interface between construction activities and licensed engineering services. Florida Construction Specialists coordinates with licensed structural engineers, civil engineers, and specialty consultants to ensure your project receives proper engineering analysis, documentation, and oversight. We handle the logistics, scheduling, and communication while the engineers provide their professional expertise."
  },
  {
    question: "Is Florida Construction Specialists a licensed engineering firm?",
    answer: "No, FCS is a licensed general contractor (CBC1262722), not an engineering firm. We coordinate with licensed Professional Engineers (PEs) who provide the actual engineering analysis, calculations, and sealed documents. Our role is to facilitate this coordination, ensure clear communication between all parties, and integrate engineering requirements into the construction process."
  },
  {
    question: "What types of engineering services do you coordinate?",
    answer: "We coordinate a wide range of engineering services including structural assessments, load calculations, hurricane damage evaluations, SB4-D milestone inspections for condominiums, foundation analysis, building envelope assessments, and construction engineering for complex projects. We work with licensed engineers who specialize in each discipline."
  },
  {
    question: "Why is engineering coordination important for construction projects?",
    answer: "Proper engineering coordination ensures that construction work is properly designed, documented, and executed to meet building codes and safety standards. It bridges the gap between engineering analysis and construction execution, prevents costly mistakes, ensures regulatory compliance, and provides documented protection for property owners and contractors alike."
  },
  {
    question: "What is a SB4-D milestone inspection and how do you help?",
    answer: "SB4-D requires Florida condominium buildings 3+ stories tall and 30+ years old to undergo milestone structural inspections by licensed engineers. FCS coordinates these inspections by scheduling the engineering assessment, facilitating access to all building areas, providing construction expertise to support the engineer's evaluation, and managing any resulting repair work."
  },
  {
    question: "How does engineering coordination work for hurricane damage assessment?",
    answer: "After hurricane damage, we coordinate with licensed structural engineers to assess the extent of damage to structural systems. The engineer provides a professional evaluation and report, while we provide construction expertise to support the assessment, develop repair scopes, and execute the necessary restoration work once engineering recommendations are documented."
  },
  {
    question: "What is the benefit of having a contractor coordinate engineering services?",
    answer: "A contractor who coordinates engineering brings construction expertise to the engineering process. We understand what engineers need to evaluate, can facilitate efficient site access, ask relevant construction questions, and translate engineering recommendations into actionable construction plans. This integration saves time, reduces miscommunication, and ensures better project outcomes."
  },
  {
    question: "Do you coordinate engineering for insurance claims?",
    answer: "Yes, engineering coordination is often essential for insurance restoration projects. We coordinate with licensed engineers to document structural damage, provide professional opinions on causation, and support certified estimates with engineering analysis. This engineering documentation strengthens claims and supports fair settlements."
  },
  {
    question: "What projects require engineering coordination?",
    answer: "Projects that typically require engineering coordination include SB4-D milestone inspections, hurricane and storm damage restoration, structural modifications or additions, balcony reconstruction, load-bearing wall removal, foundation issues, building envelope failures, and any construction requiring structural analysis or permit engineering."
  },
  {
    question: "How do I know if my project needs engineering services?",
    answer: "During our initial consultation, we assess your project's requirements and advise whether engineering coordination is needed. Generally, any project involving structural elements, building code compliance questions, insurance claims requiring damage causation opinions, or regulatory inspections like SB4-D will benefit from coordinated engineering services."
  },
];

const coordinationServices = [
  {
    name: "Structural Assessment Coordination",
    description: "We coordinate with licensed structural engineers for building evaluations, damage assessments, and structural analysis required for construction projects.",
    icon: Building2,
  },
  {
    name: "SB4-D Milestone Inspections",
    description: "Coordination of mandatory milestone structural inspections for Florida condominiums, including engineer scheduling, access facilitation, and repair management.",
    icon: ClipboardCheck,
  },
  {
    name: "Hurricane Damage Evaluations",
    description: "Facilitating comprehensive engineering assessments following storm damage to document structural impacts and support insurance restoration.",
    icon: Shield,
  },
  {
    name: "Load Calculation Coordination",
    description: "Managing engineering analysis for structural modifications, additions, and projects requiring load calculations and structural verification.",
    icon: Calculator,
  },
  {
    name: "Building Envelope Analysis",
    description: "Coordinating engineering evaluation of building envelopes, waterproofing systems, and exterior assemblies for performance assessment.",
    icon: Search,
  },
  {
    name: "Construction Engineering Support",
    description: "Integrating engineering requirements into construction planning, ensuring drawings, specifications, and execution align with engineering standards.",
    icon: FileText,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Project Assessment",
    description: "We evaluate your project requirements to determine what engineering services are needed. Our construction expertise helps identify the right engineering disciplines and scope of work for your specific situation.",
    icon: Target,
  },
  {
    step: "02",
    title: "Engineer Selection",
    description: "Based on project requirements, we coordinate with licensed Professional Engineers who specialize in the relevant disciplines. We maintain relationships with structural, civil, and specialty engineers throughout Tampa Bay.",
    icon: Users,
  },
  {
    step: "03",
    title: "Site Coordination",
    description: "We facilitate efficient engineering assessments by coordinating site access, providing relevant documentation, and supporting the engineer with construction knowledge and building history where available.",
    icon: HardHat,
  },
  {
    step: "04",
    title: "Documentation Management",
    description: "We ensure engineering reports, calculations, and sealed documents are properly received, distributed, and integrated into project documentation and permitting requirements.",
    icon: FileText,
  },
  {
    step: "05",
    title: "Construction Integration",
    description: "Engineering recommendations are translated into actionable construction plans. We develop scopes of work, obtain permits as needed, and prepare for execution of required repairs or modifications.",
    icon: ClipboardCheck,
  },
  {
    step: "06",
    title: "Execution & Verification",
    description: "We execute construction work per engineering specifications, coordinate required inspections, and ensure final documentation confirms compliance with engineering requirements.",
    icon: CheckCircle,
  },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function EngineeringCoordinationPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema service="Engineering Coordination" />
      <ServiceSchema
        serviceName="Engineering Coordination Services"
        serviceDescription="Expert coordination with licensed structural engineers for construction projects, SB4-D milestone inspections, hurricane damage assessments, and building evaluations throughout Tampa Bay."
        minPrice="10000"
      />
      <FAQSchema faqs={engineeringFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section - Professional Gray Theme */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Engineering Coordination Services in Tampa Bay
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Florida Construction Specialists coordinates with licensed Professional Engineers to provide the structural analysis, building evaluations, and engineering documentation your project requires. With 43+ years of construction experience, we bridge the gap between engineering expertise and construction execution.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm font-semibold">Experience</p>
                  <p className="text-xs text-gray-300">43+ Years</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm font-semibold">Licensed</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.licenseNumber}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm font-semibold">Bonding</p>
                  <p className="text-xs text-gray-300">$10M+ Capacity</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Building2 className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm font-semibold">Projects</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.projectsCompleted}+ Completed</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all text-center">
                  Schedule Consultation
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 font-heading">
                Request an Engineering Consultation
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your project and engineering needs. We will assess your requirements and coordinate the appropriate engineering services.
              </p>
              <HighLevelForm variant="commercial" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-heading">
              Bridging Engineering Expertise and Construction Excellence
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                Complex construction projects often require professional engineering analysis, from structural assessments and load calculations to building evaluations and compliance documentation. Florida Construction Specialists provides the coordination layer that ensures these engineering services integrate seamlessly with your construction project.
              </p>
              <p className="mb-6">
                Our role is not to perform engineering ourselves - that is the province of licensed Professional Engineers. Instead, we bring 43+ years of construction expertise to the coordination process. We understand what questions to ask, what access engineers need, and how to translate engineering recommendations into executable construction plans. This expertise makes the engineering process more efficient and the resulting construction more accurate.
              </p>
              <p className="mb-6">
                Whether you need a structural assessment following hurricane damage, coordination for mandatory SB4-D milestone inspections, engineering analysis for a renovation project, or documentation to support an insurance claim, FCS manages the entire process. We select appropriate engineering consultants, facilitate their work, ensure proper documentation, and execute any resulting construction - providing you with a single point of accountability.
              </p>
              <p>
                With over $10 million in bonding capacity and a track record including {BUSINESS_INFO.projectsCompleted}+ completed projects, Florida Construction Specialists has the capability to coordinate complex engineering requirements and execute large-scale construction. From SB4-D compliance for condominium associations to hurricane damage evaluations supporting million-dollar insurance claims, we bring the coordination expertise your project needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

<section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-heading">
              Engineering Coordination Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We coordinate with licensed engineers across multiple disciplines to support your construction project requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coordinationServices.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-heading">
              Our Engineering Coordination Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures engineering requirements are properly addressed and integrated into your construction project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="relative bg-gray-50 rounded-xl p-6">
                <div className="absolute -top-4 left-6 bg-gray-700 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step {item.step}
                </div>
                <div className="mt-4">
                  <item.icon className="w-10 h-10 text-gray-700 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Need Engineering Coordination for Your Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your engineering requirements. We will assess your project and coordinate the appropriate engineering services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all">
              Schedule Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Why Coordination Matters Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-heading">
                Why Professional Engineering Coordination Matters
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Regulatory Compliance</h3>
                    <p className="text-gray-600">Many construction projects require engineering documentation for permits, inspections, and compliance. Florida's SB4-D mandate requires milestone inspections by licensed engineers for qualifying condominium buildings. Proper coordination ensures you meet all regulatory requirements.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Insurance Documentation</h3>
                    <p className="text-gray-600">Engineering assessments provide professional documentation of damage causation, repair requirements, and code compliance. This documentation supports insurance claims and helps ensure fair settlements for property owners.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Construction Quality</h3>
                    <p className="text-gray-600">Engineering analysis ensures construction work is properly designed for the loads and conditions it will face. From structural modifications to waterproofing systems, engineering input helps prevent failures and ensures long-term performance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Single-Point Accountability</h3>
                    <p className="text-gray-600">When FCS coordinates engineering services, you have one team responsible for the entire process. We manage the engineering relationship, integrate findings into construction, and execute the work - eliminating finger-pointing and communication gaps.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-heading">Projects Requiring Engineering</h3>
              <div className="space-y-4">
                {[
                  "SB4-D Milestone Inspections (Condos 3+ stories, 30+ years)",
                  "Hurricane & Storm Damage Assessment",
                  "Structural Modifications & Additions",
                  "Balcony Reconstruction & Repair",
                  "Load-Bearing Wall Removal",
                  "Foundation Issues & Settlement",
                  "Building Envelope Failures",
                  "Insurance Claim Documentation",
                  "Permit Engineering Requirements",
                  "Post-Disaster Building Evaluations",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SB4-D Focus Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-heading">
                SB4-D Milestone Inspection Coordination
              </h2>
              <p className="text-xl text-gray-600">
                Florida's SB4-D legislation requires mandatory structural milestone inspections for condominium buildings. FCS coordinates the entire process.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">What We Coordinate</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Selection of licensed milestone inspection engineer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Scheduling and logistics for comprehensive building assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Access coordination for all building areas requiring inspection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Construction expertise to support engineering evaluation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Report review and repair scope development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Execution of required repairs per engineering recommendations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">SB4-D Requirements</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-600 mb-4">
                      Florida condominiums and cooperative buildings that are 3 or more stories and 30 or more years old must undergo milestone structural inspections by a licensed engineer or architect.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Buildings within 3 miles of the coastline must complete their initial milestone inspection by December 31 of the year the building reaches 25 years of age.
                    </p>
                    <p className="text-gray-600">
                      FCS helps condominium associations navigate these requirements efficiently, coordinating the inspection process and any resulting repair work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-heading">
                Engineering Coordination FAQ
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about engineering coordination for construction projects.
              </p>
            </div>

            <FAQ items={engineeringFaqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-heading">
              Related Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/commercial/" className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Commercial Construction
              </h3>
              <p className="text-gray-600 text-sm mb-4">Large-scale commercial projects from $500K to $25M+ throughout Tampa Bay.</p>
              <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            <Link href="/services/disaster-recovery/" className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Disaster Recovery
              </h3>
              <p className="text-gray-600 text-sm mb-4">Insurance restoration for hurricane, fire, and water damage with engineering documentation.</p>
              <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            <Link href="/building-consultants/" className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Building Consultants
              </h3>
              <p className="text-gray-600 text-sm mb-4">Expert construction consulting for project planning and owner representation.</p>
              <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            <Link href="/certified-estimates/" className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                Certified Estimates
              </h3>
              <p className="text-gray-600 text-sm mb-4">Accurate construction estimates for insurance claims and project planning.</p>
              <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gray-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Get Expert Engineering Coordination for Your Project
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Contact Florida Construction Specialists to discuss your engineering coordination needs. Whether you require SB4-D milestone inspections, hurricane damage assessments, or structural analysis for a construction project, we coordinate the engineering services you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-bold rounded-full hover:bg-gray-100 transition-all">
                  Contact Us Online
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-gray-400 mb-4">Trusted throughout Tampa Bay:</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <span>43+ Years Experience</span>
                  <span>License {BUSINESS_INFO.licenseNumber}</span>
                  <span>In-House Engineering</span>
                  <span>{BUSINESS_INFO.projectsCompleted}+ Projects</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-heading">
                Schedule Your Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Tell us about your project and engineering requirements.
              </p>
              <HighLevelForm variant="commercial" />
            </div>
          </div>
        </div>
      </section>
</>
  );
}
