import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, Users, MessageSquare, Building2, Lightbulb, HelpCircle, Volume2, Coffee, Zap, LayoutGrid } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Office Layout for Employee Communication | Tampa Office Design Guide",
  description: "Design office layouts that enhance employee communication and collaboration. Expert guide to open offices, huddle rooms, activity-based working, and hybrid workspace design in Tampa Bay.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Office Layout & Communication", href: "/employee-communication-with-office-layout/" },
];

const internalLinks = [
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/boosting-performance-in-florida-offices-windows/", label: "Office Windows" },
  { href: "/maximize-work-area-efficiency-for-commercial-space-solutions/", label: "Space Efficiency" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const layoutTypes = [
  {
    type: "Open Office",
    description: "Large open floor plates with minimal barriers",
    communicationStrength: "High for casual interaction",
    privacy: "Low",
    density: "150-200 SF/person",
    bestFor: "Collaborative teams, creative work, flat organizations",
    challenges: "Noise, distraction, lack of privacy for calls",
  },
  {
    type: "Activity-Based Working",
    description: "Variety of spaces matched to work activities",
    communicationStrength: "High - right space for each interaction",
    privacy: "Variable by zone",
    density: "125-175 SF/person",
    bestFor: "Knowledge workers, hybrid schedules, diverse work modes",
    challenges: "Requires culture change, more complex planning",
  },
  {
    type: "Team Neighborhoods",
    description: "Clustered team areas with shared collaboration zones",
    communicationStrength: "High within teams",
    privacy: "Medium",
    density: "175-225 SF/person",
    bestFor: "Project teams, departments needing close collaboration",
    challenges: "May silo cross-team communication",
  },
  {
    type: "Private Office/Cube",
    description: "Individual enclosed or high-panel spaces",
    communicationStrength: "Low spontaneous, high intentional",
    privacy: "High",
    density: "200-275 SF/person",
    bestFor: "Heads-down work, confidential calls, focus-intensive roles",
    challenges: "Inhibits collaboration, higher cost per person",
  },
  {
    type: "Hybrid Layout",
    description: "Mix of open, semi-private, and private spaces",
    communicationStrength: "Balanced",
    privacy: "Variable",
    density: "175-225 SF/person",
    bestFor: "Most organizations, accommodates diverse work styles",
    challenges: "Requires careful programming and space allocation",
  },
];

const communicationZones = [
  {
    zone: "Focus Zones",
    purpose: "Individual deep work requiring concentration",
    features: "Phone booths, quiet rooms, library areas",
    design: "Sound absorption, visual privacy, minimal traffic",
    ratio: "15-25% of floor area",
  },
  {
    zone: "Collaboration Zones",
    purpose: "Team meetings and group work",
    features: "Conference rooms, huddle rooms, project rooms",
    design: "Writable surfaces, display technology, flexible furniture",
    ratio: "15-20% of floor area",
  },
  {
    zone: "Social Zones",
    purpose: "Informal interaction and relationship building",
    features: "Cafes, lounges, game areas, outdoor terraces",
    design: "Comfortable seating, food/beverage, varied postures",
    ratio: "10-15% of floor area",
  },
  {
    zone: "Touchdown Zones",
    purpose: "Short-term work between meetings",
    features: "Open benching, soft seating with power, counter-height bars",
    design: "Easy access, power/data, acoustic consideration",
    ratio: "10-15% of floor area",
  },
  {
    zone: "Primary Work Zones",
    purpose: "Day-to-day individual and team work",
    features: "Workstations, benching, team tables",
    design: "Ergonomic furniture, storage, lighting, acoustics",
    ratio: "35-50% of floor area",
  },
];

const acousticStrategies = [
  {
    strategy: "Sound Masking",
    description: "Electronic system that generates background noise to reduce speech intelligibility",
    effectiveness: "Highly effective; reduces distraction distance 50%+",
    cost: "$1-3/SF",
    installation: "Ceiling or furniture-mounted emitters; control system",
  },
  {
    strategy: "Absorptive Ceilings",
    description: "High-NRC acoustic ceiling tiles that absorb sound",
    effectiveness: "Essential baseline; NRC 0.70+ recommended",
    cost: "$3-8/SF (vs. standard ceiling)",
    installation: "Replace or upgrade existing ceiling system",
  },
  {
    strategy: "Acoustic Panels/Baffles",
    description: "Wall or ceiling-mounted sound-absorbing elements",
    effectiveness: "Good for specific problem areas; adds visual interest",
    cost: "$15-40/SF of treatment area",
    installation: "Surface-mounted or suspended",
  },
  {
    strategy: "Phone Rooms/Booths",
    description: "Small enclosed spaces for private calls",
    effectiveness: "Very effective; removes call noise from open areas",
    cost: "$8,000-25,000 per booth",
    installation: "Freestanding or constructed",
  },
  {
    strategy: "Furniture-Based Absorption",
    description: "Acoustic panels on workstation screens and furniture",
    effectiveness: "Moderate; part of overall solution",
    cost: "Included in furniture specification",
    installation: "Part of furniture systems",
  },
  {
    strategy: "Zone Separation",
    description: "Physical separation between quiet and active zones",
    effectiveness: "Highly effective when properly planned",
    cost: "Planning-based; minimal additional cost",
    installation: "Addressed in space planning",
  },
];

const hybridConsiderations = [
  {
    consideration: "Desk Sharing/Hoteling",
    description: "Multiple employees share workstations on rotating basis",
    implementation: "Booking system, personal storage lockers, clean desk policy",
    ratio: "Typically 0.6-0.8 desks per employee",
  },
  {
    consideration: "Video Conferencing",
    description: "Rooms equipped for hybrid meetings with remote participants",
    implementation: "Quality AV, proper camera angles, acoustic treatment, displays",
    ratio: "Increase small rooms 20-30% vs. pre-hybrid",
  },
  {
    consideration: "Collaboration Days",
    description: "Teams coordinate in-office days for maximum interaction",
    implementation: "Team neighborhoods, bookable project space, social amenities",
    ratio: "Peak occupancy may be 50-70% of total headcount",
  },
  {
    consideration: "Neighborhood Assignment",
    description: "Teams assigned to zones rather than specific desks",
    implementation: "Flexible workstations, team storage, collaboration adjacencies",
    ratio: "Varies by team size and work patterns",
  },
];

const costFactors = [
  { element: "Open Workstations", range: "$4,000-8,000 each", notes: "Desk, chair, storage, power/data, task light" },
  { element: "Private Office Buildout", range: "$150-250/SF", notes: "Walls, door, finishes, lighting, HVAC adjustment" },
  { element: "Conference Room", range: "$400-800/SF", notes: "AV, acoustic treatment, furniture, finishes" },
  { element: "Phone Booth", range: "$8,000-25,000 each", notes: "Prefab booth with ventilation" },
  { element: "Huddle Room", range: "$25,000-60,000 each", notes: "4-6 person room with display and acoustics" },
  { element: "Cafe/Social Area", range: "$150-300/SF", notes: "Commercial equipment, finishes, furniture, plumbing" },
  { element: "Sound Masking System", range: "$1-3/SF", notes: "Emitters, control, commissioning" },
  { element: "Acoustic Treatment", range: "$15-40/SF treated", notes: "Panels, baffles, specialty ceilings" },
];

const faqs = [
  {
    question: "What's the ideal ratio of meeting rooms to employees?",
    answer: "General guidelines suggest: 1 large conference room (12+ people) per 75-100 employees; 1 medium room (6-10 people) per 40-60 employees; 1 small huddle room (2-4 people) per 15-25 employees; 1 phone booth per 8-15 employees in open offices. Post-pandemic, hybrid work has increased demand for video-capable meeting rooms—consider adding 20-30% more small/medium rooms than pre-pandemic guidelines. Usage data from existing spaces provides the best guidance for your specific organization.",
  },
  {
    question: "How do you balance collaboration with the need for focused work?",
    answer: "The key is zoning and choice. Provide clearly designated quiet zones where conversation is discouraged and collaboration zones where interaction is expected. Phone booths and small focus rooms give open-office workers escape options for calls and deep work. Sound masking systems reduce speech intelligibility in open areas. Visual separation (even low screens or plants) signals zone transitions. Most importantly, establish cultural norms—the best-designed space fails without organizational support for appropriate use of different zones.",
  },
  {
    question: "How has hybrid work changed office design requirements?",
    answer: "Hybrid work has fundamentally shifted office purpose from 'where we work' to 'where we collaborate.' Key changes: fewer assigned desks (0.6-0.8 per employee typical); more bookable meeting rooms; better video conferencing in all rooms; enhanced social/amenity spaces to make office visits worthwhile; team neighborhoods over individual assignments; improved technology (booking systems, occupancy sensors); and more varied work settings. Many organizations are also reducing total space while investing more per square foot in quality.",
  },
  {
    question: "What acoustic treatments are most effective for open offices?",
    answer: "Sound masking (electronic background noise) is the single most effective treatment, reducing distraction distance by 50% or more. Combine with: high-NRC acoustic ceilings (0.70+); absorptive materials on vertical surfaces (walls, furniture screens); phone rooms/booths for private calls; and zone separation between quiet and active areas. Budget $3-8/SF for comprehensive acoustic treatment. Note that acoustic treatment can't fix a poorly zoned layout—address planning first, then treat acoustically.",
  },
  {
    question: "How much space should be allocated per person?",
    answer: "Modern office space planning typically allocates: Open workstations: 150-200 SF/person (including circulation); Activity-based: 125-175 SF/person (unassigned); Traditional private office: 200-275 SF/person. The trend is toward less space per person but higher quality and more variety. When calculating for hybrid work, use anticipated peak daily occupancy, not total headcount. A company with 200 employees at 60% peak attendance might need space for 120-130, not 200.",
  },
  {
    question: "What makes a good coffee bar/social area for an office?",
    answer: "Effective social spaces feature: Variety of seating (counter, tables, soft seating); power and WiFi for working while socializing; quality food and beverage options (better than basic coffee); natural light and views when possible; acoustic treatment to contain noise; adjacency to collaboration spaces; and design that feels different from work areas. Size depends on culture—typically 10-15% of total space for companies prioritizing collaboration. These spaces often have the highest ROI in terms of employee satisfaction and retention.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Enhancing Employee Communication with Office Layout"
        description="Design office layouts that foster communication and collaboration. Guide to open offices, huddle rooms, activity-based working, and acoustic treatment for Tampa Bay businesses."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Modern office layout in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Enhancing Employee Communication with Office Layout
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Your office layout directly impacts how employees communicate and collaborate. Design spaces that foster connection while respecting the need for focused work.
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

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-6">
              The way your office is designed fundamentally shapes how your people communicate. Open floor plans can foster spontaneous collaboration—or drive everyone into headphones. Private offices preserve focus—but may inhibit the casual conversations where innovation often happens.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa Bay's evolving workforce expects workplaces that support diverse work modes: focused individual work, casual collaboration, formal meetings, video calls, and social interaction. The challenge is creating environments that accommodate all of these while remaining acoustically manageable and spatially efficient.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers office layout strategies that enhance communication: layout types and their trade-offs, communication zone planning, acoustic treatment, hybrid work considerations, and realistic costs. Whether you're building out new space or renovating existing offices, these principles help create spaces that bring people together productively.
            </p>
          </div>
        </div>
      </section>

      {/* Layout Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Office Layout Types Compared
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Different layouts support different communication patterns. Choose based on your organization's work style.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Layout Type</th>
                  <th className="px-4 py-4 text-center font-heading">Communication</th>
                  <th className="px-4 py-4 text-center font-heading">Privacy</th>
                  <th className="px-4 py-4 text-center font-heading">Density</th>
                  <th className="px-4 py-4 text-left font-heading">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {layoutTypes.map((layout, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4">
                      <span className="font-semibold text-brand-green-dark block">{layout.type}</span>
                      <span className="text-xs text-gray-500">{layout.description}</span>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-600 text-sm">{layout.communicationStrength}</td>
                    <td className="px-4 py-4 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        layout.privacy === 'High' ? 'bg-green-100 text-green-700' :
                        layout.privacy === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        layout.privacy === 'Variable' ? 'bg-blue-100 text-blue-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {layout.privacy}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-600 text-sm">{layout.density}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{layout.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Communication Zones */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Designing Communication Zones
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Activity-based workspace design provides the right space for each type of interaction.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communicationZones.map((zone, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <LayoutGrid className="w-8 h-8 text-brand-green" />
                  <h3 className="text-lg font-bold text-brand-green-dark">{zone.zone}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{zone.purpose}</p>
                <div className="space-y-2 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Features</p>
                    <p className="text-sm text-gray-700">{zone.features}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">Design Considerations</p>
                    <p className="text-sm text-gray-700">{zone.design}</p>
                  </div>
                </div>
                <div className="bg-brand-green-light/30 rounded-lg p-2">
                  <p className="text-xs text-brand-green-dark"><strong>Typical Allocation:</strong> {zone.ratio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acoustic Strategies */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Acoustic Treatment Strategies
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Good communication requires good acoustics. Here's how to manage sound in open and hybrid offices.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acousticStrategies.map((strategy, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Volume2 className="w-6 h-6 text-brand-gold" />
                  <h3 className="font-bold">{strategy.strategy}</h3>
                </div>
                <p className="text-white/80 text-sm mb-4">{strategy.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Effectiveness:</span>
                    <span className="text-white/90">{strategy.effectiveness}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Cost:</span>
                    <span className="text-brand-gold">{strategy.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hybrid Considerations */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Designing for Hybrid Work
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hybrid work has fundamentally changed how we use office space. These considerations help bridge in-person and remote.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {hybridConsiderations.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{item.consideration}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="space-y-2">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs text-gray-500 font-semibold">Implementation</p>
                    <p className="text-sm text-gray-700">{item.implementation}</p>
                  </div>
                  <div className="bg-brand-green-light/30 rounded-lg p-3">
                    <p className="text-xs text-brand-green-dark"><strong>Typical Ratio:</strong> {item.ratio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Office Layout Cost Factors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Budget guidance for Tampa Bay office buildouts focused on communication-enhancing elements.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Element</th>
                  <th className="px-6 py-4 text-center font-heading">Typical Range</th>
                  <th className="px-6 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costFactors.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{item.element}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{item.range}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Communication-Focused Design Best Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-brand-green" />
                  <h3 className="font-bold text-brand-green-dark">Do</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600">
                    <Lightbulb className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    Create collision spaces where different teams naturally intersect
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <Lightbulb className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    Provide variety—different spaces for different work modes
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <Lightbulb className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    Invest in acoustic treatment—it's cheaper than unhappy employees
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <Lightbulb className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    Ensure every room has quality video conferencing capability
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <Lightbulb className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    Design for your culture, not trends
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  <h3 className="font-bold text-red-700">Avoid</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-red-500 font-bold">✕</span>
                    Going fully open without quiet zones and phone rooms
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-red-500 font-bold">✕</span>
                    Assuming desk sharing works without supporting technology
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-red-500 font-bold">✕</span>
                    Skipping acoustic treatment to save money
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-red-500 font-bold">✕</span>
                    Designing the same space for all team types
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-red-500 font-bold">✕</span>
                    Forgetting that people actually need to work, not just collaborate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-gray-50">
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

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Office Construction Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Transform Your Office?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists creates workplaces that enhance communication and productivity. Let's design a space that brings your team together.
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
