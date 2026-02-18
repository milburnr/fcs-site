"use client";

import { BreadcrumbSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { FAQWithSchema, FAQItem } from "@/components/FAQ";
import { ParallaxSection } from "@/components/ParallaxSection";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { PARALLAX_IMAGES } from "@/lib/imageMapping";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/AnimatedElements";
import {
  Shield,
  FileText,
  Scale,
  Flame,
  Droplets,
  Wind,
  AlertTriangle,
  Award,
  Phone,
  CheckCircle,
  Building2,
  Gavel,
  ClipboardCheck,
  Users,
  Search,
  Calculator,
  Handshake,
  HardHat,
  FileCheck,
  Wrench,
} from "lucide-react";
import { ProjectGallery, type GalleryPhoto } from "@/components/ProjectGallery";

const insuranceGalleryPhotos: GalleryPhoto[] = [
  { src: "/images/e3/e3", caption: "Storm damage assessment for insurance claim" },
  { src: "/images/hurricane-ian/hurricane-ian", caption: "Large-loss hurricane damage restoration" },
  { src: "/images/g2/g2", caption: "Hurricane damage recovery and reconstruction" },
  { src: "/images/g3/g3", caption: "Emergency roof restoration after severe storm" },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance Services", href: "/insurance/" },
];

const services = [
  {
    icon: Users,
    title: "Building Consultant",
    href: "/insurance/building-consultant/",
    description: "Expert construction consulting for insurance claims, damage assessment, and repair scope determination. We represent property owners' interests.",
  },
  {
    icon: Award,
    title: "Licensed General Contractor",
    href: "/insurance/licensed-general-contractor/",
    description: "Florida-licensed CBC with 40+ years experience. Prime contractor for large loss restoration—never a subcontractor.",
  },
  {
    icon: ClipboardCheck,
    title: "Certified Estimating",
    href: "/insurance/certified-estimating/",
    description: "Xactimate-certified estimates for insurance claims. Detailed, defensible documentation that ensures fair settlements.",
  },
  {
    icon: Scale,
    title: "Appraisal & Arbitration",
    href: "/insurance/appraisal-arbitration/",
    description: "Insurance claim dispute resolution through appraisal and arbitration. We advocate for property owners' rightful settlements.",
  },
  {
    icon: Flame,
    title: "Fire Restoration",
    href: "/insurance/fire-restoration/",
    description: "Complete fire damage restoration including structural repairs, smoke remediation, content cleaning, and reconstruction.",
  },
  {
    icon: Droplets,
    title: "Water Restoration",
    href: "/insurance/water-restoration/",
    description: "Water and flood damage restoration for commercial and residential properties. Extraction, drying, mold prevention, and repairs.",
  },
  {
    icon: Wind,
    title: "Hurricane Restoration",
    href: "/insurance/hurricane-restoration/",
    description: "Storm and hurricane damage restoration. storm response, structural repairs, roof systems, and complete rebuilds.",
  },
  {
    icon: AlertTriangle,
    title: "Mold Remediation",
    href: "/insurance/mold-remediation/",
    description: "Professional mold assessment, containment, removal, and remediation. Certified protocols that meet insurance requirements.",
  },
  {
    icon: Gavel,
    title: "Expert Witness",
    href: "/expert-witness/",
    description: "Construction expert witness testimony for litigation, arbitration, and dispute resolution. 40+ years of credible expertise.",
  },
];

const stats = [
  { value: "40+", label: "Years Experience" },
  { value: "300+", label: "Projects Completed" },
  { value: "$25M+", label: "Claims Handled" },
  { value: "100%", label: "Prime Contractor" },
];

const processSteps = [
  {
    icon: Search,
    step: "1",
    title: "Emergency Response & Damage Assessment",
    description: "When disaster strikes, FCS responds rapidly to secure your property and begin the assessment process. Our dedicated engineering partner conducts a thorough structural evaluation, documenting every element of damage with photographs, measurements, and engineering analysis. This initial assessment forms the foundation of your entire claim. Unlike contractors who rely on surface-level inspections, our engineering team identifies hidden structural damage that adjusters frequently miss—cracked load-bearing members behind drywall, compromised roof decking beneath intact shingles, and water intrusion paths that lead to future mold issues.",
  },
  {
    icon: Calculator,
    step: "2",
    title: "Certified Xactimate Estimate Preparation",
    description: "FCS prepares your claim estimate using Xactimate, the same estimating software that insurance carriers use internally. This is not a generic bid—it is a line-item scope of work with every repair quantified, priced, and coded to match the carrier's own pricing database. When your estimate speaks the same language as the adjuster's, disputes over pricing methodology are eliminated before they begin. Our certified estimators ensure nothing is overlooked: temporary protections, code-required upgrades, overhead and profit, and extended general conditions for complex projects.",
  },
  {
    icon: Handshake,
    step: "3",
    title: "Direct Carrier Negotiation",
    description: "FCS negotiates scope and pricing directly with your insurance company. With over 40 years of claims experience, we understand how carriers evaluate large loss claims, what documentation they require, and where scope disputes typically arise. We handle supplement requests, respond to adjuster questions with engineering-backed documentation, and advocate for the full scope of restoration your property requires. Property owners should never have to negotiate their own claim against a team of professional adjusters—that is our role.",
  },
  {
    icon: FileText,
    step: "4",
    title: "Scope of Work Development",
    description: "Once the claim is approved, FCS develops detailed construction documents that translate the insurance scope into an executable restoration plan. For complex projects, this includes engineering drawings, material specifications, and phasing plans. Our architectural draftsman produces drawings that satisfy both the carrier's requirements and local building department permit applications. This step is where many contractors fall short—they begin work without proper documentation, leading to change orders, delays, and disputes.",
  },
  {
    icon: HardHat,
    step: "5",
    title: "Restoration Execution",
    description: "As prime contractor, FCS manages every trade and every phase of the restoration under a single contract. There is no finger-pointing between subcontractors, no confusion about who is responsible for schedule or quality. Our project managers maintain daily communication with property owners and weekly progress reports for the carrier. We coordinate inspections, manage material procurement, and ensure every phase of work meets both the insurance scope and current Florida Building Code requirements.",
  },
  {
    icon: FileCheck,
    step: "6",
    title: "Final Inspection & Certificate of Completion",
    description: "FCS manages the closeout process with the same attention to detail as every other phase. We coordinate final inspections with the building department, prepare closeout documentation for the carrier including as-built conditions and completion photographs, and ensure all warranty documentation is delivered to the property owner. The certificate of completion triggers the carrier's final payment release, and our documentation ensures that process moves quickly and without dispute.",
  },
];

const differentiators = [
  {
    icon: Search,
    title: "Direct Engineering Access",
    description: "Structural assessments are conducted through our dedicated engineering partnership—not outsourced to a third party who has never set foot on your property. This means faster damage evaluations, more accurate scope development, and direct access to licensed structural engineers who are available throughout the entire project to address issues as they arise. When a carrier's engineer disputes your claim, our engineering partner responds with equal credibility and direct knowledge of the property's condition.",
  },
  {
    icon: Calculator,
    title: "Certified Xactimate Estimating",
    description: "FCS prepares every insurance estimate in Xactimate, the industry-standard estimating platform used by virtually every property insurance carrier in the United States. This eliminates the translation disputes that occur when contractors submit generic bids—our estimates match the carrier's format line-by-line. Our estimators hold Xactimate certification and stay current with pricing databases, ensuring your claim reflects accurate, defensible costs.",
  },
  {
    icon: Handshake,
    title: "Direct Carrier Negotiation",
    description: "FCS negotiates directly with insurance companies on your behalf. Our 40+ years of claims experience means we know what carriers will approve, how to document scope to maximize recovery, and when to escalate through the appraisal process. Property managers and HOA boards should never negotiate against professional adjusters alone—FCS levels the playing field with equal expertise and documentation.",
  },
  {
    icon: Gavel,
    title: "Expert Witness Capability",
    description: "When insurance disputes escalate to appraisal or litigation, FCS provides expert witness testimony backed by engineering analysis, Xactimate documentation, and decades of construction experience. Our testimony has supported property owners in recovering millions in disputed claims. Having your contractor serve as expert witness eliminates the disconnect between the person who assessed the damage and the person explaining it in proceedings.",
  },
  {
    icon: HardHat,
    title: "Prime Contractor Model",
    description: "FCS manages all trades under one contract—always the prime contractor, never a subcontractor. This means a single point of accountability for schedule, quality, and budget. There is no confusion about who is responsible when issues arise, no coordination gaps between separate contractors, and no additional markup layers. For insurance claims, this model simplifies the carrier's review process and accelerates payment approvals.",
  },
];

const insuranceFAQs: FAQItem[] = [
  {
    question: "How long does the insurance restoration process take?",
    answer: "The timeline depends on the scope and complexity of damage. Minor commercial restorations may take 3-6 months, while large loss projects involving structural damage to multi-story buildings can take 12-18 months or longer. FCS provides a detailed project schedule during the scope development phase, and our project managers provide weekly progress updates throughout construction. The claims negotiation phase typically adds 30-90 days before construction begins, depending on the carrier's responsiveness.",
  },
  {
    question: "Does FCS work directly with my insurance company?",
    answer: "Yes. FCS communicates and negotiates directly with your insurance carrier on all matters related to scope, pricing, and documentation. We prepare Xactimate estimates in the carrier's own format, respond to adjuster supplement requests, and manage all claims-related correspondence. Property owners remain informed throughout the process, but FCS handles the technical negotiations that require construction and insurance expertise.",
  },
  {
    question: "What if my insurance company's estimate is too low?",
    answer: "Underpayment is one of the most common issues in large loss insurance claims. FCS addresses this by preparing detailed Xactimate estimates with engineering-backed documentation that supports every line item. When carriers dispute scope or pricing, we negotiate supplements with supporting evidence. If negotiation fails, FCS can guide you through the appraisal process or provide expert witness testimony in litigation. Our documentation and engineering analysis give your claim the strongest possible foundation.",
  },
  {
    question: "Do I need to pay anything out of pocket for insurance restoration?",
    answer: "Insurance policies typically include a deductible, which is the property owner's responsibility. Beyond the deductible, FCS works within the approved insurance scope and pricing. Our Xactimate estimates are designed to capture the full, legitimate cost of restoration so that the carrier's payment covers the actual work required. FCS never inflates estimates, and we never cut corners to pocket the difference—the scope we negotiate is the scope we build.",
  },
  {
    question: "Can FCS handle both the structural and cosmetic restoration?",
    answer: "Yes. As a licensed Florida Certified Building Contractor (CBC1262722) with a dedicated engineering partner and architectural draftsman, FCS handles every phase of restoration from emergency structural stabilization through final cosmetic finishes. This includes structural repairs, roofing, mechanical systems, electrical, plumbing, drywall, painting, flooring, and specialty finishes. Managing everything under one contract eliminates coordination gaps and ensures consistent quality throughout the project.",
  },
  {
    question: "What types of insurance claims does FCS handle?",
    answer: "FCS specializes in large loss insurance claims typically valued at $500,000 and above. This includes hurricane and wind damage, fire damage, water and flood damage, mold remediation, and multi-peril losses. We work on commercial properties, condominium associations, multi-family buildings, and high-value residential estates. Our experience spans every major hurricane and storm event in Tampa Bay over the past four decades.",
  },
  {
    question: "How quickly can FCS respond after damage occurs?",
    answer: "FCS provides rapid emergency response for large loss events. Our team can be on site within 24-48 hours for initial assessment and emergency stabilization. For hurricane events affecting the Tampa Bay region, FCS pre-positions resources and begins assessments as soon as conditions are safe. Early engagement is critical—the sooner damage is properly documented and the property is stabilized, the stronger your insurance claim will be.",
  },
  {
    question: "What is a certified Xactimate estimate?",
    answer: "Xactimate is the estimating software used by virtually every property insurance carrier in the United States. A certified Xactimate estimate is a detailed, line-by-line scope of work that uses the same pricing database and format that adjusters use to evaluate claims. FCS's certified estimators produce estimates that speak the carrier's language, eliminating pricing methodology disputes and accelerating claim approvals. This is one of the most important tools in ensuring fair insurance settlements.",
  },
];

const relatedLinks = [
  { href: "/insurance/guides/", label: "Insurance Guides & Articles" },
  { href: "/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/commercial/", label: "Commercial Construction" },
  { href: "/about/", label: "About FCS" },
  { href: "/contact/", label: "Contact Us" },
];

export function InsurancePageClient() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Insurance Restoration Services"
        serviceDescription="Comprehensive insurance restoration: hurricane, fire, water, and mold damage repair with certified estimating and claims support across Tampa Bay."
        serviceCategories={["Hurricane Restoration", "Fire Restoration", "Water Restoration", "Mold Remediation", "Certified Estimating"]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-blue-200 font-medium">Large Loss Specialists</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Insurance Restoration Services
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Prime contractor for large loss commercial and residential insurance claims.
                From damage assessment to complete restoration—we represent property owners' interests.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
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
                  Request a Claims Consultation
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Introduction - Large Loss Authority Positioning */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tampa Bay's Large Loss Insurance Restoration Authority
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
                <p>
                  In the insurance industry, "large loss" describes property damage claims typically valued at $250,000 and above—often reaching $5 million, $10 million, or more than $25 million for major commercial properties and condominium associations. These are not routine repair projects. Large loss restoration requires a contractor who understands the insurance claims process as deeply as they understand construction, because the two disciplines are inseparable on projects of this scale.
                </p>
                <p>
                  Florida Construction Specialists has served as a large loss prime contractor across Tampa Bay since 1982. We are a merging of Florida Restoration Team and Shamblin Construction—two firms with decades of experience in commercial restoration, structural engineering, and insurance claims management. This dual foundation gives FCS a unique advantage: we do not simply repair buildings, we manage the entire restoration lifecycle from the moment damage occurs through the carrier's final payment release.
                </p>
                <p>
                  Commercial and condominium insurance claims require a fundamentally different class of contractor than residential repair work. Carriers assign teams of adjusters, engineers, and attorneys to evaluate large loss claims. They use sophisticated estimating platforms, engineering standards, and claims protocols designed to control costs. Property owners who enter this process without equivalent expertise on their side are at a significant disadvantage. FCS provides that expertise—direct access to licensed structural engineers, certified Xactimate estimators, and four decades of direct experience negotiating with every major property carrier operating in Florida.
                </p>
                <p>
                  As prime contractor, FCS manages every aspect of restoration under a single contract. We never operate as a subcontractor, and we never delegate the claims process to a third-party public adjuster. When property managers, HOA boards, and building owners engage FCS, they get one team with one point of accountability—from the initial damage assessment through the certificate of completion and final carrier closeout.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Insurance Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Full-service insurance restoration from initial assessment through complete reconstruction.
                We work directly with carriers while protecting your interests.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FadeIn key={index}>
                <Link
                  href={service.href}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-green/30 h-full flex flex-col"
                >
                  <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center mb-4 group-hover:bg-brand-green/20 transition-colors">
                    <service.icon className="w-7 h-7 text-brand-green-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-green-dark transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-4 text-brand-green font-semibold flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Insurance Restoration Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Insurance Restoration Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven six-step approach refined over four decades of large loss insurance claims.
                Every step is designed to protect your interests and maximize your recovery.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center border-2 border-brand-green/30">
                      <step.icon className="w-8 h-8 text-brand-green-dark" />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-bold text-brand-green-dark">Step {step.step}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets FCS Apart - Expanded Differentiator Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Sets FCS Apart
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insurance companies have teams of adjusters, engineers, and attorneys.
                You deserve the same level of expertise on your side.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentiators.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-full">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}

            {/* License Card */}
            <FadeIn delay={0.5}>
              <div className="bg-brand-green-dark rounded-xl p-6 shadow-md text-white h-full flex flex-col justify-center">
                <Award className="w-12 h-12 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">Florida Certified Building Contractor</h3>
                <p className="text-green-100 mb-4">
                  License CBC1262722 — Active and in good standing with the Florida Department of Business and Professional Regulation. Over 40 years of continuous operation in Tampa Bay.
                </p>
                <div className="flex items-center gap-2 text-brand-gold font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  Verified & Active
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Parallax Visual Break with Form CTA */}
      <ParallaxSection
        backgroundImage={PARALLAX_IMAGES.hurricane}
        title="Discuss Your Insurance Claim"
        subtitle="Contact FCS to discuss your property damage and learn how our team can support your restoration and claims process."
        overlayOpacity={0.6}
        minHeight="auto"
      >
        <div className="mt-8 max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-white/30"
            >
              Request a Claims Consultation
            </Link>
          </div>
        </div>
      </ParallaxSection>

      {/* Project Gallery */}
      <ProjectGallery
        title="Insurance Restoration Projects"
        subtitle="Large-loss insurance claims and disaster recovery projects across Tampa Bay"
        photos={insuranceGalleryPhotos}
      />

      {/* FAQ Section with Schema */}
      <FAQWithSchema
        items={insuranceFAQs}
        title="Insurance Restoration FAQ"
        description="Answers to common questions about the insurance restoration process, claims management, and working with FCS."
      />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Insurance Restoration Help?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Don't navigate the claims process alone. Contact FCS for a consultation
              and let our 40+ years of experience work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS_INFO.phone}
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-white/30"
              >
                Discuss Your Loss
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <HighLevelForm variant="commercial" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Insurance Restoration Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Insurance Restoration Service Areas
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            FCS provides large loss insurance restoration throughout Tampa Bay.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {LOCATIONS.map((location) => {
              const urlSlug = location.slug.replace('-fl', '');
              return (
                <Link
                  key={location.slug}
                  href={`/insurance-restoration-${urlSlug}/`}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all hover:bg-brand-green-dark hover:text-white group"
                >
                  <span className="font-semibold text-brand-green-dark group-hover:text-white transition-colors">
                    {location.name}, FL
                  </span>
                </Link>
              );
            })}
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
