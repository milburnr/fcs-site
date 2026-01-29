import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight, CheckCircle, Building2, Shield, Award, Clock, Stethoscope, FileCheck, HeartPulse } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Medical Construction Tampa | Healthcare Facility Builder | FCS",
  description: "Medical and healthcare construction in Tampa Bay. Clinics, surgical centers, medical offices, urgent care. AHCA compliance, infection control, medical gas systems. Call (813) 420-7561.",
  keywords: ["medical construction tampa", "healthcare facility construction florida", "medical office builder", "surgical center construction", "AHCA compliance contractor"],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/services/commercial/" },
  { name: "Medical Construction", href: "/services/commercial/medical-construction/" },
];

const facilityTypes = [
  {
    title: "Medical Office Buildings",
    description: "Purpose-built physician practices, specialty clinics, and multi-tenant medical office buildings with proper infrastructure for healthcare delivery.",
  },
  {
    title: "Ambulatory Surgery Centers",
    description: "Licensed outpatient surgical facilities meeting AHCA requirements for operating rooms, recovery areas, sterilization, and medical gas systems.",
  },
  {
    title: "Urgent Care Centers",
    description: "Walk-in medical facilities designed for efficient patient flow, diagnostic imaging integration, and appropriate treatment room configurations.",
  },
  {
    title: "Diagnostic Imaging Centers",
    description: "Specialized construction for MRI, CT, X-ray, and imaging equipment including shielding, structural support, and HVAC requirements.",
  },
  {
    title: "Specialty Clinics",
    description: "Dialysis centers, infusion centers, physical therapy facilities, and other specialty healthcare environments with unique operational needs.",
  },
  {
    title: "Dental Facilities",
    description: "General and specialty dental practices including oral surgery centers with medical gas, vacuum systems, and sterilization areas.",
  },
];

const faqs = [
  {
    question: "What medical construction regulations apply in Florida?",
    answer: "Florida medical construction must comply with AHCA (Agency for Health Care Administration) regulations, Florida Building Code, NFPA 101 Life Safety Code, and facility-specific requirements based on licensure type. Ambulatory surgery centers, hospitals, and certain clinics require AHCA plan review and inspection. We navigate these regulatory requirements and coordinate all necessary approvals before and during construction.",
  },
  {
    question: "Do you handle AHCA licensing requirements?",
    answer: "We work closely with healthcare clients and their licensing consultants to ensure construction meets AHCA requirements. This includes coordinating AHCA plan reviews, scheduling required inspections, and ensuring all construction details meet licensure standards. While clients maintain responsibility for their license applications, we ensure the built environment supports successful licensure.",
  },
  {
    question: "What experience do you have with medical gas systems?",
    answer: "We have extensive experience with medical gas systems including oxygen, nitrous oxide, medical air, vacuum, and waste anesthetic gas disposal (WAGD). Our projects include surgical centers, dental facilities, and specialty clinics requiring medical gas piping. We coordinate with certified medical gas installers and ensure all testing and certification requirements are met.",
  },
  {
    question: "How do you address infection control during construction?",
    answer: "Healthcare construction requires rigorous infection control measures, especially in occupied facilities. We implement ICRA (Infection Control Risk Assessment) protocols, negative air pressure containment, HEPA filtration, and proper barrier construction. For projects in or adjacent to patient care areas, we coordinate with infection control staff and follow facility-specific protocols.",
  },
  {
    question: "Can you build around active medical operations?",
    answer: "Yes, we regularly complete medical construction in occupied facilities. This requires careful phasing, noise and vibration management, infection control measures, and coordination with clinical operations. We schedule disruptive work outside patient care hours when possible and maintain strict protocols to protect patient safety and clinical workflows.",
  },
  {
    question: "What healthcare sectors do you serve?",
    answer: "We serve diverse healthcare sectors including: physician group practices, ambulatory surgery centers, urgent care, diagnostic imaging, dialysis, physical therapy, dental and oral surgery, veterinary, behavioral health, and medical office buildings. Each sector has unique requirements we understand from 20+ years of healthcare construction experience.",
  },
  {
    question: "How do you handle specialized equipment installation?",
    answer: "Medical equipment installation requires advance planning for structural support, electrical capacity, HVAC, shielding (for imaging), and utility connections. We coordinate directly with equipment vendors during design to ensure infrastructure meets manufacturer specifications. For imaging equipment, we also coordinate shielding requirements with medical physicists.",
  },
  {
    question: "What is the typical timeline for medical construction?",
    answer: "Medical construction timelines vary by project type and regulatory requirements. Simple medical office buildouts: 3-4 months. Urgent care centers: 4-6 months. Ambulatory surgery centers: 8-12 months (including AHCA reviews). Diagnostic imaging facilities: 6-9 months. We provide detailed schedules during pre-construction that account for regulatory review periods.",
  },
  {
    question: "Do you provide design-build for healthcare projects?",
    answer: "Yes, we offer design-build delivery for healthcare projects, partnering with architects experienced in medical facility design. Design-build is particularly effective for healthcare because it allows early coordination of complex systems (medical gas, HVAC, electrical) and provides cost certainty before construction begins. See our design-build services page for more information.",
  },
  {
    question: "What areas do you serve for medical construction?",
    answer: "We provide medical construction services throughout Tampa Bay including Tampa, St. Petersburg, Clearwater, Lakeland, Brandon, Sarasota, and Bradenton. Our experience includes projects near major healthcare systems including Tampa General Hospital, Johns Hopkins All Children's, and BayCare facilities. Contact us to discuss your healthcare project location.",
  },
];

export default function MedicalConstructionPage() {
  return (
    <>
      <LocalBusinessSchema service="Medical Construction" />
      <ServiceSchema
        serviceName="Medical and Healthcare Construction"
        serviceDescription="Medical facility construction in Tampa Bay including clinics, surgical centers, medical offices, urgent care, and diagnostic imaging. AHCA compliance, infection control protocols, medical gas systems."
        minPrice="500000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/commercial-construction.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <HeartPulse className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Healthcare Facility Experts</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Medical & Healthcare Construction in Tampa Bay
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists builds healthcare environments where clinical excellence meets construction expertise. From ambulatory surgery centers to medical office buildings, we deliver facilities that support exceptional patient care.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              20+ years of medical construction experience. AHCA compliance expertise. Infection control protocols. Medical gas systems. Projects from $500K to $25M+.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Healthcare Project Consultation
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
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">AHCA Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Infection Control Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Healthcare Construction Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              Medical construction demands more than general construction knowledge. Healthcare facilities must meet stringent regulatory requirements, support complex clinical workflows, and maintain environments that protect patient safety. At Florida Construction Specialists, we bring specialized expertise to every healthcare project.
            </p>
            <p className="text-gray-600 mb-6">
              From understanding AHCA licensure requirements to coordinating medical gas installations, from implementing infection control protocols to scheduling around clinical operations—our team has navigated these challenges across dozens of healthcare projects throughout Tampa Bay.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you're building a new ambulatory surgery center, expanding a medical practice, or renovating an urgent care facility, we provide the specialized knowledge your healthcare project requires.
            </p>

            <Link
              href="/services/commercial/"
              className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Back to Commercial Construction Services
            </Link>
          </div>
        </div>
      </section>

      {/* Facility Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Healthcare Facilities We Build
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityTypes.map((facility) => (
              <div key={facility.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-brand-green-dark text-lg mb-3">{facility.title}</h3>
                <p className="text-gray-600 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Capabilities */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Specialized Healthcare Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Regulatory Compliance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">AHCA plan review coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Florida Building Code healthcare requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">NFPA 101 Life Safety Code compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">ADA accessibility requirements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark text-xl mb-4">Technical Systems</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Medical gas piping and certification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Healthcare HVAC and air quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Radiation shielding for imaging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Emergency power and life safety systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Medical Construction FAQs
          </h2>
          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Commercial Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/commercial/" className="text-brand-green hover:underline">Commercial Construction</Link></li>
                <li><Link href="/services/commercial/design-build/" className="text-brand-green hover:underline">Design-Build Construction</Link></li>
                <li><Link href="/services/commercial/tenant-improvements/" className="text-brand-green hover:underline">Tenant Improvements</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">By Location</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-tampa/" className="text-brand-green hover:underline">Commercial Construction Tampa</Link></li>
                <li><Link href="/commercial-construction-st-petersburg/" className="text-brand-green hover:underline">Commercial Construction St. Petersburg</Link></li>
                <li><Link href="/commercial-construction-clearwater/" className="text-brand-green hover:underline">Commercial Construction Clearwater</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Other Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/disaster-recovery/" className="text-brand-green hover:underline">Disaster Recovery</Link></li>
                <li><Link href="/services/historic-restoration/" className="text-brand-green hover:underline">Historic Restoration</Link></li>
                <li><Link href="/contact/" className="text-brand-green hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Plan Your Healthcare Facility Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your medical construction project. From initial planning through AHCA approval and construction, we guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[{"href":"/services/commercial/","label":"Commercial Construction Services"},{"href":"/commercial-construction-tampa/","label":"Commercial Construction Tampa"},{"href":"/services/commercial/design-build/","label":"Design-Build Services"},{"href":"/services/commercial/medical-construction/","label":"Medical Facility Construction"},{"href":"/services/commercial/tenant-improvements/","label":"Tenant Improvements"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
