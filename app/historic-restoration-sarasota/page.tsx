import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, Users, FileCheck, BookOpen, Landmark, Hammer, Scale } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Historic Restoration Sarasota FL | Sarasota School of Architecture, Burns Court | FCS",
  description: "Expert historic restoration contractor in Sarasota, Florida. Sarasota School of Architecture, Burns Court, Laurel Park, Mediterranean Revival estates. Secretary of Interior Standards, SHPO coordination, tax credit projects. $500K-$25M+. Call (813) 420-7561.",
  keywords: "historic restoration sarasota, sarasota school of architecture, burns court restoration, laurel park historic, mediterranean revival sarasota, SHPO sarasota, historic tax credits florida",
};

const serviceTypes = [
  {
    title: "Sarasota School Preservation",
    description: "Expert restoration of mid-century modern masterpieces by Paul Rudolph, Ralph Twitchell, and Gene Leedy. Understanding experimental materials, climate-responsive design, and minimalist aesthetic."
  },
  {
    title: "Mediterranean Revival Restoration",
    description: "Complete restoration of 1920s-1930s Mediterranean Revival estates featuring stucco repair, terracotta tile restoration, decorative ironwork, and period-authentic details."
  },
  {
    title: "Adaptive Reuse Projects",
    description: "Sensitively converting historic buildings to new uses—former commercial buildings to boutique hotels, residences to galleries—while maintaining historic integrity."
  },
  {
    title: "Historic Facade Restoration",
    description: "Exterior restoration including masonry repair, stucco restoration, window preservation, historic storefronts, and architecturally appropriate paint systems."
  },
  {
    title: "Period Interior Restoration",
    description: "Interior restoration including original plasterwork, terrazzo floors, decorative ceilings, historic millwork, and period-appropriate fixtures and finishes."
  },
  {
    title: "SHPO Coordination & Tax Credits",
    description: "Full coordination with Florida State Historic Preservation Office for tax credit projects, ensuring rehabilitation work meets Secretary of Interior Standards."
  }
];

// Sarasota-specific historic restoration FAQs
const sarasotaFaqs = [
  {
    question: "What historic districts does FCS serve in Sarasota?",
    answer: "Florida Construction Specialists serves all of Sarasota's designated historic districts: Downtown Sarasota Historic District (concentrated around Main Street and Five Points), Burns Court Historic District (the charming former fishing village), Laurel Park Historic District (eclectic residential neighborhood), and Indian Beach/Sapphire Shores Historic District (featuring significant Sarasota School modernist homes). We also restore individually listed National Register properties throughout the city and county, including notable Sarasota School of Architecture residences on Siesta Key and Longboat Key."
  },
  {
    question: "Can you restore Sarasota School of Architecture buildings?",
    answer: "Yes, we specialize in mid-century modern preservation, including the internationally significant Sarasota School of Architecture. These buildings by Paul Rudolph, Ralph Twitchell, Gene Leedy, Victor Lundy, and other masters require deep understanding of experimental materials, climate-responsive design principles, and minimalist aesthetic. We address common issues including flat roof failures, jalousie window deterioration, exposed structural element corrosion, and original material replacement. Our approach preserves architectural intent while solving durability challenges inherent in these pioneering designs."
  },
  {
    question: "What makes historic restoration in Sarasota different from other markets?",
    answer: "Sarasota's affluent, design-conscious community demands exceptional quality and attention to detail that exceeds typical preservation work. The city's dual heritage—Mediterranean Revival estates from the Ringling era alongside internationally significant mid-century modern architecture—requires diverse expertise. Architectural review is rigorous for visible projects, and premium materials and finishes are standard expectations. Barrier island locations like Longboat Key and Siesta Key add coastal construction complexity. Costs run higher than other markets, but clients expect and receive commensurate quality."
  },
  {
    question: "How do historic tax credits work for Sarasota restoration projects?",
    answer: "Qualifying historic properties in Sarasota can access the Federal Historic Preservation Tax Credit (20% for income-producing properties), Florida's ad valorem tax exemption for historic properties, and potential local incentives. Given the substantial investment required for Sarasota restoration projects—often $1M to $10M+—these tax credits provide meaningful financial benefit. We coordinate SHPO Part 1, Part 2, and Part 3 applications, ensuring proposed work is approved before construction begins and certified upon completion. Many significant Sarasota restorations have utilized these incentives."
  },
  {
    question: "What's the process for historic preservation review in Sarasota?",
    answer: "Sarasota's historic preservation review process involves several layers. Properties in designated historic districts require Certificate of Appropriateness approval for exterior alterations. The city's Development Services department and Historic Preservation Board review applications against design guidelines. For tax credit projects, additional SHPO coordination is required. Burns Court, Laurel Park, and Indian Beach/Sapphire Shores each have specific character-defining features that inform review. We prepare thorough applications with historic documentation and have developed strong working relationships with city preservation staff."
  },
  {
    question: "How do you preserve Mediterranean Revival features common in Sarasota?",
    answer: "Mediterranean Revival restoration in Sarasota addresses distinctive features including barrel tile roofs (often requiring custom tile matching), stucco facades (using appropriate lime-based systems), decorative wrought iron balconies and grilles, arched openings and loggias, and ornamental details like carved stone, terracotta, and decorative tile. We work with specialized craftspeople experienced in traditional techniques. For Ringling-era properties along the bayfront, this work often involves coordinating with the city's most stringent review processes given the architectural significance."
  },
  {
    question: "What are typical costs for historic restoration in Sarasota?",
    answer: "Historic restoration in Sarasota typically costs more than other Tampa Bay markets due to the community's high standards and architectural complexity. Budget ranges are: Sarasota School modernist homes $250-450 per square foot; Mediterranean Revival estates $200-400+ per square foot; Burns Court commercial restoration $175-325 per square foot; facade restoration $75-175 per square foot of facade area. Premium materials, specialized craftspeople, and rigorous review requirements contribute to costs. Federal tax credits (20%) can substantially offset costs for qualifying income-producing properties."
  },
  {
    question: "How long does a historic restoration project take in Sarasota?",
    answer: "Historic restoration timelines in Sarasota depend on project scope and required approvals. Minor exterior work might take 3-6 months; comprehensive building restoration 14-24 months; complex adaptive reuse projects 18-36 months. Additional time is needed for Certificate of Appropriateness approval (1-3 months depending on complexity), SHPO review for tax credit projects (4-6 months for Part 2 approval), and sourcing period-appropriate materials. Sarasota's design-conscious standards often mean longer design development phases to achieve desired quality. We build these factors into realistic project schedules."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/historic-restoration/" },
  { name: "Sarasota", href: "/historic-restoration-sarasota/" },
];

export default function HistoricRestorationSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Expert historic restoration contractor serving Sarasota, Florida. Sarasota School of Architecture, Burns Court, Laurel Park, Mediterranean Revival restoration. Secretary of Interior Standards compliance, SHPO coordination, tax credit projects. Projects from $500K to $25M+."
        city="Sarasota"
        minPrice="500000"
      />

      <ArticleSchema
        headline="Historic Restoration Sarasota FL | Sarasota School of Architecture, Burns Court | FCS"
        description="Expert historic restoration contractor in Sarasota, Florida. Sarasota School of Architecture, Burns Court, Laurel Park, Mediterranean Revival estates. Secretary of Interior Standards, SHPO coordination."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/historic-restoration-sarasota/"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/historic-preservation/historic-preservation-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Sarasota, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Historic Restoration in Sarasota, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers expert historic restoration throughout Sarasota—from the internationally significant Sarasota School of Architecture masterpieces to the Mediterranean Revival estates of the Ringling era and the charming historic districts of Burns Court and Laurel Park.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              As Sarasota's premier historic preservation contractor, we restore buildings to Secretary of Interior Standards, coordinate SHPO approvals for tax credit projects, and meet the exacting quality standards that Sarasota's design-conscious community expects—always with full accountability as the prime contractor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Project Consultation
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

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Landmark className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">4 Historic Districts Served</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Tax Credit Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Historic Restoration Services in Sarasota
              </h2>
              <p className="text-gray-600 mb-6">
                Sarasota's architectural heritage is among Florida's most distinctive and internationally significant. The city's development as an affluent winter colony in the 1920s left magnificent Mediterranean Revival estates, while the post-war era produced the Sarasota School of Architecture—a regional variant of modernism that gained worldwide recognition. Today, four designated historic districts protect this diverse heritage, each with unique preservation requirements and architectural character.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists brings specialized expertise to both ends of Sarasota's architectural spectrum. We understand the traditional craftsmanship of Mediterranean Revival—stucco, terracotta, wrought iron, and decorative tile—as well as the experimental materials and minimalist aesthetic of mid-century modernism. Our projects meet Secretary of Interior Standards, qualify for federal and state tax credits, and satisfy Sarasota's rigorous design review processes.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Sarasota historic project. Our relationships with preservation craftspeople, specialty trades, and local officials ensure smooth execution from documentation through final restoration.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Our Historic Restoration Capabilities
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {serviceTypes.map((service) => (
                  <div key={service.title} className="border border-gray-200 rounded-lg p-5 hover:border-brand-green transition-colors">
                    <h4 className="font-bold text-brand-green-dark mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Sarasota Historic Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Sarasota" currentService="historic-restoration" />
              <NearbyLocations currentCity="Sarasota" service="historic-restoration" serviceName="Historic Restoration" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Sarasota Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Historic restoration in Sarasota starting at $500,000.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full bg-brand-gold text-brand-green-dark font-bold py-3 px-4 rounded-full hover:bg-brand-gold-light transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sarasota Historic Districts Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Sarasota's Historic Districts & Architectural Heritage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Landmark className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Downtown Sarasota Historic District</h3>
              <p className="text-gray-600 text-sm">
                The commercial heart of historic Sarasota centers on Main Street and Five Points, featuring early 20th-century commercial buildings, the Sarasota Opera House, and the iconic Burns Square area. Mediterranean Revival, Art Deco, and vernacular commercial buildings create a walkable historic core now home to galleries, restaurants, and boutique retail.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Burns Court Historic District</h3>
              <p className="text-gray-600 text-sm">
                Originally a fishing village commercial area, Burns Court has been lovingly restored into one of Sarasota's most charming destinations. Small-scale Mediterranean Revival and vernacular buildings from the 1920s house restaurants, galleries, and boutiques. The district's intimate scale and pedestrian character make it a preservation success story.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Laurel Park Historic District</h3>
              <p className="text-gray-600 text-sm">
                An eclectic residential neighborhood west of downtown, Laurel Park features Craftsman bungalows, Colonial Revival cottages, and Frame Vernacular homes from Sarasota's early development. The tree-lined streets and modest scale attract homeowners committed to preservation. Restoration work respects the neighborhood's diverse but cohesive character.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Indian Beach/Sapphire Shores Historic District</h3>
              <p className="text-gray-600 text-sm">
                This bayfront neighborhood contains some of Sarasota's most significant Sarasota School of Architecture residences alongside Mediterranean Revival and Ranch-style homes. Properties along the bay feature work by Paul Rudolph, Ralph Twitchell, and Gene Leedy. Preservation here requires expertise in both traditional and mid-century modern techniques.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Sarasota School of Architecture</h3>
              <p className="text-gray-600 text-sm">
                Sarasota's mid-century modern legacy extends beyond formal districts to individually significant residences throughout the city and barrier islands. The Sarasota School pioneered climate-responsive design with jalousie windows, deep overhangs, and indoor-outdoor living. These internationally recognized buildings require specialized preservation expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sarasota School of Architecture Feature Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Preserving the Sarasota School of Architecture
            </h2>
            <p className="text-gray-600 mb-6">
              The Sarasota School of Architecture emerged in the late 1940s and flourished through the 1960s, producing buildings that gained international recognition for their innovative approach to Florida's subtropical climate. Architects including Paul Rudolph, Ralph Twitchell, Victor Lundy, Gene Leedy, and Tim Seibert created residences and public buildings that pioneered ideas later embraced worldwide.
            </p>
            <p className="text-gray-600 mb-8">
              These buildings pose unique preservation challenges. Experimental materials—including early cable-stayed structures, exposed steel, and thin-shell concrete—often show their age. Flat roofs designed for minimal rainfall face Florida's intense summer storms. Jalousie windows and other original elements may be deteriorated or missing. Preserving these buildings requires understanding their architectural philosophy while addressing practical durability issues.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-brand-green-dark mb-4">Common Sarasota School Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Flat roof membrane failures and water intrusion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Jalousie window deterioration and seal failures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Exposed steel and structural element corrosion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Terrazzo floor cracking and settling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Original material replacement sourcing</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-brand-green-dark mb-4">Our Preservation Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Research original drawings and documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Repair over replacement whenever possible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Source period-appropriate materials and hardware</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Integrate modern systems invisibly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Preserve architectural intent and character</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Sarasota Historic Restoration: Costs & Timelines
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-green-dark text-white">
                    <th className="text-left p-4 font-semibold">Project Type</th>
                    <th className="text-left p-4 font-semibold">Cost Range</th>
                    <th className="text-left p-4 font-semibold">Typical Timeline</th>
                    <th className="text-left p-4 font-semibold">Tax Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Sarasota School Modernist Home</td>
                    <td className="p-4">$250-450/SF</td>
                    <td className="p-4">12-20 months</td>
                    <td className="p-4">20% Federal (if income-producing)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Mediterranean Revival Estate</td>
                    <td className="p-4">$200-400+/SF</td>
                    <td className="p-4">14-24 months</td>
                    <td className="p-4">20% Federal (income properties)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Burns Court Commercial</td>
                    <td className="p-4">$175-325/SF</td>
                    <td className="p-4">8-16 months</td>
                    <td className="p-4">20% Federal (income properties)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Laurel Park Residential</td>
                    <td className="p-4">$150-275/SF</td>
                    <td className="p-4">6-12 months</td>
                    <td className="p-4">State exemption possible</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Historic Facade Restoration</td>
                    <td className="p-4">$75-175/SF (facade)</td>
                    <td className="p-4">4-10 months</td>
                    <td className="p-4">Part of whole-building</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Sarasota's design-conscious market demands premium quality, reflected in costs. Federal Historic Tax Credits (20%) available for qualifying income-producing properties.
            </p>
          </div>
        </div>
      </section>

      {/* Preservation Standards Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Meeting Sarasota's Preservation Standards
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Secretary of Interior Standards</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Federal tax credit projects must meet the Secretary of Interior's Standards for Rehabilitation—10 principles that guide preservation work. In Sarasota, where design quality is paramount, these standards provide essential guidance for both Mediterranean Revival and mid-century modern restoration. We ensure all decisions align with these nationally recognized benchmarks.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">SHPO Coordination</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Projects seeking state or federal historic tax credits require Florida State Historic Preservation Office approval. We coordinate Part 1 (significance), Part 2 (proposed work), and Part 3 (completed work) applications. Given the substantial investment in Sarasota restoration projects, tax credits provide meaningful financial benefit worth the documentation effort.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Sarasota Historic Preservation Review</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Sarasota's Historic Preservation Board and city staff review exterior alterations in designated historic districts. Each district—Downtown, Burns Court, Laurel Park, Indian Beach/Sapphire Shores—has specific design guidelines. We prepare thorough applications demonstrating how proposed work respects historic character and meets local standards.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Hammer className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Premium Craftsmanship</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Sarasota's discerning community expects exceptional quality in preservation work. We coordinate with master craftspeople specializing in Mediterranean Revival stucco and decorative elements, terrazzo restoration, mid-century materials, historic ironwork, and period-appropriate finishes. This expertise ensures restoration work meets Sarasota's high standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Sarasota Historic Restoration Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Historic Documentation & Assessment",
                  description: "We begin with thorough documentation of existing conditions—photographs, measured drawings, and materials analysis. For Sarasota properties, we research building history through local archives, the Sarasota History Center, and available original drawings. For Sarasota School buildings, we may consult architectural archives at the University of Florida and other repositories. This documentation forms the basis for restoration planning."
                },
                {
                  step: "2",
                  title: "Preservation Planning & Design",
                  description: "Based on assessment findings, we develop restoration approaches that address deterioration while preserving character-defining features. For Sarasota's design-conscious market, this phase often involves extended collaboration with architects and preservation consultants to achieve the highest quality outcomes. For tax credit projects, we prepare SHPO Part 2 applications during this phase."
                },
                {
                  step: "3",
                  title: "Regulatory Approvals",
                  description: "We navigate Sarasota's Certificate of Appropriateness process, coordinate SHPO reviews for tax credit projects, and obtain building permits. Burns Court, Laurel Park, and Indian Beach/Sapphire Shores each have specific requirements. We maintain relationships with city preservation staff and understand the nuances of each district's review criteria."
                },
                {
                  step: "4",
                  title: "Restoration Execution",
                  description: "Experienced project managers oversee restoration work with strict adherence to approved plans and preservation specifications. We coordinate specialized craftspeople—Mediterranean Revival stucco specialists, terrazzo restorers, mid-century modern experts—and monitor material quality throughout. Regular documentation supports tax credit certification."
                },
                {
                  step: "5",
                  title: "Completion & Certification",
                  description: "We complete all inspections and provide comprehensive documentation of completed work. For tax credit projects, we prepare SHPO Part 3 certification applications with final photographs and project narrative. We ensure all regulatory requirements are satisfied and buildings are ready for occupancy, meeting both code requirements and Sarasota's exacting quality standards."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Sarasota Chooses FCS for Historic Restoration
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on Sarasota historic projects. You get direct accountability, single-point contact, and our full commitment to achieving the quality standards Sarasota's preservation community expects.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Diverse Expertise</h3>
              <p className="text-gray-600">
                From Mediterranean Revival estates to Sarasota School modernism, we understand the full range of Sarasota's architectural heritage. Our team includes specialists in both traditional craftsmanship and mid-century modern preservation techniques.
              </p>
            </div>
            <div className="card text-center p-6">
              <FileCheck className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Tax Credit Success</h3>
              <p className="text-gray-600">
                We navigate federal and state historic tax credit programs, coordinating SHPO applications and ensuring work meets certification requirements. For Sarasota's substantial restoration investments, tax credits provide meaningful return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={sarasotaFaqs} title="Historic Restoration in Sarasota - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in Sarasota</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-sarasota/" className="text-brand-green hover:underline">Commercial Construction Sarasota</Link></li>
                <li><Link href="/disaster-recovery-sarasota/" className="text-brand-green hover:underline">Disaster Recovery Sarasota</Link></li>
                <li><Link href="/balcony-reconstruction-sarasota/" className="text-brand-green hover:underline">Balcony Reconstruction Sarasota</Link></li>
                <li><Link href="/exterior-waterproofing-sarasota/" className="text-brand-green hover:underline">Exterior Waterproofing Sarasota</Link></li>
                <li><Link href="/luxury-custom-homes-sarasota/" className="text-brand-green hover:underline">Luxury Custom Homes Sarasota</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Historic Restoration Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/historic-restoration-tampa/" className="text-brand-green hover:underline">Historic Restoration Tampa</Link></li>
                <li><Link href="/historic-restoration-st-petersburg/" className="text-brand-green hover:underline">Historic Restoration St. Petersburg</Link></li>
                <li><Link href="/historic-restoration-bradenton/" className="text-brand-green hover:underline">Historic Restoration Bradenton</Link></li>
                <li><Link href="/historic-restoration-lakeland/" className="text-brand-green hover:underline">Historic Restoration Lakeland</Link></li>
                <li><Link href="/historic-restoration-clearwater/" className="text-brand-green hover:underline">Historic Restoration Clearwater</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/historic-restoration/" className="text-brand-green hover:underline">Historic Restoration Services</Link></li>
                <li><Link href="/commercial/historic-restoration/" className="text-brand-green hover:underline">Commercial Historic Restoration</Link></li>
                <li><Link href="/about/" className="text-brand-green hover:underline">About FCS</Link></li>
                <li><Link href="/portfolio/" className="text-brand-green hover:underline">Project Portfolio</Link></li>
                <li><Link href="/contact/" className="text-brand-green hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Start Your Sarasota Historic Restoration Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver historic restoration excellence in Sarasota—from Mediterranean Revival estates to Sarasota School masterpieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
