import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Landmark, Shield, Award, Clock, CheckCircle, Phone, ArrowRight, FileText, Building2, Palette, History, Scale } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO, FAQ_DATABASE } from "@/lib/constants";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Historic Restoration & Preservation in Tampa Bay | Florida Construction Specialists",
  description: "Tampa Bay's expert historic restoration contractor. SHPO compliance, Secretary of Interior Standards, historic tax credits. Ybor City specialists. Call (813) 420-7561.",
  keywords: [
    "historic restoration tampa",
    "historic building renovation florida",
    "shpo compliance contractor",
    "historic preservation tampa bay",
    "ybor city restoration",
    "historic tax credit construction",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/services/historic-restoration/" },
];

const historicFaqs = [
  ...FAQ_DATABASE.historic,
  {
    question: "What historic districts in Tampa Bay have you worked in?",
    answer: "We've completed projects throughout Tampa Bay's historic districts including Ybor City's National Historic Landmark District (including Barrio Latino Commission compliance), Hyde Park, Seminole Heights, Old Northeast St. Petersburg, and historic downtown areas in multiple cities. We also have experience with federal historic facilities like Bay Pines Veterans Hospital."
  },
  {
    question: "Can you help with historic tax credit applications?",
    answer: "Yes, we assist property owners in navigating historic tax credit programs including the federal Historic Rehabilitation Tax Credit and Florida's historic preservation incentives. We ensure construction work meets the documentation and methodology requirements for tax credit qualification."
  },
  {
    question: "How do you balance modern building codes with historic preservation?",
    answer: "Balancing current building codes with preservation requirements is one of the most challenging aspects of historic restoration. We work closely with building officials, historic preservation boards, and architects to find solutions that satisfy both safety requirements and preservation standards—often using alternative compliance methods approved under Florida Building Code provisions for historic buildings."
  },
  {
    question: "Do you handle historic building disaster recovery?",
    answer: "Yes, we specialize in disaster recovery for historic properties. This requires particular expertise to ensure emergency repairs and restoration work don't inadvertently damage historic character or jeopardize tax credit eligibility. Our 43+ years of combined insurance and construction experience is particularly valuable for historic property claims."
  },
  {
    question: "What's involved in getting Certificate of Appropriateness approval?",
    answer: "Certificate of Appropriateness (COA) requirements vary by jurisdiction, but generally involve submitting detailed plans showing proposed work, materials, and methods to a local historic preservation board. We prepare comprehensive COA applications and attend board meetings to present projects. Our experience with these boards helps navigate the approval process efficiently."
  },
];

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

const featuredProjects = [
  {
    name: "Italian American Club",
    location: "Ybor City, Tampa",
    type: "Social Club / National Historic District",
    value: "$1.2M",
    description: "Complete interior and exterior restoration of this historic Ybor City landmark. Work included facade restoration, interior rehabilitation, structural repairs, and sensitive integration of modern systems while preserving historic character.",
  },
  {
    name: "Bay Pines Veterans Hospital",
    location: "St. Petersburg, FL",
    type: "Federal Healthcare / Historic Facility",
    value: "$2M",
    description: "Historic restoration and preservation meeting federal historic compliance standards. Sensitive rehabilitation of veteran healthcare facilities while maintaining operational continuity and historic integrity.",
  },
  {
    name: "Lion's Eye Institute",
    location: "Ybor City, Tampa",
    type: "Medical / National Historic Register",
    description: "Restoration of this National Historic Register property, balancing medical facility requirements with historic preservation standards in Ybor City's landmark district.",
  },
  {
    name: "Historic Sebring Fire Station",
    location: "Sebring, FL",
    type: "Municipal / Historic Landmark",
    value: "$900K",
    description: "FEMA-funded restoration following Hurricane Charley. Complete rehabilitation of this historic municipal building including structural repairs, exterior restoration, and adaptive reuse for continued public service.",
  },
  {
    name: "Plant High School",
    location: "Tampa, FL",
    type: "Educational / Historic Institution",
    value: "$525K",
    description: "Tuckpointing and brick restoration of this historic Tampa educational institution. Careful masonry repair and repointing preserving the building's historic character while addressing structural concerns.",
  },
  {
    name: "Wotjowicz House",
    location: "Ybor City, Tampa",
    type: "Residential / Barrio Latino Commission",
    description: "Ground-up new construction within Ybor City's Barrio Latino historic district. Design and construction meeting all Certificate of Appropriateness requirements while delivering modern luxury residential living.",
  },
];

export default function HistoricRestorationPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema service="Historic Restoration & Preservation" />
      <ServiceSchema
        serviceName="Historic Restoration & Preservation"
        serviceDescription="Expert historic restoration and preservation services throughout Tampa Bay. SHPO compliance, Secretary of Interior Standards, historic tax credit navigation, and period-accurate material sourcing."
        minPrice="500000"
      />
      <FAQSchema faqs={historicFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/historic-preservation/historic-preservation-large.webp"
            alt="Historic building restoration in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>

        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Historic Restoration & Preservation in Tampa Bay
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Florida Construction Specialists preserves Tampa Bay's architectural heritage through expert historic restoration. From Ybor City's National Historic Landmark District to federal facilities like Bay Pines Veterans Hospital, we bring the expertise and sensitivity that historic properties demand.
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
                Discuss Your Historic Project
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your historic property and restoration needs.
              </p>
              <HighLevelForm height={450} />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Preserving Tampa Bay's Architectural Heritage
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                Historic buildings tell the story of Tampa Bay's rich past—from the cigar factories and social clubs of Ybor City to the grand hotels of the early 20th century. At Florida Construction Specialists, we consider it a privilege to preserve these irreplaceable structures for future generations while adapting them for contemporary use.
              </p>
              <p className="mb-6">
                Our historic restoration work follows the Secretary of the Interior's Standards for the Treatment of Historic Properties, the nationally recognized benchmark for preservation work. We maintain close coordination with the Florida State Historic Preservation Office (SHPO) and local historic preservation boards including Tampa's Barrio Latino Commission, ensuring our work meets all applicable standards and maintains eligibility for historic tax credits when applicable.
              </p>
              <p className="mb-6">
                What distinguishes FCS in historic restoration is our comprehensive approach. We don't simply follow preservation guidelines—we understand the intent behind them. Our team includes craftspeople experienced in traditional techniques alongside modern construction professionals, allowing us to authentically restore historic elements while sensitively integrating contemporary systems. Whether matching historic mortar formulations for masonry restoration or designing concealed pathways for modern HVAC systems, we find solutions that honor the past while serving present needs.
              </p>
              <p>
                Our portfolio includes some of Tampa Bay's most significant restoration projects: the Italian American Club's landmark restoration in Ybor City, Bay Pines Veterans Hospital's federal historic rehabilitation, and numerous residential and commercial projects throughout the region's historic districts. Each project reflects our commitment to excellence, authenticity, and the preservation of Tampa Bay's architectural legacy.
              </p>
            </div>
          </div>

          {/* Historic Restoration Gallery */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/wp-content/uploads/2023/12/Lions-World-Vision-Institute-Building-Exterior.jpg"
                alt="Lions World Vision Institute historic brick building with restored architectural features"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Lion's Eye Institute</p>
                <p className="text-sm text-gray-200">National Historic Register - Ybor City</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/wp-content/uploads/2024/01/1111.jpg"
                alt="Historic church building restoration with scaffolding and clay tile roof repair"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Historic Church Restoration</p>
                <p className="text-sm text-gray-200">Clay Tile Roof & Masonry Work</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/wp-content/uploads/2023/12/plant-high-school.webp"
                alt="Historic school building featuring clay tile roof and Spanish Mediterranean architecture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Plant High School</p>
                <p className="text-sm text-gray-200">Brick & Tuckpointing Restoration - Tampa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Restoration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services for historic preservation, restoration, and adaptive reuse projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clusterServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-600 transition-colors">
                  <service.icon className="w-7 h-7 text-amber-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-brand-green font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Restoration Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized skills and knowledge for every aspect of historic preservation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Masonry Restoration",
                items: ["Historic brick repair", "Tuckpointing", "Terra cotta restoration", "Stone conservation"],
              },
              {
                title: "Architectural Woodwork",
                items: ["Period millwork replication", "Window restoration", "Door repair/restoration", "Trim and molding"],
              },
              {
                title: "Exterior Systems",
                items: ["Historic roofing", "Facade restoration", "Metal work", "Historic paint analysis"],
              },
              {
                title: "Interior Restoration",
                items: ["Plaster repair", "Decorative finishes", "Historic flooring", "Period hardware"],
              },
            ].map((category) => (
              <div key={category.title} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Featured Historic Restoration Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of our historic preservation work throughout Tampa Bay and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    {project.value && (
                      <span className="bg-brand-green-bg text-brand-green-dark text-xs font-semibold px-2 py-1 rounded">
                        {project.value}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/gallery/" className="inline-flex items-center text-brand-green font-semibold hover:underline">
              View Full Portfolio <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-amber-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Preserve Your Historic Property
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you're planning a major restoration, seeking guidance on preservation requirements, or exploring adaptive reuse possibilities, we're here to help.
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

      {/* Why Choose FCS Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Why Choose FCS for Historic Restoration
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">SHPO & Preservation Board Experience</h3>
                    <p className="text-gray-600">We've successfully navigated Florida SHPO requirements and local preservation boards including Tampa's Barrio Latino Commission on numerous projects. We understand the standards, the process, and the relationships that make approvals efficient.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Landmark className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Ybor City Expertise</h3>
                    <p className="text-gray-600">From the Italian American Club to ground-up construction in the Barrio Latino, we have deep experience in Tampa's most significant historic district. We understand Ybor City's unique requirements and the standards that protect its National Historic Landmark status.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Historic Tax Credit Navigation</h3>
                    <p className="text-gray-600">Historic tax credits can significantly offset restoration costs, but they require meticulous documentation and methodology compliance. We help clients understand their options and ensure work qualifies for available incentives.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Traditional Craftsmanship</h3>
                    <p className="text-gray-600">Our network includes craftspeople skilled in traditional techniques—from historic masonry methods to period millwork replication. We can authentically restore historic elements rather than simply replacing them with modern approximations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">Historic Districts We Serve</h3>
              <div className="space-y-4">
                {[
                  { district: "Ybor City National Historic Landmark", location: "Tampa" },
                  { district: "Hyde Park Historic District", location: "Tampa" },
                  { district: "Seminole Heights", location: "Tampa" },
                  { district: "Old Northeast", location: "St. Petersburg" },
                  { district: "Downtown Historic Districts", location: "Multiple Cities" },
                  { district: "Federal Historic Properties", location: "Throughout Florida" },
                ].map((item) => (
                  <div key={item.district} className="flex items-start gap-3 border-b border-gray-200 pb-4 last:border-0">
                    <Landmark className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-brand-green-dark">{item.district}</p>
                      <p className="text-sm text-gray-500">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Historic Restoration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A methodical approach that respects historic significance while achieving your project goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Historic Assessment",
                description: "We begin with thorough documentation of existing conditions, historic significance, and character-defining features. This forms the foundation for all subsequent planning and ensures nothing of value is overlooked.",
                icon: History,
              },
              {
                step: "02",
                title: "Preservation Planning",
                description: "Working with architects, preservation consultants, and regulatory bodies, we develop approaches that balance preservation requirements with project objectives. We identify what to preserve, restore, rehabilitate, or reconstruct.",
                icon: FileText,
              },
              {
                step: "03",
                title: "Regulatory Coordination",
                description: "We navigate SHPO reviews, local preservation board approvals, Certificate of Appropriateness applications, and historic tax credit documentation. Our experience streamlines this often-complex process.",
                icon: Scale,
              },
              {
                step: "04",
                title: "Material Sourcing",
                description: "We source period-appropriate materials—from salvaged historic elements to custom reproductions. Matching historic mortar formulations, finding compatible brick, or replicating millwork profiles requires specialized knowledge and supplier relationships.",
                icon: Palette,
              },
              {
                step: "05",
                title: "Skilled Execution",
                description: "Restoration work is performed by craftspeople experienced in historic techniques. Whether traditional masonry methods, plaster restoration, or period-accurate carpentry, the work honors original craftsmanship.",
                icon: Award,
              },
              {
                step: "06",
                title: "Documentation & Completion",
                description: "We provide thorough documentation of all restoration work—essential for tax credit applications, future maintenance planning, and the historic record. Your property's story continues with proper documentation.",
                icon: CheckCircle,
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-white rounded-xl p-6 shadow-sm">
                <div className="absolute -top-4 left-6 bg-amber-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step {item.step}
                </div>
                <div className="mt-4">
                  <item.icon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Restoration Throughout Tampa Bay
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide historic restoration services across the greater Tampa Bay region.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { city: "Tampa", href: "/historic-restoration-tampa/" },
              { city: "St. Petersburg", href: "/historic-restoration-st-petersburg/" },
              { city: "Clearwater", href: "/historic-restoration-clearwater/" },
              { city: "Lakeland", href: "/historic-restoration-lakeland/" },
              { city: "Sarasota", href: "/historic-restoration-sarasota/" },
              { city: "Bradenton", href: "/historic-restoration-bradenton/" },
              { city: "Brandon", href: "/historic-restoration-brandon/" },
              { city: "Ruskin", href: "/historic-restoration-ruskin/" },
            ].map((location) => (
              <Link
                key={location.city}
                href={location.href}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-amber-50 transition-colors group"
              >
                <span className="font-semibold text-brand-green-dark group-hover:text-amber-700 transition-colors">
                  Historic Restoration in {location.city}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-light">
        <div className="container-custom">
          <div >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
                Historic Restoration FAQ
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about historic preservation and restoration projects.
              </p>
            </div>

            <FAQ items={historicFaqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Related Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/commercial/" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                Commercial Construction
              </h3>
              <p className="text-gray-600 mb-4">Large-scale commercial construction including adaptive reuse of historic buildings for modern commercial purposes.</p>
              <span className="inline-flex items-center text-brand-green font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            <Link href="/services/disaster-recovery/" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                Disaster Recovery
              </h3>
              <p className="text-gray-600 mb-4">Specialized disaster recovery for historic properties, ensuring restoration work preserves historic character and tax credit eligibility.</p>
              <span className="inline-flex items-center text-brand-green font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            <Link href="/services/residential/" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                Residential Construction
              </h3>
              <p className="text-gray-600 mb-4">Custom home construction in historic districts, meeting Certificate of Appropriateness requirements while delivering modern luxury.</p>
              <span className="inline-flex items-center text-brand-green font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Preserve Tampa Bay's Architectural Heritage
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Contact Florida Construction Specialists to discuss your historic restoration project. Whether you're restoring a landmark building, renovating within a historic district, or exploring adaptive reuse possibilities, we have the expertise to bring your vision to life while honoring the past.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-700 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
                  Contact Us Online
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-gray-300 mb-4">Trusted for historic preservation:</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                  <span>✓ SHPO Compliant</span>
                  <span>✓ Secretary of Interior Standards</span>
                  <span>✓ Historic Tax Credit Experience</span>
                  <span>✓ Ybor City Specialists</span>
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

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[{"href":"/services/historic-restoration/","label":"Historic Restoration Services"},{"href":"/tampa-historic-social-clubs-restoration/","label":"Historic Social Clubs Restoration"},{"href":"/florida-shpo-requirements/","label":"SHPO Requirements Guide"},{"href":"/historic-tax-credits-commercial-buildings/","label":"Historic Tax Credits"},{"href":"/sourcing-historic-materials-tampa-bay/","label":"Sourcing Historic Materials"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
