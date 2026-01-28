import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award } from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceAreaLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Balcony Reconstruction | Multi-Family & Condo Specialists | Florida Construction Specialists",
  description: "Expert balcony reconstruction and waterproofing for condominiums, apartments, and commercial buildings. We work with HOAs and property managers throughout Tampa Bay.",
};

const features = [
  "Structural balcony repair",
  "Balcony waterproofing",
  "Railing replacement",
  "Concrete restoration",
  "HOA and condo association work",
  "Multi-unit balcony projects",
  "Safety compliance upgrades",
  "Preventive maintenance programs"
];

const faqs = [
  {
    "question": "Do you specialize in condo balcony repair?",
    "answer": "Yes, balcony reconstruction for condominiums and multi-family buildings is one of our specialties throughout Tampa Bay."
  },
  {
    "question": "What causes balcony structural damage?",
    "answer": "In Florida, primary causes are water intrusion, reinforcing steel corrosion, concrete deterioration, and inadequate original waterproofing."
  },
  {
    "question": "How do you waterproof balconies?",
    "answer": "We use multi-layer waterproofing systems including traffic-bearing membranes, proper slope-to-drain, and appropriate sealants."
  },
  {
    "question": "Do you work with HOAs?",
    "answer": "Yes, we work extensively with HOAs and condo associations, understanding board approvals, reserve funds, and phased construction."
  },
  {
    "question": "What is the typical timeline?",
    "answer": "Individual balcony repairs might take 1-2 weeks per unit. Building-wide projects are phased over several months."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Balcony Reconstruction", href: "/balcony-reconstruction/" },
];

export default function BalconyReconstructionPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Balcony Reconstruction"
        serviceDescription="Expert balcony reconstruction and waterproofing for condominiums, apartments, and commercial buildings. We work with HOAs and property managers throughout Tampa Bay."
        minPrice="100000"
      />

      <Breadcrumb items={[
        { name: "Services", href: "/services/" },
        { name: "Balcony Reconstruction", href: "/balcony-reconstruction/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Balcony reconstruction and waterproofing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Multi-Family & Condo Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Commercial Balcony Reconstruction
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Expert balcony reconstruction and waterproofing for condominiums, apartments, and commercial buildings. We work with HOAs and property managers throughout Tampa Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Project Consultation
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
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$10M+ Bonding Capacity</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">150+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Expert Balcony Reconstruction Services
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists delivers comprehensive balcony reconstruction services
                throughout the Tampa Bay region. As a prime general contractor, we maintain full project
                control and accountability from pre-construction through final completion.
              </p>
              <p className="text-gray-600 mb-6">
                Our experienced team has completed over $50 million in projects, bringing the expertise
                and resources needed for projects ranging from $100,000 to $50 million or more.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-brand-green-bg rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Our Balcony Reconstruction Services Include:
              </h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-12 text-center font-heading">
            Our Balcony Reconstruction Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "We discuss your project goals, timeline, and budget requirements." },
              { step: "2", title: "Pre-Construction", desc: "Site analysis, detailed budgeting, and comprehensive project planning." },
              { step: "3", title: "Construction", desc: "Expert execution with strict quality control and timeline management." },
              { step: "4", title: "Completion", desc: "Final inspections, punch list, and seamless project handover." },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Choose FCS for Balcony Reconstruction?
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor—never a subcontractor.
              We bring 20+ years of experience and $50M+ in completed projects to every job.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Direct accountability and project control on every job.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Proven Track Record</h3>
              <p className="text-gray-600">$50M+ in completed projects throughout Tampa Bay.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Large-Scale Expertise</h3>
              <p className="text-gray-600">Specializing in projects from $100,000 to $50M+.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreaLinks service="balcony-reconstruction" serviceName="Balcony Reconstruction" />

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Balcony Reconstruction FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Start Your Balcony Reconstruction Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We specialize in projects $100,000 and above.
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
    </>
  );
}
