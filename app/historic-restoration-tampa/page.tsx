import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Landmark, Shield, Award, Clock, CheckCircle, Phone, ArrowRight, FileText, Building2, Palette, History, Scale, MapPin, Hammer, BookOpen, Users } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { GoogleMap } from "@/components/GoogleMap";
import { InternalLinks, NearbyLocations, RelatedServices } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Historic Restoration in Tampa",
  description: "Tampa's expert historic restoration contractor. Ybor City National Historic Landmark, Hyde Park, Seminole Heights. SHPO compliance, Secretary of Interior Standards, historic tax credits. Call (813) 420-7561.",
  keywords: [
    "historic restoration tampa",
    "ybor city restoration",
    "hyde park historic renovation",
    "tampa historic preservation",
    "SHPO compliance tampa",
    "historic tax credits florida",
    "barrio latino commission",
    "seminole heights restoration",
    "certificate of appropriateness tampa",
    "historic building renovation tampa",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/services/historic-restoration/" },
  { name: "Tampa", href: "/historic-restoration-tampa/" },
];

// 10 Tampa-specific historic restoration FAQs
const tampaFaqs = [
  {
    question: "What historic districts does Florida Construction Specialists serve in Tampa?",
    answer: "We serve all of Tampa's designated historic districts including Ybor City National Historic Landmark District (Florida's only National Historic Landmark District), Hyde Park Historic District, Seminole Heights Historic District, Tampa Heights Historic District, and West Tampa Historic District. Each district has specific preservation standards, and we have extensive experience navigating the Tampa Historic Preservation Commission (HPC) and Barrio Latino Commission requirements."
  },
  {
    question: "What is the Barrio Latino Commission and how does it affect Ybor City restoration projects?",
    answer: "The Barrio Latino Commission is a design review board that oversees all construction, alterations, and demolition within Ybor City's National Historic Landmark District. Any exterior changes to contributing structures require a Certificate of Appropriateness (COA) from the Commission before work can begin. We have completed multiple projects in Ybor City including the Italian American Club restoration ($1.2M), the Wotjowicz House, and the Ferraro House, giving us deep expertise in navigating this approval process."
  },
  {
    question: "How do I obtain a Certificate of Appropriateness in Tampa?",
    answer: "The Certificate of Appropriateness (COA) process involves submitting an application to Tampa's Historic Preservation Commission or, for Ybor City properties, the Barrio Latino Commission. Applications require detailed plans, material specifications, and historic documentation. Minor projects may receive staff-level approval, while major work requires full board review at monthly meetings. FCS prepares comprehensive COA applications and presents projects to the boards, leveraging our established relationships with commission staff."
  },
  {
    question: "Can I get historic tax credits for my Tampa restoration project?",
    answer: "Yes, qualifying Tampa projects may be eligible for the Federal Historic Preservation Tax Credit (20% for income-producing properties), Florida's ad valorem tax exemption for historic properties, and local incentives. Buildings must be listed on the National Register of Historic Places (individually or as contributing structures in a historic district), and work must meet Secretary of Interior Standards. We coordinate the SHPO Part 1, Part 2, and Part 3 application process to ensure your project qualifies."
  },
  {
    question: "What makes Ybor City's cigar factories unique for restoration?",
    answer: "Ybor City's cigar factories represent some of Tampa's most architecturally significant structures. Built in the late 1800s and early 1900s, these buildings feature distinctive brick construction, Mediterranean-influenced details, iron balconies, and large interior spaces designed for cigar manufacturing. Restoring these buildings requires specialized knowledge of historic masonry, iron work restoration, and adaptive reuse strategies that preserve character-defining features while meeting modern building codes."
  },
  {
    question: "How do you source period-accurate materials for Tampa historic restorations?",
    answer: "Period-accurate material sourcing is critical for historic restoration. We maintain relationships with specialty suppliers, architectural salvage dealers, and craftspeople who can fabricate custom reproductions. For Tampa projects, this includes matching historic mortar formulations, sourcing compatible brick, replicating terra cotta details, restoring or replicating iron balcony work, and matching historic millwork profiles. Our material sourcing expertise is detailed on our period-accurate material sourcing page."
  },
  {
    question: "What is the typical cost of historic restoration in Tampa?",
    answer: "Historic restoration in Tampa typically ranges from $200-400+ per square foot for full building restoration, $50-150 per square foot for facade restoration, and $150-300 per square foot for interior historic restoration. Costs vary based on building condition, level of deterioration, preservation requirements, and whether the project pursues tax credits. The federal Historic Tax Credit (20%) can substantially offset costs for income-producing properties. We provide detailed budgeting during pre-construction."
  },
  {
    question: "How long does a historic restoration project take in Tampa?",
    answer: "Timeline depends on project scope and approval requirements. Typical ranges: facade restoration 3-8 months, full building restoration 12-24 months, complex adaptive reuse 18-36 months. Additional time is needed for COA approvals (1-2 months), SHPO review for tax credit projects (4-6 months for Part 2 approval), and sourcing period materials. For Ybor City projects, the Barrio Latino Commission review adds time but is essential for maintaining the district's National Historic Landmark status."
  },
  {
    question: "Can you add modern amenities to historic buildings in Tampa while maintaining historic character?",
    answer: "Yes, successful historic restoration often involves sensitively integrating modern systems—HVAC, electrical, plumbing, fire protection, accessibility, and technology—while preserving character-defining features. The key is designing these updates to be minimally invasive and, where possible, reversible. We route mechanical systems through historically less significant spaces, conceal modern technology behind period-appropriate covers, and design accessibility improvements that respect historic character."
  },
  {
    question: "What social clubs and landmark buildings has FCS restored in Ybor City?",
    answer: "Our Ybor City portfolio includes major restoration projects such as the Italian American Club ($1.2M complete interior and exterior restoration), the Lion's Eye Institute (National Historic Register property), and ground-up new construction within the Barrio Latino district including the Wotjowicz House and Ferraro House. We've also completed work at Plant High School ($525K tuckpointing and brick restoration). These projects demonstrate our expertise in both restoration and sensitive new construction within Tampa's most significant historic district."
  },
];

// Cluster services for internal linking
const clusterServices = [
  {
    name: "SHPO Compliance",
    href: "/services/historic-restoration/shpo-compliance/",
    description: "Full compliance with Florida State Historic Preservation Office requirements and Secretary of the Interior's Standards for Historic Preservation.",
    icon: Shield,
  },
  {
    name: "Period-Accurate Material Sourcing",
    href: "/services/historic-restoration/material-sourcing/",
    description: "Expert sourcing of period-appropriate materials including historic masonry, millwork, hardware, and architectural elements.",
    icon: Palette,
  },
  {
    name: "Historic Tax Credits",
    href: "/services/historic-restoration/historic-tax-credits/",
    description: "Navigation of federal and state historic tax credit programs, ensuring work meets qualification requirements.",
    icon: Scale,
  },
];

// Featured projects in Tampa
const featuredProjects = [
  {
    name: "Italian American Club",
    location: "Ybor City, Tampa",
    type: "Social Club / National Historic Landmark District",
    value: "$1.2M",
    description: "Complete interior and exterior restoration of this historic Ybor City landmark. Work included facade restoration, interior rehabilitation, structural repairs, and sensitive integration of modern systems while preserving the building's historic character and significance to Tampa's Italian-American community.",
  },
  {
    name: "Plant High School",
    location: "South Tampa",
    type: "Educational / Historic Institution",
    value: "$525K",
    description: "Tuckpointing and brick restoration of this historic Tampa educational institution established in 1927. Careful masonry repair and repointing preserved the building's Mediterranean Revival character while addressing structural concerns and water infiltration issues.",
  },
  {
    name: "Wotjowicz House",
    location: "Ybor City, Tampa",
    type: "Residential / Barrio Latino Commission",
    value: "Custom Build",
    description: "Ground-up new construction within Ybor City's Barrio Latino historic district. Design and construction met all Certificate of Appropriateness requirements, demonstrating that contemporary luxury living can be achieved within strict historic preservation guidelines.",
  },
  {
    name: "Ferraro House",
    location: "Ybor City, Tampa",
    type: "Residential / Barrio Latino Commission",
    value: "Custom Build",
    description: "New residential construction in the Barrio Latino district, requiring full Barrio Latino Commission approval. The project balanced modern living requirements with the architectural vocabulary and material palette required to maintain Ybor City's National Historic Landmark status.",
  },
];

// Internal links for the page
const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Period Material Sourcing" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/historic-restoration-st-petersburg/", label: "Historic Restoration St. Petersburg" },
  { href: "/historic-restoration-lakeland/", label: "Historic Restoration Lakeland" },
];

export default function HistoricRestorationTampaPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema city="Tampa" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Expert historic restoration services in Tampa, Florida. Ybor City National Historic Landmark District specialists. SHPO compliance, Secretary of Interior Standards, historic tax credit navigation, Barrio Latino Commission expertise. Projects from $500K to $25M+."
        city="Tampa"
        minPrice="500000"
      />
      <FAQSchema faqs={tampaFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-amber-900 via-amber-800 to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span className="text-brand-gold font-semibold">Serving Tampa, FL</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Historic Restoration in Tampa
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Florida Construction Specialists is Tampa's premier historic restoration contractor. From the cigar factories and social clubs of Ybor City's National Historic Landmark District to the Mediterranean Revival mansions of Hyde Park, we preserve Tampa's irreplaceable architectural heritage.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">SHPO</p>
                  <p className="text-xs text-gray-300">Compliant</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Landmark className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Secretary</p>
                  <p className="text-xs text-gray-300">of Interior Stds</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <History className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Ybor City</p>
                  <p className="text-xs text-gray-300">Specialists</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Licensed</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.licenseNumber}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Schedule Historic Consultation
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Discuss Your Tampa Historic Project
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your historic property and restoration needs in Tampa.
              </p>
              <HighLevelForm height={450} />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction - Tampa's Historic Districts */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Preserving Tampa's Architectural Heritage
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                Tampa's historic districts tell the story of the city's rich multicultural past—from the Cuban and Italian immigrants who built Ybor City's cigar empire to the early 20th-century developers who created Hyde Park's elegant streetscapes. At Florida Construction Specialists, we consider it a privilege to preserve these irreplaceable structures for future generations.
              </p>
              <p className="mb-6">
                <strong>Ybor City National Historic Landmark District</strong> stands as Florida's only National Historic Landmark District, a designation reflecting its exceptional national significance. The district's cigar factories, social clubs (including the Cuban Club, Centro Asturiano, and Italian American Club), and commercial buildings represent America's finest surviving example of a cigar manufacturing community. Restoration work here requires the highest level of preservation expertise and strict adherence to Barrio Latino Commission requirements.
              </p>
              <p className="mb-6">
                <strong>Hyde Park Historic District</strong> features Tampa's finest residential architecture from the 1910s-1930s, including Mediterranean Revival, Colonial Revival, and Craftsman homes. Located along the prestigious Bayshore Boulevard, these properties command premium values and require restoration approaches that preserve their architectural integrity while accommodating modern living.
              </p>
              <p className="mb-6">
                <strong>Seminole Heights Historic District</strong> offers bungalows, Craftsman cottages, and modest Mediterranean Revival homes that represent Tampa's early suburban development. The neighborhood's walkable character and tree-lined streets attract preservation-minded homeowners committed to maintaining its historic character.
              </p>
              <p>
                Whether you're restoring a landmark social club in Ybor City, renovating a Hyde Park estate, or preserving a Seminole Heights bungalow, FCS brings the expertise, craftsmanship, and regulatory knowledge to ensure your project succeeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Visual Break */}
      <ContentParallax
        src="/images/tampa-historic-building-restoration/tampa-historic-building-restoration-small.webp"
        alt="Historic building restoration"
        title="Preserving Architectural Heritage"
        subtitle="Certified historic preservation specialists"
        overlayOpacity={0.55}
      />

      {/* Services Grid - Cluster Pages */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Restoration Services in Tampa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services for Tampa's historic preservation, restoration, and adaptive reuse projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clusterServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-700 transition-colors">
                  <service.icon className="w-7 h-7 text-amber-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-amber-700 font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa-Specific Content: Ybor City Expertise */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Deep Ybor City Expertise
              </h2>
              <p className="text-gray-600 mb-6">
                Ybor City's National Historic Landmark status reflects the exceptional significance of its cigar factories, social clubs, and commercial buildings. Working in this district requires specialized knowledge that goes beyond standard historic preservation—it demands understanding of the Barrio Latino Commission, the district's unique architectural vocabulary, and the community's expectations for preservation excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark">Barrio Latino Commission Experience</h3>
                    <p className="text-gray-600 text-sm">We've successfully navigated the Certificate of Appropriateness process for multiple Ybor City projects, understanding the Commission's standards and expectations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark">Cigar Factory & Social Club Restoration</h3>
                    <p className="text-gray-600 text-sm">Our $1.2M Italian American Club restoration demonstrates our capability for major Ybor City landmark projects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Hammer className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark">New Construction in Historic Districts</h3>
                    <p className="text-gray-600 text-sm">The Wotjowicz House and Ferraro House demonstrate our ability to build new structures that meet Barrio Latino Commission standards.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">Ybor City's Historic Significance</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>National Historic Landmark District</strong> - Florida's only NHL district, recognizing exceptional national significance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Cigar Manufacturing Heritage</strong> - America's finest surviving cigar manufacturing community</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Social Club Tradition</strong> - Cuban Club, Centro Asturiano, Italian American Club, and more</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Mediterranean-Influenced Architecture</strong> - Distinctive brick, iron balconies, and decorative details</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Barrio Latino Commission Oversight</strong> - Design review for all alterations and new construction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="section bg-amber-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Restore Your Tampa Historic Property
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From Ybor City's National Historic Landmark District to Hyde Park's prestigious homes, we bring the expertise Tampa's historic properties deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-700 font-bold rounded-full hover:bg-gray-100 transition-all">
              Schedule Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-green-dark font-bold rounded-full hover:bg-brand-gold-light transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Featured Tampa Historic Restoration Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of our historic preservation work in Tampa, demonstrating our expertise in restoration and sensitive new construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.name} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-amber-700 text-white p-4">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="text-amber-100 text-sm">{project.location}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded">
                      {project.type}
                    </span>
                    <span className="bg-brand-green-bg text-brand-green-dark text-xs font-semibold px-2 py-1 rounded">
                      {project.value}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/gallery/" className="inline-flex items-center text-amber-700 font-semibold hover:underline">
              View Full Portfolio <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Historic Restoration Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Tampa Historic Restoration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A methodical approach that respects Tampa's historic significance while achieving your project goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Historic Assessment & Documentation",
                description: "We begin with thorough documentation of existing conditions, historic research, and identification of character-defining features. For Tampa properties, we research building history, original construction methods, and previous alterations.",
                icon: BookOpen,
              },
              {
                step: "02",
                title: "Preservation Planning",
                description: "Working with architects and preservation consultants, we develop approaches that address deterioration while preserving character-defining features. For tax credit projects, we prepare SHPO Part 2 applications.",
                icon: FileText,
              },
              {
                step: "03",
                title: "Regulatory Coordination",
                description: "We navigate Tampa HPC approvals, Barrio Latino Commission reviews (for Ybor City), SHPO coordination for tax credits, and building permits. Our relationships with regulatory staff help streamline approvals.",
                icon: Scale,
              },
              {
                step: "04",
                title: "Material Sourcing",
                description: "We source period-appropriate materials—from salvaged historic elements to custom reproductions. Matching historic mortar formulations, finding compatible brick, or replicating millwork profiles requires specialized knowledge.",
                icon: Palette,
              },
              {
                step: "05",
                title: "Skilled Execution",
                description: "Restoration work is performed by craftspeople experienced in historic techniques. Whether traditional masonry methods, plaster restoration, or period-accurate carpentry, the work honors original craftsmanship.",
                icon: Hammer,
              },
              {
                step: "06",
                title: "Documentation & Completion",
                description: "We provide thorough documentation of all restoration work—essential for tax credit applications, future maintenance planning, and the historic record. For tax credit projects, we prepare SHPO Part 3 certification.",
                icon: CheckCircle,
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="absolute -top-4 left-6 bg-amber-700 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step {item.step}
                </div>
                <div className="mt-4">
                  <item.icon className="w-10 h-10 text-amber-700 mb-4" />
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Why Tampa Chooses FCS for Historic Restoration
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Always Prime Contractor</h3>
                    <p className="text-gray-300">We never work as a subcontractor on Tampa historic projects. You get direct accountability, single-point contact, and our full commitment throughout the restoration.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center">
                    <Landmark className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ybor City Specialists</h3>
                    <p className="text-gray-300">From the Italian American Club to ground-up construction in the Barrio Latino, we have deep experience in Tampa's most significant historic district.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tax Credit Navigation</h3>
                    <p className="text-gray-300">We help Tampa property owners maximize historic tax credits, coordinating SHPO applications and ensuring work meets certification requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <Users className="w-10 h-10 mx-auto mb-3 text-brand-gold" />
                <div className="text-3xl font-bold mb-1">20+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <Building2 className="w-10 h-10 mx-auto mb-3 text-brand-gold" />
                <div className="text-3xl font-bold mb-1">$10M+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <Landmark className="w-10 h-10 mx-auto mb-3 text-brand-gold" />
                <div className="text-3xl font-bold mb-1">5</div>
                <div className="text-sm text-gray-300">Historic Districts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <Award className="w-10 h-10 mx-auto mb-3 text-brand-gold" />
                <div className="text-3xl font-bold mb-1">150+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs & Timeline Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Tampa Historic Restoration: Costs & Timelines
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-amber-700 text-white">
                    <th className="text-left p-4 font-semibold">Project Type</th>
                    <th className="text-left p-4 font-semibold">Cost Range</th>
                    <th className="text-left p-4 font-semibold">Typical Timeline</th>
                    <th className="text-left p-4 font-semibold">Tax Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Facade Restoration</td>
                    <td className="p-4">$50-150/SF (facade)</td>
                    <td className="p-4">3-8 months</td>
                    <td className="p-4">Potentially eligible</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Full Building Restoration</td>
                    <td className="p-4">$200-400+/SF</td>
                    <td className="p-4">12-24 months</td>
                    <td className="p-4">20% Federal (income properties)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Interior Historic Restoration</td>
                    <td className="p-4">$150-300/SF</td>
                    <td className="p-4">6-14 months</td>
                    <td className="p-4">Part of whole-building</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Adaptive Reuse</td>
                    <td className="p-4">$175-350/SF</td>
                    <td className="p-4">14-30 months</td>
                    <td className="p-4">20% Federal (income properties)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">New Construction (Historic District)</td>
                    <td className="p-4">$250-500/SF</td>
                    <td className="p-4">12-24 months</td>
                    <td className="p-4">N/A (new construction)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs vary based on building condition and level of restoration. Federal Historic Tax Credits (20%) available for qualifying income-producing properties.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FAQ
              items={tampaFaqs}
              title="Historic Restoration in Tampa - Frequently Asked Questions"
              description="Common questions about historic preservation and restoration projects in Tampa, Florida."
            />
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Restoration Services in Tampa
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Serving all of Tampa's historic districts including Ybor City, Hyde Park, Seminole Heights, Tampa Heights, and West Tampa.
            </p>
          </div>
          <GoogleMap city="Tampa" height={400} />
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <InternalLinks
                title="Historic Restoration Resources"
                links={internalLinks}
              />
            </div>
            <div className="space-y-6">
              <RelatedServices city="Tampa" currentService="historic-restoration" />
              <NearbyLocations currentCity="Tampa" service="historic-restoration" serviceName="Historic Restoration" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-amber-700">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Preserve Tampa's Architectural Heritage
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Contact Florida Construction Specialists to discuss your Tampa historic restoration project. Whether you're restoring a landmark building in Ybor City, renovating a Hyde Park estate, or exploring adaptive reuse possibilities, we have the expertise to bring your vision to life while honoring the past.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-700 font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-green-dark font-bold rounded-full hover:bg-brand-gold-light transition-all">
                  Contact Us Online
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-white/80 mb-4">Trusted for Tampa historic preservation:</p>
                <div className="flex flex-wrap gap-4 text-sm text-white/90">
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> SHPO Compliant</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Secretary of Interior Standards</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Tax Credit Experience</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Ybor City Specialists</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Schedule Your Consultation
              </h3>
              <HighLevelForm height={400} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
