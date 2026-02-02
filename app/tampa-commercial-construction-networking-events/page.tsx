import Link from "next/link";
import Image from "next/image";
import { Phone, Calendar, MapPin, Users, Building2, Award, Briefcase, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Commercial Construction Networking Events 2024-2025 | Industry Guide",
  description: "Connect with industry leaders at Tampa commercial construction networking events. Find conferences, trade shows, and professional organizations in the Tampa Bay area.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Commercial Construction Networking Events", href: "/tampa-commercial-construction-networking-events/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/top-commercial-contractors-in-tampa/", label: "Top Tampa Contractors" },
  { href: "/tampa-commercial-construction-trends-updates-2024/", label: "2024 Construction Trends" },
  { href: "/commercial-construction-consultancy-in-tampa/", label: "Construction Consultancy" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const majorEvents = [
  {
    name: "Tampa Bay Builders Association Annual Expo",
    timing: "February/March annually",
    location: "Tampa Convention Center",
    description: "The region's largest construction industry gathering featuring 200+ exhibitors, educational sessions, and networking opportunities with builders, developers, and suppliers.",
    attendees: "3,000+",
    focus: ["New products", "Technology demos", "Industry awards", "Builder networking"],
  },
  {
    name: "ABC Florida Gulf Coast Chapter Events",
    timing: "Monthly meetings + annual conference",
    location: "Various Tampa Bay locations",
    description: "Associated Builders and Contractors hosts regular networking events, safety training, and the annual Excellence in Construction awards celebrating top commercial projects.",
    attendees: "100-500",
    focus: ["Commercial construction", "Safety training", "Subcontractor connections", "Awards program"],
  },
  {
    name: "NAIOP Tampa Bay Chapter Events",
    timing: "Monthly programs",
    location: "Downtown Tampa venues",
    description: "The Commercial Real Estate Development Association brings together developers, contractors, and commercial brokers for market updates and networking.",
    attendees: "100-300",
    focus: ["Development trends", "Market data", "Developer networking", "Deal flow"],
  },
  {
    name: "AGC Florida Annual Conference",
    timing: "Summer annually",
    location: "Rotating Florida locations",
    description: "Associated General Contractors of America brings together the state's leading commercial contractors for education, awards, and industry advocacy.",
    attendees: "500+",
    focus: ["Legislative updates", "Best practices", "Industry recognition", "Statewide networking"],
  },
];

const organizations = [
  {
    name: "Tampa Bay Builders Association (TBBA)",
    type: "Trade Association",
    members: "1,200+ members",
    benefits: ["Monthly networking events", "Government advocacy", "Education programs", "Industry directory listing"],
    website: "tbba.net",
  },
  {
    name: "ABC Florida Gulf Coast Chapter",
    type: "Trade Association",
    members: "400+ member companies",
    benefits: ["Safety programs", "Apprenticeship training", "Networking events", "Excellence awards"],
    website: "abcgulfcoast.org",
  },
  {
    name: "NAIOP Tampa Bay",
    type: "Commercial Real Estate",
    members: "500+ professionals",
    benefits: ["Market research", "Developer connections", "Educational programs", "Policy advocacy"],
    website: "naiopflorida.org",
  },
  {
    name: "USGBC Florida - Tampa Chapter",
    type: "Green Building",
    members: "300+ professionals",
    benefits: ["LEED education", "Sustainability networking", "Green building resources", "Project showcases"],
    website: "usgbc.org/florida",
  },
  {
    name: "SMPS Tampa Bay",
    type: "Marketing Professionals",
    members: "150+ members",
    benefits: ["Marketing education", "BD networking", "Industry insights", "Awards programs"],
    website: "smpstampabay.org",
  },
  {
    name: "CFMA Tampa Bay Chapter",
    type: "Financial Management",
    members: "100+ members",
    benefits: ["Financial education", "Benchmarking data", "CFO networking", "Industry resources"],
    website: "cfma.org",
  },
];

const annualCalendar = [
  { month: "January", events: "NAIOP Economic Forecast, ABC New Year Kickoff" },
  { month: "February", events: "TBBA Builder Expo, Construction Career Days" },
  { month: "March", events: "ABC Excellence Awards, NAIOP Awards Gala" },
  { month: "April", events: "Earth Day green building events, safety summits" },
  { month: "May", events: "Construction Safety Week, TBBA golf tournament" },
  { month: "June", events: "AGC Florida Conference, mid-year market updates" },
  { month: "July", events: "Summer networking mixers, young professionals events" },
  { month: "August", events: "Back-to-business networking, education sessions" },
  { month: "September", events: "NAIOP development tours, ABC apprentice events" },
  { month: "October", events: "Construction industry month, career fairs" },
  { month: "November", events: "Thanksgiving charity builds, year-end planning" },
  { month: "December", events: "Holiday parties, annual membership renewals" },
];

const faqs = [
  {
    question: "What is the best networking event for commercial contractors in Tampa?",
    answer: "For commercial contractors, the ABC Florida Gulf Coast Chapter offers the most focused commercial construction networking. Their monthly events attract general contractors, specialty contractors, and suppliers specifically serving the commercial market. The annual Excellence in Construction Awards is particularly valuable for showcasing your work and connecting with potential partners.",
  },
  {
    question: "How much do Tampa construction networking events cost?",
    answer: "Costs vary widely. Association meetings typically range from free for members to $50-75 for non-members. Major conferences like the TBBA Expo cost $50-150 for attendance, while annual galas run $150-300 per person. Most associations offer significant discounts for members, making membership worthwhile if you attend multiple events yearly.",
  },
  {
    question: "Are these events worth attending for small contractors?",
    answer: "Absolutely. Networking events are particularly valuable for smaller contractors looking to build relationships with general contractors who need subcontractors, or with developers planning future projects. Many successful contractors credit networking events with generating their biggest opportunities. Focus on building genuine relationships rather than hard selling.",
  },
  {
    question: "What organizations should a commercial contractor join in Tampa?",
    answer: "For commercial contractors, ABC (Associated Builders and Contractors) and AGC (Associated General Contractors) are the primary industry associations. If you work with commercial developers, NAIOP is valuable for developer connections. Specialty contractors should also consider trade-specific associations like electrical, mechanical, or specialty contractors associations.",
  },
  {
    question: "How do I find out about upcoming construction events in Tampa?",
    answer: "Join at least one industry association—they'll email you event notifications. Follow Tampa Bay Business Journal for industry events. LinkedIn groups like 'Tampa Bay Construction Professionals' share event announcements. Most associations post event calendars on their websites with several months advance notice.",
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial construction networking in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa Commercial Construction Networking Events
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Connect with developers, contractors, architects, and suppliers at Tampa Bay's premier construction industry events. Build relationships that build your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Connect With Us
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
              In commercial construction, relationships are everything. The contractor who gets the call for a new development project isn't always the one with the flashiest website—it's often the one who met the developer at a NAIOP breakfast six months ago. Tampa Bay's robust construction networking scene offers countless opportunities to build the relationships that lead to projects.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa's construction industry networking ecosystem is particularly vibrant due to the region's sustained growth. With billions of dollars in commercial development happening across Tampa, St. Petersburg, and Clearwater, industry associations have flourished. From the Tampa Bay Builders Association's 1,200+ members to specialty groups focused on green building, healthcare construction, and commercial real estate development, there's a networking opportunity for every niche.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you're a developer seeking qualified contractors, a contractor looking to connect with subcontractors, or a supplier wanting to meet decision-makers, this guide covers the events and organizations that matter most in Tampa Bay's commercial construction community.
            </p>

            <div className="bg-brand-green-light/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Networking Matters in Tampa's Construction Market
              </h2>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-1">70%</div>
                  <p className="text-sm text-gray-600">of commercial contracts come from relationships</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-1">$5B+</div>
                  <p className="text-sm text-gray-600">annual commercial construction in Tampa Bay</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-1">2,000+</div>
                  <p className="text-sm text-gray-600">construction companies in the metro area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Events */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Major Construction Networking Events
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Mark your calendar for these key events that bring together Tampa Bay's commercial construction community.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {majorEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark font-heading">{event.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.timing}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-2">
                  {event.focus.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Organizations */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Construction Industry Organizations in Tampa
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Join these organizations to access regular networking opportunities, industry resources, and professional development.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizations.map((org, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-brand-gold" />
                  <span className="text-xs font-semibold text-brand-gold uppercase">{org.type}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-green-dark mb-1 font-heading">{org.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{org.members}</p>
                <ul className="space-y-2 mb-4">
                  {org.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4 text-brand-green flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://${org.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-brand-green hover:underline"
                >
                  {org.website}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Calendar */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa Construction Events Calendar
            </h2>
            <p className="text-gray-600 mb-8">
              Plan your networking strategy with this overview of what happens throughout the year in Tampa's construction industry.
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Month</th>
                    <th className="px-6 py-4 text-left font-heading">Key Events & Activities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {annualCalendar.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-brand-green-dark">{item.month}</td>
                      <td className="px-6 py-4 text-gray-600">{item.events}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Networking Tips */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              How to Get the Most from Construction Networking Events
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Before the Event</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-600">Research the attendee list if available—identify 3-5 people you specifically want to meet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-600">Prepare your 30-second introduction—focus on what makes you valuable, not just what you do</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-600">Bring plenty of business cards and ensure your LinkedIn profile is current</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">During the Event</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-600">Arrive early—conversations are easier when the room isn't crowded</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-600">Ask questions and listen more than you talk—people remember those who show genuine interest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-600">Connect people with each other—being a connector makes you valuable to everyone</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">After the Event</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-green-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-600">Follow up within 48 hours—send a LinkedIn request with a personalized note</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-green-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-600">Schedule coffee or lunch with the most promising connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-green-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-600">Add notes to your CRM about each person—what they're working on, how you might help</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Long-Term Strategy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-green-forest rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span className="text-gray-600">Attend consistently—showing up regularly builds recognition and trust</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-green-forest rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span className="text-gray-600">Get involved—join committees, speak at events, sponsor programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-brand-green-forest rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span className="text-gray-600">Give before you ask—refer business to others and help will come back to you</span>
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

      {/* FCS in the Community */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                Florida Construction Specialists in the Community
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists is proud to be an active member of Tampa Bay's construction community. Our team regularly participates in industry events, serves on association committees, and contributes to programs that strengthen our local construction industry.
            </p>
            <p className="text-gray-600 mb-8">
              We believe that strong relationships make for better projects. When contractors, subcontractors, suppliers, and developers know and trust each other, projects run more smoothly and everyone benefits. That's why we encourage our team members to participate in industry networking and why we sponsor programs that bring the construction community together.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-brand-green-dark mb-4">Meet Our Team at Industry Events</h3>
              <p className="text-gray-600 mb-4">
                Have a project to discuss? Looking for a construction partner? We'd love to connect. Look for the Florida Construction Specialists team at Tampa Bay Builders Association events, ABC meetings, and NAIOP programs throughout the year.
              </p>
              <Link href="/contact/" className="inline-flex items-center gap-2 text-brand-green hover:underline font-semibold">
                Or contact us directly to schedule a meeting
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Discuss Your Commercial Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether we meet at a networking event or in our office, we'd love to learn about your project and how we can help bring it to life.
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
