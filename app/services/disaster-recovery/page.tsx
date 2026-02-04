import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ShieldCheck, AlertTriangle, Phone, ArrowRight, FileText, Building2, Droplets, Flame, CloudRain, Clock, CheckCircle, Award } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO, FAQ_DATABASE } from "@/lib/constants";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Disaster Recovery & Insurance Restoration in Tampa Bay",
  description: "Tampa Bay's expert insurance restoration contractor. 43+ years claims experience, large loss specialists, direct carrier relationships. Call (813) 420-7561.",
  keywords: [
    "disaster recovery contractor tampa",
    "insurance restoration florida",
    "hurricane damage repair tampa",
    "large loss restoration",
    "storm damage contractor",
    "insurance claim construction",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/services/disaster-recovery/" },
];

const disasterFaqs = [
  ...FAQ_DATABASE.disaster,
  {
    question: "What is the advantage of working with a contractor who understands insurance claims?",
    answer: "Our leadership has 43+ years of experience in property claims, including work as an Executive General Adjuster with major insurance carriers. This background means we understand claims processes from both sides—we know what documentation carriers need, how to properly scope and estimate damages, and how to communicate effectively with adjusters to facilitate fair settlements and smooth restorations."
  },
  {
    question: "How quickly can you begin working on our property after a disaster?",
    answer: "For large loss commercial and residential properties, we mobilize assessment teams as quickly as possible. Our focus is on proper documentation and scope development rather than emergency tarp-and-dry services—though we can coordinate those services when needed. Once engaged, we begin damage assessment, photo documentation, and preliminary scope development immediately."
  },
  {
    question: "Do you work with all insurance carriers?",
    answer: "Yes, we work with all major insurance carriers on commercial and residential large loss claims. Our professional relationships with carriers, adjusters, and claims professionals throughout Florida help facilitate efficient claim processing and fair settlements. We maintain the documentation and communication standards that carriers expect from experienced restoration contractors."
  },
  {
    question: "What size insurance restoration projects do you handle?",
    answer: "We specialize in large loss insurance restoration, typically projects exceeding $250,000. This includes commercial property damage, multi-family residential complexes, condominiums, HOA common areas, and high-value single-family homes. For smaller residential claims, we can recommend qualified restoration contractors who specialize in that market segment."
  },
];

const clusterServices = [
  {
    name: "Hurricane & Storm Damage",
    href: "/services/disaster-recovery/hurricane-damage/",
    description: "Comprehensive restoration from hurricane, tropical storm, and tornado damage including structural repair, roofing, and building envelope reconstruction.",
    icon: CloudRain,
  },
  {
    name: "Water Damage Restoration",
    href: "/services/disaster-recovery/water-damage/",
    description: "Large loss water damage restoration including flood recovery, pipe failures, and comprehensive moisture remediation.",
    icon: Droplets,
  },
  {
    name: "Fire Damage Restoration",
    href: "/services/disaster-recovery/fire-damage/",
    description: "Complete fire and smoke damage restoration from structural repair to content restoration and odor elimination.",
    icon: Flame,
  },
  {
    name: "Insurance Claims Process",
    href: "/services/disaster-recovery/insurance-claims-process/",
    description: "Expert guidance through the insurance claim process, from initial documentation through final settlement and restoration completion.",
    icon: FileText,
  },
];

const featuredProjects = [
  {
    name: "Turner Agri-Center",
    location: "Arcadia, FL",
    event: "Hurricane Charley",
    description: "Complete reconstruction of major agricultural exhibition center following catastrophic hurricane damage. Large-scale metal building systems, public assembly spaces, and livestock facilities.",
  },
  {
    name: "Hurricane Harvey Texas Response",
    location: "Texas Gulf Coast",
    event: "Hurricane Harvey",
    description: "Multiple commercial and residential restoration projects exceeding $40M total following Hurricane Harvey, demonstrating our capacity for large-scale disaster response.",
  },
  {
    name: "Hurricane Irma Miami Response",
    location: "Miami-Dade County",
    event: "Hurricane Irma",
    description: "Extensive restoration projects exceeding $20M total including Embassy Towers, Oceania I Luxury Condominiums, and multiple commercial properties throughout Miami.",
  },
  {
    name: "Leon County Detention Center",
    location: "Tallahassee, FL",
    event: "Hurricane Irene / Water Loss",
    description: "Comprehensive interior reconstruction of secure detention facility following water intrusion, including specialized systems and security compliance requirements.",
  },
];

export default function DisasterRecoveryPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema service="Disaster Recovery & Insurance Restoration" />
      <ServiceSchema
        serviceName="Disaster Recovery & Insurance Restoration"
        serviceDescription="Large loss disaster recovery and insurance restoration services for commercial and residential properties throughout Tampa Bay. Specializing in hurricane, fire, and water damage restoration with 43+ years claims experience."
        minPrice="250000"
      />
      <FAQSchema faqs={disasterFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Emergency Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Hurricane damage restoration and disaster recovery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>

        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />

          {/* Emergency Contact Bar */}
          <div className="bg-white/95 rounded-xl p-4 mb-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <div>
                <p className="font-bold text-brand-green-dark">Need Disaster Recovery Assistance?</p>
                <p className="text-sm text-gray-600">Large loss restoration specialists available</p>
              </div>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Disaster Recovery & Insurance Restoration in Tampa Bay
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                When disaster strikes, you need a contractor who understands both construction and insurance. With 43+ years of property claims experience—including work as an Executive General Adjuster—Florida Construction Specialists brings unmatched expertise to large loss restoration projects throughout Florida.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Claims</p>
                  <p className="text-xs text-gray-300">43+ Years Exp.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Building2 className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Large Loss</p>
                  <p className="text-xs text-gray-300">$250K+ Projects</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Licensed</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.licenseNumber}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <FileText className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Insurance</p>
                  <p className="text-xs text-gray-300">All Carriers</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Request Insurance Assessment
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Request an Insurance Assessment
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your property damage and we'll schedule an assessment.
              </p>
              <HighLevelForm height={450} />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Insurance Industry Expertise Meets Construction Excellence
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                Florida Construction Specialists brings a unique advantage to disaster recovery and insurance restoration: our leadership includes a former Allstate Commercial Property Adjuster (1982-1989) and Executive General Adjuster with credentials from CJW-Vericlaim and Sedgwick. This 43+ year foundation in property claims means we understand the restoration process from every angle—carrier, adjuster, contractor, and property owner.
              </p>
              <p className="mb-6">
                We specialize in large loss insurance restoration, typically projects exceeding $250,000. This includes commercial properties devastated by hurricanes, multi-family residential complexes with extensive water damage, condominium associations facing common area reconstruction, and high-value residences requiring comprehensive restoration. Our focus on substantial projects allows us to dedicate the resources, expertise, and attention these complex claims require.
              </p>
              <p className="mb-6">
                Our portfolio of disaster recovery work spans the Southeast United States and beyond. From the Turner Agri-Center reconstruction following Hurricane Charley to extensive restoration work after Hurricanes Harvey and Irma—representing over $60 million in combined project value—we've demonstrated our capacity to mobilize for major disasters and deliver comprehensive restoration under challenging circumstances.
              </p>
              <p>
                What truly sets FCS apart is our turn-key approach to insurance restoration. We provide everything from initial damage assessment and certified estimates through complete reconstruction—all with the documentation, communication, and professionalism that insurance carriers expect. Our goal is to maximize your recovery while minimizing your stress, returning your property to pre-loss condition as efficiently as possible.
              </p>
            </div>
          </div>

          {/* Disaster Recovery Gallery */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/images/Ian-2/ian-2-display.webp"
                alt="Aerial view of catastrophic hurricane damage to roofs and homes in coastal community"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Hurricane Ian Damage</p>
                <p className="text-sm text-gray-200">Coastal Property Assessment</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/images/replacing-roof-decking-and-rafters/replacing-roof-decking-and-rafters-display.webp"
                alt="Aerial view of damaged residential roof showing exposed decking during replacement"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Storm Damage Restoration</p>
                <p className="text-sm text-gray-200">Roof Deck & Rafter Replacement</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
                alt="Turner AgriCivic Center after hurricane reconstruction"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Turner Agri-Center Restored</p>
                <p className="text-sm text-gray-200">Hurricane Charley Reconstruction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Disaster Recovery Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive restoration services for properties affected by hurricanes, fire, water damage, and other catastrophic events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clusterServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                    <service.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="inline-flex items-center text-brand-green font-semibold">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              The Insurance Restoration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures proper documentation, fair settlements, and quality restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Initial Assessment & Documentation",
                description: "We conduct thorough damage assessment with comprehensive photo documentation, moisture readings, and detailed notes. This documentation forms the foundation for accurate scope development and supports your insurance claim.",
                icon: FileText,
              },
              {
                step: "02",
                title: "Scope Development",
                description: "Using industry-standard estimating software, we develop detailed scopes of work that capture all damage and required repairs. Our certified estimates meet carrier documentation standards and ensure nothing is overlooked.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Carrier Communication",
                description: "We work directly with adjusters and claims professionals to review scope, discuss methodology, and reach agreement on repair protocols. Our insurance industry background facilitates productive, professional communication.",
                icon: ShieldCheck,
              },
              {
                step: "04",
                title: "Approval & Mobilization",
                description: "Once scope is approved, we mobilize resources for restoration. Our pre-qualified subcontractors and established supplier relationships enable rapid response without sacrificing quality.",
                icon: Clock,
              },
              {
                step: "05",
                title: "Restoration Execution",
                description: "Experienced project managers oversee every aspect of restoration, from demolition through final finishes. Regular progress reports and documentation maintain transparency throughout the project.",
                icon: CheckCircle,
              },
              {
                step: "06",
                title: "Final Walkthrough & Closeout",
                description: "Comprehensive punch list resolution, final documentation, and warranty provision complete the restoration. We ensure your property is returned to pre-loss condition—or better.",
                icon: Award,
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-gray-50 rounded-xl p-6">
                <div className="absolute -top-4 left-6 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step {item.step}
                </div>
                <div className="mt-4">
                  <item.icon className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-red-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Property Damaged? We Can Help.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team to schedule an insurance damage assessment. We'll help you understand your options and navigate the restoration process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-700 font-bold rounded-full hover:bg-gray-100 transition-all">
              Request Assessment
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-green-dark font-bold rounded-full hover:bg-brand-gold-light transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Disaster Recovery Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record includes major restoration projects following some of Florida's most significant disasters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark">{project.name}</h3>
                    <p className="text-sm text-gray-500">{project.location}</p>
                  </div>
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {project.event}
                  </span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FCS Section */}
      <section className="section-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Why Property Owners Choose FCS for Insurance Restoration
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">43+ Years Claims Experience</h3>
                    <p className="text-gray-600">Our principal brings four decades of property claims experience, including work as an Allstate Commercial adjuster and Executive General Adjuster with CJW-Vericlaim and Sedgwick. We understand insurance from every angle.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Large Loss Specialists</h3>
                    <p className="text-gray-600">We focus on substantial restoration projects—typically $250,000 and above. This allows us to dedicate senior project managers, experienced superintendents, and the resources these complex projects demand.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Certified Estimates & Documentation</h3>
                    <p className="text-gray-600">We provide professional, detailed documentation that meets carrier standards—from initial damage assessment through final completion. Proper documentation supports fair settlements and smooth claim processing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Prime Contractor Accountability</h3>
                    <p className="text-gray-600">As your prime contractor, we take full responsibility for restoration quality, timeline, and communication. You have a single point of contact and clear accountability throughout the project.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">Types of Losses We Handle</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Hurricane/Wind",
                  "Tropical Storms",
                  "Tornado Damage",
                  "Flood/Water Loss",
                  "Fire/Smoke",
                  "Hail Damage",
                  "Vehicle Impact",
                  "Collapse",
                  "Burst Pipes",
                  "Mold Remediation",
                  "Lightning Strike",
                  "Vandalism",
                ].map((loss) => (
                  <div key={loss} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span className="text-gray-700">{loss}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Disaster Recovery Throughout Tampa Bay
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide disaster recovery and insurance restoration services across the greater Tampa Bay region.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { city: "Tampa", href: "/disaster-recovery-tampa/" },
              { city: "St. Petersburg", href: "/disaster-recovery-st-petersburg/" },
              { city: "Clearwater", href: "/disaster-recovery-clearwater/" },
              { city: "Lakeland", href: "/disaster-recovery-lakeland/" },
              { city: "Sarasota", href: "/disaster-recovery-sarasota/" },
              { city: "Bradenton", href: "/disaster-recovery-bradenton/" },
              { city: "Brandon", href: "/disaster-recovery-brandon/" },
              { city: "Ruskin", href: "/disaster-recovery-ruskin/" },
            ].map((location) => (
              <Link
                key={location.city}
                href={location.href}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-red-50 transition-colors group"
              >
                <span className="font-semibold text-brand-green-dark group-hover:text-red-700 transition-colors">
                  Disaster Recovery in {location.city}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-light">
        <div className="container-custom">
          <div >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
                Insurance Restoration FAQ
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about disaster recovery and insurance restoration.
              </p>
            </div>

            <FAQ items={disasterFaqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Related Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/commercial/" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                Commercial Construction
              </h3>
              <p className="text-gray-600 mb-4">Large-scale commercial projects including new construction and major renovations throughout Tampa Bay.</p>
              <span className="inline-flex items-center text-brand-green font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            <Link href="/services/historic-restoration/" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                Historic Restoration
              </h3>
              <p className="text-gray-600 mb-4">Sensitive restoration of historic buildings, meeting preservation standards while addressing damage and deterioration.</p>
              <span className="inline-flex items-center text-brand-green font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            <Link href="/services/residential/" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                Residential Construction
              </h3>
              <p className="text-gray-600 mb-4">Luxury custom home construction and major renovations for high-value residential properties.</p>
              <span className="inline-flex items-center text-brand-green font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Property Damage? Let Us Help.
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Contact Florida Construction Specialists for an insurance damage assessment. With 43+ years of claims experience and a track record of successful large loss restorations, we'll help you navigate the restoration process and return your property to pre-loss condition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
                  Request Assessment
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-gray-300 mb-4">Trusted for large loss restoration:</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                  <span>✓ 43+ Years Claims Experience</span>
                  <span>✓ License {BUSINESS_INFO.licenseNumber}</span>
                  <span>✓ All Insurance Carriers</span>
                  <span>✓ $250K+ Projects</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Request an Assessment
              </h3>
              <HighLevelForm height={400} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[{"href":"/services/disaster-recovery/","label":"Disaster Recovery Services"},{"href":"/hurricane-damage-restoration/","label":"Hurricane Damage Restoration"},{"href":"/water-damage-restoration/","label":"Water Damage Restoration"},{"href":"/fire-damage-restoration/","label":"Fire Damage Restoration"},{"href":"/insurance-claims-management/","label":"Insurance Claims Management"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
