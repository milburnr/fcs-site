import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Heart, Users, GraduationCap, Building2, Shield, TreePine } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Florida Construction Specialists - Committed to the Tampa Community",
  description: "Florida Construction Specialists is deeply committed to the Tampa Bay community. Local partnerships, workforce development, sustainable practices, and community support.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Florida Construction Specialists Committed to the Community in Tampa", href: "/florida-construction-specialists-committed-to-the-community-in-tampa/" },
];

const faqs = [
  {
    question: "How does Florida Construction Specialists support the Tampa Bay community?",
    answer: "Our community commitment takes many forms: partnering with local workforce development programs to train the next generation of construction professionals, supporting local charities and nonprofits, using local subcontractors and suppliers to keep economic benefits in our region, building sustainable projects that benefit the environment, and providing rapid disaster response when storms affect our neighbors."
  },
  {
    question: "Do you have apprenticeship or training programs?",
    answer: "Yes, we actively participate in apprenticeship programs and workforce development initiatives. We partner with local trade schools and community colleges, provide on-the-job training opportunities, and support employees pursuing additional certifications. Building skilled workforce is essential for our industry and our community's future."
  },
  {
    question: "What sustainable construction practices do you use?",
    answer: "We incorporate sustainable practices throughout our work: energy-efficient building systems, responsible material sourcing, construction waste recycling, water conservation features, and designs that reduce long-term environmental impact. We help clients achieve LEED certification and other green building standards when desired."
  },
  {
    question: "How do you respond when disasters affect Tampa Bay?",
    answer: "When hurricanes or other disasters strike, we mobilize rapidly to help our community recover. We provide emergency stabilization, help property owners navigate insurance claims, and perform restoration work that returns buildings to service. Our disaster response capabilities have helped countless Tampa Bay families and businesses recover from major storms."
  },
  {
    question: "Do you use local subcontractors and suppliers?",
    answer: "Whenever possible, yes. Our strong preference for local subcontractors and suppliers keeps economic benefits in Tampa Bay, supports local businesses and jobs, ensures accountability through ongoing relationships, and provides faster response times. Our long-term local partnerships are a key strength that benefits every project."
  }
];

const internalLinks = [
  { href: "/about/", label: "About Us" },
  { href: "/services/", label: "Our Services" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery" },
  { href: "/the-essential-role-of-florida-construction-specialists/", label: "Our Essential Role" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Florida Construction Specialists community commitment in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Florida Construction Specialists: Committed to the Community in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            More than a construction company—we're neighbors invested in Tampa Bay's success. Our commitment extends beyond building structures to building community through local partnerships, workforce development, sustainability, and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Partner With Us
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
              Florida Construction Specialists isn't just doing business in Tampa Bay—this is our home. Our families live here. Our employees' children attend local schools. We shop at local stores, worship at local churches, and care deeply about the community's wellbeing. This connection shapes how we operate, from the partnerships we build to the projects we take on to the values we uphold every day.
            </p>

            <p className="text-gray-600 mb-6">
              Community commitment isn't a marketing slogan for us—it's fundamental to who we are. We believe successful businesses have obligations beyond profit: to develop the next generation of skilled workers, to operate sustainably, to support organizations that strengthen our community, and to be there when disasters strike. These commitments guide our decisions and define our company culture.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Community Commitments
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <GraduationCap className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Workforce Development</h3>
                <p className="text-gray-600 mb-4">
                  The construction industry faces a skilled labor shortage that threatens Tampa Bay's growth. We're actively working to develop the next generation of construction professionals through apprenticeship programs, partnerships with local trade schools and community colleges, and on-the-job training opportunities.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Apprenticeship programs for multiple trades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Partnerships with Hillsborough Community College</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Internship opportunities for students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Career advancement support for employees</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Building2 className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Local Economic Impact</h3>
                <p className="text-gray-600 mb-4">
                  We prioritize keeping construction dollars in Tampa Bay. Our preference for local subcontractors and suppliers means the economic benefits of our projects circulate through our community, supporting local families and businesses rather than flowing to distant corporate headquarters.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Strong preference for local subcontractors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Local material sourcing when available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Supporting minority and women-owned businesses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Long-term relationships that strengthen local capacity</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <TreePine className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Environmental Responsibility</h3>
                <p className="text-gray-600 mb-4">
                  Tampa Bay's natural beauty and environmental health matter to us and our children's future. We incorporate sustainable practices throughout our operations—from energy-efficient building systems to responsible waste management to water conservation features.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Construction waste recycling programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Energy-efficient building systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>LEED certification support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Sustainable material selection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Heart className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Community Support</h3>
                <p className="text-gray-600 mb-4">
                  We support organizations that strengthen Tampa Bay—from youth programs to food banks to disaster relief. Our involvement goes beyond writing checks to include employee volunteerism, in-kind construction support, and board service with local nonprofits.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Financial support for local charities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Employee volunteer programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Pro bono construction assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Board service with community organizations</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              When Disasters Strike: Serving Our Neighbors
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-blue-800 mb-2">Hurricane Response Commitment</h3>
                  <p className="text-blue-700 mb-4">
                    When hurricanes threaten Tampa Bay, our community faces them together. Florida Construction Specialists maintains disaster response capabilities to help our neighbors recover. We've provided emergency assistance after every major hurricane to affect our region, helping families and businesses get back on their feet.
                  </p>
                  <p className="text-blue-700">
                    Our hurricane response includes emergency tarping and board-up services, water extraction and drying, temporary repairs to prevent further damage, comprehensive damage assessment and documentation, insurance claim support, and complete restoration construction. We prioritize helping our community when it matters most.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Building Tampa Bay's Future
            </h2>

            <p className="text-gray-600 mb-6">
              The buildings we construct shape our community for decades. We take this responsibility seriously, approaching each project with awareness that we're not just building structures—we're creating spaces where Tampa Bay families will live, work, learn, heal, and gather. This perspective influences how we design, build, and stand behind our work.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Healthcare Facilities That Serve Our Community</h3>
                  <p className="text-gray-600">Our medical construction projects create spaces where Tampa Bay residents receive care—from urgent care clinics to specialty medical offices to diagnostic centers. We build these facilities to the highest standards, understanding that quality construction directly affects patient safety and care delivery.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Building2 className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Commercial Spaces That Drive Economic Growth</h3>
                  <p className="text-gray-600">The retail centers, offices, and industrial facilities we build house businesses that employ our neighbors and serve our community. Quality construction creates functional spaces that support business success, contributing to Tampa Bay's economic vitality.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Historic Preservation That Honors Our Heritage</h3>
                  <p className="text-gray-600">Tampa Bay's historic buildings connect us to our past. Our restoration work preserves these irreplaceable structures for future generations, maintaining the character and stories that make our community unique.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-brand-green flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">Homes Built to Protect Tampa Bay Families</h3>
                  <p className="text-gray-600">Our residential construction prioritizes hurricane resistance and quality that protects families through Florida's challenging weather. We build homes designed to provide safety and comfort for generations.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Commitment in Action
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-brand-green mb-2">50+</div>
                <p className="text-gray-600">Local Subcontractor Partners</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-brand-green mb-2">100+</div>
                <p className="text-gray-600">Tampa Bay Jobs Created</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-brand-green mb-2">20+</div>
                <p className="text-gray-600">Years Serving Tampa Bay</p>
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
              <h3 className="text-2xl font-bold mb-4">Partner with a Community-Focused Contractor</h3>
              <p className="mb-6 text-gray-200">
                When you work with Florida Construction Specialists, you're partnering with a company genuinely invested in Tampa Bay's success. Contact us to discuss how we can help with your construction project while contributing to our shared community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Contact Us
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
            title="Learn More About Us"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Building Community, One Project at a Time
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists—proudly serving and committed to the Tampa Bay community.
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
