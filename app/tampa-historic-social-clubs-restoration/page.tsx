import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Building,
  Phone,
  HelpCircle,
  History,
  Award,
  FileText,
  Users,
  MapPin,
  Landmark,
  DollarSign,
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
  title: "Tampa Historic Social Clubs Restoration | Ybor City Heritage | FCS",
  description:
    "Restoring Tampa's historic social clubs and mutual aid societies. Expert preservation of Ybor City's Italian, Cuban, and Spanish club buildings with historic tax credit guidance.",
  keywords:
    "Tampa historic social clubs, Ybor City restoration, mutual aid society buildings, Italian club Tampa, Cuban club restoration, historic preservation Tampa",
};

const historicClubs = [
  {
    name: "El Centro Español de Tampa",
    founded: "1891",
    location: "1526 E 7th Ave, Ybor City",
    architecture: "Mediterranean Revival with ornate theater",
    significance: "Largest Spanish social club; 1,800-seat theater; National Register listed",
    restorationNeeds: "Theater seating, stage rigging, HVAC integration, facade restoration",
  },
  {
    name: "L'Unione Italiana",
    founded: "1894",
    location: "1731 E 7th Ave, Ybor City",
    architecture: "Italian Renaissance Revival",
    significance: "Italian mutual aid society; elaborate ballroom; cultural center",
    restorationNeeds: "Plaster restoration, terrazzo floors, historic lighting, roof",
  },
  {
    name: "El Centro Asturiano",
    founded: "1902",
    location: "1913 N Nebraska Ave",
    architecture: "Spanish Colonial Revival",
    significance: "Spanish regional club; impressive courtyard; former hospital",
    restorationNeeds: "Courtyard restoration, tile work, structural repairs",
  },
  {
    name: "Cuban Club (Circulo Cubano)",
    founded: "1899/1917",
    location: "2010 Avenida Republica de Cuba",
    architecture: "Mediterranean Revival with Cuban influences",
    significance: "Cuban cultural center; cantina; ballroom; rooftop garden",
    restorationNeeds: "Roof repair, exterior stucco, interior finishes, accessibility",
  },
  {
    name: "El Centro Español de West Tampa",
    founded: "1891",
    location: "2306 N Howard Ave, West Tampa",
    architecture: "Mediterranean Revival",
    significance: "West Tampa Spanish community hub; mutual aid services",
    restorationNeeds: "Structural stabilization, roof, facade, adaptive reuse planning",
  },
  {
    name: "German American Club",
    founded: "1892",
    location: "Various locations",
    architecture: "Various",
    significance: "German immigrant community; social and cultural activities",
    restorationNeeds: "Varies by building; many structures lost or altered",
  },
];

const restorationChallenges = [
  {
    challenge: "Ornamental Plaster and Moldings",
    description: "Social clubs feature elaborate plaster work, cornices, and medallions typical of the era",
    approach: "Document existing conditions; create molds for reproduction; match original profiles",
    specialists: "Historic plaster restoration specialists with casting capabilities",
  },
  {
    challenge: "Historic Theater Elements",
    description: "Several clubs include theaters with original seating, stage equipment, and acoustics",
    approach: "Preserve original where possible; replicate to match; integrate modern systems invisibly",
    specialists: "Theater restoration consultants; historic seating manufacturers",
  },
  {
    challenge: "Terrazzo and Tile Floors",
    description: "Cuban and Italian tiles, terrazzo patterns reflecting ethnic heritage",
    approach: "Careful cleaning; patching with matching materials; protective sealers",
    specialists: "Terrazzo restoration contractors; Cuban tile suppliers",
  },
  {
    challenge: "Wood Windows and Doors",
    description: "Original wood windows with unique profiles, often deteriorated from humidity",
    approach: "Repair where possible; replicate matching profiles for replacement",
    specialists: "Historic millwork shops; wood window restoration specialists",
  },
  {
    challenge: "Historic HVAC Integration",
    description: "Adding climate control without damaging historic fabric or aesthetics",
    approach: "High-velocity mini-duct systems; ductless splits in concealed locations",
    specialists: "HVAC contractors experienced with historic buildings",
  },
  {
    challenge: "Code Compliance",
    description: "Meeting accessibility, fire safety, and building codes while preserving character",
    approach: "Work with building officials on alternative compliance; minimize visual impact",
    specialists: "Historic preservation architects familiar with Florida Building Code",
  },
];

const taxCreditProgram = [
  {
    credit: "Federal Historic Tax Credit",
    percentage: "20% of qualified rehabilitation expenses",
    requirements: "Certified historic structure; substantial rehabilitation; income-producing use",
    process: "NPS Part 1 (significance), Part 2 (proposed work), Part 3 (completed work)",
    timeline: "Part 1: 30 days; Part 2: 45-60 days; Part 3: 90 days after completion",
  },
  {
    credit: "Florida Historic Tax Credit",
    percentage: "Up to 20% of qualified expenses (varies by program)",
    requirements: "State-recognized historic property; meets Florida preservation standards",
    process: "Application through Florida Division of Historical Resources",
    timeline: "Varies; coordinate with federal application for maximum benefit",
  },
  {
    credit: "Ad Valorem Tax Exemption",
    percentage: "Up to 100% property tax exemption on improvements for 10 years",
    requirements: "Local government approval; historic designation; qualifying improvements",
    process: "Apply through Hillsborough County Property Appraiser",
    timeline: "Apply before construction begins; annual certification required",
  },
];

const adaptiveReuse = [
  {
    originalUse: "Main Assembly Hall",
    modernUses: "Event venue, wedding space, corporate meetings, community gatherings",
    considerations: "Maintain open volume; respect historic finishes; integrate catering facilities",
    revenue: "Event rental income; excellent ROI for restored ballrooms",
  },
  {
    originalUse: "Historic Theater",
    modernUses: "Performing arts venue, film screenings, lectures, private events",
    considerations: "Stage rigging upgrades; acoustic improvements; accessible seating",
    revenue: "Performance ticket sales; venue rental; film location fees",
  },
  {
    originalUse: "Cantina/Bar Area",
    modernUses: "Restaurant, craft cocktail bar, member lounge, museum cafe",
    considerations: "Historic bar preservation; kitchen integration; liquor licensing",
    revenue: "F&B operations; membership dues; event bar service",
  },
  {
    originalUse: "Library/Reading Rooms",
    modernUses: "Coworking space, small event room, museum gallery, board room",
    considerations: "Built-in millwork preservation; technology integration; lighting",
    revenue: "Membership/rental income; gallery admission; meeting room rental",
  },
  {
    originalUse: "Medical Clinic (some clubs)",
    modernUses: "Office space, wellness center, museum exhibit space",
    considerations: "Remove non-historic medical equipment; restore original features",
    revenue: "Lease income; program revenue; interpretive exhibits",
  },
];

const projectPhases = [
  {
    phase: "Assessment and Documentation",
    duration: "2-4 months",
    activities: "Historic structure report, condition assessment, measured drawings, photography",
    deliverables: "HSR report, existing conditions documentation, NPS Part 1 application",
  },
  {
    phase: "Design and Approvals",
    duration: "4-8 months",
    activities: "Schematic design, design development, SHPO coordination, NPS Part 2",
    deliverables: "Approved design documents, NPS Part 2 approval, permit drawings",
  },
  {
    phase: "Construction Documents",
    duration: "2-4 months",
    activities: "Detailed specifications, bidding documents, contractor prequalification",
    deliverables: "Complete bid package, qualified contractor list, permits",
  },
  {
    phase: "Construction",
    duration: "12-24 months (varies by scope)",
    activities: "Selective demolition, structural repairs, systems installation, finishes",
    deliverables: "Restored building, punch list completion, certificate of occupancy",
  },
  {
    phase: "Closeout and Certification",
    duration: "2-4 months",
    activities: "NPS Part 3 application, tax credit certification, warranties, as-builts",
    deliverables: "NPS Part 3 approval, tax credit certificates, O&M manuals",
  },
];

const faqs = [
  {
    question: "What are Tampa's historic social clubs?",
    answer:
      "Tampa's historic social clubs were mutual aid societies founded by immigrant communities in the late 19th and early 20th centuries. The major clubs include El Centro Español (Spanish), L'Unione Italiana (Italian), El Centro Asturiano (Asturian Spanish), and the Cuban Club (Circulo Cubano). These organizations provided healthcare, death benefits, education, and social activities for members before government safety nets existed. Their buildings - many on the National Register of Historic Places - represent some of Tampa's finest architecture and most important cultural heritage.",
  },
  {
    question: "Can historic social clubs qualify for tax credits?",
    answer:
      "Yes, most Tampa social club buildings can qualify for the 20% Federal Historic Tax Credit if they are listed on the National Register or are contributing structures in a National Register historic district. The rehabilitation must be substantial (exceeding the adjusted basis) and the building must be used for income-producing purposes after restoration. Many clubs combine tax credits with event venue operations, restaurant/bar income, and rental space to meet the income-producing requirement while maintaining community access.",
  },
  {
    question: "How much does it cost to restore a historic social club building?",
    answer:
      "Historic social club restoration in Tampa typically costs $300-500+ per square foot, reflecting the complexity of ornamental plaster, terrazzo, theater systems, and historic finishes. A comprehensive restoration of a major club building (15,000-30,000 SF) can range from $5-15 million or more. However, federal and state tax credits can offset 20-40% of qualified expenses, and the resulting event venue and community space often generates substantial revenue. Phased approaches allow organizations to restore critical areas first while planning larger campaigns.",
  },
  {
    question: "Who owns Tampa's historic social clubs today?",
    answer:
      "Ownership varies. Some clubs remain owned by the original mutual aid society organizations (now primarily social/cultural nonprofits). Others have been sold to private developers, the City of Tampa, or nonprofit preservation organizations. El Centro Español is operated by the Tampa Sports Authority. The Cuban Club is owned by its membership organization. L'Unione Italiana remains with its Italian heritage organization. Understanding ownership structure is essential for restoration planning, as it affects tax credit eligibility and decision-making authority.",
  },
  {
    question: "What Secretary of Interior Standards apply to social club restoration?",
    answer:
      "The Secretary of the Interior's Standards for Rehabilitation apply to any project seeking federal historic tax credits. Key standards include: retaining distinctive features (plaster, terrazzo, tiles); repairing rather than replacing historic materials; not destroying character-defining features; making new work compatible but distinguishable; and reversibility of new additions. For social clubs, this means preserving ornamental plaster, maintaining the hierarchy of original spaces, and integrating modern systems without visual intrusion. FCS works with preservation architects who understand these standards.",
  },
  {
    question: "Can historic social clubs be used for modern events and weddings?",
    answer:
      "Absolutely - in fact, event venue use is one of the most successful adaptive reuse strategies for historic social clubs. The grand ballrooms, theaters, and atmospheric spaces are highly desirable for weddings, corporate events, galas, and cultural programs. Successful conversions maintain the historic character while adding modern amenities: catering kitchens, upgraded restrooms, climate control, and accessibility. Several Tampa clubs now operate as premier event venues, with the historic ambiance commanding premium pricing.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Historic Social Clubs Restoration", href: "/tampa-historic-social-clubs-restoration/" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function TampaHistoricSocialClubsRestorationPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Historic Social Club Restoration" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Historic Building Restoration"
        serviceDescription="Expert restoration of Tampa's historic social clubs and mutual aid society buildings. Preservation of Ybor City heritage with historic tax credit coordination."
        city="Tampa"
        minPrice="500000"
      />

      
      <ArticleSchema
        headline="Tampa Historic Social Clubs Restoration | Ybor City Heritage | FCS"
        description="Restoring Tampa"
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/tampa-historic-social-clubs-restoration/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Historic Restoration", href: "/commercial/historic-restoration/" },
          { name: "Tampa Social Clubs", href: "/tampa-historic-social-clubs-restoration/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-ian/hurricane-ian-large.webp"
            alt="Hurricane damage restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="commercial"
              customHubTitle="Historic Restoration"
              customHubHref="/commercial/historic-restoration/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Tampa&apos;s Historic Social Clubs Restoration
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Preserving the architectural and cultural heritage of Tampa&apos;s immigrant
              communities. Expert restoration of Ybor City&apos;s iconic mutual aid society
              buildings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Restoration Project
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
        </div>
      </section>

      {/* Heritage Banner */}
      <section className="py-6 bg-brand-gold/20 border-y border-brand-gold/30">
        <div className="container-custom">
          <div className="flex items-center gap-4 text-brand-green-dark">
            <Landmark className="w-8 h-8 flex-shrink-0" />
            <p className="font-medium">
              <strong>Tampa&apos;s National Landmark Heritage:</strong> The Ybor City
              Historic District is a National Historic Landmark District - one of only
              three in Florida - recognizing its exceptional significance in American
              immigration and labor history.
            </p>
          </div>
        </div>
      </section>

      {/* Historic Clubs Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tampa&apos;s Major Historic Social Clubs
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            These mutual aid societies provided healthcare, education, and community
            for Tampa&apos;s immigrant workers. Their buildings remain architectural treasures.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historicClubs.map((club) => (
              <div key={club.name} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <History className="w-8 h-8 text-brand-gold flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-brand-green-dark">
                      {club.name}
                    </h3>
                    <p className="text-sm text-brand-gold-dark">Founded {club.founded}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{club.location}</span>
                  </div>
                  <p className="text-gray-700"><strong>Style:</strong> {club.architecture}</p>
                  <p className="text-gray-600">{club.significance}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-500 block mb-1">Restoration Priorities</span>
                  <p className="text-gray-700 text-sm">{club.restorationNeeds}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restoration Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Unique Restoration Challenges
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Social club buildings present specific preservation challenges requiring
            specialized expertise and craftspeople.
          </p>
          <div className="space-y-6">
            {restorationChallenges.map((item) => (
              <div key={item.challenge} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {item.challenge}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-brand-green-light/20 rounded-lg p-4">
                    <span className="text-xs text-brand-green-dark font-semibold block mb-1">
                      Approach
                    </span>
                    <p className="text-gray-700 text-sm">{item.approach}</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <span className="text-xs text-gray-500 font-semibold block mb-1">
                      Specialists Needed
                    </span>
                    <p className="text-gray-700 text-sm">{item.specialists}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Credits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Historic Tax Credit Opportunities
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Multiple tax incentive programs can significantly offset social club
            restoration costs. These programs can be combined for maximum benefit.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {taxCreditProgram.map((credit) => (
              <div key={credit.credit} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-brand-gold" />
                  <div>
                    <h3 className="text-lg font-bold text-brand-green-dark">
                      {credit.credit}
                    </h3>
                    <p className="text-2xl font-bold text-brand-gold">{credit.percentage}</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500 block">Requirements</span>
                    <p className="text-gray-700">{credit.requirements}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Process</span>
                    <p className="text-gray-700">{credit.process}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Timeline</span>
                    <p className="text-gray-700">{credit.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adaptive Reuse */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Adaptive Reuse Opportunities
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Historic social club spaces can be adapted for modern revenue-generating
            uses while preserving their heritage character.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Original Use</th>
                  <th className="px-4 py-3 text-left font-semibold">Modern Applications</th>
                  <th className="px-4 py-3 text-left font-semibold">Key Considerations</th>
                  <th className="px-4 py-3 text-left font-semibold">Revenue Potential</th>
                </tr>
              </thead>
              <tbody>
                {adaptiveReuse.map((use, index) => (
                  <tr
                    key={use.originalUse}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {use.originalUse}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{use.modernUses}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{use.considerations}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{use.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Typical Restoration Project Phases
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Social club restoration projects typically follow this sequence, coordinated
            with tax credit application requirements.
          </p>
          <div className="max-w-4xl mx-auto">
            {projectPhases.map((phase, index) => (
              <div key={phase.phase} className="flex gap-6 mb-6 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  {index < projectPhases.length - 1 && (
                    <div className="w-0.5 h-full bg-brand-gold/30 mx-auto mt-2" />
                  )}
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-brand-green-dark">
                      {phase.phase}
                    </h3>
                    <span className="text-xs bg-brand-gold/20 text-brand-gold-dark px-2 py-1 rounded">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{phase.activities}</p>
                  <div className="bg-white rounded-lg p-3">
                    <span className="text-xs text-gray-500 block mb-1">Deliverables</span>
                    <p className="text-gray-700 text-sm">{phase.deliverables}</p>
                  </div>
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
            Related Historic Restoration Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/commercial/historic-restoration/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Historic Restoration Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full-scope commercial historic preservation in Tampa Bay.
              </p>
            </Link>
            <Link
              href="/historic-building-preservation-in-tampa/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Historic Building Preservation
              </h3>
              <p className="text-gray-600 text-sm">
                Preservation techniques and standards for historic structures.
              </p>
            </Link>
            <Link
              href="/adaptive-reuse-of-historic-buildings-in-tampa/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Adaptive Reuse Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Converting historic buildings for modern use.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Preserving Tampa&apos;s Cultural Heritage
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists has experience with historic restoration
            projects throughout Tampa Bay. We understand the unique requirements of
            social club buildings and can coordinate the tax credit process to maximize
            your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Restoration Project
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