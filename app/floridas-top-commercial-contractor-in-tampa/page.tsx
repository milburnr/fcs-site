import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Award, Building2, Users, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";
import RelatedArticles from "@/components/RelatedArticles";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";

const pageTitle = "Why Choose FCS | Tampa Commercial Track Record";
const pageDescription =
  "Why Tampa owners hire FCS: license CBC1262722, in-house engineering, always the prime contractor, and past projects like Tiara and Bay Pines VA.";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/floridas-top-commercial-contractor-in-tampa/' },
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://floridaconstructionspecialists.com/floridas-top-commercial-contractor-in-tampa/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Why Tampa Owners Choose FCS", href: "/floridas-top-commercial-contractor-in-tampa/" },
];

const internalLinks = [
  { href: "/commercial/", label: "Commercial Construction Services" },
  { href: "/hiring-a-commercial-contractor-in-tampa/", label: "How to Hire a Commercial Contractor in Tampa" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/about/", label: "About FCS" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const credentials = [
  {
    icon: Shield,
    title: "License CBC1262722",
    description: "FCS is a Florida Certified Building Contractor. You can look up the license number at myfloridalicense.com before you ever meet us.",
  },
  {
    icon: Award,
    title: "In-House Engineering",
    description: "We have an engineer and an architectural draftsman on staff, so structural questions get answered inside the company instead of waiting on an outside consultant.",
  },
  {
    icon: Building2,
    title: "Always the Prime Contractor",
    description: "FCS is always the prime contractor, never a subcontractor. You get direct accountability and a single point of contact for your entire project.",
  },
  {
    icon: Users,
    title: "Operating Since 1982",
    description: "FCS combines Florida Restoration Team and Shamblin Construction, contractors that have worked in Florida since 1982, with 300+ completed projects between them.",
  },
];

const trackRecord = [
  {
    name: "Turner Agri-Center",
    location: "Polk County, FL",
    value: "$12.5M",
    shows: "Large-scale rebuild",
    description: "Complete rebuild of the Turner Agri-Civic Center after catastrophic damage from Hurricane Charley, including structural steel erection and full MEP systems.",
  },
  {
    name: "Tiara Condominium Association",
    location: "Tampa Bay Area",
    value: "$4.9M",
    shows: "Work in occupied buildings",
    description: "Reconstruction of over 180 balconies plus exterior waterproofing, done while residents stayed in the building.",
  },
  {
    name: "Bay Pines Veterans Hospital",
    location: "Bay Pines, FL",
    value: "$2M",
    shows: "Federal and historic compliance",
    description: "Historic restoration of a federal facility. The job required federal compliance, coordination with VA facilities management, SHPO adherence, and infection control during active hospital operations.",
  },
  {
    name: "Italian American Club",
    location: "Ybor City, Tampa",
    value: "$1.2M",
    shows: "Historic district approvals",
    description: "Complete restoration of a landmark building in Ybor City's historic district, working within Barrio Latino Commission requirements.",
  },
  {
    name: "Plant High School",
    location: "Tampa",
    value: "$525K",
    shows: "Specialized masonry",
    description: "Historic brick restoration at one of Tampa's best-known schools.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Site visit and scope",
    description: "We walk the property with you, talk through budget and schedule, and tell you plainly whether the project is a good fit for us.",
  },
  {
    step: 2,
    title: "Engineering review and estimate",
    description: "Our in-house engineer looks at the structural side early. The estimate is built on what we actually found, which keeps change orders down later.",
  },
  {
    step: 3,
    title: "One contract, one point of contact",
    description: "As prime contractor we hold the subcontracts and run the schedule. You deal with one project manager, not a dozen trades.",
  },
  {
    step: 4,
    title: "Closeout",
    description: "Inspections, punch list, and final paperwork are finished before we call the job done.",
  },
];

const faqs = [
  {
    question: "What license does Florida Construction Specialists hold?",
    answer: "FCS holds Florida Certified Building Contractor license CBC1262722. You can verify it on the Florida DBPR site at myfloridalicense.com.",
  },
  {
    question: "What size projects does FCS take on?",
    answer: "Most of our projects are $500K and up; we take on work from about $250K depending on scope.",
  },
  {
    question: "What does it mean that FCS is always the prime contractor?",
    answer: "We contract directly with the owner and never work as a subcontractor under another firm. That gives you one company accountable for the schedule, the budget, and the trades on site.",
  },
  {
    question: "Can I see examples of past FCS projects?",
    answer: "Yes. Past work includes the $4.9 million Tiara Condominium balcony project, the $2M Bay Pines Veterans Hospital restoration, the $1.2M Italian American Club restoration in Ybor City, Plant High School brick restoration, and the Turner Agri-Center rebuild after Hurricane Charley.",
  },
  {
    question: "Why does in-house engineering matter on a commercial project?",
    answer: "Structural questions come up on almost every renovation and restoration job. Having an engineer on staff means those questions get answered quickly and the answers feed straight into the estimate and the schedule.",
  },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Florida Construction Specialists commercial project"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Why Tampa Owners Choose FCS: Track Record, Credentials, and Past Projects
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            The license, the people, and the finished buildings behind Florida Construction Specialists, so you can check our work before you ask us to bid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Start Your Project
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

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              Before you hire a contractor for a large commercial job, you want proof: a license you can look up, projects you can drive past, and a clear picture of who will run your job. This page puts that in one place.
            </p>
            <p className="text-gray-600 mb-6">
              FCS holds Florida Certified Building Contractor license CBC1262722, keeps an engineer on staff, and is always the prime contractor. Most of our projects are $500K and up; we take on work from about $250K depending on scope.
            </p>
            <p className="text-gray-600 mb-8">
              If you want the full list of what we build, see{" "}
              <Link href="/commercial/" className="text-brand-green font-semibold hover:underline">
                our commercial construction services in Tampa Bay
              </Link>
              . If you are still comparing firms, our guide on{" "}
              <Link href="/hiring-a-commercial-contractor-in-tampa/" className="text-brand-green font-semibold hover:underline">
                how to hire a commercial contractor in Tampa
              </Link>{" "}
              covers the questions to ask any bidder, including us.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Credentials You Can Check
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Each of these is something you can verify or ask us to show you.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {credentials.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-5xl mx-auto mt-6 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-brand-green-dark mb-4 font-heading">Insurance</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span>General liability insurance</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span>Workers&apos; compensation coverage</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                <span>Professional liability coverage</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Past Projects and What They Show
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A few of the jobs FCS and its founding companies have completed, and the kind of problem each one proves we can handle.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trackRecord.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <p className="text-sm font-semibold text-brand-gold mb-2">{item.shows}</p>
                <h3 className="text-xl font-bold text-brand-green-dark mb-1 font-heading">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  {item.location} &middot; {item.value}
                </p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How FCS runs a project */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              How FCS Runs a Project
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              What working with us looks like, from the first site visit to closeout.
            </p>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Learn More About FCS"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ask Us for References
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Tell us about your project and we will share comparable past work and walk you through how we would run it.
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
      <RelatedServiceLocations
        currentCity="Tampa"
        currentService="commercial-construction"
        currentServiceName="Commercial Construction"
      />

    <RelatedArticles pageSlug="floridas-top-commercial-contractor-in-tampa" />
    </>
  );
}
