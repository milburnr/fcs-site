import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  Home,
  ArrowRight,
  Phone,
  HelpCircle,
  Clock,
  DollarSign,
  Wrench,
  FileCheck,
  Heart,
  Shield,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Renovating Historic Homes Tampa Bay | Expert Preservation | FCS",
  description:
    "Expert historic home renovation in Tampa Bay. Navigate preservation requirements, restore period features, and modernize sensitively while maintaining character in Hyde Park, Seminole Heights, and beyond.",
  keywords:
    "historic home renovation Tampa, old house restoration Florida, period home remodel Tampa Bay, vintage house renovation, historic preservation contractor, Tampa historic district renovation",
};

const renovationApproaches = [
  {
    approach: "Preservation",
    description: "Maintain existing historic fabric with minimal intervention",
    when: "Significant original features remain; strict historic district requirements",
    scope: "Repair rather than replace; stabilize existing conditions",
    cost: "Lower material cost; higher labor for skilled repairs",
  },
  {
    approach: "Rehabilitation",
    description: "Repair and alter for contemporary use while preserving character",
    when: "Home needs functional updates; most common approach",
    scope: "Modern systems; updated kitchens/baths; maintain exterior character",
    cost: "Moderate - balances preservation with practical upgrades",
  },
  {
    approach: "Restoration",
    description: "Return home to specific period appearance",
    when: "Museum-quality goals; tax credit projects; exceptional significance",
    scope: "Remove later additions; recreate missing features; period accuracy",
    cost: "Highest - requires extensive research and craftsmanship",
  },
  {
    approach: "Adaptive Reuse",
    description: "Convert to different use while preserving historic character",
    when: "Commercial conversion; accessory dwelling; mixed-use",
    scope: "Major interior changes; code compliance; exterior preservation",
    cost: "Varies widely based on new use requirements",
  },
];

const commonChallenges = [
  {
    challenge: "Outdated Electrical",
    symptoms: "Knob and tube wiring, insufficient circuits, two-prong outlets",
    solution: "Full rewire with concealed routing; panel upgrade",
    preservation: "Fish wires through walls; minimize visible changes",
    cost: "$15,000-$40,000 typical",
  },
  {
    challenge: "Plumbing Issues",
    symptoms: "Galvanized pipes, lead service lines, cast iron drains",
    solution: "Selective or full replacement; PEX or copper",
    preservation: "Access through floors/ceilings; restore surfaces after",
    cost: "$10,000-$30,000 typical",
  },
  {
    challenge: "Foundation Problems",
    symptoms: "Settling, pier deterioration, moisture intrusion",
    solution: "Pier reinforcement, leveling, waterproofing",
    preservation: "Match original materials; maintain original footprint",
    cost: "$15,000-$50,000+ depending on scope",
  },
  {
    challenge: "Window Deterioration",
    symptoms: "Rot, broken sash cords, failed glazing putty",
    solution: "Repair and weatherstrip; storm windows for efficiency",
    preservation: "Restore original windows rather than replace",
    cost: "$500-$1,500 per window restoration",
  },
  {
    challenge: "Roof Concerns",
    symptoms: "Leaks, missing shingles, structural sagging",
    solution: "Repair or replace with appropriate materials",
    preservation: "Match original roofing material and profile",
    cost: "$15,000-$50,000 depending on size and material",
  },
  {
    challenge: "HVAC Integration",
    symptoms: "No existing system or window units only",
    solution: "Mini-splits, high-velocity systems, or concealed ductwork",
    preservation: "Minimize visible equipment; protect original features",
    cost: "$20,000-$50,000 for whole-house system",
  },
];

const projectPhases = [
  {
    phase: "Pre-Purchase Due Diligence",
    activities: [
      "Historic designation verification",
      "Structural inspection by experienced inspector",
      "Hazardous materials assessment (lead, asbestos)",
      "Preliminary scope and budget development",
      "COA requirements review if in historic district",
    ],
    tips: "Don't skip this phase—historic homes hide expensive surprises",
  },
  {
    phase: "Planning & Design",
    activities: [
      "Measure and document existing conditions",
      "Research original construction and history",
      "Develop scope balancing preservation and function",
      "Select architect/designer with historic experience",
      "Prepare COA application if required",
    ],
    tips: "Invest in good documentation—it guides all decisions",
  },
  {
    phase: "Approvals & Permitting",
    activities: [
      "Certificate of Appropriateness (if in historic district)",
      "Building permit application",
      "Coordinate inspections and reviews",
      "Address staff comments and revisions",
      "Obtain all required approvals",
    ],
    tips: "Historic review adds 4-8 weeks; plan accordingly",
  },
  {
    phase: "Contractor Selection",
    activities: [
      "Identify contractors with historic experience",
      "Detailed scope review with each bidder",
      "Check references on similar projects",
      "Evaluate understanding of preservation requirements",
      "Negotiate contract with appropriate contingency",
    ],
    tips: "Experience matters more than lowest price for historic work",
  },
  {
    phase: "Construction",
    activities: [
      "Protect features being retained",
      "Careful demolition with salvage",
      "Address discoveries as they arise",
      "Regular communication on decisions",
      "Quality control throughout",
    ],
    tips: "Budget for unknowns—every historic home has surprises",
  },
  {
    phase: "Completion",
    activities: [
      "Final inspections",
      "Punch list with attention to detail",
      "Documentation of work completed",
      "Maintenance guidance for historic features",
      "Celebrate your preserved home",
    ],
    tips: "Document everything for future owners and maintenance",
  },
];

const budgetingGuide = [
  {
    category: "Structural & Foundation",
    percentage: "10-20%",
    notes: "Higher for homes with deferred maintenance; essential to address first",
  },
  {
    category: "Mechanical Systems (HVAC, Plumbing, Electrical)",
    percentage: "25-35%",
    notes: "Often the largest category; complete updates recommended",
  },
  {
    category: "Kitchen & Bathrooms",
    percentage: "15-25%",
    notes: "Balance modern function with period-appropriate style",
  },
  {
    category: "Exterior Restoration",
    percentage: "10-20%",
    notes: "Windows, siding, trim, paint—often COA-regulated",
  },
  {
    category: "Interior Finishes",
    percentage: "10-15%",
    notes: "Preserve original plaster, millwork, floors where possible",
  },
  {
    category: "Contingency",
    percentage: "15-20%",
    notes: "Essential for historic homes; discoveries are certain",
  },
];

const tampaHistoricAreas = [
  {
    area: "Hyde Park",
    era: "1880s-1930s",
    styles: "Colonial Revival, Mediterranean, Craftsman, Queen Anne",
    requirements: "Strict COA required; detailed design guidelines",
    typical: "Higher-end restorations; formal architecture",
  },
  {
    area: "Seminole Heights",
    era: "1910s-1940s",
    styles: "Craftsman Bungalow, Mediterranean, Minimal Traditional",
    requirements: "Multiple small districts; moderate COA requirements",
    typical: "Bungalow renovations; adaptive to modern living",
  },
  {
    area: "Tampa Heights",
    era: "1890s-1940s",
    styles: "Frame Vernacular, Craftsman, Folk Victorian",
    requirements: "Historic district with COA; focus on character",
    typical: "Working-class heritage; creative renovations",
  },
  {
    area: "Ybor City",
    era: "1880s-1920s",
    styles: "Casitas, Mediterranean, Commercial/Residential",
    requirements: "Very strict; National Register + local designation",
    typical: "Cigar worker cottages; mixed-use conversions",
  },
  {
    area: "West Tampa",
    era: "1890s-1930s",
    styles: "Vernacular, Shotgun, Craftsman",
    requirements: "Historic district; moderate requirements",
    typical: "Affordable historic options; cigar industry heritage",
  },
];

const faqs = [
  {
    question: "How much does it cost to renovate a historic home in Tampa?",
    answer:
      "Historic home renovation in Tampa typically costs $150-$400+ per square foot for comprehensive renovation, compared to $100-$250 for standard renovation. The premium comes from: skilled labor for preservation work, material matching requirements, longer timelines for careful work, unexpected discoveries (budget 15-20% contingency), and potential COA requirements adding design costs. A 2,000 SF Craftsman bungalow requiring full renovation might cost $300,000-$600,000+. Smaller projects—like a kitchen/bath update while preserving character—might run $75,000-$150,000. Get detailed bids from contractors experienced with historic homes, as they understand the true scope better than general contractors.",
  },
  {
    question: "Do I need special permits to renovate a historic home?",
    answer:
      "It depends on location and scope. If your home is in a locally designated historic district (Hyde Park, Tampa Heights, portions of Seminole Heights, Ybor City, etc.), you need a Certificate of Appropriateness (COA) for most exterior work visible from public ways. Interior work generally doesn't require COA unless it affects the exterior (like new HVAC equipment). If your home is on the National Register but NOT locally designated, standard permits apply—no COA needed. Even without historic designation, older homes may trigger code compliance issues during permit review. Verify your home's designation status before planning: contact Tampa Historic Preservation Office or check the Florida Master Site File.",
  },
  {
    question: "Should I restore original features or update to modern standards?",
    answer:
      "The best approach balances preservation with livability—what the Secretary of Interior's Standards calls 'rehabilitation.' Preserve: original millwork, hardwood floors, plaster walls and details, windows (restore rather than replace), decorative features, and architectural character. Update: electrical systems completely (safety essential), plumbing as needed, HVAC for comfort, kitchens and bathrooms for function, and energy efficiency where not visible. The goal is a home that works for contemporary life while honoring its heritage. In historic districts, some updates require approval—work with preservation staff to find compliant solutions.",
  },
  {
    question: "How do I find contractors experienced with historic homes?",
    answer:
      "Finding the right contractor is crucial. Start with: Tampa Preservation (local advocacy group) for referrals, architects who specialize in historic renovation (they know who does good work), neighbors in historic districts who've completed projects, and the Historic Preservation Office (they see who does compliant work). When vetting contractors, ask: specific experience with homes of your era and style, references from historic district projects, understanding of COA requirements, approach to discoveries and unknowns, and whether they have skilled craftspeople for specialized work. Visit completed projects if possible. A contractor who says 'just tear it out' doesn't understand preservation.",
  },
  {
    question: "What are the biggest surprises in historic home renovation?",
    answer:
      "Common surprises include: hidden structural issues (balloon framing without fire blocking, deteriorated floor joists, foundation settlement), hazardous materials (lead paint, asbestos in plaster, siding, or flooring), outdated systems worse than expected (knob-and-tube wiring, galvanized plumbing, cast iron drain failure), previous poor repairs (bad remodels that damaged original fabric), and missing features under later additions. Plan for 15-20% contingency minimum. Thorough pre-purchase inspection helps, but opening walls always reveals something. The key is having a contractor and budget flexible enough to address discoveries appropriately rather than cutting corners.",
  },
  {
    question: "Can I make a historic home energy efficient?",
    answer:
      "Yes, with preservation-sensitive approaches. Effective strategies include: attic insulation (invisible from exterior; major impact), interior storm windows (preserve original windows while adding efficiency), air sealing (weatherstripping, caulking gaps), high-efficiency HVAC (mini-splits or high-velocity systems minimize visible impact), and radiant barriers in attic. Avoid: replacing original windows (interior storms work nearly as well), spray foam directly on historic fabric, and visible solar panels on primary facades (may not be approved in historic districts). Energy improvements often qualify for tax credits separate from historic tax credits. A combination of careful upgrades can dramatically improve comfort while maintaining character.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Renovating Historic Homes Tampa", href: "/renovating-historic-homes-tampa/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function RenovatingHistoricHomesTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Historic Home Renovation" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Historic Home Renovation Services"
        serviceDescription="Expert historic home renovation throughout Tampa Bay. Preserve character, restore period features, and modernize sensitively in Hyde Park, Seminole Heights, and Tampa's historic neighborhoods."
        city="Tampa"
        minPrice="50000"
      />
      <ArticleSchema
        headline="Renovating Historic Homes Tampa Bay | Expert Preservation | FCS"
        description="Expert historic home renovation in Tampa Bay. Navigate preservation requirements, restore period features, and modernize sensitively while maintaining character in Hyde Park, Seminole Heights, and beyond."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/renovating-historic-homes-tampa/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Historic Preservation", href: "/residential/luxury-home-building/" },
          { name: "Renovating Historic Homes", href: "/renovating-historic-homes-tampa/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/historic-preservation/historic-preservation-large.webp"
            alt="Historic building restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="residential"
              customHubTitle="Historic Home Renovation"
              customHubHref="/residential/luxury-home-building/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Renovating Historic Homes in Tampa Bay
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Transform your vintage Tampa home into a comfortable modern residence
              while preserving its irreplaceable character. Expert guidance from
              initial planning through completion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta-gold">
                Discuss Your Historic Home
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-secondary-gold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation Approaches */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Renovation Approaches
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the right approach based on your goals and your home's significance.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {renovationApproaches.map((approach) => (
              <div key={approach.approach} className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {approach.approach}
                </h3>
                <p className="text-gray-600 mb-3">{approach.description}</p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    <strong className="text-brand-gold-dark">When:</strong> {approach.when}
                  </p>
                  <p className="text-gray-600">
                    <strong>Scope:</strong> {approach.scope}
                  </p>
                  <p className="text-gray-500">
                    <strong>Cost:</strong> {approach.cost}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Challenges & Solutions
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Issues you're likely to encounter and how to address them.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonChallenges.map((item) => (
              <div key={item.challenge} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-brand-green-dark mb-2">{item.challenge}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Symptoms:</strong> {item.symptoms}
                </p>
                <p className="text-sm text-green-700 bg-green-50 rounded p-2 mb-2">
                  <strong>Solution:</strong> {item.solution}
                </p>
                <p className="text-sm text-brand-gold-dark mb-2">
                  <strong>Preservation:</strong> {item.preservation}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  Typical Cost: {item.cost}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Historic Renovation Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A systematic approach ensures successful outcomes.
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {projectPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-gray-50 rounded-xl p-6 border-l-4 border-brand-gold"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                      {phase.phase}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2 mb-3">
                      {phase.activities.map((activity, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-brand-gold-dark bg-brand-gold-light/20 rounded p-2">
                      <strong>Tip:</strong> {phase.tips}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Budgeting Guide
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How renovation budgets typically break down for historic homes.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-brand-gold text-white">
                    <th className="px-6 py-4 text-left font-semibold">Category</th>
                    <th className="px-6 py-4 text-center font-semibold">% of Budget</th>
                    <th className="px-6 py-4 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetingGuide.map((item, index) => (
                    <tr
                      key={item.category}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 font-semibold text-brand-green-dark">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 text-center text-brand-gold-dark font-medium">
                        {item.percentage}
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tampa Historic Areas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tampa Historic Neighborhoods
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Each area has unique characteristics and requirements.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tampaHistoricAreas.map((area) => (
              <div key={area.area} className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-1">
                  {area.area}
                </h3>
                <p className="text-brand-gold-dark text-sm mb-3">{area.era}</p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    <strong>Styles:</strong> {area.styles}
                  </p>
                  <p className="text-gray-600">
                    <strong>Requirements:</strong> {area.requirements}
                  </p>
                  <p className="text-gray-500">
                    <strong>Typical:</strong> {area.typical}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-green-dark hover:no-underline py-4">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Historic Home Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/tampa-certificate-of-appropriateness/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                COA Application Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Navigate historic district approval process.
              </p>
            </Link>
            <Link
              href="/historic-home-energy-efficiency/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Energy Efficiency
              </h3>
              <p className="text-gray-600 text-sm">
                Improve comfort while preserving character.
              </p>
            </Link>
            <Link
              href="/sourcing-historic-materials-tampa-bay/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Sourcing Historic Materials
              </h3>
              <p className="text-gray-600 text-sm">
                Find period-appropriate materials locally.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Renovate Your Historic Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS brings decades of experience to Tampa Bay's historic homes. From
            Craftsman bungalows to Mediterranean estates, we help you create a
            home that honors its heritage while meeting your modern needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Project
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