import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, Users, FileCheck, BookOpen, Landmark, Hammer, Scale, Palette } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historic Restoration Bradenton FL | Village of the Arts, Downtown & More | FCS",
  description: "Expert historic restoration contractor in Bradenton, Florida. Village of the Arts, Downtown Historic District, Old Manatee heritage. Secretary of Interior Standards, SHPO coordination, tax credit projects. $500K-$25M+. Call (813) 420-7561.",
  keywords: "historic restoration bradenton, village of the arts restoration, downtown bradenton historic, old manatee preservation, SHPO bradenton, historic tax credits manatee county",
};

const serviceTypes = [
  {
    title: "Historic Building Restoration",
    description: "Complete restoration of historic structures to period-accurate condition, addressing structural issues, deteriorated materials, and code compliance while preserving architectural character."
  },
  {
    title: "Adaptive Reuse Projects",
    description: "Sensitively converting historic buildings to new uses—downtown commercial to restaurants, cottages to galleries, warehouses to creative spaces—while maintaining historic integrity."
  },
  {
    title: "Facade Restoration",
    description: "Exterior restoration of historic building facades including masonry repair, wood siding restoration, window rehabilitation, and historically appropriate paint systems."
  },
  {
    title: "Period Interior Restoration",
    description: "Interior restoration including historic plasterwork, decorative finishes, millwork, flooring, and period-appropriate fixtures and hardware."
  },
  {
    title: "Structural Stabilization",
    description: "Addressing foundation issues, structural deterioration, and load-bearing concerns in historic buildings using minimally invasive methods that preserve original fabric."
  },
  {
    title: "SHPO Coordination",
    description: "Full coordination with Florida State Historic Preservation Office for tax credit projects, ensuring rehabilitation work meets Secretary of Interior Standards."
  }
];

// Bradenton-specific historic restoration FAQs
const bradentonFaqs = [
  {
    question: "What historic districts does FCS serve in Bradenton?",
    answer: "Florida Construction Specialists serves all of Bradenton's historic areas including the Downtown Bradenton Historic District, the Village of the Arts, Old Main Street Bradenton, and the Palmetto Historic District across the Manatee River. Each area has distinct character and preservation requirements. The Village of the Arts has a unique zoning overlay encouraging creative adaptive reuse, while downtown's commercial buildings require traditional restoration approaches. Our team has extensive experience with Bradenton's historic preservation standards and the City's advisory board review process."
  },
  {
    question: "What makes Village of the Arts restoration unique?",
    answer: "The Village of the Arts is a distinctive creative district where historic 1920s-era cottages and small commercial buildings have been transformed into galleries, artist studios, and artisan businesses. Restoration work here balances historic preservation with creative contemporary use. The neighborhood's zoning overlay encourages adaptive reuse that maintains the district's artistic character. We've completed multiple Village projects that preserve original architectural features—wood siding, windows, porches—while accommodating gallery lighting, studio spaces, and mixed residential-commercial uses."
  },
  {
    question: "Can I get tax credits for historic restoration in Bradenton?",
    answer: "Yes, qualifying projects in Bradenton's historic areas may be eligible for federal historic tax credits (20% for income-producing properties), Florida's ad valorem tax exemption for historic properties, and local incentive programs. To qualify for federal credits, buildings must be listed on the National Register of Historic Places or contribute to a listed historic district, and rehabilitation work must meet Secretary of Interior Standards. We coordinate SHPO Part 1, Part 2, and Part 3 applications and ensure work meets certification requirements."
  },
  {
    question: "What's the approval process for historic work in Bradenton?",
    answer: "Bradenton's historic preservation program includes design review for exterior alterations in protected areas. The Historic Preservation Advisory Board reviews significant projects, while minor work may receive staff approval. The Village of the Arts has its own zoning overlay with specific guidelines for maintaining neighborhood character. Approval typically takes 3-6 weeks depending on project scope. We prepare comprehensive applications with historic documentation and have established relationships with city preservation staff."
  },
  {
    question: "How do you preserve original materials in Bradenton's historic buildings?",
    answer: "We prioritize preservation over replacement—a core principle of Secretary of Interior Standards. For Bradenton's historic buildings, this means careful repair of original wood siding, restoration of wood-frame windows, preservation of character-defining porches and details, and rehabilitation of period hardware. When replacement is unavoidable, we match original designs, dimensions, materials, and profiles. Bradenton's 1920s-era cottages and commercial buildings often feature distinctive Craftsman and Mediterranean Revival elements that we work to preserve."
  },
  {
    question: "What are typical costs for historic restoration in Bradenton?",
    answer: "Historic restoration in Bradenton costs vary by project type and scope: facade restoration typically runs $45-130 per square foot of facade; full building restoration $175-350+ per square foot; interior restoration $125-275 per square foot; and Village of the Arts cottage restoration $150-300 per square foot. These vary significantly based on building condition and whether tax credits are pursued. Bradenton generally offers 15-20% lower costs than Sarasota while maintaining quality standards. Federal tax credits (20%) can substantially offset costs for income-producing properties."
  },
  {
    question: "How long does a historic restoration project take in Bradenton?",
    answer: "Historic restoration timelines in Bradenton depend on project scope and approvals required. Village of the Arts cottage projects typically take 4-8 months; downtown commercial restoration 8-16 months; significant building restorations 12-24 months. Additional time is needed for design review approval (1-2 months), SHPO review for tax credit projects (4-6 months for Part 2 approval), and sourcing period materials. Bradenton's permitting is generally faster than larger markets—typically 3-5 weeks for commercial projects."
  },
  {
    question: "How does downtown Bradenton's revitalization affect historic buildings?",
    answer: "Downtown Bradenton's Riverwalk development and restaurant scene have increased interest in historic building restoration. Property values have risen, making restoration projects economically viable. The city encourages preservation as part of creating distinctive downtown character. Historic commercial buildings are being restored for dining, retail, professional offices, and mixed uses. We help property owners understand their building's historic significance, navigate incentive programs, and execute restorations that honor the past while serving contemporary needs."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/historic-restoration/" },
  { name: "Bradenton", href: "/historic-restoration-bradenton/" },
];

export default function HistoricRestorationBradentonPage() {
  return (
    <>
      <LocalBusinessSchema city="Bradenton" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Expert historic restoration contractor serving Bradenton, Florida. Village of the Arts, Downtown Bradenton, Old Manatee restoration. Secretary of Interior Standards compliance, SHPO coordination, tax credit projects. Projects from $500K to $25M+."
        city="Bradenton"
        minPrice="500000"
      />

      <ArticleSchema
        headline="Historic Restoration Bradenton FL | Village of the Arts, Downtown & More | FCS"
        description="Expert historic restoration contractor in Bradenton, Florida. Village of the Arts, Downtown Historic District, Old Manatee heritage. Secretary of Interior Standards, SHPO coordination."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/historic-restoration-bradenton/"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/historic-preservation/historic-preservation-large.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Bradenton, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Historic Restoration in Bradenton, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers expert historic restoration throughout Bradenton's distinctive historic areas—from the creative cottages of the Village of the Arts to the revitalizing commercial buildings of Downtown Bradenton and the heritage structures of Old Manatee.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              As Bradenton's experienced historic preservation contractor, we restore buildings to Secretary of Interior Standards, coordinate SHPO approvals for tax credit projects, and navigate the city's historic design review process—always with full accountability as the prime contractor.
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
                Historic Restoration Services in Bradenton
              </h2>
              <p className="text-gray-600 mb-6">
                Bradenton's historic architecture reflects its origins as a Manatee River settlement and early 20th-century commercial center. The Downtown Bradenton Historic District and the Village of the Arts offer distinct preservation opportunities—from traditional commercial restoration to creative adaptive reuse projects that transform historic cottages into galleries and studios. The city's growing investment in downtown revitalization has increased interest in preserving historic character while accommodating new uses.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists brings specialized expertise to Bradenton's historic buildings. We understand the craftsmanship of original construction, the distinctive Craftsman and Mediterranean Revival elements common to the area, and the regulatory framework governing preservation work. Our projects meet Secretary of Interior Standards, qualify for federal and state tax credits, and satisfy local historic review requirements.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Bradenton historic project. Our relationships with preservation craftspeople, specialty trades, and local officials ensure smooth execution from documentation through final restoration.
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
                Discuss Your Bradenton Historic Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Bradenton" currentService="historic-restoration" />
              <NearbyLocations currentCity="Bradenton" service="historic-restoration" serviceName="Historic Restoration" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Bradenton Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Historic restoration in Bradenton starting at $500,000.
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

      {/* Bradenton Historic Districts Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Bradenton's Historic Districts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Village of the Arts</h3>
              <p className="text-gray-600 text-sm">
                A unique creative district where 1920s-era cottages and small commercial buildings have been transformed into galleries, artist studios, and artisan businesses. The neighborhood's special zoning overlay encourages adaptive reuse that preserves historic character while supporting the arts community. Restoration projects balance preservation of original features—wood siding, windows, porches—with contemporary creative uses.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Downtown Bradenton Historic District</h3>
              <p className="text-gray-600 text-sm">
                Old Main Street and surrounding blocks contain early 20th-century commercial buildings now finding new life as downtown revitalization brings restaurants, entertainment venues, and professional offices. The Riverwalk development has increased property values and interest in historic preservation. Commercial buildings feature traditional masonry construction with decorative elements reflecting the era's architectural styles.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Old Manatee Heritage</h3>
              <p className="text-gray-600 text-sm">
                Bradenton's earliest settlement areas along the Manatee River contain structures connected to the region's founding and early development. These buildings reflect the area's maritime, agricultural, and commercial history. Preservation work maintains connection to Manatee County's origins while adapting structures for contemporary use. The Manatee County Historical Society supports research and documentation efforts.
              </p>
            </div>
          </div>
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Palmetto Historic District</h3>
              <p className="text-gray-600 text-sm">
                Across the Manatee River, the Palmetto Historic District contains early commercial and residential structures connected to the area's fishing and agricultural heritage. While technically a separate municipality, Palmetto's historic resources complement Bradenton's preservation efforts and create opportunities for regional heritage tourism. We serve historic properties throughout Manatee County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Bradenton Historic Restoration: Costs & Timelines
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
                    <td className="p-4 font-medium">Facade Restoration</td>
                    <td className="p-4">$45-130/SF (facade)</td>
                    <td className="p-4">2-6 months</td>
                    <td className="p-4">Potentially eligible</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Full Building Restoration</td>
                    <td className="p-4">$175-350+/SF</td>
                    <td className="p-4">8-18 months</td>
                    <td className="p-4">20% Federal (income properties)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Village of the Arts Cottage</td>
                    <td className="p-4">$150-300/SF</td>
                    <td className="p-4">4-8 months</td>
                    <td className="p-4">Potentially eligible</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Downtown Commercial Adaptive Reuse</td>
                    <td className="p-4">$160-320/SF</td>
                    <td className="p-4">10-20 months</td>
                    <td className="p-4">20% Federal (income properties)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Structural Stabilization</td>
                    <td className="p-4">$65-175/SF</td>
                    <td className="p-4">3-8 months</td>
                    <td className="p-4">Part of larger project</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs vary significantly based on building condition and level of restoration. Bradenton typically offers 15-20% lower costs than Sarasota. Federal Historic Tax Credits (20%) available for qualifying income-producing properties.
            </p>
          </div>
        </div>
      </section>

      {/* Preservation Standards Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Meeting Bradenton's Preservation Standards
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
                  Federal tax credit projects must meet the Secretary of Interior's Standards for Rehabilitation—10 principles that guide preservation work. We ensure all restoration decisions align with these standards, from material selection to treatment approaches. This framework guides best practices whether or not tax credits are pursued.
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
                  Projects seeking state or federal historic tax credits require Florida State Historic Preservation Office approval. We coordinate Part 1 (significance), Part 2 (proposed work), and Part 3 (completed work) applications, ensuring rehabilitation plans are approved before construction begins and certified upon completion.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">City Design Review</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Bradenton's Historic Preservation Advisory Board reviews significant exterior alterations in historic areas. The Village of the Arts has specific zoning overlay guidelines. We prepare thorough applications with historic documentation, proposed work descriptions, and material specifications. Our established relationships with city staff help facilitate the review process.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Hammer className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Preservation Craftsmanship</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Historic restoration requires specialized craftsmanship not found in conventional construction. We work with preservation carpenters, wood window specialists, plaster restorers, and other trades experienced in traditional methods and materials. This expertise ensures restoration work matches original quality and character.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Bradenton Historic Restoration Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Historic Documentation & Assessment",
                  description: "We begin with thorough documentation of existing conditions—photographs, measured drawings, and materials analysis. For Bradenton properties, we research building history through the Manatee County Historical Society, original construction methods, and previous alterations. This documentation forms the basis for restoration planning and regulatory submissions."
                },
                {
                  step: "2",
                  title: "Preservation Planning",
                  description: "Based on assessment findings, we develop restoration approaches that address deterioration while preserving character-defining features. For tax credit projects, we prepare SHPO Part 2 applications. For Village of the Arts properties, we ensure plans align with the neighborhood's creative character. We identify treatment priorities and develop specifications for historically appropriate materials and methods."
                },
                {
                  step: "3",
                  title: "Regulatory Approvals",
                  description: "We navigate Bradenton's design review process, coordinate SHPO reviews for tax credit projects, and obtain building permits. For downtown properties and Village of the Arts projects, we address specific overlay requirements. Bradenton's permitting is typically efficient at 3-5 weeks for commercial projects. We maintain communication with all reviewing agencies."
                },
                {
                  step: "4",
                  title: "Restoration Execution",
                  description: "Experienced project managers oversee restoration work with strict adherence to approved plans and preservation specifications. We coordinate preservation craftspeople, monitor material quality, and document work progress for both regulatory compliance and building archives. The Village of the Arts' compact lots and active neighborhood require thoughtful construction management."
                },
                {
                  step: "5",
                  title: "Completion & Certification",
                  description: "We complete all inspections and provide comprehensive documentation of completed work. For tax credit projects, we prepare SHPO Part 3 certification applications with final photographs and project narrative. We ensure all regulatory requirements are satisfied and buildings are ready for occupancy or continued use, connecting Bradenton's past with its future."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-gray-50 rounded-lg p-6">
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
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Bradenton Chooses FCS for Historic Restoration
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on Bradenton historic projects. You get direct accountability, single-point contact, and our full commitment to your project's success throughout the restoration process.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Preservation Expertise</h3>
              <p className="text-gray-600">
                With 20+ years of experience, we understand historic materials, traditional construction methods, and the regulatory framework governing preservation. We've completed projects in all of Bradenton's historic areas, from the Village of the Arts to downtown.
              </p>
            </div>
            <div className="card text-center p-6">
              <FileCheck className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Tax Credit Success</h3>
              <p className="text-gray-600">
                We navigate federal and state historic tax credit programs, coordinating SHPO applications and ensuring work meets certification requirements. Tax credits can offset 20% of qualified rehabilitation costs for income-producing properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={bradentonFaqs} title="Historic Restoration in Bradenton - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in Bradenton</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-bradenton/" className="text-brand-green hover:underline">Commercial Construction Bradenton</Link></li>
                <li><Link href="/disaster-recovery-bradenton/" className="text-brand-green hover:underline">Disaster Recovery Bradenton</Link></li>
                <li><Link href="/balcony-reconstruction-bradenton/" className="text-brand-green hover:underline">Balcony Reconstruction Bradenton</Link></li>
                <li><Link href="/exterior-waterproofing-bradenton/" className="text-brand-green hover:underline">Exterior Waterproofing Bradenton</Link></li>
                <li><Link href="/multi-family-construction-bradenton/" className="text-brand-green hover:underline">Multi-Family Construction Bradenton</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Historic Restoration Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/historic-restoration-sarasota/" className="text-brand-green hover:underline">Historic Restoration Sarasota</Link></li>
                <li><Link href="/historic-restoration-tampa/" className="text-brand-green hover:underline">Historic Restoration Tampa</Link></li>
                <li><Link href="/historic-restoration-st-petersburg/" className="text-brand-green hover:underline">Historic Restoration St. Petersburg</Link></li>
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
            Start Your Bradenton Historic Restoration Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver historic restoration excellence throughout Bradenton, from the Village of the Arts to downtown and beyond.
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
