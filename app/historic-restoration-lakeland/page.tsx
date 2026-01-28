import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, Users, FileCheck, BookOpen, Landmark, Hammer, Scale } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historic Restoration Lakeland FL | Frank Lloyd Wright & Downtown | FCS",
  description: "Expert historic restoration contractor in Lakeland, Florida. Frank Lloyd Wright architecture at Florida Southern College, Downtown Lakeland, Dixieland, Lake Morton. Secretary of Interior Standards, SHPO coordination, tax credit projects. $500K-$50M+. Call (813) 420-7561.",
  keywords: "historic restoration lakeland, frank lloyd wright restoration, florida southern college preservation, downtown lakeland historic, dixieland historic district, lake morton historic homes, SHPO lakeland",
};

const serviceTypes = [
  {
    title: "Historic Building Restoration",
    description: "Complete restoration of historic structures to period-accurate condition, addressing structural issues, deteriorated materials, and code compliance while preserving architectural character."
  },
  {
    title: "Frank Lloyd Wright Preservation",
    description: "Specialized preservation expertise for Florida Southern College's internationally significant collection of Frank Lloyd Wright architecture, requiring the highest standards of conservation practice."
  },
  {
    title: "Facade Restoration",
    description: "Exterior restoration of historic building facades including masonry repair, stucco restoration, window rehabilitation, and historically appropriate paint systems."
  },
  {
    title: "Period Interior Restoration",
    description: "Interior restoration including historic plasterwork, decorative finishes, millwork, original flooring, and period-appropriate fixtures and hardware."
  },
  {
    title: "Adaptive Reuse Projects",
    description: "Sensitively converting historic buildings to new uses—downtown commercial buildings to restaurants, historic warehouses to creative offices—while maintaining historic integrity."
  },
  {
    title: "SHPO Coordination",
    description: "Full coordination with Florida State Historic Preservation Office for tax credit projects, ensuring rehabilitation work meets Secretary of Interior Standards."
  }
];

// Lakeland-specific historic restoration FAQs
const lakelandFaqs = [
  {
    question: "What makes Lakeland's historic architecture unique?",
    answer: "Lakeland is home to the world's largest single-site collection of Frank Lloyd Wright architecture at Florida Southern College—12 structures designed by the legendary architect between 1938 and 1958. This internationally significant collection, known as 'Child of the Sun,' represents Wright's only complete campus design ever built. Beyond Florida Southern, Lakeland features charming 1920s Mediterranean Revival and Craftsman architecture in its Downtown, Dixieland, and Lake Morton historic districts. This combination of world-famous modernist architecture and traditional early Florida commercial and residential buildings makes Lakeland's preservation landscape uniquely diverse."
  },
  {
    question: "Can FCS work on Frank Lloyd Wright buildings at Florida Southern College?",
    answer: "Work on Florida Southern College's Frank Lloyd Wright buildings requires specialized expertise and careful coordination with the college, preservation authorities, and often the Frank Lloyd Wright Foundation. These internationally significant structures demand the highest standards of preservation practice, including understanding of Wright's experimental materials, Usonian design principles, and original construction methods. While we respect the extraordinary complexity involved, Florida Construction Specialists has the preservation expertise and craftsmanship required to support conservation work on these exceptional buildings. Any work must meet Secretary of Interior Standards and often involves National Park Service consultation."
  },
  {
    question: "What historic districts does FCS serve in Lakeland?",
    answer: "Florida Construction Specialists serves all four of Lakeland's designated historic districts: Downtown Lakeland Historic District with its 1920s commercial buildings now housing restaurants and boutiques; Dixieland Historic District featuring Craftsman bungalows and Colonial Revival homes from the 1910s-1920s; Lake Morton Historic District with elegant early 20th-century homes surrounding the scenic lake; and Florida Southern College Historic District preserving Wright's architectural masterwork. Each district has specific preservation standards and review requirements through Lakeland's Historic Preservation Board."
  },
  {
    question: "How does Lakeland's Historic Preservation Board review work?",
    answer: "Lakeland has a well-established historic preservation program considered one of Florida's most supportive. The Historic Preservation Board reviews exterior alterations to contributing structures in designated historic districts. Applications include proposed work descriptions, material specifications, and historic documentation. The board meets monthly, with staff review for minor work. Approval typically takes 3-6 weeks depending on project complexity. The city also offers matching grants and technical assistance for qualifying preservation projects. We have strong relationships with Lakeland's preservation staff and understand local requirements."
  },
  {
    question: "Are there tax credits available for historic restoration in Lakeland?",
    answer: "Yes, qualifying projects in Lakeland's historic districts may be eligible for federal historic tax credits (20% for income-producing properties), Florida's ad valorem tax exemption for historic properties, and the city's local incentive programs. To qualify for federal tax credits, buildings must be listed on the National Register of Historic Places (individually or as contributing structures in a historic district), and rehabilitation work must meet Secretary of Interior Standards. We coordinate the SHPO application process and ensure work meets all certification requirements for tax credit qualification."
  },
  {
    question: "What are typical costs for historic restoration in Lakeland?",
    answer: "Historic restoration in Lakeland typically costs less than coastal markets while maintaining high quality standards. Budget ranges are: facade restoration $45-130 per square foot of facade; full building restoration $175-350+ per square foot; interior restoration $130-275 per square foot. Frank Lloyd Wright preservation work commands premium pricing due to specialized expertise required. Costs vary based on building condition, level of restoration, and whether tax credits are pursued. Federal tax credits (20%) can substantially offset costs for income-producing properties. We provide detailed budgeting during pre-construction assessment."
  },
  {
    question: "How long does historic restoration take in Lakeland?",
    answer: "Historic restoration timelines in Lakeland depend on project scope and approvals required. Minor exterior work typically takes 2-4 months; significant building restoration 10-20 months; complex adaptive reuse projects 14-30 months. Additional time is needed for Historic Preservation Board review (3-6 weeks), SHPO approval for tax credit projects (4-6 months for Part 2 certification), and sourcing period-appropriate materials. Frank Lloyd Wright projects require extended timelines for specialized consultation and material fabrication. We build these factors into project schedules and maintain clear communication about timeline drivers."
  },
  {
    question: "What adaptive reuse opportunities exist in downtown Lakeland?",
    answer: "Downtown Lakeland's revitalization has created excellent adaptive reuse opportunities. Historic commercial buildings along Main Street and Kentucky Avenue are being transformed into restaurants, breweries, event venues, and creative office space. Lake Mirror Promenade properties are particularly sought after. The city supports sensitive adaptive reuse through its preservation program and downtown development initiatives. Recent successful conversions include historic banks becoming restaurants and early commercial buildings housing craft breweries. We help property owners navigate preservation requirements while creating viable contemporary spaces."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/historic-restoration/" },
  { name: "Lakeland", href: "/historic-restoration-lakeland/" },
];

export default function HistoricRestorationLakelandPage() {
  return (
    <>
      <LocalBusinessSchema city="Lakeland" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Expert historic restoration contractor serving Lakeland, Florida. Frank Lloyd Wright architecture at Florida Southern College, Downtown Lakeland, Dixieland, Lake Morton historic districts. Secretary of Interior Standards compliance, SHPO coordination, tax credit projects. Projects from $500K to $50M+."
        city="Lakeland"
        minPrice="500000"
      />

      <ArticleSchema
        headline="Historic Restoration Lakeland FL | Frank Lloyd Wright & Downtown | FCS"
        description="Expert historic restoration contractor in Lakeland, Florida. Frank Lloyd Wright architecture at Florida Southern College, Downtown Lakeland, Dixieland, Lake Morton historic districts."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/historic-restoration-lakeland/"
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
              <span className="text-brand-gold font-semibold">Serving Lakeland, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Historic Restoration in Lakeland, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers expert historic restoration throughout Lakeland—from the world-renowned Frank Lloyd Wright architecture at Florida Southern College to the charming Mediterranean Revival and Craftsman buildings of Downtown, Dixieland, and Lake Morton historic districts.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              As Lakeland's premier historic preservation contractor, we restore buildings to Secretary of Interior Standards, coordinate SHPO approvals for tax credit projects, and navigate the Lakeland Historic Preservation Board process—always with full accountability as the prime contractor.
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
              <span className="font-semibold text-gray-700">$10M+ Bonding Capacity</span>
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
                Historic Restoration Services in Lakeland
              </h2>
              <p className="text-gray-600 mb-6">
                Lakeland possesses an extraordinary architectural heritage, anchored by the world's largest single-site collection of Frank Lloyd Wright architecture at Florida Southern College. The "Child of the Sun" campus represents Wright's only complete campus design ever built, comprising 12 structures of international architectural significance. Beyond this modernist masterwork, Lakeland's four designated historic districts contain hundreds of contributing structures from the city's early 20th-century development.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists brings specialized expertise to Lakeland's diverse historic buildings. We understand the craftsmanship of original construction—from Wright's experimental textile block systems to the Mediterranean Revival commercial buildings of Downtown Lakeland. Our projects meet Secretary of Interior Standards, qualify for federal and state tax credits, and satisfy the Lakeland Historic Preservation Board.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Lakeland historic project. Our relationships with preservation craftspeople, specialty trades, and local preservation officials ensure smooth execution from documentation through final restoration.
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
                Discuss Your Lakeland Historic Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Lakeland" currentService="historic-restoration" />
              <NearbyLocations currentCity="Lakeland" service="historic-restoration" serviceName="Historic Restoration" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Lakeland Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Historic restoration in Lakeland starting at $500,000.
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

      {/* Lakeland Historic Districts Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Lakeland's Historic Districts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Landmark className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Florida Southern College Historic District</h3>
              <p className="text-gray-600 text-sm">
                Home to the world's largest single-site collection of Frank Lloyd Wright architecture—12 structures designed between 1938 and 1958. The "Child of the Sun" campus represents Wright's only complete campus design ever built and is of international architectural significance. Preservation work requires the highest standards, specialized expertise in Wright's construction methods, and coordination with preservation authorities. These buildings showcase Wright's textile block system, Usonian principles, and innovative approach to educational architecture.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Downtown Lakeland Historic District</h3>
              <p className="text-gray-600 text-sm">
                Lakeland's commercial core features early 20th-century buildings now experiencing a renaissance as restaurants, breweries, boutique retail, and creative offices. The Lake Mirror Promenade anchors the district with its 1928 Mediterranean Revival architecture surrounding the scenic lake. Main Street and Kentucky Avenue contain restored commercial buildings that blend historic character with contemporary vitality. The city actively supports adaptive reuse that maintains architectural heritage.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Dixieland Historic District</h3>
              <p className="text-gray-600 text-sm">
                A charming residential neighborhood featuring Craftsman bungalows, Colonial Revival homes, and Vernacular cottages from the 1910s-1920s. Dixieland has a strong preservation-minded community committed to maintaining the neighborhood's historic character. The tree-lined streets and front porch culture create a walkable neighborhood that attracts homeowners seeking authentic early Florida residential architecture. Restoration work focuses on period-accurate materials and methods.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Lake Morton Historic District</h3>
              <p className="text-gray-600 text-sm">
                Elegant early 20th-century homes surrounding scenic Lake Morton represent some of Lakeland's finest residential architecture. The district features Mediterranean Revival estates, Colonial Revival mansions, and substantial Craftsman homes that benefit from the lake's natural beauty and famous swan population. Restoration projects often address original architectural details, historic landscaping, and the integration of modern systems while preserving period character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frank Lloyd Wright Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Frank Lloyd Wright's "Child of the Sun" Campus
            </h2>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <p className="text-gray-600 mb-6">
                Florida Southern College's Frank Lloyd Wright campus is one of Lakeland's most significant cultural treasures and a site of international architectural importance. Between 1938 and 1958, Wright designed 12 structures for the campus, including the Annie Pfeiffer Chapel, Danforth Chapel, Roux Library, and a network of esplanades connecting the buildings. This represents the world's largest single-site collection of Wright's work and his only fully realized campus design.
              </p>
              <p className="text-gray-600 mb-6">
                The buildings showcase Wright's textile block construction system, Usonian design principles, and innovative integration of architecture with landscape. The campus demonstrates Wright's vision for affordable, beautiful architecture accessible to everyday Americans—in this case, students and faculty at a Methodist college.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-3">Preservation Challenges</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Textile block deterioration and water intrusion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Experimental materials requiring specialized expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Code compliance with historic character preservation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Climate control for Florida's humidity and heat</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-3">Preservation Approach</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Secretary of Interior Standards compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Coordination with preservation authorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Period-appropriate material sourcing and fabrication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>Specialized craftspeople with Wright experience</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Lakeland Historic Restoration: Costs & Timelines
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
                    <td className="p-4">3-6 months</td>
                    <td className="p-4">Potentially eligible</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-medium">Full Building Restoration</td>
                    <td className="p-4">$175-350+/SF</td>
                    <td className="p-4">10-20 months</td>
                    <td className="p-4">20% Federal (income properties)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Interior Historic Restoration</td>
                    <td className="p-4">$130-275/SF</td>
                    <td className="p-4">5-12 months</td>
                    <td className="p-4">Part of whole-building</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-white">
                    <td className="p-4 font-medium">Adaptive Reuse</td>
                    <td className="p-4">$150-300/SF</td>
                    <td className="p-4">12-24 months</td>
                    <td className="p-4">20% Federal (income properties)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Frank Lloyd Wright Preservation</td>
                    <td className="p-4">$300-500+/SF</td>
                    <td className="p-4">18-36 months</td>
                    <td className="p-4">Case-by-case determination</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-medium">Structural Stabilization</td>
                    <td className="p-4">$65-175/SF</td>
                    <td className="p-4">3-8 months</td>
                    <td className="p-4">Part of larger project</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs vary significantly based on building condition and level of restoration. Federal Historic Tax Credits (20%) available for qualifying income-producing properties. Lakeland costs typically 15-20% lower than coastal markets.
            </p>
          </div>
        </div>
      </section>

      {/* Preservation Standards Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Meeting Lakeland's Preservation Standards
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
                  Federal tax credit projects must meet the Secretary of Interior's Standards for Rehabilitation—10 principles that guide preservation work. We ensure all restoration decisions align with these standards, from material selection to treatment approaches. This framework also guides best practices for non-tax-credit projects throughout Lakeland's historic districts.
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
                  <h3 className="font-bold text-brand-green-dark">Lakeland Historic Preservation Board</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Lakeland's Historic Preservation Board reviews exterior alterations in designated historic districts. The city's preservation program is considered one of Florida's most supportive, offering matching grants and technical assistance. We prepare thorough applications with historic documentation and design rationale, maintaining strong relationships with preservation staff.
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
                  Historic restoration requires specialized craftsmanship not found in conventional construction. We work with preservation masons, plaster specialists, wood window restorers, and other trades experienced in traditional methods and materials. For Frank Lloyd Wright projects, we engage craftspeople with specific experience in Wright's construction techniques.
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
            Our Lakeland Historic Restoration Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Historic Documentation & Assessment",
                  description: "We begin with thorough documentation of existing conditions—photographs, measured drawings, and materials analysis. For Lakeland properties, we research building history, original construction methods, and previous alterations. For Frank Lloyd Wright structures, we coordinate with preservation authorities and consult archival documentation. This research forms the basis for restoration planning and regulatory submissions."
                },
                {
                  step: "2",
                  title: "Preservation Planning",
                  description: "Based on assessment findings, we develop restoration approaches that address deterioration while preserving character-defining features. For tax credit projects, we prepare SHPO Part 2 applications. For all projects, we identify treatment priorities and develop specifications for historically appropriate materials and methods, working closely with preservation consultants when required."
                },
                {
                  step: "3",
                  title: "Regulatory Approvals",
                  description: "We navigate Lakeland's Historic Preservation Board approval process, coordinate SHPO reviews for tax credit projects, and obtain building permits. For Florida Southern College projects, additional coordination with the college and preservation authorities is required. We maintain communication with all reviewing agencies throughout the approval process."
                },
                {
                  step: "4",
                  title: "Restoration Execution",
                  description: "Experienced project managers oversee restoration work with strict adherence to approved plans and preservation specifications. We coordinate preservation craftspeople, monitor material quality, and document work progress. For Lakeland's historic buildings, we source period-appropriate materials and employ traditional techniques alongside compatible modern methods."
                },
                {
                  step: "5",
                  title: "Completion & Certification",
                  description: "We complete all inspections and provide comprehensive documentation of completed work. For tax credit projects, we prepare SHPO Part 3 certification applications with final photographs and project narrative. We ensure all regulatory requirements are satisfied and buildings are ready for occupancy or continued use, with documentation for future preservation reference."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-lg p-6">
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
            Why Lakeland Chooses FCS for Historic Restoration
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on Lakeland historic projects. You get direct accountability, single-point contact, and our full commitment to your project's success throughout the restoration process.
              </p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Preservation Expertise</h3>
              <p className="text-gray-600">
                With 20+ years of experience, we understand historic materials, traditional construction methods, and the regulatory framework governing preservation. We bring specialized expertise to Lakeland's diverse architectural heritage.
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
      <FAQWithSchema items={lakelandFaqs} title="Historic Restoration in Lakeland - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in Lakeland</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-lakeland/" className="text-brand-green hover:underline">Commercial Construction Lakeland</Link></li>
                <li><Link href="/disaster-recovery-lakeland/" className="text-brand-green hover:underline">Disaster Recovery Lakeland</Link></li>
                <li><Link href="/balcony-reconstruction-lakeland/" className="text-brand-green hover:underline">Balcony Reconstruction Lakeland</Link></li>
                <li><Link href="/exterior-waterproofing-lakeland/" className="text-brand-green hover:underline">Exterior Waterproofing Lakeland</Link></li>
                <li><Link href="/multi-family-construction-lakeland/" className="text-brand-green hover:underline">Multi-Family Construction Lakeland</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Historic Restoration Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/historic-restoration-tampa/" className="text-brand-green hover:underline">Historic Restoration Tampa</Link></li>
                <li><Link href="/historic-restoration-st-petersburg/" className="text-brand-green hover:underline">Historic Restoration St. Petersburg</Link></li>
                <li><Link href="/historic-restoration-brandon/" className="text-brand-green hover:underline">Historic Restoration Brandon</Link></li>
                <li><Link href="/historic-restoration-sarasota/" className="text-brand-green hover:underline">Historic Restoration Sarasota</Link></li>
                <li><Link href="/historic-restoration-bradenton/" className="text-brand-green hover:underline">Historic Restoration Bradenton</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/historic-restoration/" className="text-brand-green hover:underline">Historic Restoration Services</Link></li>
                <li><Link href="/commercial/historic-restoration/" className="text-brand-green hover:underline">Commercial Historic Restoration</Link></li>
                <li><Link href="/about/" className="text-brand-green hover:underline">About FCS</Link></li>
                <li><Link href="/gallery/" className="text-brand-green hover:underline">Project Gallery</Link></li>
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
            Start Your Lakeland Historic Restoration Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver historic restoration excellence in Lakeland's four designated districts—from Frank Lloyd Wright masterworks to Downtown's Mediterranean Revival treasures.
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
