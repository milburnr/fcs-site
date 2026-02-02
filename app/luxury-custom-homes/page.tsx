import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Home, Shield, Award, Sparkles, Waves, Zap, Clock, DollarSign, HelpCircle, ChevronRight } from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceAreaLinks } from "@/components/InternalLinks";
import { ContentParallax } from "@/components/ContentImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Custom Home Builders Tampa | Waterfront Estate Construction",
  description: "Tampa Bay's premier custom home builder for $1M+ luxury residences. Waterfront estates, hurricane-resistant construction, smart home integration, and design-build excellence. 40+ years of building architectural masterpieces.",
  keywords: "custom home builders Tampa, luxury home construction Florida, waterfront home builders Tampa Bay, custom home design build, Florida custom homes, luxury estate builder, architectural custom homes",
};

const tocItems = [
  { id: "philosophy", title: "Our Design Philosophy" },
  { id: "waterfront", title: "Waterfront Estate Construction" },
  { id: "hurricane-resistant", title: "Hurricane-Resistant Construction" },
  { id: "features", title: "Custom Home Features" },
  { id: "smart-home", title: "Smart Home Integration" },
  { id: "process", title: "The Custom Home Process" },
  { id: "architects", title: "Working with Your Architect" },
  { id: "investment", title: "Investment & Timeline" },
  { id: "florida-considerations", title: "Florida Considerations" },
  { id: "faq", title: "Frequently Asked Questions" },
];

const faqs = [
  {
    question: "What is your minimum project size for custom homes?",
    answer: "Florida Construction Specialists focuses exclusively on luxury custom homes valued at $1 million and above. This includes waterfront estates, architectural residences, and high-end custom builds. Our expertise in complex construction, premium materials, and sophisticated building systems is optimized for projects at this level, ensuring our clients receive the attention to detail and construction quality that luxury homes demand."
  },
  {
    question: "How long does it take to build a luxury custom home in Tampa?",
    answer: "Custom home construction timelines typically range from 12 to 24 months depending on size, complexity, and site conditions. A 4,000 square foot custom home might complete in 12-14 months, while a 10,000+ square foot waterfront estate could require 18-24 months. Factors affecting timeline include permit processing, custom material lead times, weather considerations, and the intricacy of architectural details. We provide detailed construction schedules during pre-construction planning."
  },
  {
    question: "Do you build waterfront and coastal homes?",
    answer: "Waterfront estate construction is one of our core specialties. We have extensive experience building on challenging waterfront sites throughout Tampa Bay, including Davis Islands, Harbour Island, Apollo Beach, and Clearwater Beach. Our waterfront expertise includes seawall coordination, marine-grade material selection, flood zone compliance, elevated construction techniques, and dock integration. We understand the unique challenges of coastal building in Florida."
  },
  {
    question: "Will you work with our architect, or do we need to use yours?",
    answer: "We work collaboratively with your chosen architect and welcome the opportunity to partner with any qualified design professional. We also maintain relationships with several acclaimed architects throughout Tampa Bay and can provide introductions if you're still selecting a design partner. Our design-build option offers a streamlined approach where we coordinate architectural services, providing single-source accountability. Regardless of the arrangement, we conduct thorough constructability reviews to ensure designs translate efficiently into built reality."
  },
  {
    question: "Are your homes hurricane-resistant?",
    answer: "All our custom homes exceed Florida Building Code requirements for wind resistance. We employ multiple hurricane-hardening strategies including impact-resistant windows and doors rated for wind-borne debris, reinforced roof-to-wall connections with enhanced tie-down systems, concrete block or poured concrete construction, hurricane-rated garage doors, and comprehensive water intrusion prevention. Many clients opt for additional fortification through programs like IBHS FORTIFIED Home certification."
  },
  {
    question: "What's included in your design-build services?",
    answer: "Our design-build approach provides comprehensive project delivery from concept through completion. This includes initial visioning and program development, site analysis and feasibility studies, architectural design coordination, interior design guidance, engineering coordination, permitting, construction, and warranty service. Design-build offers single-point accountability, streamlined communication, and often accelerated timelines since construction planning begins during design rather than after."
  },
  {
    question: "How do you handle selections and allowances?",
    answer: "We guide clients through a structured selection process with dedicated timelines for each category—tile, flooring, lighting, plumbing fixtures, appliances, and more. Our detailed specifications include clearly defined allowances for standard selections, with transparent pricing for upgrades. We maintain relationships with premium vendors and trade showrooms, and can arrange private appointments. Selections are documented in our project management system with approval workflows to prevent delays."
  },
  {
    question: "What warranty do you provide on custom homes?",
    answer: "We provide a comprehensive warranty program including one-year coverage on workmanship and materials, two-year coverage on major systems (plumbing, electrical, HVAC), and ten-year structural warranty coverage. Additionally, most major systems and appliances carry manufacturer warranties. We conduct scheduled warranty inspections and maintain dedicated service staff for warranty items. Our relationship with clients extends well beyond move-in day."
  },
  {
    question: "Do you handle pool and outdoor living construction?",
    answer: "Yes, we coordinate complete outdoor living environments including pools, spas, summer kitchens, fire features, pergolas, and landscape integration. While we work with specialized pool contractors for the pool shell itself, we serve as the general contractor overseeing all site work and ensuring seamless integration with the home. This includes pool equipment coordination, outdoor electrical and gas, drainage, hardscape, and landscape lighting."
  },
  {
    question: "What areas do you serve for custom home construction?",
    answer: "We build luxury custom homes throughout the Tampa Bay region including Tampa (South Tampa, Davis Islands, Hyde Park, Harbour Island, Beach Park, Palma Ceia), St. Petersburg, Clearwater, Sarasota, Lakewood Ranch, Apollo Beach, Bradenton, and surrounding communities. We focus on projects valued at $1 million and above, with particular expertise in waterfront properties and historic neighborhoods."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Residential", href: "/residential/" },
  { name: "Luxury Custom Homes", href: "/luxury-custom-homes/" },
];

export default function LuxuryCustomHomesPage() {
  return (
    <>
      <LocalBusinessSchema schemaType="HomeAndConstructionBusiness" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Luxury Custom Home Construction"
        serviceDescription="Tampa Bay's premier custom home builder for $1M+ luxury residences. Waterfront estates, hurricane-resistant construction, smart home integration, and design-build excellence."
        minPrice="1000000"
      />
      <ArticleSchema
        headline="The Complete Guide to Luxury Custom Home Construction in Tampa Bay"
        description="Everything you need to know about building a luxury custom home in Florida—from design philosophy and waterfront construction to hurricane resilience and smart home integration."
        datePublished="2024-01-15"
        dateModified="2024-12-01"
      />

      <Breadcrumb items={[
        { name: "Residential", href: "/residential/" },
        { name: "Luxury Custom Homes", href: "/luxury-custom-homes/" },
      ]} />

      {/* ═══════════════════════════════════════════════════════════════════════════
          HERO SECTION - Cinematic Full-Viewport
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/custom-home-1/custom-home-1-display.webp"
            alt="Luxury waterfront custom home at twilight with dramatic architectural lighting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-brand-gold/20 rounded-full opacity-30 hidden lg:block" />
        <div className="absolute bottom-40 right-40 w-32 h-32 border border-brand-gold/30 rounded-full opacity-20 hidden lg:block" />

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl">
            {/* Elegant Label */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-brand-gold" />
              <span className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm">
                Tampa Bay's Premier Custom Home Builder
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]">
              Where Vision Becomes
              <span className="block text-brand-gold mt-2">Architecture</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
              For over four decades, we have transformed dreams into extraordinary residences—
              waterfront estates, architectural masterpieces, and homes designed to 
              inspire for generations.
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-8 mb-12">
              <div className="text-center">
                <p className="text-4xl font-bold text-brand-gold">{BUSINESS_INFO.yearsInBusiness}+</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Years Excellence</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-brand-gold">$1M+</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Project Minimum</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-brand-gold">150+</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Homes Completed</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact/" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-gold text-black font-bold rounded-none hover:bg-brand-gold-light transition-all duration-300 group"
              >
                Begin Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-none hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-3 bg-brand-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          EXECUTIVE SUMMARY SECTION
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="h-px w-16 bg-brand-gold/50" />
              <span className="text-brand-gold font-medium tracking-[0.15em] uppercase text-sm">
                The FCS Difference
              </span>
              <div className="h-px w-16 bg-brand-gold/50" />
            </div>

            <h2 className="font-heading text-3xl md:text-4xl text-white text-center mb-8">
              Crafting Extraordinary Residences Since 1983
            </h2>

            <div className="prose prose-lg prose-invert mx-auto text-gray-300 leading-relaxed">
              <p className="text-xl leading-relaxed">
                Florida Construction Specialists represents a different approach to luxury home building—one where 
                craftsmanship, integrity, and client vision converge to create residences of lasting significance. 
                For more than four decades, we have served Tampa Bay's most discerning homeowners, translating 
                architectural dreams into built reality with meticulous attention to every detail.
              </p>

              <p>
                Our design-build methodology offers a streamlined path from initial concept through move-in day, 
                providing single-source accountability that eliminates the fragmentation common in residential 
                construction. Whether you arrive with completed architectural plans or a vision still taking shape, 
                our team guides the journey with expertise earned across hundreds of luxury projects.
              </p>

              <p>
                Waterfront estate construction represents a particular specialty. Tampa Bay's coastline presents 
                unique challenges—from seawall coordination and flood zone compliance to marine-grade material 
                selection and orientation for optimal views. Our deep experience in coastal construction means 
                we anticipate and solve challenges before they impact your project.
              </p>

              <p>
                Every home we build incorporates hurricane-resistant construction that exceeds Florida Building 
                Code requirements. In a region where tropical weather shapes the built environment, this isn't 
                merely a selling point—it's fundamental to responsible construction. Impact-resistant glazing, 
                reinforced structural connections, concrete construction methods, and comprehensive water 
                management systems ensure your home provides sanctuary through whatever conditions may arise.
              </p>

              <p>
                As prime contractors, we never subcontract our responsibility. Every project benefits from direct 
                FCS oversight, our established relationships with premier trade partners, and our commitment to 
                communication and transparency throughout construction. The result: homes that honor their 
                owners' vision while standing as testaments to exceptional building practice.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10">
              <div className="text-center">
                <Shield className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <p className="text-white font-semibold">Prime Contractor</p>
                <p className="text-gray-500 text-sm">Direct Accountability</p>
              </div>
              <div className="text-center">
                <Award className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <p className="text-white font-semibold">Licensed & Insured</p>
                <p className="text-gray-500 text-sm">CGC License</p>
              </div>
              <div className="text-center">
                <Home className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <p className="text-white font-semibold">Design-Build</p>
                <p className="text-gray-500 text-sm">Turnkey Service</p>
              </div>
              <div className="text-center">
                <Waves className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <p className="text-white font-semibold">Waterfront Experts</p>
                <p className="text-gray-500 text-sm">Coastal Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          TABLE OF CONTENTS
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-gray-950 border-y border-white/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-heading text-white mb-6 text-center">In This Guide</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {tocItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-brand-gold/20 rounded-lg transition-colors group"
                >
                  <span className="text-brand-gold font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">{item.title}</span>
                  <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-brand-gold ml-auto transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 1: DESIGN PHILOSOPHY (800 words)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="philosophy" className="py-24 bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-gold font-mono text-sm">01</span>
              <div className="h-px flex-1 bg-brand-gold/30" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Our Design Philosophy
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Creating homes that reflect how you live—not just where you live
            </p>

            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <h3 className="font-heading text-2xl text-white mt-12 mb-4">The Collaborative Design Process</h3>
              <p>
                Exceptional custom homes begin with exceptional listening. Before sketching a single line or 
                discussing square footage, we invest time understanding how you actually live—your daily 
                rhythms, your entertaining style, your private rituals, your aspirations for the years ahead. 
                This discovery process reveals insights that shape every subsequent decision, from room 
                adjacencies to window placements to the materials that will surround you daily.
              </p>
              <p>
                Our collaborative approach means you remain central to every design decision while benefiting 
                from professional guidance at each stage. We bring decades of experience in what works—and 
                what doesn't—in Florida's climate and lifestyle context. This partnership between your vision 
                and our expertise produces homes that feel inevitable, as though they couldn't have been 
                designed any other way.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Understanding Client Lifestyle</h3>
              <p>
                A young family with active children has fundamentally different needs than empty nesters 
                planning their forever home. Weekend entertainers require different spaces than those who 
                treasure quiet solitude. Some clients work from home daily; others never will. These lifestyle 
                factors—not abstract design principles—should drive residential architecture.
              </p>
              <p>
                We explore questions that conventional builders might overlook: How do you prefer to wake in 
                the morning? Where do you naturally gravitate when you want to think? How does your family 
                gather for meals—formal dining, kitchen island, outdoor terrace? Do you imagine aging in this 
                home, and if so, what accessibility considerations matter now versus later? The answers inform 
                a program that truly serves your life.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Site-Responsive Architecture</h3>
              <p>
                Every building site possesses unique characteristics—orientation, topography, vegetation, 
                views, prevailing breezes, neighboring structures, and regulatory constraints. Site-responsive 
                design treats these factors as opportunities rather than obstacles, positioning the home to 
                maximize natural assets while mitigating challenges.
              </p>
              <p>
                In Tampa Bay, this means careful consideration of solar orientation to manage heat gain, 
                strategic window placement to capture cooling Gulf breezes, outdoor living areas positioned 
                for afternoon shade, and architectural forms that provide hurricane protection while embracing 
                Florida's indoor-outdoor lifestyle. A home designed for its specific site will always 
                outperform one that could have been built anywhere.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Indoor-Outdoor Florida Living</h3>
              <p>
                Florida's climate offers a remarkable gift: the ability to live outdoors most of the year. 
                Our design philosophy embraces this opportunity through seamless indoor-outdoor transitions, 
                expansive opening wall systems, outdoor living rooms with full amenities, and landscape 
                integration that extends the home's living space into the surrounding environment.
              </p>
              <p>
                We design covered outdoor spaces that function as true rooms—protected from sun and rain 
                while remaining connected to pool, garden, and view. Summer kitchens become legitimate cooking 
                spaces with professional-grade equipment. Screened lanais offer insect-free evening enjoyment. 
                The boundary between inside and outside dissolves, creating homes that feel significantly 
                larger than their enclosed square footage suggests.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Timeless Versus Trendy</h3>
              <p>
                Design trends come and go with predictable regularity. The all-white kitchen that feels fresh 
                today may feel dated in a decade. The dramatic feature that photographs beautifully may prove 
                tiresome to live with daily. We counsel clients toward design choices with staying power—
                classic proportions, quality materials, refined details that age gracefully rather than 
                announcing their era.
              </p>
              <p>
                This doesn't mean avoiding contemporary design. Rather, it means selecting elements that 
                represent genuine quality rather than fleeting fashion. Natural stone, hardwood, brass, 
                and hand-crafted tile possess inherent beauty that transcends trend cycles. Clean architectural 
                lines allow furnishings and art to evolve over time without requiring structural changes. 
                The homes we build should remain beautiful and functional for generations, not merely for 
                the current moment.
              </p>
              <p>
                Our design philosophy ultimately serves a simple goal: creating homes where families thrive. 
                Beyond the aesthetic considerations, beyond the engineering challenges, beyond the material 
                selections—the purpose of every decision is enabling richer, more comfortable, more 
                meaningful daily life within spaces that genuinely reflect their inhabitants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break - Waterfront */}
      <ContentParallax
        src="/images/tampa-waterfront-home-construction/tampa-waterfront-home-construction-small.webp"
        alt="Luxury waterfront estate construction Tampa Bay"
        title="Waterfront Living Excellence"
        subtitle="Spectacular homes designed for Florida's coastal lifestyle"
        overlayOpacity={0.5}
      />

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 2: WATERFRONT ESTATE CONSTRUCTION (1,000 words)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="waterfront" className="py-24 bg-gray-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-gold font-mono text-sm">02</span>
              <div className="h-px flex-1 bg-brand-gold/30" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Waterfront Estate Construction
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Specialized expertise for Tampa Bay's most desirable—and demanding—building sites
            </p>

            {/* Key Differentiator Callout */}
            <div className="bg-brand-gold/10 border-l-4 border-brand-gold p-6 mb-12">
              <p className="text-brand-gold font-heading text-lg mb-2">Our Core Specialty</p>
              <p className="text-gray-300">
                Waterfront construction requires expertise that most builders simply don't possess. 
                From seawall engineering to flood zone compliance, marine-grade materials to dock integration, 
                our coastal building experience ensures your waterfront estate is built for beauty and resilience.
              </p>
            </div>

            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Seawall Coordination and Marine Construction</h3>
              <p>
                Waterfront properties along Tampa Bay, the Gulf of Mexico, and inland waterways present 
                construction challenges that begin at the water's edge. Seawalls require careful assessment 
                and often replacement or reinforcement before home construction can proceed. The condition 
                of existing seawalls, their elevation relative to current flood standards, and their structural 
                capacity to support adjacent construction all influence the project approach.
              </p>
              <p>
                We coordinate with specialized marine contractors for seawall construction, ensuring the 
                transition between marine and residential construction proceeds seamlessly. This includes 
                proper tie-back systems that connect seawalls to building foundations, drainage solutions 
                that prevent water accumulation behind walls, and cap designs that integrate with landscape 
                and hardscape plans. Our experience managing these interfaces prevents the coordination 
                failures that plague less experienced waterfront builders.
              </p>
              <p>
                Marine construction extends beyond seawalls to include docks, boat lifts, and waterside 
                amenities. We ensure these elements integrate properly with home utilities—electrical 
                service for lifts and dock lighting, water supply for boat washing, and proper permitting 
                for work in navigable waters.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Flood Zone Compliance</h3>
              <p>
                Tampa Bay's waterfront properties typically fall within FEMA-designated flood zones, 
                primarily VE (coastal high hazard) and AE (coastal and riverine) zones. These designations 
                carry significant construction requirements that affect virtually every aspect of home design 
                and construction.
              </p>
              <p>
                VE zones require construction above the Base Flood Elevation (BFE) with the lowest horizontal 
                structural member above this level—a requirement that essentially mandates elevated construction. 
                Foundation systems must withstand not only flooding but wave action, requiring specialized 
                designs certified by licensed engineers. Building materials below the flood level must be 
                flood-resistant, and mechanical systems require elevation or flood-proofing.
              </p>
              <p>
                Beyond FEMA requirements, local jurisdictions often impose additional standards. Pinellas 
                County, Hillsborough County, and various municipalities have specific requirements that 
                may exceed federal minimums. We navigate this regulatory landscape daily, understanding 
                how to achieve architectural goals while meeting every applicable requirement.
              </p>
              <p>
                Proper flood zone construction also affects insurance costs significantly. Homes built 
                correctly to exceed flood standards qualify for preferred insurance rates, while those 
                with compliance issues face substantially higher premiums or coverage denials. Our 
                rigorous attention to flood requirements protects your investment for the long term.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Elevated Construction Techniques</h3>
              <p>
                Elevated construction in flood zones requires foundation systems that differ significantly 
                from conventional residential building. Depending on soil conditions and design requirements, 
                we employ deep pilings driven to load-bearing strata, grade beams connecting pile caps, 
                and structural floor systems designed to span between supports while withstanding wind 
                uplift and flood forces.
              </p>
              <p>
                The space beneath elevated homes presents both challenges and opportunities. Proper 
                breakaway wall construction—walls designed to fail under flood conditions without 
                damaging the structure above—allows use of this space for parking and storage while 
                maintaining compliance. We design these areas to maximize utility while meeting all 
                code requirements for flood zone construction.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Marine-Grade Materials</h3>
              <p>
                Waterfront environments demand material choices that resist salt air, humidity, and 
                direct water exposure. Standard residential materials deteriorate rapidly in these 
                conditions—steel rusts, wood rots, ordinary finishes fail. We specify marine-grade 
                alternatives throughout waterfront construction.
              </p>
              <p>
                This includes stainless steel fasteners and hardware (316 grade for direct coastal 
                exposure), fiberglass or composite trim in lieu of wood, specialized coatings for any 
                exposed metal, and concrete mixes designed for sulfate resistance. Window and door 
                systems require marine-grade hardware and finish specifications beyond what inland 
                construction demands. These material upgrades add cost but prevent the premature 
                deterioration that plagues improperly specified waterfront homes.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Dock Integration and Views</h3>
              <p>
                For boating families, dock and boat lift integration represents a critical design 
                consideration. Dock placement affects home orientation, outdoor living layouts, and 
                view corridors. We coordinate dock design with overall site planning to ensure these 
                elements complement rather than compete with each other.
              </p>
              <p>
                View optimization drives many waterfront design decisions. We position primary living 
                spaces to maximize water views while maintaining privacy from neighboring properties 
                and passing boat traffic. Window placements balance view capture against solar heat 
                gain and hurricane protection requirements. Outdoor living areas orient to enjoy 
                sunsets over water while remaining protected from afternoon storms that typically 
                approach from the east.
              </p>
              <p>
                The result of this comprehensive approach: waterfront estates that embrace their 
                extraordinary settings while standing resilient against the coastal conditions 
                that make these sites simultaneously desirable and demanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break - Luxury Home */}
      <ContentParallax
        src="/images/tampa-luxury-custom-home-construction/tampa-luxury-custom-home-construction-small.webp"
        alt="Luxury custom home construction Tampa"
        title="Built to Endure"
        subtitle="Hurricane-resistant construction that doesn't compromise on elegance"
        overlayOpacity={0.55}
      />

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 3: HURRICANE-RESISTANT CONSTRUCTION (1,000 words)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="hurricane-resistant" className="py-24 bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-gold font-mono text-sm">03</span>
              <div className="h-px flex-1 bg-brand-gold/30" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Hurricane-Resistant Construction
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Building homes that provide sanctuary—engineered to exceed code requirements
            </p>

            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <p className="text-xl leading-relaxed">
                Florida's hurricane exposure makes wind and water resistance fundamental to responsible 
                construction. Our approach goes beyond minimum code compliance to create homes that 
                provide genuine peace of mind when tropical systems threaten. Every structural decision, 
                every envelope detail, every system specification considers how the home will perform 
                under extreme conditions.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Impact-Resistant Windows and Doors</h3>
              <p>
                Wind-borne debris represents the primary threat during hurricanes—once the building 
                envelope is breached, internal pressure can cause catastrophic structural failure. 
                Impact-resistant glazing, tested to withstand large and small missile impacts while 
                maintaining structural integrity, provides the critical first line of defense.
              </p>
              <p>
                We specify impact windows and doors that meet or exceed Miami-Dade County's stringent 
                testing protocols—the most demanding standards in the United States. These products 
                feature laminated glass with interlayers that hold fragments together if the glass 
                breaks, heavy-duty frames designed to resist wind pressure and cyclic loading, and 
                hardware systems engineered for hurricane conditions. Beyond protection, impact glazing 
                provides continuous security, UV filtering, and sound attenuation benefits.
              </p>
              <p>
                For clients preferring traditional aesthetics, we offer impact windows that replicate 
                the appearance of divided-light designs without compromising protection. The days when 
                hurricane protection meant institutional-looking glass are long past—today's impact 
                products accommodate virtually any architectural style.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Fortified Roof Systems</h3>
              <p>
                Roof loss during hurricanes—whether partial or complete—leads to massive interior 
                damage and often renders homes uninhabitable. Our roof systems incorporate multiple 
                strategies to maintain integrity under extreme wind loading.
              </p>
              <p>
                Structural connections begin at the foundation and continue through wall framing to 
                roof trusses or rafters. Hurricane straps connect each truss to the wall structure 
                below, creating a continuous load path that transfers wind forces to the ground. We 
                use engineered connectors rather than simple toe-nailing, with strap selection based 
                on calculated wind loads for each home's specific exposure.
              </p>
              <p>
                Roof decking attachment receives equal attention. Ring-shank nails in code-specified 
                patterns prevent sheathing from pulling away under wind suction. Secondary water 
                barriers—self-adhering membranes applied over sheathing—provide protection if 
                primary roofing is damaged. These sealed deck systems keep water out even when 
                shingles or tiles are lost.
              </p>
              <p>
                Roofing material selection considers both aesthetics and performance. Concrete and 
                clay tiles provide excellent wind resistance when properly installed with mechanical 
                fasteners and adhesive. Standing seam metal roofing offers exceptional durability. 
                Even asphalt shingles, when specified in wind-rated grades with proper installation, 
                perform well in most tropical systems.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Concrete Construction Advantages</h3>
              <p>
                Concrete masonry unit (CMU) construction, reinforced and grouted per engineered 
                specifications, provides inherent advantages in hurricane-prone regions. Mass and 
                rigidity resist wind forces more effectively than light-frame construction. 
                Non-combustibility eliminates fire spread concerns during post-storm conditions 
                when fire response may be limited.
              </p>
              <p>
                For elevated construction and upper floors, we employ reinforced concrete or 
                structural steel framing that provides comparable strength. Poured concrete walls, 
                whether site-formed or utilizing insulated concrete form (ICF) systems, offer 
                exceptional resistance to both wind pressure and impact.
              </p>
              <p>
                Concrete construction also provides thermal mass benefits in Florida's climate, 
                moderating temperature swings and reducing cooling loads. The investment in concrete 
                construction pays dividends in both storm protection and long-term operating costs.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Backup Power Systems</h3>
              <p>
                Extended power outages following major storms threaten both comfort and food safety 
                while potentially allowing moisture damage to accumulate in homes without climate 
                control. Whole-house generators with automatic transfer switches provide seamless 
                backup power, starting within seconds of utility failure and running until power 
                is restored.
              </p>
              <p>
                Generator sizing considers critical loads—air conditioning to prevent mold growth, 
                refrigeration, well pumps, security systems, and medical equipment where applicable. 
                Fuel systems range from natural gas (unlimited runtime if gas service continues) 
                to propane (stored on-site for independence) to diesel for extended autonomy.
              </p>
              <p>
                For clients interested in sustainability, battery storage systems paired with solar 
                arrays provide backup power with renewable generation capability. These systems can 
                operate independently of fuel deliveries during extended post-storm recovery periods.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Storm-Rated Garage Doors</h3>
              <p>
                Garage doors represent the largest openings in most homes and the most vulnerable 
                point in the building envelope. Standard garage doors fail under relatively modest 
                wind pressures, creating the internal pressure spike that can destroy homes from 
                within.
              </p>
              <p>
                Wind-rated garage doors, tested and certified for specific wind speeds, incorporate 
                reinforced panels, heavy-duty hardware, and impact-resistant glazing where windows 
                are included. Track systems resist deflection that allows doors to blow in. These 
                products cost more than standard doors but provide essential protection.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Beyond Code Compliance</h3>
              <p>
                Florida Building Code requirements establish minimum standards; our construction 
                consistently exceeds these minimums. The IBHS FORTIFIED Home program provides a 
                framework for enhanced construction with three certification levels: Bronze, Silver, 
                and Gold. Many clients choose to pursue FORTIFIED certification, which can reduce 
                insurance premiums while providing documentation of superior construction quality.
              </p>
              <p>
                Our hurricane-resistant construction philosophy recognizes that tropical systems are 
                inevitable realities of Florida life. Building properly from the start costs less 
                than repairing damage after the fact—and provides peace of mind that no amount of 
                post-storm reconstruction can replicate. Every home we build reflects our commitment 
                to protecting families and investments against the storms that will surely come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 4: CUSTOM HOME FEATURES (1,200 words)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="features" className="py-24 bg-gray-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-gold font-mono text-sm">04</span>
              <div className="h-px flex-1 bg-brand-gold/30" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Signature Custom Home Features
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Crafting spaces for how you live—with materials and systems that define luxury
            </p>

            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Gourmet Kitchens</h3>
              <p>
                The kitchen anchors modern luxury homes—a space where culinary craft meets family gathering. 
                Our gourmet kitchens feature professional-grade appliances from Viking, Sub-Zero, Wolf, 
                Miele, and Thermador, selected based on cooking style and maintenance preferences. 
                Six-burner ranges with griddles and grills, built-in refrigeration with custom paneling, 
                steam ovens, speed ovens, and integrated coffee systems create cooking environments 
                rivaling professional kitchens.
              </p>
              <p>
                Countertop materials range from exotic quartzite and marble to engineered quartz and 
                butcher block stations for specific tasks. Custom cabinetry, whether frameless European 
                or traditional inset construction, provides storage solutions tailored to your equipment 
                and workflow. Oversized islands with seating, prep sinks, and integrated storage serve 
                as command centers for both cooking and casual entertaining.
              </p>
              <p>
                Thoughtful details elevate function: pot-filler faucets at the range, built-in knife 
                storage, appliance garages for countertop equipment, wine refrigeration, and task 
                lighting that illuminates work surfaces without glare. Pantry design—whether walk-in 
                with custom shelving or butler's pantry connecting to dining—keeps working kitchens 
                organized and guest-ready.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Luxury Primary Bathrooms</h3>
              <p>
                Primary bathrooms in luxury homes function as private retreats—spaces for relaxation 
                and renewal that rival high-end spas. Freestanding soaking tubs from Badeloft, Victoria 
                + Albert, or MTI serve as sculptural focal points. Walk-in showers feature rainfall 
                heads, body sprays, handheld wands, and steam generators, all controlled through 
                digital interfaces that remember individual preferences.
              </p>
              <p>
                Natural stone—marble, travertine, or limestone—lines floors and walls with bookmatched 
                slabs creating dramatic feature walls. Heated floors eliminate cold tile shock on 
                winter mornings. Double vanities with ample counter space, custom cabinetry, and 
                adjustable lighting provide luxurious grooming environments.
              </p>
              <p>
                Water closets evolve into private rooms with bidet-equipped toilets, ventilation, and 
                sound isolation. Separate makeup vanities with optimal lighting serve dedicated 
                purposes. Integrated laundry connections in primary closets allow convenient wardrobe 
                care without traipsing through the house.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Home Theaters and Entertainment</h3>
              <p>
                Dedicated home theaters transform movie nights into cinematic experiences. Acoustic 
                isolation prevents sound bleed while creating the controlled environment necessary 
                for optimal audio reproduction. Tiered seating platforms, motorized recliners, and 
                acoustic panel treatments create intimate venues for family and friends.
              </p>
              <p>
                Visual systems range from large-format LED displays to 4K laser projection with 
                acoustically transparent screens. Dolby Atmos speaker arrays—with ceiling-mounted 
                height channels—create three-dimensional soundscapes. Climate-controlled equipment 
                rooms house amplifiers, processors, and streaming servers away from the viewing space.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Wine Cellars and Storage</h3>
              <p>
                Temperature-controlled wine storage protects collections while showcasing bottles as 
                design elements. Climate systems maintain optimal temperature and humidity regardless 
                of Florida's exterior conditions. Display lighting—typically LED to minimize heat—
                illuminates labels without degrading wine. Storage configurations accommodate 
                everything from standard bottles to magnums and irregular formats.
              </p>
              <p>
                Tasting areas adjacent to cellars provide intimate entertainment spaces—seating for 
                four to eight guests, decanting surfaces, stemware storage, and small-plate service 
                capability. These rooms become destinations within the home for sophisticated 
                entertaining.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Home Offices</h3>
              <p>
                Remote work demands serious workspace at home. Dedicated offices feature built-in 
                desks with cable management, adjustable lighting for video calls, acoustical 
                treatment for voice clarity, and technology infrastructure supporting multiple 
                monitors and high-speed connectivity. Separate HVAC zoning maintains comfort 
                during extended work sessions without conditioning the entire house.
              </p>
              <p>
                For executives and professionals, home offices increasingly include video 
                conferencing setups rivaling corporate facilities—proper backdrop design, 
                professional lighting, and acoustic treatment that elevates virtual presence.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Multi-Generational Suites</h3>
              <p>
                Families increasingly accommodate aging parents or returning adult children with 
                in-law suites offering genuine independence. These self-contained living spaces 
                include private entrances, full kitchens or kitchenettes, living areas, bedrooms, 
                and accessible bathrooms—true apartments integrated within the overall home.
              </p>
              <p>
                Careful design maintains privacy for all generations while allowing connection when 
                desired. Separate mechanical systems permit independent climate control. Universal 
                design principles—wider doorways, blocking for future grab bars, step-free entries—
                accommodate changing mobility without appearing institutional.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Outdoor Living</h3>
              <p>
                Florida's climate demands outdoor living spaces that function as true rooms. Covered 
                lanais with ceiling fans, lighting, and climate-mitigating features extend living 
                outdoors for most of the year. Summer kitchens with built-in grills, burners, 
                refrigeration, and sinks create genuine outdoor cooking capability—not merely 
                a grill on the patio.
              </p>
              <p>
                Pool design integrates with architecture and landscape for seamless visual flow. 
                Infinity edges, sun shelves, spa spillovers, and water features create distinctive 
                pool environments. Surrounding decking—whether travertine, porcelain pavers, or 
                architectural concrete—provides comfortable surfaces for lounging and entertaining.
              </p>
              <p>
                Fire features extend outdoor enjoyment into cooler evenings—fire pits, linear 
                fire tables, or fireplace features create gathering points with primal appeal. 
                Landscape lighting transforms evening environments, highlighting architectural 
                features and plant specimens while providing safe navigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 5: SMART HOME INTEGRATION (600 words)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="smart-home" className="py-24 bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-gold font-mono text-sm">05</span>
              <div className="h-px flex-1 bg-brand-gold/30" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Smart Home Integration
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Technology that serves your lifestyle—invisibly and reliably
            </p>

            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Whole-Home Automation</h3>
              <p>
                Modern luxury homes integrate disparate systems—lighting, climate, security, 
                entertainment, and more—into unified control platforms. Systems like Control4, 
                Crestron, and Savant provide intuitive interfaces accessible via touchscreens, 
                smartphones, voice commands, and automated schedules. A single "Goodnight" command 
                can arm security, adjust thermostats, close shades, and extinguish lights throughout 
                the home.
              </p>
              <p>
                Robust automation requires proper infrastructure installed during construction: 
                dedicated network equipment, low-voltage wiring to every room, structured cable 
                pathways, and equipment spaces with adequate power and cooling. Retrofit automation 
                never achieves the seamless integration possible with new construction planning.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Climate and Lighting Control</h3>
              <p>
                Automated climate control optimizes comfort while minimizing energy consumption. 
                Zoned HVAC systems heat and cool occupied spaces while reducing output to empty 
                rooms. Occupancy sensors, geofencing, and scheduled programming work together to 
                maintain ideal conditions efficiently. Motorized shades manage solar gain, 
                automatically lowering during peak sun and rising for evening views.
              </p>
              <p>
                Lighting scenes transform spaces for different activities—bright task lighting 
                for cooking transitions to warm ambient glow for dinner parties. Tunable white 
                systems adjust color temperature throughout the day, supporting circadian rhythms 
                with energizing cool light in morning and relaxing warm tones in evening. Landscape 
                lighting operates on astronomical time clocks, adjusting automatically to sunset 
                times year-round.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Security Systems</h3>
              <p>
                Integrated security encompasses video surveillance, access control, alarm systems, 
                and monitoring services. High-definition cameras with night vision, license plate 
                recognition, and analytics alert homeowners to unusual activity. Video doorbells 
                and intercom systems allow two-way communication with visitors from anywhere.
              </p>
              <p>
                Access control eliminates traditional keys—biometric locks, keypads, and smartphone 
                credentials provide entry while logging access for review. Temporary codes for 
                service providers expire automatically. Integration with automation systems ensures 
                lights illuminate and systems arm/disarm based on who enters and when.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Hidden Technology</h3>
              <p>
                Luxury demands technology that serves without intruding. Equipment rooms house 
                servers, amplifiers, and network gear away from living spaces. Speakers disappear 
                into ceilings or walls, providing immersive audio without visible hardware. 
                Motorized mounts lower televisions from ceilings or raise them from furniture 
                when needed, hiding screens when not in use.
              </p>
              <p>
                Our technology partners design and install systems that provide sophisticated 
                capability while respecting architectural aesthetics. The best smart home technology 
                is invisible until needed—then utterly reliable when called upon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 6: THE CUSTOM HOME PROCESS (1,000 words)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="process" className="py-24 bg-gray-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-gold font-mono text-sm">06</span>
              <div className="h-px flex-1 bg-brand-gold/30" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              The Custom Home Process
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              From first conversation to move-in day—a clear path to your new home
            </p>

            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Phase 1: Discovery and Visioning</h3>
              <p>
                Every project begins with conversation. We learn about your family, your lifestyle, 
                your aesthetic preferences, and your goals for the new home. We discuss budget 
                parameters, timeline expectations, and any constraints that will shape the project. 
                Site visits—whether to an owned lot or prospective purchases—reveal opportunities 
                and challenges that influence design direction.
              </p>
              <p>
                Discovery typically spans two to four meetings over several weeks, allowing time 
                for reflection between sessions. By the end, we've developed a clear program 
                document outlining spaces, sizes, features, and priorities that will guide design.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Phase 2: Site Analysis</h3>
              <p>
                Thorough site analysis precedes design work. Surveys establish boundaries, 
                easements, and existing features. Soil borings reveal bearing capacity and water 
                table conditions. Flood zone determinations establish minimum elevations. Utility 
                availability—water, sewer, gas, electric, communications—affects site planning. 
                Zoning review confirms setbacks, height limits, and any overlay district requirements.
              </p>
              <p>
                For waterfront sites, additional analysis addresses seawall condition, dock 
                permitting, and coastal construction zone requirements. Historic districts require 
                design review compliance. This due diligence prevents costly surprises during 
                construction.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Phase 3: Design Development</h3>
              <p>
                With program and site analysis complete, architectural design begins. Working with 
                your architect—whether your selection or one we introduce—concepts evolve from 
                initial sketches through floor plan development to exterior design. Interior 
                elevations define kitchen layouts, bath configurations, and built-in elements.
              </p>
              <p>
                We participate throughout design to ensure constructability and provide preliminary 
                cost feedback. This collaborative approach prevents designs that exceed budget or 
                prove difficult to build. By design completion, you'll have a clear vision of your 
                future home and reliable cost expectations.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Phase 4: Pre-Construction Planning</h3>
              <p>
                Pre-construction transforms designs into buildable documents. Engineers complete 
                structural, mechanical, electrical, and plumbing designs. We develop detailed 
                specifications defining every material and system. Subcontractors provide 
                competitive pricing. Schedules establish realistic timelines.
              </p>
              <p>
                Permit applications—often requiring flood zone documentation, energy calculations, 
                and various regulatory reviews—proceed through approval processes that can span 
                weeks to months depending on jurisdiction. We manage these submissions and respond 
                to reviewer comments to keep permits on track.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Phase 5: Construction</h3>
              <p>
                Construction follows a logical progression: site preparation and foundation, 
                structural framing, mechanical/electrical/plumbing rough-in, insulation and 
                drywall, interior finishes, and final details. Throughout, our superintendent 
                maintains daily presence on site, coordinating trades, managing quality, and 
                solving problems as they arise.
              </p>
              <p>
                Regular owner meetings—typically weekly or biweekly—keep you informed of progress, 
                upcoming decisions, and any issues requiring attention. Our project management 
                system provides real-time access to schedules, documents, photos, and financial 
                tracking. You're never left wondering what's happening with your project.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Phase 6: Interior Selections</h3>
              <p>
                Running parallel to construction, the selection process determines finishes that 
                bring designs to life. Structured timelines ensure decisions happen when needed—
                tile selections before rough-in, cabinet designs before framing completion, 
                lighting before electrical rough. We guide you through showroom visits, sample 
                reviews, and final approvals with clear deadlines that maintain schedule.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Phase 7: Final Walkthrough</h3>
              <p>
                Before certificate of occupancy, we conduct thorough inspections documenting any 
                items requiring attention. A formal walkthrough with you identifies any additional 
                concerns. Our punch list process systematically addresses every item before turnover. 
                You receive complete documentation including warranties, manuals, and as-built drawings.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Phase 8: Warranty and Beyond</h3>
              <p>
                Our relationship extends well beyond move-in. Scheduled warranty visits at 
                30-day, 6-month, and 11-month intervals address any emerging issues. Dedicated 
                warranty staff responds promptly to service needs. We remain available to support 
                future modifications, additions, or questions about your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 7: WORKING WITH YOUR ARCHITECT (500 words)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="architects" className="py-24 bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-gold font-mono text-sm">07</span>
              <div className="h-px flex-1 bg-brand-gold/30" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Working with Your Architect
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Partnering with design professionals to bring vision to reality
            </p>

            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Our Design Partners</h3>
              <p>
                Over four decades, we've developed collaborative relationships with many of 
                Tampa Bay's finest residential architects. These partnerships, built through 
                dozens of shared projects, allow seamless communication and mutual understanding 
                of each other's processes. When clients seek architect recommendations, we can 
                match design sensibilities and project requirements to architects whose work 
                aligns with their vision.
              </p>
              <p>
                Our architect relationships span stylistic ranges from contemporary minimalism 
                to traditional Southern vernacular, from Mediterranean revival to coastal modern. 
                Whatever your aesthetic preference, we know architects who excel in that language.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Bringing Your Own Architect</h3>
              <p>
                Many clients arrive with established architect relationships or specific 
                designers they've long admired. We welcome the opportunity to work with any 
                qualified design professional. Our collaborative approach ensures smooth 
                communication regardless of prior working history. We'll establish protocols 
                for document exchange, meeting cadence, and decision tracking that serve all 
                parties effectively.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Design-Build Advantages</h3>
              <p>
                Design-build consolidates design and construction responsibility under single 
                contract, eliminating the adversarial dynamics that can develop when designers 
                and builders work for different entities. Communication streamlines since all 
                parties work toward shared goals. Schedules compress since construction planning 
                begins during design rather than after. Cost control improves since budget 
                feedback informs design decisions in real-time.
              </p>
              <p>
                For clients valuing simplicity and efficiency, design-build offers compelling 
                advantages. A single point of contact, unified accountability, and integrated 
                processes reduce the burden on homeowners while often delivering projects 
                faster and with fewer conflicts.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Constructability Review</h3>
              <p>
                Regardless of delivery method, we conduct thorough constructability reviews of 
                all designs before construction begins. This process identifies potential 
                conflicts between systems, details that may prove difficult or expensive to 
                execute, and opportunities to achieve design intent through alternative means. 
                Better to address these issues during design than discover them during construction 
                when changes cost more and cause delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 8: INVESTMENT AND TIMELINE (600 words)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="investment" className="py-24 bg-gray-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-gold font-mono text-sm">08</span>
              <div className="h-px flex-1 bg-brand-gold/30" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Investment and Timeline
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Understanding costs, schedules, and protecting your investment
            </p>

            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Custom Home Cost Factors</h3>
              <p>
                Luxury custom home costs vary dramatically based on size, site conditions, 
                architectural complexity, and finish levels. Simple per-square-foot metrics, 
                while convenient, fail to capture these variations. A 5,000 square foot home 
                with standard finishes costs far less than a 5,000 square foot home with 
                imported stone, custom millwork, and museum-quality lighting throughout.
              </p>
              <p>
                Our projects typically range from $350 to $800+ per square foot depending on 
                these factors. Waterfront sites with elevated construction, complex foundation 
                systems, and marine-grade materials command premiums over conventional lots. 
                High architectural detail—curved walls, complex rooflines, extensive custom 
                millwork—adds cost compared to simpler forms. Finish selections from basic 
                to ultra-premium can swing overall costs by 30% or more.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Timeline Expectations</h3>
              <p>
                Custom home construction typically spans 12 to 24 months from permit to completion. 
                Smaller homes (under 4,000 square feet) with conventional construction often 
                complete in 12-14 months. Larger estates (8,000+ square feet) or those with 
                complex features may require 18-24 months. Permit processing adds 2-4 months 
                before construction begins.
              </p>
              <p>
                Factors extending timelines include custom material lead times (some imported 
                stone requires 12+ weeks), specialty systems requiring expert installation, 
                weather delays (particularly during Florida's summer storm season), and design 
                changes during construction. Realistic expectations and contingency planning 
                prevent frustration.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Payment Structure</h3>
              <p>
                Construction draws typically follow a percentage-of-completion schedule 
                aligned with project milestones. Initial deposits secure scheduling; subsequent 
                draws occur at foundation completion, framing completion, mechanical rough-in, 
                drywall completion, and final completion. This structure protects both parties—
                builders receive funds as work completes while owners retain leverage for 
                completion and quality.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Allowances and Upgrades</h3>
              <p>
                Detailed specifications include allowances for selections like tile, lighting 
                fixtures, and appliances. These allowances represent budgeted amounts for each 
                category; selections exceeding allowances generate change orders while selections 
                under allowances create credits. Transparent allowance structures enable informed 
                decisions about where to invest for maximum impact.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Protecting Your Investment</h3>
              <p>
                Construction loans differ from permanent mortgages and require specialized 
                lending. We work with clients' chosen lenders, providing documentation and 
                draw request processing to keep financing on track. Builder's risk insurance, 
                performance bonds where required, and proper lien management protect owners 
                throughout construction. Upon completion, transition to permanent financing 
                and appropriate homeowner's insurance coverage completes the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 9: FLORIDA CONSIDERATIONS (600 words)
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="florida-considerations" className="py-24 bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-gold font-mono text-sm">09</span>
              <div className="h-px flex-1 bg-brand-gold/30" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Florida Custom Home Considerations
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Building smart in the Sunshine State
            </p>

            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Florida Building Code</h3>
              <p>
                Florida Building Code (FBC) represents one of the nation's most stringent 
                construction standards, particularly for wind resistance. The code establishes 
                minimum requirements for structural systems, building envelope, mechanical 
                systems, and energy efficiency. Various "high-velocity hurricane zones" 
                within the state impose additional requirements.
              </p>
              <p>
                Compliance requires proper documentation, inspections at key construction stages, 
                and final certification. Our familiarity with FBC requirements ensures smooth 
                permit processes and inspection approvals without costly corrections.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Hurricane Requirements</h3>
              <p>
                Beyond general building code, specific wind design requirements vary by location. 
                Design wind speeds in Tampa Bay range from 130-150 mph depending on exact 
                location and exposure category. These speeds drive structural engineering, 
                connection specifications, and opening protection requirements. Understanding 
                applicable wind requirements ensures proper design from project outset.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Energy Efficiency</h3>
              <p>
                Florida's energy code mandates minimum efficiency levels for building envelopes, 
                mechanical systems, and lighting. In practice, luxury homes typically exceed 
                these minimums significantly. High-performance windows reduce cooling loads 
                while maintaining views. Spray foam insulation exceeds code R-values while 
                improving air sealing. Variable-speed HVAC systems optimize efficiency across 
                varying conditions.
              </p>
              <p>
                Energy modeling during design quantifies performance and identifies optimal 
                investments. The payback on efficiency upgrades in Florida's climate—where 
                air conditioning dominates utility costs—often proves compelling.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">Lot Selection</h3>
              <p>
                For clients still selecting building sites, we provide consultation on lot 
                suitability. Factors we evaluate include flood zone designation, soil conditions, 
                utility availability, tree preservation opportunities, view potential, and 
                regulatory constraints. Pre-purchase due diligence prevents costly surprises 
                and ensures the lot supports your vision.
              </p>

              <h3 className="font-heading text-2xl text-white mt-12 mb-4">HOA Considerations</h3>
              <p>
                Many premium Tampa Bay communities operate under homeowner associations with 
                architectural review committees. These bodies may impose requirements beyond 
                municipal codes—material restrictions, color palettes, setback modifications, 
                and design review processes. Early engagement with HOA requirements prevents 
                designs that cannot win approval.
              </p>
              <p>
                We've worked within dozens of HOA environments and understand how to navigate 
                these processes effectively. Our experience helps identify potential concerns 
                early and present designs that satisfy review committees while achieving 
                architectural goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SECTION 10: FAQ
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-24 bg-gray-950">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-gold font-mono text-sm">10</span>
              <div className="h-px flex-1 bg-brand-gold/30" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Common questions about building a luxury custom home in Tampa Bay
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FAQWithSchema 
              items={faqs} 
              title=""
              className="bg-transparent"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          SERVICE AREAS
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
              Serving Tampa Bay's Finest Neighborhoods
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We build luxury custom homes throughout the greater Tampa Bay region
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {LOCATIONS.map((location) => {
              const urlSlug = location.slug.replace('-fl', '');
              return (
                <Link
                  key={location.slug}
                  href={`/luxury-custom-homes-${urlSlug}/`}
                  className="bg-white/5 hover:bg-brand-gold/20 border border-white/10 hover:border-brand-gold/50 rounded-lg p-4 text-center transition-all duration-300 group"
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                    {location.name}, FL
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          FINAL CTA - "Begin Your Journey"
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-brand-gold via-brand-gold-dark to-brand-gold relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-black rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-black rounded-full" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Elegant Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-black/30" />
              <Sparkles className="w-6 h-6 text-black/70" />
              <div className="h-px w-16 bg-black/30" />
            </div>

            <h2 className="font-heading text-4xl md:text-5xl text-black mb-6">
              Begin Your Journey
            </h2>
            <p className="text-xl text-black/80 mb-10 leading-relaxed">
              The home you've imagined awaits. Let's discuss your vision, explore possibilities, 
              and take the first step toward creating a residence that reflects your life, 
              your values, and your aspirations for generations to come.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-black text-white font-bold rounded-none hover:bg-gray-900 transition-all duration-300 group"
              >
                Schedule Your Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-black text-black font-bold rounded-none hover:bg-black hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <p className="mt-8 text-black/60 text-sm">
              Projects starting at $1 million • Tampa Bay & surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════
          RELATED RESOURCES
      ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-950">
        <div className="container-custom">
          <h3 className="font-heading text-2xl text-white mb-8 text-center">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/residential/"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-6 transition-all group"
            >
              <Home className="w-8 h-8 text-brand-gold mb-4" />
              <h4 className="text-white font-semibold mb-2 group-hover:text-brand-gold transition-colors">
                Residential Services
              </h4>
              <p className="text-gray-400 text-sm">
                Explore our complete residential construction offerings
              </p>
            </Link>
            <Link
              href="/residential/waterfront-homes/"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-6 transition-all group"
            >
              <Waves className="w-8 h-8 text-brand-gold mb-4" />
              <h4 className="text-white font-semibold mb-2 group-hover:text-brand-gold transition-colors">
                Waterfront Homes
              </h4>
              <p className="text-gray-400 text-sm">
                Specialized coastal and waterfront construction
              </p>
            </Link>
            <Link
              href="/residential/fema-compliance/"
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-6 transition-all group"
            >
              <Shield className="w-8 h-8 text-brand-gold mb-4" />
              <h4 className="text-white font-semibold mb-2 group-hover:text-brand-gold transition-colors">
                FEMA Compliance
              </h4>
              <p className="text-gray-400 text-sm">
                Navigate flood zone regulations with confidence
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
