import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Home, Shield, Award, Clock, CheckCircle, Phone, ArrowRight, Waves, Hammer, Sun, Droplets } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO, FAQ_DATABASE } from "@/lib/constants";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Luxury Custom Home Construction in Tampa Bay | Florida Construction Specialists",
  description: "Tampa Bay's premier luxury home builder for $1M+ waterfront estates and custom residences. Hurricane-resistant construction, 20+ years experience. Call (813) 420-7561.",
  keywords: [
    "luxury home builder tampa",
    "custom home construction florida",
    "waterfront home builder tampa bay",
    "hurricane resistant homes florida",
    "custom estate builder tampa",
    "high-end home construction",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Residential Construction", href: "/services/residential/" },
];

const residentialFaqs = [
  ...FAQ_DATABASE.customHomes,
  {
    question: "Do you build homes in flood zones?",
    answer: "Yes, we have extensive experience building in Florida's flood zones, including VE and AE zones. We understand FEMA regulations, the 50% rule, breakaway wall requirements, and elevation certificates. Our designs incorporate flood-resistant construction techniques and proper elevation to protect your investment while maximizing your usable space."
  },
  {
    question: "What historic districts do you work in?",
    answer: "We've completed projects throughout Tampa Bay's historic districts including Hyde Park, Seminole Heights, Ybor City's Barrio Latino, Old Northeast St. Petersburg, and South Tampa. We understand Certificate of Appropriateness requirements and work closely with historic preservation boards to ensure compliance while achieving your design vision."
  },
  {
    question: "Do you handle balcony reconstruction for existing homes?",
    answer: "Yes, balcony reconstruction is one of our specialties. We repair structural damage, replace waterproofing systems, and restore balconies to full functionality and safety. For multi-family properties, we also handle SB4-D compliance inspections and milestone inspection requirements."
  },
  {
    question: "What makes a home hurricane-resistant?",
    answer: "Hurricane-resistant construction includes multiple features: impact-resistant windows and doors, enhanced roof-to-wall connections with hurricane straps, reinforced concrete or CBS construction, proper window and door anchoring, code-plus roof systems, and backup power systems. We build to exceed Florida Building Code wind resistance requirements."
  },
  {
    question: "Can you coordinate seawall construction for waterfront homes?",
    answer: "Yes, we coordinate seawall construction, dock permitting, and all marine-related site work for waterfront properties. We work with marine contractors, environmental consultants, and permitting agencies to ensure your waterfront home project proceeds smoothly from seawall to roof."
  },
];

const clusterServices = [
  {
    name: "Waterfront Custom Homes",
    href: "/services/residential/waterfront-homes/",
    description: "Luxury waterfront estate construction with seawall coordination, marine-grade materials, and stunning water views.",
    icon: Waves,
  },
  {
    name: "Hurricane-Resistant Construction",
    href: "/services/residential/hurricane-resistant-construction/",
    description: "Homes engineered to exceed Florida Building Code wind resistance requirements, protecting your family and investment.",
    icon: Shield,
  },
  {
    name: "Home Additions & Renovations",
    href: "/services/residential/home-additions/",
    description: "Seamless additions that expand your living space while maintaining architectural harmony with your existing home.",
    icon: Hammer,
  },
  {
    name: "Kitchen Remodeling",
    href: "/services/residential/kitchen-remodeling/",
    description: "High-end kitchen renovations featuring custom cabinetry, premium appliances, and thoughtful layouts.",
    icon: Home,
  },
  {
    name: "Balcony Reconstruction",
    href: "/services/residential/balcony-reconstruction/",
    description: "Structural balcony repair, waterproofing, and reconstruction for single-family and multi-family properties.",
    icon: Sun,
  },
  {
    name: "Exterior Waterproofing",
    href: "/services/residential/exterior-waterproofing/",
    description: "Building envelope protection including foundation waterproofing, below-grade systems, and drainage solutions.",
    icon: Droplets,
  },
];

const featuredProjects = [
  {
    name: "Wotjowicz House",
    location: "Ybor City, Tampa",
    type: "Historic District Construction",
    description: "Ground-up custom home construction within Ybor City's Barrio Latino historic district, meeting all Certificate of Appropriateness requirements while delivering modern luxury.",
  },
  {
    name: "Ferraro House",
    location: "Ybor City, Tampa",
    type: "Historic District Construction",
    description: "New construction in Tampa's historic Ybor City district, balancing period-appropriate architecture with contemporary living standards and hurricane-resistant construction.",
  },
  {
    name: "Davis Islands Estate",
    location: "Davis Islands, Tampa",
    type: "Waterfront Custom Home",
    description: "Luxury waterfront estate featuring hurricane-resistant construction, smart home integration, and premium finishes throughout.",
  },
];

export default function ResidentialConstructionPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema service="Luxury Custom Home Construction" schemaType="HomeAndConstructionBusiness" />
      <ServiceSchema
        serviceName="Luxury Custom Home Construction"
        serviceDescription="Custom home construction for $1M+ waterfront estates and luxury residences throughout Tampa Bay, featuring hurricane-resistant design and premium craftsmanship."
        minPrice="1000000"
      />
      <FAQSchema faqs={residentialFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/custom-home-1/custom-home-1-large.webp"
            alt="Luxury custom home construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>

        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Luxury Custom Home Construction in Tampa Bay
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Florida Construction Specialists creates exceptional custom homes for discerning clients throughout Tampa Bay. From $1M+ waterfront estates to historic district residences, we bring your vision to life with hurricane-resistant construction, premium craftsmanship, and meticulous attention to detail.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Licensed</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.licenseNumber}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Hurricane</p>
                  <p className="text-xs text-gray-300">Resistant Design</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Experience</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.yearsInBusiness}+ Years</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Home className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Starting</p>
                  <p className="text-xs text-gray-300">$1M+ Projects</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Schedule Design Consultation
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
                Start Your Dream Home Journey
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your vision for your custom home.
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
              Building Legacy Homes for Tampa Bay's Most Discerning Families
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                Your home is more than a building—it's a legacy. At Florida Construction Specialists, we understand the profound responsibility of creating spaces where families grow, memories are made, and generations connect. Our luxury custom home division focuses exclusively on residences valued at $1 million and above, ensuring every project receives the expertise, attention, and resources it deserves.
              </p>
              <p className="mb-6">
                What distinguishes FCS from typical custom home builders is our comprehensive approach to residential construction. We bring the same rigorous project management, financial stability, and technical expertise that we apply to our commercial projects—40+ years experience and in-house engineering, detailed scheduling, and experienced superintendents—to every custom home we build. This commercial-grade approach delivers residential projects that run smoother, finish on time, and exceed quality expectations.
              </p>
              <p className="mb-6">
                Tampa Bay's unique environment demands specialized knowledge. Our homes are engineered for Florida's climate, from hurricane-resistant construction that exceeds code requirements to waterfront designs that work harmoniously with seawalls, flood zones, and the salt-air environment. Whether your dream home sits on Davis Islands, the shores of Tampa Bay, or within one of our region's treasured historic districts, we have the experience to navigate local requirements and deliver exceptional results.
              </p>
              <p>
                We also understand that many luxury homeowners have existing properties requiring renovation, addition, or restoration. Our residential services extend beyond new construction to include comprehensive renovation of existing homes, seamless additions that maintain architectural integrity, balcony reconstruction with proper waterproofing, and exterior envelope restoration. Whatever your residential construction need, FCS brings the expertise and commitment to excellence that your investment deserves.
              </p>
            </div>
          </div>

          {/* Residential Gallery */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/wp-content/uploads/2023/12/Old/custom-home-construction-2.jpg"
                alt="Luxury home with premium architectural shingle roof at twilight with illuminated windows"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Luxury Custom Estate</p>
                <p className="text-sm text-gray-200">Premium Architectural Design - Tampa Bay</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/images/custom-home-2/custom-home-2-large.webp"
                alt="Elevated coastal home with dark gray asphalt shingle roof and white siding on stilts"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Coastal Elevated Home</p>
                <p className="text-sm text-gray-200">Hurricane-Resistant Construction - Waterfront</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src="/wp-content/uploads/2023/12/Old/custom-home-construction-1.jpg"
                alt="Wood frame residential construction showing roof trusses and framing under blue sky"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold">Custom Home Framing</p>
                <p className="text-sm text-gray-200">Quality Construction in Progress</p>
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
              Residential Construction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From waterfront estates to historic district homes, we offer comprehensive residential construction services tailored to Tampa Bay's unique environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clusterServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4 group-hover:bg-brand-green transition-colors">
                  <service.icon className="w-7 h-7 text-brand-green-dark group-hover:text-white transition-colors" />
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

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              The Custom Home Building Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A thoughtful, collaborative approach that transforms your vision into a home that exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Vision & Discovery",
                description: "We begin by understanding your lifestyle, aesthetic preferences, and functional requirements. Site visits, design inspiration discussions, and preliminary budgeting help establish a clear foundation for your project.",
                icon: Home,
              },
              {
                step: "02",
                title: "Design Development",
                description: "Working with your architect or our design partners, we refine plans through constructability reviews and value engineering. This ensures your design vision is achievable within budget while maximizing quality and function.",
                icon: Award,
              },
              {
                step: "03",
                title: "Pre-Construction Planning",
                description: "Detailed specifications, material selections, subcontractor bidding, and comprehensive scheduling prepare for a smooth construction phase. We secure all permits and approvals before breaking ground.",
                icon: Shield,
              },
              {
                step: "04",
                title: "Foundation & Structure",
                description: "From site preparation through framing and roofing, we construct the bones of your home with meticulous attention to hurricane resistance, waterproofing, and structural integrity.",
                icon: Hammer,
              },
              {
                step: "05",
                title: "Systems & Finishes",
                description: "Mechanical, electrical, plumbing, and technology systems are installed and tested. Premium finishes—flooring, cabinetry, fixtures, and trim—bring your design vision to life.",
                icon: CheckCircle,
              },
              {
                step: "06",
                title: "Final Walkthrough & Move-In",
                description: "Comprehensive punch list resolution, homeowner orientation on all systems, and detailed warranty documentation ensure you're prepared to enjoy your new home for decades to come.",
                icon: Clock,
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-gray-50 rounded-xl p-6">
                <div className="absolute -top-4 left-6 bg-brand-green text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step {item.step}
                </div>
                <div className="mt-4">
                  <item.icon className="w-10 h-10 text-brand-green mb-4" />
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a design consultation to discuss your custom home vision with our experienced residential team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Design Consultation
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
      </section>

      {/* Why Choose FCS Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Why Tampa Bay Homeowners Choose Florida Construction Specialists
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Hurricane-Resistant Engineering</h3>
                    <p className="text-gray-600">Every FCS home is engineered to exceed Florida Building Code wind resistance requirements. Impact windows, enhanced roof connections, reinforced construction, and backup power systems protect your family and investment during Florida's worst weather.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center">
                    <Waves className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Waterfront Expertise</h3>
                    <p className="text-gray-600">Building on Tampa Bay's waterfront requires specialized knowledge of seawall coordination, flood zone regulations, marine-grade materials, and environmental permitting. We've completed numerous waterfront estates and understand every nuance of coastal construction.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center">
                    <Award className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Historic District Experience</h3>
                    <p className="text-gray-600">From Ybor City's Barrio Latino to Hyde Park and South Tampa, we've navigated Certificate of Appropriateness requirements throughout Tampa Bay's historic districts. We balance preservation requirements with modern living needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center">
                    <Home className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Commercial-Grade Project Management</h3>
                    <p className="text-gray-600">Your custom home benefits from the same rigorous project management we apply to multi-million dollar commercial projects. Detailed scheduling, cost control, quality assurance, and professional communication throughout the building process.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">Featured Residential Projects</h3>
              <div className="space-y-6">
                {featuredProjects.map((project) => (
                  <div key={project.name} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <h4 className="text-lg font-bold text-brand-green-dark">{project.name}</h4>
                    <p className="text-sm text-brand-green mb-2">{project.location} | {project.type}</p>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
              <Link href="/gallery/" className="inline-flex items-center text-brand-green font-semibold mt-6 hover:underline">
                View Full Portfolio <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Features */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Luxury Home Features & Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our custom homes incorporate the latest technology, premium materials, and thoughtful design for modern Florida living.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Smart Home Integration", icon: "🏠" },
              { name: "Outdoor Living Spaces", icon: "🌴" },
              { name: "Gourmet Kitchens", icon: "👨‍🍳" },
              { name: "Pool & Spa Design", icon: "🏊" },
              { name: "Home Theaters", icon: "🎬" },
              { name: "Wine Cellars", icon: "🍷" },
              { name: "Multi-Generational Design", icon: "👨‍👩‍👧‍👦" },
              { name: "Luxury Bathrooms", icon: "🛁" },
            ].map((feature) => (
              <div key={feature.name} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl mb-3 block">{feature.icon}</span>
                <h3 className="font-semibold text-brand-green-dark">{feature.name}</h3>
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
              Custom Home Construction Throughout Tampa Bay
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build luxury custom homes across the greater Tampa Bay region.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { city: "Tampa", href: "/luxury-custom-homes-tampa/" },
              { city: "St. Petersburg", href: "/luxury-custom-homes-st-petersburg/" },
              { city: "Clearwater", href: "/luxury-custom-homes-clearwater/" },
              { city: "Lakeland", href: "/luxury-custom-homes-lakeland/" },
              { city: "Sarasota", href: "/luxury-custom-homes-sarasota/" },
              { city: "Bradenton", href: "/luxury-custom-homes-bradenton/" },
              { city: "Brandon", href: "/luxury-custom-homes-brandon/" },
              { city: "Ruskin", href: "/luxury-custom-homes-ruskin/" },
            ].map((location) => (
              <Link
                key={location.city}
                href={location.href}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-brand-green-bg transition-colors group"
              >
                <span className="font-semibold text-brand-green-dark group-hover:text-brand-green transition-colors">
                  Custom Homes in {location.city}
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
                Luxury Custom Home FAQ
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about building a custom home in Tampa Bay.
              </p>
            </div>

            <FAQ items={residentialFaqs} />
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
              <p className="text-gray-600 mb-4">Large-scale commercial projects from $500K to $25M+ including office, retail, and multi-family development.</p>
              <span className="inline-flex items-center text-brand-green font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            <Link href="/services/historic-restoration/" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                Historic Restoration
              </h3>
              <p className="text-gray-600 mb-4">Sensitive restoration of historic homes and buildings, meeting preservation standards while incorporating modern amenities.</p>
              <span className="inline-flex items-center text-brand-green font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            <Link href="/services/disaster-recovery/" className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                Disaster Recovery
              </h3>
              <p className="text-gray-600 mb-4">Large loss restoration services for homes damaged by hurricanes, fire, or water, including insurance coordination.</p>
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
                Begin Your Custom Home Journey Today
              </h2>
              <p className="text-xl text-gray-200 mb-6">
                Contact Florida Construction Specialists to schedule a design consultation. We'll discuss your vision, explore possibilities, and outline the path to creating your dream home in Tampa Bay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-green-dark font-bold rounded-full hover:bg-brand-gold-light transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
                  Contact Us Online
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-gray-300 mb-4">Trusted by homeowners throughout Tampa Bay:</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-200">
                  <span>✓ License {BUSINESS_INFO.licenseNumber}</span>
                  <span>✓ Hurricane-Resistant Design</span>
                  <span>✓ {BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
                  <span>✓ $1M+ Projects</span>
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
            links={[{"href":"/services/residential/","label":"Residential Construction Services"},{"href":"/luxury-custom-homes/","label":"Luxury Custom Homes"},{"href":"/balcony-reconstruction/","label":"Balcony Reconstruction"},{"href":"/exterior-waterproofing/","label":"Exterior Waterproofing"},{"href":"/services/residential/waterfront-homes/","label":"Waterfront Home Construction"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
