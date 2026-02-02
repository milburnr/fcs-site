import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Compass,
  FileText,
  Hammer,
  ClipboardCheck,
  Key,
  Clock,
  Shield,
  Users,
  DollarSign,
  Calendar,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Our Process | Custom Home Building Journey",
  description:
    "Discover our proven 6-phase custom home building process. From initial consultation to final walkthrough, see how FCS delivers luxury homes in Tampa Bay with transparency and excellence.",
  keywords:
    "custom home building process, luxury home construction timeline, design-build process Tampa, custom home phases, home building journey",
};

const processSteps = [
  {
    phase: 1,
    title: "Discovery & Consultation",
    duration: "1-2 weeks",
    icon: MessageSquare,
    color: "bg-blue-500",
    description:
      "We begin with an in-depth conversation about your vision, lifestyle, and goals. This is where we listen, learn, and start understanding what makes your dream home unique.",
    activities: [
      "Initial phone or in-person consultation",
      "Site visit (if lot is owned) or lot search discussion",
      "Lifestyle assessment and wish list development",
      "Budget range and timeline discussion",
      "Introduction to our team and process",
    ],
    deliverables: [
      "Project feasibility assessment",
      "Preliminary budget range",
      "Team assignment",
    ],
    yourRole: "Share your vision, inspiration photos, and must-haves",
  },
  {
    phase: 2,
    title: "Design Development",
    duration: "4-12 weeks",
    icon: Compass,
    color: "bg-purple-500",
    description:
      "Our architectural team transforms your vision into detailed plans. Through collaborative design sessions, we refine every element until the design perfectly reflects your lifestyle.",
    activities: [
      "Schematic design with floor plans and elevations",
      "3D renderings and virtual walkthroughs",
      "Design review meetings (typically 3-5 sessions)",
      "Material and finish pre-selections",
      "Structural and MEP engineering coordination",
      "Historic review preparation (if applicable)",
    ],
    deliverables: [
      "Complete architectural drawings",
      "3D renderings of key spaces",
      "Preliminary specifications",
    ],
    yourRole: "Participate in design reviews, provide feedback, make selections",
  },
  {
    phase: 3,
    title: "Pre-Construction & Permitting",
    duration: "4-8 weeks",
    icon: FileText,
    color: "bg-amber-500",
    description:
      "We handle the complex permitting process while finalizing your construction contract. This phase ensures everything is in place for a smooth build with no surprises.",
    activities: [
      "Detailed cost estimating and value engineering",
      "Building permit application and processing",
      "FEMA/flood zone compliance (if applicable)",
      "Historic preservation approvals (if applicable)",
      "HOA/ARC submissions and approvals",
      "Subcontractor bidding and selection",
      "Construction contract finalization",
    ],
    deliverables: [
      "Fixed-price construction contract",
      "Building permits",
      "Detailed project schedule",
    ],
    yourRole: "Review and approve final contract, make final finish selections",
  },
  {
    phase: 4,
    title: "Construction",
    duration: "8-18 months",
    icon: Hammer,
    color: "bg-brand-green",
    description:
      "The exciting phase where your home takes shape. Our project manager keeps you informed with regular updates, site visits, and transparent communication throughout.",
    activities: [
      "Site preparation and foundation",
      "Structural framing and roof",
      "MEP rough-in (mechanical, electrical, plumbing)",
      "Exterior finishes and waterproofing",
      "Interior finishes and millwork",
      "Fixture and appliance installation",
      "Landscaping and hardscaping",
    ],
    milestones: [
      { name: "Foundation Complete", timing: "Month 1-2" },
      { name: "Framing & Roof", timing: "Month 2-4" },
      { name: "Dry-In (Weather Tight)", timing: "Month 3-5" },
      { name: "MEP Rough Complete", timing: "Month 4-6" },
      { name: "Drywall & Paint", timing: "Month 6-10" },
      { name: "Finishes & Fixtures", timing: "Month 8-14" },
      { name: "Final Details", timing: "Month 12-18" },
    ],
    yourRole: "Weekly updates, bi-weekly site walks, selection confirmations",
  },
  {
    phase: 5,
    title: "Quality Assurance",
    duration: "2-4 weeks",
    icon: ClipboardCheck,
    color: "bg-teal-500",
    description:
      "Before handover, we conduct rigorous quality inspections and system testing. Every detail is checked against our standards and your specifications.",
    activities: [
      "Internal punch list walkthrough",
      "Third-party inspections (if requested)",
      "System commissioning and testing",
      "HVAC balancing and air quality testing",
      "Final cleaning and touch-ups",
      "Certificate of Occupancy obtained",
    ],
    deliverables: [
      "Certificate of Occupancy",
      "Punch list completion documentation",
      "System test reports",
    ],
    yourRole: "Pre-final walkthrough, punch list review",
  },
  {
    phase: 6,
    title: "Handover & Beyond",
    duration: "Ongoing",
    icon: Key,
    color: "bg-brand-gold",
    description:
      "The moment you've been waiting for—receiving the keys to your new home. But our relationship doesn't end here; we stand behind our work with comprehensive warranty support.",
    activities: [
      "Final walkthrough with project manager",
      "Key ceremony and champagne toast",
      "Home systems orientation and training",
      "Warranty documentation handover",
      "Maintenance schedule and recommendations",
      "Introduction to warranty service team",
    ],
    deliverables: [
      "Keys and access credentials",
      "Complete owner's manual",
      "As-built drawings",
      "Warranty certificates",
    ],
    yourRole: "Final walkthrough, enjoy your new home!",
  },
];

const processFeatures = [
  {
    icon: Users,
    title: "Dedicated Project Manager",
    description: "One point of contact throughout your entire project journey",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Fixed-price contracts with detailed cost breakdowns—no surprises",
  },
  {
    icon: Calendar,
    title: "Weekly Updates",
    description: "Regular progress reports with photos and schedule updates",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Comprehensive warranty backed by our 30+ years in business",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Our Process", href: "/our-process/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function OurProcessPage() {
  return (
    <>
      <LocalBusinessSchema schemaType="HomeAndConstructionBusiness" />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Our Process", href: "/our-process/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Construction services in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              YOUR CUSTOM HOME JOURNEY
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              A Proven Process for Building Your Dream Home
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              From first conversation to final walkthrough, our 6-phase process
              ensures transparency, quality, and a stress-free experience building
              your luxury custom home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Features */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            {processFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-14 h-14 bg-brand-gold-bg rounded-full flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-7 h-7 text-brand-gold-dark" />
                </div>
                <h3 className="font-bold text-brand-green-dark mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4">
              The 6 Phases of Your Custom Home
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each phase is designed to keep you informed, involved, and confident
              in the progress of your home.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.phase} className="relative mb-12 last:mb-0">
                {/* Timeline connector */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200 -mb-12" />
                )}

                <div className="flex gap-6">
                  {/* Phase number */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {step.phase}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2 md:mb-0">
                        <step.icon className={`w-6 h-6 text-gray-600`} />
                        <h3 className="text-xl font-bold text-brand-green-dark">
                          {step.title}
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-gold bg-brand-gold-bg px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6">{step.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Activities */}
                      <div>
                        <h4 className="text-sm font-semibold text-brand-green-dark mb-3">
                          What Happens
                        </h4>
                        <ul className="space-y-2">
                          {step.activities.map((activity) => (
                            <li
                              key={activity}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables or Milestones */}
                      <div>
                        {step.milestones ? (
                          <>
                            <h4 className="text-sm font-semibold text-brand-green-dark mb-3">
                              Key Milestones
                            </h4>
                            <div className="space-y-2">
                              {step.milestones.map((milestone) => (
                                <div
                                  key={milestone.name}
                                  className="flex items-center justify-between text-sm bg-gray-50 rounded-lg px-3 py-2"
                                >
                                  <span className="text-gray-700">{milestone.name}</span>
                                  <span className="text-gray-500 text-xs">{milestone.timing}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <>
                            <h4 className="text-sm font-semibold text-brand-green-dark mb-3">
                              You&apos;ll Receive
                            </h4>
                            <ul className="space-y-2">
                              {step.deliverables.map((deliverable) => (
                                <li
                                  key={deliverable}
                                  className="flex items-start gap-2 text-sm text-gray-600"
                                >
                                  <ArrowRight className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {step.yourRole && (
                          <div className="mt-4 bg-brand-gold-bg rounded-lg p-3">
                            <h5 className="text-xs font-semibold text-brand-gold-dark mb-1">
                              Your Role
                            </h5>
                            <p className="text-sm text-gray-700">{step.yourRole}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Typical Project Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-3xl font-bold text-brand-gold mb-1">2-3 months</p>
                  <p className="text-sm text-gray-600">Design & Pre-Construction</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-3xl font-bold text-brand-green mb-1">8-18 months</p>
                  <p className="text-sm text-gray-600">Construction Phase</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-3xl font-bold text-brand-gold-dark mb-1">10-21 months</p>
                  <p className="text-sm text-gray-600">Total Project Duration</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                *Timelines vary based on home size, complexity, permitting requirements, and finish selections
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Common Questions About Our Process
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-green-dark mb-2">
                How involved will I be during construction?
              </h3>
              <p className="text-gray-600 text-sm">
                As involved as you want to be. We provide weekly updates with photos and
                schedule progress. Bi-weekly site walks are standard, but you&apos;re welcome
                to visit more frequently with your project manager.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-green-dark mb-2">
                What if I want to make changes during construction?
              </h3>
              <p className="text-gray-600 text-sm">
                Changes happen—we understand. We have a formal change order process that
                documents the scope, cost, and schedule impact of any modifications so
                you can make informed decisions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-green-dark mb-2">
                How do you handle permitting in historic districts?
              </h3>
              <p className="text-gray-600 text-sm">
                Our team has extensive experience with Hyde Park ARC, Tampa Historic
                Preservation, and SHPO requirements. We handle all submissions and
                attend hearings on your behalf.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-brand-green-dark mb-2">
                What warranty do you provide?
              </h3>
              <p className="text-gray-600 text-sm">
                We provide a comprehensive warranty covering workmanship and materials.
                Major systems (HVAC, plumbing, electrical) typically carry manufacturer
                warranties we help you register and manage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Begin Your Custom Home Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your vision. We&apos;ll walk you through
            our process and answer all your questions—no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all"
            >
              Schedule Your Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-gold-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

    </>
  );
}