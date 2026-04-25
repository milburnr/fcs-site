import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, Building2, Shield, Award, HardHat, FileCheck, Home, Users } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/balcony-reconstruction-ruskin/' },
  title: "Balcony Reconstruction Ruskin | Sun City Center SB4-D",
  description: "Balcony reconstruction in Ruskin FL by Florida Construction Specialists — headquartered locally. Sun City Center condo balconies.",
  openGraph: {
    title: "Balcony Reconstruction Ruskin | Sun City Center SB4-D",
    description: "Balcony reconstruction in Ruskin FL by Florida Construction Specialists — headquartered locally. Sun City Center condo balconies.",
    url: "https://floridaconstructionspecialists.com/balcony-reconstruction-ruskin/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Which SB 4-D timeline applies to Ruskin and Apollo Beach condominiums?",
    answer: "The SB 4-D milestone inspection timeline depends on distance from the coast. Apollo Beach waterfront properties within three miles of Tampa Bay fall under the stricter 25-year inspection requirement. Properties in Bahia Beach, Little Harbor, and along the Apollo Beach waterfront should verify their coastal zone status. Sun City Center, located more than three miles inland, follows the 30-year inspection timeline. Many Sun City Center buildings from the 1970s through 1990s have already passed or are approaching these deadlines. FCS can help determine which timeline applies to your specific property."
  },
  {
    question: "What balcony deterioration patterns are common in Sun City Center condominiums?",
    answer: "Sun City Center's inland condominium buildings, primarily constructed in the 1970s through 1990s, commonly show concrete carbonation and rebar corrosion from decades of humidity exposure, waterproofing membrane breakdown on balcony decks, deteriorated expansion joints between balconies and exterior walls, corroded aluminum railings, and cracking at balcony-to-building connections. While these buildings avoid direct salt exposure, South Hillsborough's high humidity and intense summer rainfall create moisture conditions that steadily degrade concrete and waterproofing systems over thirty to fifty years."
  },
  {
    question: "How does Apollo Beach's coastal location affect balcony reconstruction requirements?",
    answer: "Apollo Beach sits directly on Tampa Bay, exposing balcony systems to salt-laden air that accelerates concrete deterioration and metal corrosion at rates far exceeding inland properties. Balcony reconstruction for Apollo Beach waterfront condominiums requires marine-grade materials: chloride-resistant concrete repair compounds, stainless steel or hot-dip galvanized reinforcing, salt-resistant waterproofing membranes, and marine-grade aluminum or stainless steel railing systems. Standard inland specifications will not perform adequately in this environment."
  },
  {
    question: "How does FCS work with retirement community condo associations on balcony projects?",
    answer: "We have decades of experience working with Sun City Center's 55-plus community associations and understand the governance dynamics. Our approach includes clear board presentations with detailed scope and cost documentation, phased project planning that minimizes disruption to daily life, sensitivity to fixed-income budgeting when structuring special assessments, accessibility considerations during active construction, and frequent resident communication. We present information clearly and offer flexible phasing options that have worked well for similar retirement community associations."
  },
  {
    question: "What is the typical scope and timeline for a multi-building balcony project in Sun City Center?",
    answer: "Multi-building balcony reconstruction projects in Sun City Center typically span four to ten months depending on the number of units and severity of deterioration. We phase work building by building, with each individual balcony requiring five to fifteen days depending on scope. For associations with multiple buildings, phased programs allow spreading capital expenditure over two or three budget cycles while addressing the most deteriorated balconies first. FCS provides detailed phasing proposals with cost projections for each phase."
  },
  {
    question: "Why does FCS's Ruskin headquarters matter for balcony reconstruction projects?",
    answer: "Balcony reconstruction requires consistent daily oversight — monitoring concrete curing times, inspecting waterproofing application quality, coordinating resident access schedules, and making real-time decisions about preservation versus replacement when conditions differ from initial assessments. Our headquarters at 822 Bayview Dr in Ruskin means our superintendent is on-site daily without the overhead of commuting from Tampa or St. Petersburg. For Sun City Center and Apollo Beach properties, we are literally minutes away, which translates to better quality control and faster issue resolution."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Services", href: "/commercial/" },
  { name: "Balcony Reconstruction", href: "/commercial/guides/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Ruskin", href: "/balcony-reconstruction-ruskin/" },
];

export default function BalconyReconstructionRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Balcony Reconstruction" />
      <ServiceSchema serviceName="Balcony Reconstruction and Waterproofing" serviceDescription="Balcony reconstruction contractor headquartered in Ruskin, Florida. Sun City Center condo balconies, Apollo Beach waterfront properties, SB 4-D compliance, structural remediation. Licensed CBC1262722." city="Ruskin" minPrice="100000" serviceCategories={["Structural Balcony Repair", "Waterproofing Systems", "Railing Replacement", "Concrete Restoration", "SB 4-D Compliance"]} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tampa-condo-balcony-restoration/tampa-condo-balcony-restoration-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6"><Home className="w-4 h-4 text-brand-gold" /><span className="text-brand-gold font-semibold">FCS Headquarters — Ruskin, Florida</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">Balcony Reconstruction in Ruskin, Florida</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">Florida Construction Specialists is headquartered in Ruskin and provides professional balcony reconstruction for condominiums throughout the SouthShore area. From Sun City Center's retirement community buildings approaching SB 4-D milestone deadlines to Apollo Beach waterfront properties requiring marine-grade restoration, we manage the complete balcony reconstruction process from engineering assessment through final waterproofing.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"><Home className="w-4 h-4 text-brand-gold" /><span className="text-white text-sm font-medium">Ruskin Headquartered</span></div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"><Award className="w-4 h-4 text-brand-gold" /><span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span></div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"><Building2 className="w-4 h-4 text-brand-gold" /><span className="text-white text-sm font-medium">{BUSINESS_INFO.projectsCompleted}+ Projects</span></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">Request Balcony Assessment</Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2"><Phone className="w-5 h-5" />{BUSINESS_INFO.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom"><div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">South Hillsborough's Balcony Compliance Challenge</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl mb-6">Sun City Center contains one of the largest concentrations of condominium buildings in South Hillsborough County, and many were built during the community's rapid expansion in the 1970s through 1990s. These buildings — now thirty to fifty years old — face mandatory milestone structural inspections under Florida's SB 4-D legislation, and balconies are frequently among the first building elements to show structural deterioration. For associations with fixed-income retiree populations, the balcony reconstruction process requires a contractor who understands both the structural engineering and the human dynamics of senior community construction.</p>
            <p className="mb-6">Apollo Beach adds a coastal dimension to South Hillsborough's balcony reconstruction needs. Waterfront condominiums within three miles of Tampa Bay face the stricter 25-year inspection threshold and accelerated deterioration from salt air exposure. Balcony systems on these buildings — concrete decks, waterproofing membranes, railings, and structural connections — deteriorate faster than identical systems on inland buildings due to the marine environment's aggressive effect on concrete and metal.</p>
            <p>Florida Construction Specialists is headquartered at 822 Bayview Dr in Ruskin, making us the closest licensed general contractor to both Sun City Center and Apollo Beach. All balcony reconstruction permitting goes through <a href="https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/building-and-renovations/permits-and-inspections" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Hillsborough County Building Services</a>, and our established relationships with county inspectors help keep compliance projects moving efficiently.</p>
          </div>
        </div></div>
      </section>

      <ContentParallax src="/images/fcs-tiles-on-balcony/fcs-tiles-on-balcony-display.webp" alt="Balcony reconstruction work on a South Hillsborough County condominium" title="Restoring South County's Condominium Balconies" subtitle="SB 4-D compliance, structural remediation, and marine-grade waterproofing for Sun City Center and Apollo Beach" overlayOpacity={0.55} />

      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">Balcony Reconstruction Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">From structural assessment to final waterproofing, we handle every phase of balcony reconstruction for condominium associations across the SouthShore area.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileCheck, title: "Milestone Inspection Support", description: "Coordination of Phase 1 and Phase 2 structural inspections with licensed engineers for Sun City Center, Apollo Beach, and South Hillsborough condominiums approaching or past their SB 4-D inspection deadlines." },
              { icon: HardHat, title: "Structural Balcony Repair", description: "Complete structural restoration including concrete spall repair, rebar treatment and replacement, post-tension cable assessment, and load-bearing element rehabilitation with engineering certification for compliance documentation." },
              { icon: Shield, title: "Waterproofing Systems", description: "Multi-layer waterproofing systems specified for each property's exposure conditions — marine-grade membranes for Apollo Beach coastal buildings and standard commercial-grade systems for inland Sun City Center properties." },
              { icon: Building2, title: "Railing Replacement", description: "Marine-grade aluminum, stainless steel, glass, and cable railing systems meeting current Florida Building Code requirements. Material selection based on coastal exposure, aesthetic preferences, and long-term maintenance considerations." },
              { icon: Award, title: "Concrete Restoration", description: "Spall repair, crack injection, carbonation treatment, and protective coatings using materials engineered for South Hillsborough's conditions — salt-resistant formulations for Apollo Beach and humidity-appropriate products for Sun City Center." },
              { icon: Users, title: "HOA and Board Coordination", description: "Board presentations, phased project planning, special assessment documentation, and resident communication programs. We understand the governance structures and budget sensitivities of retirement community associations throughout Sun City Center." }
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4"><service.icon className="w-7 h-7 text-brand-green-dark" /></div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQWithSchema items={faqs} title="Ruskin Balcony Reconstruction FAQ" description="Common questions about balcony reconstruction, SB 4-D compliance, and HOA projects in Ruskin, Sun City Center, and Apollo Beach." />

      <RelatedServiceLocations currentCity="Ruskin" currentService="balcony-reconstruction" currentServiceName="Balcony Reconstruction" />

      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Your Local Balcony Reconstruction Experts</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contact Florida Construction Specialists at our Ruskin headquarters for a balcony assessment. We are minutes from Sun City Center and Apollo Beach, and we bring four decades of structural construction experience to every balcony reconstruction project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">Request Balcony Assessment</Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"><Phone className="w-5 h-5 mr-2" />Call {BUSINESS_INFO.phone}</a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20"><div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300"><span>License {BUSINESS_INFO.licenseNumber}</span><span>Ruskin Headquartered</span><span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span><span>Prime Contractor Only</span></div></div>
        </div>
      </section>
    <RelatedArticles pageSlug="balcony-reconstruction-ruskin" />
    </>
  );
}
