import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, Users, FileCheck, BookOpen, Landmark, Hammer, Scale, Wheat, Anchor, Home } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historic Restoration Ruskin FL | Ruskin Colony & Fishing Village Heritage | FCS",
  description: "Expert historic restoration contractor in Ruskin, Florida. Ruskin Colony heritage buildings, fishing village structures, agricultural packing houses. Secretary of Interior Standards, SHPO coordination, tax credit projects. $500K-$25M+. Call (813) 420-7561.",
  keywords: "historic restoration ruskin, ruskin colony restoration, fishing village preservation, agricultural heritage buildings ruskin, historic preservation south hillsborough, SHPO ruskin florida",
};

const serviceTypes = [
  {
    title: "Colony-Era Building Restoration",
    description: "Restoration of structures from Ruskin's 1908 utopian socialist colony era, including the historic Ruskin College buildings and early community structures using period-appropriate materials and methods."
  },
  {
    title: "Agricultural Heritage Preservation",
    description: "Preservation and adaptive reuse of tomato packing houses, farmhouses, barns, and worker housing that tell the story of South Hillsborough's agricultural past and tomato farming industry."
  },
  {
    title: "Waterfront Structure Restoration",
    description: "Restoration of historic fishing village structures, boat houses, and waterfront buildings along Tampa Bay and the Little Manatee River with marine-appropriate preservation techniques."
  },
  {
    title: "Historic Home Rehabilitation",
    description: "Careful rehabilitation of early 20th-century homes in the Ruskin Historic District, preserving architectural character while sensitively integrating modern systems."
  },
  {
    title: "Structural Stabilization",
    description: "Addressing foundation issues, structural deterioration, and load-bearing concerns in aging historic buildings using minimally invasive methods that preserve original fabric."
  },
  {
    title: "SHPO Coordination",
    description: "Full coordination with Florida State Historic Preservation Office for tax credit projects, ensuring rehabilitation work meets Secretary of Interior Standards for certification."
  }
];

// Ruskin-specific historic restoration FAQs
const ruskinFaqs = [
  {
    question: "What is Ruskin's historic significance and how does it affect restoration?",
    answer: "Ruskin was founded in 1908 as a utopian socialist colony based on the social and economic ideas of John Ruskin, the English art critic and social reformer. The colony included Ruskin College, communal enterprises, and idealistic social organization. While the commune dissolved by 1918 due to internal conflicts and a devastating fire, remaining structures from this era represent significant Florida history. Restoration of colony-era buildings requires understanding this unique heritage and the experimental nature of early construction. We approach these projects with particular care, documenting historic significance while implementing appropriate preservation treatments."
  },
  {
    question: "What types of historic structures exist in Ruskin today?",
    answer: "Ruskin's historic resources fall into several categories: colony-era structures from 1908-1918 including remains of Ruskin College buildings and early community structures; agricultural buildings from the tomato farming era (1920s-1970s) including packing houses, farmhouses, and worker housing; fishing village structures along Tampa Bay and the Little Manatee River; and early residential buildings from the town's development as a small fishing and farming community. While development has transformed much of the area, significant examples remain that warrant professional preservation."
  },
  {
    question: "Are there tax credits available for historic restoration in Ruskin?",
    answer: "Qualifying historic properties in Ruskin may be eligible for the Federal Historic Preservation Tax Credit (20% for income-producing properties) if listed on the National Register of Historic Places. Properties within the Ruskin Historic District may also qualify. Florida's ad valorem tax exemption for historic properties provides additional benefits. Individual significant structures outside the district can pursue National Register listing to access these incentives. We coordinate SHPO applications and ensure rehabilitation work meets certification requirements for tax credit projects."
  },
  {
    question: "How do you approach agricultural heritage building restoration?",
    answer: "Ruskin's tomato packing houses, farmhouses, and agricultural structures require specialized understanding of vernacular construction methods and materials. These buildings were typically built for function rather than architectural statement, using locally available materials and practical construction techniques. Our approach documents original construction, identifies character-defining features, and implements preservation treatments appropriate to the building type. Adaptive reuse can give these structures new life while preserving their connection to Ruskin's agricultural heritage."
  },
  {
    question: "What special considerations apply to waterfront historic structures in Ruskin?",
    answer: "Ruskin's waterfront historic structures face unique challenges from Tampa Bay's marine environment, including salt air corrosion, flooding, and storm exposure. Restoration must address deterioration from these conditions while maintaining historic character. We use marine-appropriate preservation techniques, specify materials rated for coastal exposure, and address flood zone compliance for structures in VE and AE zones along the bay. The Little Manatee River corridor presents similar considerations with freshwater flooding risks."
  },
  {
    question: "What is the process for historic review in Ruskin?",
    answer: "Ruskin falls under Hillsborough County jurisdiction for historic preservation. Properties in the Ruskin Historic District require review by the county's historic preservation program. Exterior alterations to contributing structures need approval before work begins. For properties seeking tax credits, Florida SHPO review is required with Part 1 (significance), Part 2 (proposed work), and Part 3 (completed work) applications. We navigate both local and state review processes, preparing comprehensive documentation for efficient approvals."
  },
  {
    question: "What are typical costs for historic restoration in Ruskin?",
    answer: "Historic restoration costs in Ruskin vary based on building type and condition. Colony-era or significant structures typically cost $200-350 per square foot for full restoration. Agricultural building adaptive reuse ranges $125-225 per square foot depending on structural condition and intended use. Historic home rehabilitation typically runs $150-275 per square foot. Waterfront structures often cost more due to marine-grade material requirements and flood compliance. Federal tax credits (20%) can offset costs for qualifying income-producing properties."
  },
  {
    question: "How long does a historic restoration project take in Ruskin?",
    answer: "Project timelines depend on scope and required approvals. Minor exterior work typically takes 2-4 months. Significant building restoration runs 10-18 months. Adaptive reuse projects with change of use may take 12-24 months. Additional time is needed for Hillsborough County historic review (4-6 weeks) and SHPO review for tax credit projects (4-6 months for Part 2 approval). We build regulatory timelines into project schedules and maintain clear communication about schedule drivers throughout the process."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/historic-restoration/" },
  { name: "Ruskin", href: "/historic-restoration-ruskin/" },
];

export default function HistoricRestorationRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Expert historic restoration contractor serving Ruskin, Florida. Ruskin Colony heritage buildings, fishing village structures, agricultural packing houses. Secretary of Interior Standards compliance, SHPO coordination, tax credit projects. Projects from $500K to $25M+."
        city="Ruskin"
        minPrice="500000"
      />

      <ArticleSchema
        headline="Historic Restoration Ruskin FL | Ruskin Colony & Fishing Village Heritage | FCS"
        description="Expert historic restoration contractor in Ruskin, Florida. Ruskin Colony heritage buildings, fishing village structures, agricultural packing houses. Secretary of Interior Standards, SHPO coordination."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/historic-restoration-ruskin/"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/historic-preservation.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Ruskin, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Historic Restoration in Ruskin, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers expert historic restoration throughout Ruskin and South Hillsborough County, preserving the unique heritage of this community founded in 1908 as a utopian socialist colony based on the ideals of John Ruskin.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              From colony-era structures and agricultural packing houses to fishing village buildings and waterfront properties, we restore Ruskin's distinctive architectural heritage to Secretary of Interior Standards, coordinate SHPO approvals for tax credit projects, and navigate local preservation requirements.
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
              <span className="font-semibold text-gray-700">1908 Colony Heritage</span>
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
                Historic Restoration Services in Ruskin
              </h2>
              <p className="text-gray-600 mb-6">
                Ruskin's unique history began in 1908 when Dr. George McAnelly Miller founded a utopian socialist colony based on the social and economic ideas of English art critic John Ruskin. The colony established Ruskin College, communal enterprises, and an idealistic community that attracted intellectuals and reformers. Though the commune dissolved by 1918, Ruskin's founding left lasting traces in the community's architecture and spirit.
              </p>
              <p className="text-gray-600 mb-6">
                Following the colony's dissolution, Ruskin evolved into a fishing village and agricultural community, becoming a major center for tomato farming in the early-to-mid 20th century. Today, remaining packing houses, farmhouses, fishing structures, and early community buildings represent this diverse heritage. As development transforms South Hillsborough County, preservation of these historic resources maintains connection to Ruskin's distinctive past.
              </p>
              <p className="text-gray-600 mb-8">
                Florida Construction Specialists brings specialized expertise to Ruskin's historic buildings. As our home community, we have particular investment in preserving local heritage. We understand vernacular construction methods, agricultural building types, and the regulatory framework governing preservation work. As a prime general contractor, we maintain full control and accountability on every Ruskin historic project.
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
                Discuss Your Ruskin Historic Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Ruskin" currentService="historic-restoration" />
              <NearbyLocations currentCity="Ruskin" service="historic-restoration" serviceName="Historic Restoration" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Ruskin Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Historic restoration in Ruskin starting at $500,000.
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

      {/* Ruskin Historic Heritage Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Ruskin's Historic Heritage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Ruskin Colony (1908-1918)</h3>
              <p className="text-gray-600 text-sm">
                Founded by Dr. George McAnelly Miller as a utopian socialist colony based on John Ruskin's ideals, the community included Ruskin College, a print shop, communal farming, and progressive social experiments. Colony-era structures that survive represent significant Florida social history and require careful preservation that honors their idealistic origins.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Wheat className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Agricultural Era (1920s-1970s)</h3>
              <p className="text-gray-600 text-sm">
                Following the colony's dissolution, Ruskin became a major tomato farming center. Packing houses, farmhouses, worker housing, and agricultural outbuildings from this era represent important labor and agricultural history. These vernacular structures often feature utilitarian construction suited for Florida's climate and farming operations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Anchor className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Fishing Village Heritage</h3>
              <p className="text-gray-600 text-sm">
                Ruskin's location on Tampa Bay and the Little Manatee River made it a fishing community alongside agriculture. Historic boat houses, fish camps, waterfront cottages, and commercial fishing structures reflect this maritime heritage. These buildings require specialized preservation techniques suited to marine exposure.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Ruskin Historic District</h3>
              <p className="text-gray-600 text-sm">
                The small Ruskin Historic District contains structures significant to understanding the community's origins and early development. Properties within the district receive local historic protection through Hillsborough County's preservation program. Exterior alterations require review and approval before work begins.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Community Landmarks</h3>
              <p className="text-gray-600 text-sm">
                Individual landmarks throughout Ruskin preserve community memory, from the remaining Ruskin College building site to early commercial structures, churches, and civic buildings. These landmarks anchor community identity as development transforms the surrounding area, making preservation increasingly important.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Ruskin Historic Restoration: Costs & Timelines
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
                    <td className="p-4 font-medium">Colony-Era Structure Restoration</td>
                    <td className="p-4">$200-350/SF</td>
                    <td className="p-4">12-18 months</td>
                    <td className="p-4">20% Federal (income properties)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Agricultural Building Adaptive Reuse</td>
                    <td className="p-4">$125-225/SF</td>
                    <td className="p-4">8-14 months</td>
                    <td className="p-4">Potentially eligible</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Historic Home Rehabilitation</td>
                    <td className="p-4">$150-275/SF</td>
                    <td className="p-4">6-12 months</td>
                    <td className="p-4">If National Register listed</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Waterfront Structure Restoration</td>
                    <td className="p-4">$175-300/SF</td>
                    <td className="p-4">10-16 months</td>
                    <td className="p-4">Part of larger project</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Structural Stabilization</td>
                    <td className="p-4">$75-175/SF</td>
                    <td className="p-4">3-8 months</td>
                    <td className="p-4">Part of larger project</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs vary significantly based on building condition and level of restoration. Federal Historic Tax Credits (20%) available for qualifying income-producing properties listed on the National Register.
            </p>
          </div>
        </div>
      </section>

      {/* Preservation Standards Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Meeting Preservation Standards in Ruskin
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
                  Federal tax credit projects must meet the Secretary of Interior's Standards for Rehabilitation. These 10 principles guide treatment decisions from material selection to modern system integration. We ensure all restoration approaches align with these standards, whether for tax credit projects or best-practice preservation work.
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
                  Projects seeking state or federal historic tax credits require Florida State Historic Preservation Office approval. We coordinate Part 1 (significance), Part 2 (proposed work), and Part 3 (completed work) applications. Our experience ensures rehabilitation plans are approved before construction begins and certified upon completion.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Hillsborough County Review</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Ruskin's historic resources fall under Hillsborough County's historic preservation program. Properties in the Ruskin Historic District require review for exterior alterations. We prepare thorough applications with historic documentation and work with county preservation staff to achieve timely approvals.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Hammer className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Vernacular Building Expertise</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Many of Ruskin's historic buildings are vernacular structures built for practical purposes rather than architectural distinction. Preserving agricultural buildings, fishing structures, and modest community buildings requires understanding of folk construction methods, locally available materials, and functional adaptations to Florida's climate.
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
            Our Ruskin Historic Restoration Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Historic Documentation & Research",
                  description: "We begin with thorough documentation of existing conditions and research into building history. For Ruskin properties, we explore connections to the colony era, agricultural period, or fishing village heritage. The Ruskin Historical Society archives and county records provide valuable information. This documentation forms the basis for restoration planning and regulatory submissions."
                },
                {
                  step: "2",
                  title: "Preservation Planning",
                  description: "Based on assessment findings and historic research, we develop restoration approaches that address deterioration while preserving character-defining features. For Ruskin's vernacular buildings, we identify original construction methods and appropriate treatments. For tax credit projects, we prepare SHPO Part 2 applications with detailed scope descriptions."
                },
                {
                  step: "3",
                  title: "Regulatory Approvals",
                  description: "We navigate Hillsborough County's historic preservation requirements, coordinate SHPO reviews for tax credit projects, and obtain all necessary permits. For properties in the Ruskin Historic District, we prepare Certificate of Appropriateness applications. We maintain communication with reviewing agencies throughout the approval process."
                },
                {
                  step: "4",
                  title: "Restoration Execution",
                  description: "Experienced project managers oversee restoration work with strict adherence to approved plans and preservation specifications. For Ruskin's unique building types, we engage craftspeople experienced with vernacular construction, agricultural structures, and marine-exposed buildings. We document work progress and maintain quality control throughout."
                },
                {
                  step: "5",
                  title: "Completion & Certification",
                  description: "We complete all inspections and provide comprehensive documentation of completed work. For tax credit projects, we prepare SHPO Part 3 certification applications with final photographs and project narrative. We ensure all regulatory requirements are satisfied and buildings are ready for use, with their historic character preserved for future generations."
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
            Why Ruskin Chooses FCS for Historic Restoration
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on Ruskin historic projects. You get direct accountability, single-point contact, and our full commitment to your project's success throughout the restoration process.
              </p>
            </div>
            <div className="card text-center p-6">
              <Landmark className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Local Heritage Investment</h3>
              <p className="text-gray-600">
                As our home community, we have particular investment in preserving Ruskin's unique heritage. We understand the colony's founding ideals, agricultural history, and fishing village character that make Ruskin's historic resources distinctive.
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
      <FAQWithSchema items={ruskinFaqs} title="Historic Restoration in Ruskin - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in Ruskin</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-ruskin/" className="text-brand-green hover:underline">Commercial Construction Ruskin</Link></li>
                <li><Link href="/disaster-recovery-ruskin/" className="text-brand-green hover:underline">Disaster Recovery Ruskin</Link></li>
                <li><Link href="/balcony-reconstruction-ruskin/" className="text-brand-green hover:underline">Balcony Reconstruction Ruskin</Link></li>
                <li><Link href="/exterior-waterproofing-ruskin/" className="text-brand-green hover:underline">Exterior Waterproofing Ruskin</Link></li>
                <li><Link href="/multi-family-construction-ruskin/" className="text-brand-green hover:underline">Multi-Family Construction Ruskin</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Historic Restoration Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/historic-restoration-tampa/" className="text-brand-green hover:underline">Historic Restoration Tampa</Link></li>
                <li><Link href="/historic-restoration-brandon/" className="text-brand-green hover:underline">Historic Restoration Brandon</Link></li>
                <li><Link href="/historic-restoration-st-petersburg/" className="text-brand-green hover:underline">Historic Restoration St. Petersburg</Link></li>
                <li><Link href="/historic-restoration-bradenton/" className="text-brand-green hover:underline">Historic Restoration Bradenton</Link></li>
                <li><Link href="/historic-restoration-sarasota/" className="text-brand-green hover:underline">Historic Restoration Sarasota</Link></li>
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
            Start Your Ruskin Historic Restoration Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We preserve Ruskin's unique heritage, from colony-era structures and agricultural buildings to fishing village landmarks and historic homes.
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
