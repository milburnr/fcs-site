import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Award, Building2, Users, Shield, Star, MapPin, Clock, Target } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Florida's Top Commercial Contractor in Tampa | Florida Construction Specialists",
  description: "Discover why Florida Construction Specialists is recognized as Florida's top commercial contractor in Tampa. Full-service construction, proven results, local expertise.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Florida's Top Commercial Contractor in Tampa", href: "/floridas-top-commercial-contractor-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/top-commercial-contractors-in-tampa/", label: "Top Tampa Contractors" },
  { href: "/leading-commercial-contractors-in-tampa/", label: "Leading Tampa Contractors" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const differentiators = [
  {
    icon: Award,
    title: "Decades of Excellence",
    description: "Our track record speaks for itself—decades of successful commercial projects across Tampa Bay, delivering on time and on budget.",
  },
  {
    icon: Building2,
    title: "Full-Service Capabilities",
    description: "From design-build to general contracting to construction management, we offer the delivery method that best fits your project needs.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our project managers, superintendents, and estimators bring deep expertise and maintain long-term relationships with quality subcontractors.",
  },
  {
    icon: Shield,
    title: "Rock-Solid Credentials",
    description: "Certified General Contractor, fully insured, bonded for projects of any size, with an exceptional safety record.",
  },
  {
    icon: MapPin,
    title: "Tampa Bay Expertise",
    description: "We know this market—the permitting process, local codes, reliable subcontractors, and the unique challenges of Florida construction.",
  },
  {
    icon: Star,
    title: "Client-Focused Approach",
    description: "Transparent communication, proactive problem-solving, and a commitment to your success that extends beyond project completion.",
  },
];

const serviceAreas = [
  { area: "Tampa", description: "Our home base and primary service area" },
  { area: "St. Petersburg", description: "Full commercial construction services" },
  { area: "Clearwater", description: "Complete construction capabilities" },
  { area: "Brandon", description: "Growing suburban market expertise" },
  { area: "Lakeland", description: "Serving the I-4 corridor" },
  { area: "Sarasota", description: "Expanding services south of Tampa Bay" },
];

const projectTypes = [
  {
    type: "Office Buildings",
    examples: "Corporate headquarters, professional offices, multi-tenant buildings",
    approach: "We understand that offices represent your brand. From sleek modern designs to professional traditional spaces, we deliver environments that attract talent and impress clients.",
  },
  {
    type: "Retail & Hospitality",
    examples: "Restaurants, retail stores, hotels, entertainment venues",
    approach: "Retail moves fast. We specialize in efficient buildouts that get you open for business on schedule, with the quality finishes that draw customers.",
  },
  {
    type: "Healthcare Facilities",
    examples: "Medical offices, dental practices, surgery centers, urgent care",
    approach: "Healthcare construction demands precision. We navigate complex regulatory requirements while creating healing environments for patients and efficient spaces for providers.",
  },
  {
    type: "Industrial & Warehouse",
    examples: "Distribution centers, manufacturing facilities, flex space",
    approach: "Tampa's industrial market is booming. We build the facilities that power commerce—from small flex buildings to major distribution centers.",
  },
  {
    type: "Educational & Institutional",
    examples: "Schools, training centers, religious facilities, government buildings",
    approach: "Institutional projects require specialized expertise. We understand the unique requirements of public-serving facilities and the approval processes they involve.",
  },
  {
    type: "Tenant Improvements",
    examples: "Office buildouts, restaurant conversions, retail renovations",
    approach: "Sometimes you don't need a new building—you need to transform existing space. Our tenant improvement expertise delivers quality spaces on tight timelines.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description: "We start by understanding your vision, requirements, budget, and timeline. Our team asks the right questions to ensure we're aligned from day one.",
  },
  {
    step: 2,
    title: "Planning",
    description: "During preconstruction, we develop detailed estimates, identify value engineering opportunities, and create a realistic schedule. No surprises later.",
  },
  {
    step: 3,
    title: "Execution",
    description: "Our experienced teams manage every aspect of construction—quality, safety, schedule, and budget—with transparent communication throughout.",
  },
  {
    step: 4,
    title: "Delivery",
    description: "We don't just hand over keys. We ensure systems are commissioned, teams are trained, and you're ready for successful occupancy.",
  },
];

const faqs = [
  {
    question: "What makes Florida Construction Specialists a 'top' commercial contractor?",
    answer: "Our reputation is built on results: decades of successful project delivery, repeat clients who trust us with project after project, industry recognition, and referrals from architects, developers, and satisfied clients. We maintain the highest standards for licensing, insurance, safety, and quality—and we're deeply embedded in Tampa Bay's construction community.",
  },
  {
    question: "What types of commercial projects do you handle?",
    answer: "We're a full-service commercial contractor handling projects across all sectors: office, retail, hospitality, healthcare, industrial, educational, and institutional. We offer general contracting, design-build, and construction management services. Project sizes range from small tenant improvements to major ground-up construction.",
  },
  {
    question: "What geographic areas do you serve?",
    answer: "Our primary service area is Tampa Bay—including Tampa, St. Petersburg, Clearwater, Brandon, and surrounding communities. We also serve the greater Central Florida region including Lakeland, Sarasota, and along the I-4 corridor. For the right projects, we'll go wherever our clients need us in Florida.",
  },
  {
    question: "How do your fees compare to other commercial contractors?",
    answer: "We're competitive with other top-tier commercial contractors in Tampa Bay. Our pricing reflects the value we provide: experienced teams, quality workmanship, reliable schedules, and professional project management. We're not the cheapest option—and clients who've experienced budget contractors understand why that matters.",
  },
  {
    question: "Do you offer design-build services?",
    answer: "Yes. Design-build is one of our core services, providing single-source responsibility for both design and construction. This approach often accelerates schedules, improves coordination, and gives you one accountable partner. We work with trusted design partners or can incorporate your preferred architect into the team.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Florida Construction Specialists commercial project"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Florida's Top Commercial Contractor in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Florida Construction Specialists has earned our reputation through decades of successful commercial projects. Discover why Tampa Bay businesses trust us with their most important construction needs.
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
              Being called "Florida's top commercial contractor" isn't a title we gave ourselves—it's a reputation we've earned project by project, client by client, over decades of delivering excellence in Tampa Bay's commercial construction market.
            </p>
            <p className="text-gray-600 mb-6">
              In an industry where many contractors come and go, we've built lasting relationships with clients who return to us for project after project. We've developed deep partnerships with the region's best subcontractors and suppliers. We've navigated Tampa's permitting requirements, hurricane seasons, and market fluctuations while consistently delivering quality results.
            </p>
            <p className="text-gray-600 mb-8">
              What does being a "top" contractor mean in practice? It means we have the experience to anticipate problems before they occur. The relationships to assemble the right team for every project. The financial stability to see projects through regardless of market conditions. And the commitment to make your project's success our priority.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            What Sets Florida Construction Specialists Apart
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Any contractor can make promises. These are the qualities that define our performance.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Commercial Construction Expertise
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We bring specialized expertise to every type of commercial project.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{item.type}</h3>
                <p className="text-sm text-brand-gold mb-3">{item.examples}</p>
                <p className="text-gray-600 text-sm">{item.approach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Our Proven Process
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Every successful project follows a proven path from concept to completion.
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

      {/* Service Areas */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading flex items-center gap-3">
              <MapPin className="w-8 h-8 text-brand-gold" />
              Tampa Bay & Beyond
            </h2>
            <p className="text-gray-600 mb-8">
              We're proud to serve the entire Tampa Bay region and surrounding areas throughout Central Florida.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                  <h3 className="font-bold text-brand-green-dark mb-1">{area.area}</h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Tampa */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Why Tampa Bay Needs Top-Tier Contractors
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Tampa Bay is one of the fastest-growing metropolitan areas in the United States, and that growth demands quality commercial construction. The businesses relocating here, the entrepreneurs starting here, and the investors building here deserve contractors who can deliver excellence—not just adequate work.
              </p>
              <p className="mb-6">
                Florida's construction environment presents unique challenges. Hurricane codes are among the nation's strictest. The subtropical climate requires specific construction techniques and materials. The permitting landscape varies significantly between jurisdictions. And the booming market means competition for skilled labor and quality subcontractors is fierce.
              </p>
              <p className="mb-6">
                A top contractor in this market must have more than just construction skills. We need deep local knowledge, established relationships, financial stability to weather market fluctuations, and the commitment to maintain quality even when it would be easier to cut corners.
              </p>
              <p>
                That's what Florida Construction Specialists brings to every project. We're not just building structures—we're building Tampa Bay's future, one quality project at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Our Credentials
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4 font-heading">Licensing & Insurance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Florida Certified General Contractor (CGC)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Comprehensive general liability insurance</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Full workers' compensation coverage</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Bonding capacity for major projects</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4 font-heading">Industry Involvement</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Tampa Bay Builders Association member</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>ABC Florida active participant</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>OSHA safety certified</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>BBB accredited business</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3 font-heading">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Experience the Florida Construction Specialists Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us show you why Tampa Bay's most discerning clients choose us for their commercial construction projects.
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
    </>
  );
}
