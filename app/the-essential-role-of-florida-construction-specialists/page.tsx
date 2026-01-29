import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Award, Shield, Users, Clock, Building2, Wrench, Heart } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "The Essential Role of Florida Construction Specialists | Tampa's Premier Contractor",
  description: "Discover the essential role Florida Construction Specialists plays in Tampa Bay's construction industry. Premier commercial contractor delivering excellence since our founding.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "The Essential Role of Florida Construction Specialists", href: "/the-essential-role-of-florida-construction-specialists/" },
];

const faqs = [
  {
    question: "What types of construction projects does Florida Construction Specialists handle?",
    answer: "We handle the full spectrum of construction projects: commercial new construction (retail, office, medical, industrial), historic restoration and preservation, residential custom homes and renovations, disaster recovery and hurricane restoration, tenant improvements, and specialty projects. Our diverse capabilities allow us to serve Tampa Bay comprehensively, from ground-up developments to sensitive historic renovations."
  },
  {
    question: "What sets Florida Construction Specialists apart from other Tampa contractors?",
    answer: "Several factors distinguish us: decades of local experience understanding Tampa Bay's unique construction challenges, comprehensive in-house capabilities reducing coordination issues, strong relationships with quality subcontractors ensuring workforce availability, commitment to on-time and on-budget delivery, transparent communication throughout projects, and genuine investment in our community's success beyond just business."
  },
  {
    question: "How do you ensure quality construction?",
    answer: "Quality starts with experienced project management and field supervision. We use detailed specifications, quality checklists, and systematic inspections throughout construction. Our long-term subcontractor relationships mean we work with crews who know our standards. We don't just meet code—we build to last, understanding that our reputation depends on buildings that perform over decades."
  },
  {
    question: "Do you handle hurricane damage restoration?",
    answer: "Yes, hurricane restoration is a core capability. We provide emergency response for immediate stabilization, comprehensive damage assessment, insurance claim documentation support, and complete restoration construction. Our experience with every major hurricane to affect Tampa Bay in recent decades gives us unmatched expertise in storm damage repair and building resilience improvements."
  },
  {
    question: "What geographic area do you serve?",
    answer: "We serve the entire Tampa Bay metropolitan area including Tampa, St. Petersburg, Clearwater, Brandon, Lakeland, Sarasota, and surrounding communities throughout Hillsborough, Pinellas, Pasco, Polk, and Manatee counties. Our familiarity with local conditions, codes, and officials across these jurisdictions enables efficient project delivery throughout the region."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/services/historic-restoration/", label: "Historic Restoration" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery" },
  { href: "/contact/", label: "Contact Us" },
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
            alt="Florida Construction Specialists Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            The Essential Role of Florida Construction Specialists
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Tampa Bay's premier construction partner for commercial, residential, historic restoration, and disaster recovery projects. Building our community with quality, integrity, and commitment to excellence.
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

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              In Tampa Bay's dynamic construction landscape, Florida Construction Specialists has established itself as an essential partner for projects that matter. From landmark commercial developments to sensitive historic restorations, from custom luxury homes to emergency hurricane recovery, we bring the expertise, resources, and commitment that complex construction demands. Our role extends beyond simply building structures—we're invested in creating spaces that serve our community for generations.
            </p>

            <p className="text-gray-600 mb-6">
              What makes a contractor "essential" rather than simply competent? It's the ability to handle diverse project types with consistent excellence. It's having the depth of experience to anticipate challenges before they become problems. It's maintaining the relationships—with subcontractors, suppliers, and officials—that enable smooth project execution. And it's demonstrating, project after project, the reliability that property owners and developers depend upon.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Core Capabilities That Define Our Role
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Commercial Construction</h3>
                <p className="text-gray-600 mb-4">
                  Our commercial division handles projects from small retail build-outs to major institutional facilities. We understand that commercial construction must serve business objectives—delivering functional spaces on predictable schedules and budgets. Our experience spans retail, office, medical, industrial, hospitality, and mixed-use developments.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Ground-up new construction</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Tenant improvements</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Renovations and expansions</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Design-build delivery</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Award className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Historic Restoration</h3>
                <p className="text-gray-600 mb-4">
                  Tampa Bay's historic buildings require specialized expertise to preserve their character while meeting modern needs. We work with preservation standards, historic tax credit requirements, and period-appropriate techniques. Our restoration work has brought new life to significant structures throughout the region.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Secretary of Interior standards</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Tax credit compliance</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Adaptive reuse</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Material matching/sourcing</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Disaster Recovery</h3>
                <p className="text-gray-600 mb-4">
                  When hurricanes and disasters strike Tampa Bay, our community depends on rapid, capable response. We provide emergency stabilization, comprehensive damage assessment, insurance documentation, and complete restoration. Our hurricane response capabilities have helped countless property owners recover from major storms.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> 24/7 emergency response</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Insurance claim support</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Complete restoration</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Resilience improvements</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Wrench className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Residential Construction</h3>
                <p className="text-gray-600 mb-4">
                  Custom homes and significant residential projects require attention to detail that standard production builders don't provide. We build luxury custom homes, major renovations, and additions with the craftsmanship discerning homeowners expect. Hurricane-resistant construction protects Tampa Bay families.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Custom home construction</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Major renovations</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Home additions</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Hurricane hardening</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Tampa Bay Chooses Florida Construction Specialists
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Decades of Local Experience</h3>
                  <p className="text-gray-600">We've built in Tampa Bay for decades, accumulating deep knowledge of local conditions, codes, officials, and best practices. We understand the unique challenges of Florida construction—from hurricane requirements to flood zones to the demands of our climate. This experience means fewer surprises and more successful outcomes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Trusted Relationships</h3>
                  <p className="text-gray-600">Construction success depends on people—subcontractors, suppliers, inspectors, architects, engineers. We've built relationships over decades that enable smooth project execution. Our subcontractors know our standards and prioritize our projects. Our supplier relationships ensure material availability. These relationships are assets that benefit every client.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Commitment to Quality</h3>
                  <p className="text-gray-600">We build for the long term. Our reputation depends on buildings that perform—not just passing inspection, but serving their occupants reliably for decades. Quality construction means lower maintenance costs, fewer problems, and better long-term value. We won't compromise on quality to save schedule or budget.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Reliable Performance</h3>
                  <p className="text-gray-600">We meet our commitments. Budgets are accurate. Schedules are realistic and honored. Communication is transparent and timely. When issues arise—as they inevitably do in construction—we address them promptly and honestly. Our clients know what to expect because we deliver what we promise.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Community Investment</h3>
                  <p className="text-gray-600">We're not just doing business in Tampa Bay—this is our home. Our success is tied to the region's prosperity. We invest in local workforce development, support community organizations, and take pride in contributing to Tampa Bay's growth. When you work with us, you're working with neighbors invested in shared success.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Approach to Every Project
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Understanding Your Goals</h3>
                  <p className="text-gray-600">Every project starts with understanding what you're trying to achieve—not just what you want to build, but why. Your objectives inform every decision throughout the project. We ask questions, listen carefully, and ensure we're aligned before work begins.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Thorough Planning</h3>
                  <p className="text-gray-600">Successful construction requires thorough planning before breaking ground. We invest in preconstruction—developing detailed budgets, realistic schedules, and comprehensive scopes. This upfront investment prevents problems during construction.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Expert Execution</h3>
                  <p className="text-gray-600">Our experienced project managers and field supervisors ensure quality execution. We coordinate subcontractors efficiently, maintain clean and safe job sites, and manage the countless details that determine project success.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Transparent Communication</h3>
                  <p className="text-gray-600">You'll never wonder what's happening on your project. Regular updates, immediate notification of issues, and accessible project managers keep you informed. We believe transparency builds trust and produces better outcomes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-1">Quality Completion</h3>
                  <p className="text-gray-600">We don't consider a project complete until it meets our standards—not just passing inspection, but ready for proud occupancy. Thorough punch lists, proper documentation, and responsive warranty support ensure satisfaction long after construction ends.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Partner with Tampa Bay's Premier Contractor</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists to discuss how we can contribute to your project's success. Whether you're planning commercial development, considering historic restoration, building a custom home, or need disaster recovery support, we bring the expertise and commitment your project deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Start Your Project
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
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

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Building Tampa Bay's Future
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists—your essential construction partner for projects that matter throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
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
