import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Award, Users, Clock, Shield, HelpCircle, Star, Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Tampa's Premier Commercial Remodeling Contractors",
  description: "Tampa Bay's leading commercial remodeling contractors since 2006. Expert office, retail, medical, and industrial renovations with proven track record across Hillsborough, Pinellas, Pasco, and Polk counties.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa's Premier Commercial Remodeling Contractors", href: "/tampas-premier-commercial-remodeling-contractors/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/key-signs-your-commercial-remodel-needs/", label: "Signs You Need a Remodel" },
  { href: "/contact/", label: "Get Free Estimate" },
];

const relatedArticles = [
  {
    "title": "Mastering Commercial Construction Design in Florida",
    "href": "/mastering-commercial-construction-design-in-florida/",
    "description": "Learn the ins and outs of architectural design and commercial building design with our comprehensive guide for Florida projects."
  },
  {
    "title": "Benefits of Design-Build for Commercial Projects",
    "href": "/benefits-of-design-build-construction-for-commercial-project/",
    "description": "Discover how design-build delivery streamlines commercial construction with single-source accountability."
  },
  {
    "title": "Commercial Construction Budgeting Tips",
    "href": "/commercial-construction-budgeting-tips-for-florida-specialists/",
    "description": "Expert strategies for developing and managing budgets for commercial construction in Florida."
  },
  {
    "title": "Tips for Commercial Renovation in Florida",
    "href": "/tips-for-commercial-renovation-in-florida/",
    "description": "Key considerations for successful commercial renovation projects in the Sunshine State."
  }
];

const credentials = [
  { title: "Licensed & Insured", description: "Florida CGC License, $2M+ liability coverage", icon: Shield },
  { title: "20+ Years Experience", description: "Serving Tampa Bay since 2006", icon: Clock },
  { title: "500+ Projects Completed", description: "Commercial projects across all sectors", icon: Building2 },
  { title: "Award-Winning Quality", description: "ABC Excellence in Construction awards", icon: Award },
];

const serviceAreas = [
  "Tampa", "St. Petersburg", "Clearwater", "Brandon", "Lakeland",
  "Wesley Chapel", "New Port Richey", "Plant City", "Riverview", "Sarasota"
];

const faqs = [
  {
    question: "What sets Florida Construction Specialists apart from other Tampa commercial contractors?",
    answer: "Three key differentiators set us apart: First, our design-build capability means you work with one team from concept through completion, eliminating costly miscommunication between architects and contractors. Second, our deep Tampa Bay expertise—including relationships with local inspectors, subcontractors, and suppliers—translates to faster permits and better pricing. Third, our track record: 500+ completed commercial projects with 95%+ on-time, on-budget completion rate. We're not just contractors; we're construction partners invested in your success."
  },
  {
    question: "How do you handle commercial remodeling while businesses remain open?",
    answer: "Occupied remodels are our specialty. We develop detailed phasing plans that isolate work areas with dust barriers and negative air pressure. Noisy work is scheduled during off-hours or in phases that minimize disruption. We maintain clean, safe access for employees and customers throughout construction. Our project managers provide daily updates and adjust schedules proactively when business needs change. Many Tampa clients maintain 70-80% normal operations during major remodels."
  },
  {
    question: "What is your typical timeline for commercial remodeling projects?",
    answer: "Timelines vary by scope: Minor tenant improvements (paint, flooring, fixtures) typically complete in 4-8 weeks. Moderate remodels with some system upgrades run 3-6 months. Major building transformations requiring structural changes take 6-12 months. We provide detailed schedules during preconstruction and update them weekly. Our on-time completion rate exceeds 95% because we build realistic buffers for permits, inspections, and weather into every schedule."
  },
  {
    question: "Do you provide design services or work with existing architectural plans?",
    answer: "Both. Our design-build team includes architects and interior designers who can develop your project from concept sketches to construction documents. We also work seamlessly with outside architects, coordinating closely to ensure their vision is buildable within budget. For many commercial remodels, our in-house design capability saves 15-20% versus separate architect/contractor arrangements while reducing timeline by 4-8 weeks."
  },
  {
    question: "What commercial building types do you specialize in?",
    answer: "We've completed projects across virtually every commercial building type in Tampa Bay: office buildings from single-story to high-rise, retail spaces from boutiques to big-box, medical facilities including surgical centers and dental offices, restaurants and hospitality venues, warehouses and light industrial, religious facilities, and educational buildings. This breadth of experience means we understand the unique requirements of your specific building type."
  },
  {
    question: "How do you handle permits and inspections in Tampa Bay?",
    answer: "Permit management is included in every contract. Our team prepares all applications, coordinates plan reviews with Tampa, Hillsborough County, or other jurisdictions, and schedules all required inspections. We've built strong relationships with local building officials over 20 years, which helps resolve questions quickly. We track permit status daily and keep you informed of any issues. This expertise typically saves 2-4 weeks versus owners attempting to navigate permits themselves."
  },
  {
    question: "What warranties do you provide on commercial remodeling work?",
    answer: "We provide a comprehensive 1-year warranty covering all workmanship, with extended warranties on specific systems: 2 years on mechanical systems, manufacturer warranties (typically 10-25 years) on roofing, and various equipment warranties. We also coordinate warranty registration for all installed equipment. Our warranty response time averages under 48 hours for non-emergency issues and same-day for emergencies. Many clients tell us our warranty service exceeds what they experienced during construction."
  }
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Premier commercial remodeling contractors in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <div className="flex justify-center mb-6">
            <span className="bg-brand-gold text-white px-4 py-2 rounded-full text-sm font-bold">
              TAMPA BAY'S TRUSTED COMMERCIAL CONTRACTOR SINCE 2006
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Premier Commercial Remodeling Contractors
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            From downtown Tampa high-rises to suburban retail centers, Florida Construction Specialists delivers expert commercial remodeling with on-time, on-budget results. 500+ projects completed. 95% client satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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

      {/* Credentials */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <credential.icon className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{credential.title}</h3>
                <p className="text-gray-600 text-sm">{credential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Tampa Bay Businesses Choose Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Selecting a commercial remodeling contractor in Tampa is one of the most consequential decisions a business owner or property manager makes. The right contractor transforms your vision into reality on time and within budget. The wrong choice leads to cost overruns, schedule delays, and operational disruptions that can threaten your business. Florida Construction Specialists has earned our reputation as Tampa's premier commercial contractor through two decades of consistent excellence.
            </p>
            <p className="text-gray-600 mb-6">
              Our journey began in 2006 when founder decided that Tampa Bay businesses deserved better construction experiences. Too many commercial projects were plagued by poor communication, surprise costs, and contractors who disappeared when problems arose. We built Florida Construction Specialists on a simple premise: treat every project like our reputation depends on it—because it does. That philosophy has guided us through more than 500 commercial projects across Tampa, St. Petersburg, Clearwater, and surrounding communities.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Comprehensive Commercial Remodeling Services
            </h2>
            <p className="text-gray-600 mb-6">
              Our commercial remodeling capabilities span the full spectrum of project types and complexities. From refreshing a tired office lobby to complete building transformations, our team has the expertise and resources to deliver. We've remodeled Class A office towers in downtown Tampa, revitalized shopping centers in Pinellas County, transformed medical facilities in Brandon, and modernized industrial buildings throughout Polk County.
            </p>
            <p className="text-gray-600 mb-6">
              What distinguishes our approach is integration. Rather than managing separate architects, engineers, and specialty contractors, we offer design-build services that bring all disciplines under one roof. This integration eliminates the finger-pointing and coordination failures that plague traditionally-structured projects. When one company is responsible for design and construction, accountability is clear and problems get solved rather than debated.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">
              Office Building Remodeling
            </h3>
            <p className="text-gray-600 mb-6">
              Tampa Bay's office market continues evolving as businesses adapt to new work patterns. We help property owners and tenants create modern, flexible workspaces that attract and retain talent. Our office remodeling services include open floor plan conversions, private office buildouts, conference room upgrades, common area renovations, and full building repositioning. We understand that office remodels must often proceed while tenants remain in place, and we've developed sophisticated phasing and dust control protocols to minimize disruption.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">
              Retail Space Transformation
            </h3>
            <p className="text-gray-600 mb-6">
              Retail success in Tampa Bay's competitive market requires spaces that create compelling customer experiences. We've helped national brands build out new locations, assisted local retailers in refreshing tired spaces, and enabled property owners to reposition entire shopping centers. Our retail expertise includes high-end finishes, complex MEP requirements for restaurants, and the fast-track schedules that retail demands. We understand that every day a retail space isn't open is revenue lost.
            </p>

            <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">
              Medical Facility Renovation
            </h3>
            <p className="text-gray-600 mb-6">
              Healthcare construction requires specialized knowledge of AHCA regulations, infection control during construction, and the unique mechanical and electrical systems medical facilities demand. Florida Construction Specialists has completed dozens of medical facility projects including surgical centers, dental offices, urgent care clinics, and medical office buildings. Our team understands the critical importance of maintaining sterile conditions during construction and the regulatory compliance requirements that govern healthcare spaces.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Commercial Remodeling Investment Guide - Tampa Bay 2024</h3>
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Project Type</th>
                    <th className="px-6 py-3 text-left">Cost Range (per SF)</th>
                    <th className="px-6 py-3 text-left">Key Factors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Office Refresh</td>
                    <td className="px-6 py-4">$45 - $85</td>
                    <td className="px-6 py-4">Paint, carpet, fixtures</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Office Renovation</td>
                    <td className="px-6 py-4">$85 - $175</td>
                    <td className="px-6 py-4">Layout changes, MEP updates</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Retail Buildout</td>
                    <td className="px-6 py-4">$75 - $200</td>
                    <td className="px-6 py-4">Varies by finish level</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Restaurant Buildout</td>
                    <td className="px-6 py-4">$150 - $350</td>
                    <td className="px-6 py-4">Kitchen, ventilation, grease traps</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Medical Office</td>
                    <td className="px-6 py-4">$175 - $350</td>
                    <td className="px-6 py-4">Specialized systems, compliance</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Surgical Center</td>
                    <td className="px-6 py-4">$350 - $600</td>
                    <td className="px-6 py-4">AHCA requirements, clean rooms</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Warehouse/Industrial</td>
                    <td className="px-6 py-4">$40 - $120</td>
                    <td className="px-6 py-4">Office areas, loading docks</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-2">*Costs are estimates; actual pricing depends on specific project requirements, materials, and market conditions.</p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Proven Commercial Remodeling Process
            </h2>
            <p className="text-gray-600 mb-6">
              Every successful commercial remodel follows a disciplined process. We've refined our approach over hundreds of projects to maximize efficiency while maintaining flexibility for each client's unique needs.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Discovery and Assessment:</strong> We begin by understanding your business goals, budget parameters, and timeline requirements. Our team conducts thorough site assessments to identify existing conditions, potential challenges, and opportunities for value engineering. This phase typically takes 1-2 weeks and results in a clear project definition.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Design Development:</strong> Whether working with our in-house design team or your architect, we develop plans that balance aesthetics, functionality, and budget. We provide ongoing cost feedback during design to prevent expensive surprises later. This collaborative approach ensures the final design is buildable at your target cost.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Preconstruction Planning:</strong> Before breaking ground, we finalize budgets, schedules, and logistics plans. We identify long-lead materials and initiate procurement. We coordinate with your operations team on phasing and access requirements. Permits are submitted and tracked. This thorough preparation enables smooth construction execution.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Construction Execution:</strong> Our experienced superintendents manage daily operations with a focus on quality, safety, and schedule adherence. Weekly progress meetings keep all stakeholders informed. Issues are identified and resolved quickly before they impact the project. We maintain clean, organized job sites that reflect the professionalism of our work.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Project Closeout:</strong> Final inspections, punch list completion, and turnover are managed with the same attention to detail as construction. We provide comprehensive documentation including warranties, as-built drawings, and operation manuals. Our team remains available to address any questions or concerns that arise after occupancy.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa Bay Service Area Coverage
            </h2>
            <p className="text-gray-600 mb-6">
              From our Tampa headquarters, we serve commercial clients throughout the greater Tampa Bay region. Our teams regularly work in Hillsborough, Pinellas, Pasco, and Polk counties, with selective projects extending to Manatee and Sarasota counties. This regional focus allows us to maintain the relationships and local knowledge that contribute to project success while ensuring we can respond quickly when you need us.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
            Serving Commercial Clients Throughout Tampa Bay
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area, index) => (
              <span key={index} className="bg-gray-100 text-brand-green-dark px-4 py-2 rounded-full font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-brand-green" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Commercial Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Work with Tampa's Best Commercial Contractor?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the 500+ Tampa Bay businesses that have trusted Florida Construction Specialists with their commercial remodeling projects. Request your free consultation today.
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
