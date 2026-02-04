import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContentParallax } from "@/components/ContentImage";
import { HighLevelForm } from "@/components/HighLevelForm";

export const metadata: Metadata = {
  title: "Lifetime Custom Homes Tampa | Luxury Home Builder | FCS",
  description:
    "Tampa Bay's premier luxury custom home builder. Waterfront estates, historic renovations, and bespoke residences crafted for generations. Begin your journey with Florida Construction Specialists.",
  keywords:
    "luxury custom homes Tampa, waterfront home builder Tampa Bay, custom home design Florida, high-end residential construction, Davis Islands homes, South Tampa custom builder",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Residential", href: "/residential/" },
];

export default function ResidentialHubPage() {
  return (
    <>
      <LocalBusinessSchema schemaType="HomeAndConstructionBusiness" />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Luxury Background Gradient */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 0%, rgba(201, 169, 110, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 80%, rgba(201, 169, 110, 0.05) 0%, transparent 50%),
              #0c0c0c
            `
          }}
        />
      </div>

      <Breadcrumb items={breadcrumbItems} className="!bg-transparent !border-none [&_*]:!text-[#888888] [&_a:hover]:!text-[#c9a96e]" />

      {/* Hero Section - Reduced Height */}
      <section className="min-h-[75vh] relative flex items-center py-20">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/custom-home-2-rotated-1/custom-home-2-rotated-1-display.webp"
            alt="Luxury waterfront estate at sunset"
            fill
            className="object-cover"
            priority
          />
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, 
                rgba(12,12,12,1) 0%, 
                rgba(12,12,12,0.8) 30%,
                rgba(12,12,12,0.3) 60%,
                rgba(12,12,12,0.2) 100%
              )`
            }}
          />
        </div>

        <div className="container-custom relative z-10 w-full">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-8"
            style={{ color: '#c9a96e' }}
          >
            Custom Home Building
          </p>
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal mb-4 max-w-4xl leading-[1.1]"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Where <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Vision</em> Becomes Architecture
          </h1>
          <p 
            className="text-2xl md:text-3xl mb-8 max-w-2xl"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#c9a96e',
              fontWeight: 500,
              letterSpacing: '0.05em'
            }}
          >
            Lifetime Custom Homes
          </p>
          <p 
            className="text-lg mb-10 max-w-xl leading-relaxed"
            style={{ color: '#888888' }}
          >
            We don't simply build houses. We craft legacies—bespoke residences that reflect your lifestyle, 
            honor your aspirations, and embrace the unparalleled beauty of Florida's Gulf Coast.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-400 hover:-translate-y-0.5"
              style={{ 
                backgroundColor: '#c9a96e',
                color: '#0c0c0c'
              }}
            >
              Begin Your Journey
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300 border hover:border-[#c9a96e] hover:text-[#c9a96e]"
              style={{ 
                backgroundColor: 'transparent',
                color: '#f5f5f5',
                borderColor: 'rgba(255,255,255,0.2)'
              }}
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4">
          <span className="text-xs tracking-[0.1em]" style={{ color: '#888888' }}>Scroll</span>
          <div 
            className="w-px h-16"
            style={{ background: 'linear-gradient(to bottom, #c9a96e, transparent)' }}
          />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 
              className="text-4xl md:text-5xl mb-10 leading-[1.2]"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5',
                letterSpacing: '0.02em',
                fontWeight: 500
              }}
            >
              The Art of Building Homes That Last Generations
            </h2>
            <div className="space-y-6" style={{ color: '#888888', lineHeight: 1.9 }}>
              <p className="first-letter:float-left first-letter:text-6xl first-letter:font-normal first-letter:mr-3 first-letter:mt-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                <span className="first-letter:text-[#c9a96e]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  <span style={{ color: '#c9a96e', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '4rem', float: 'left', lineHeight: 1, marginRight: '0.5rem' }}>E</span>
                  very extraordinary residence begins with a conversation—an exploration of dreams, preferences, and the unique way you envision living. At Florida Construction Specialists, we approach custom home building as a deeply personal collaboration, understanding that your home should be as distinctive as the life you'll live within its walls.
                </span>
              </p>
              <p>
                For over {BUSINESS_INFO.yearsInBusiness} years, we have had the privilege of transforming Tampa Bay's most coveted lots into architectural masterpieces. From the sun-drenched shores of Davis Islands to the oak-canopied streets of Hyde Park, our portfolio reflects a singular commitment: building homes of such enduring quality and thoughtful design that they become treasured family legacies, passed down through generations.
              </p>
              <p>
                We understand that choosing to build a custom home represents one of life's most significant decisions. It requires a builder who listens intently, communicates transparently, and executes with unwavering precision. Our clients don't simply receive a home—they gain a partner dedicated to realizing their vision while navigating the complexities of coastal construction, historic preservation requirements, and Florida's unique regulatory landscape.
              </p>
              <p>
                The homes we build are designed to withstand everything Florida's climate delivers—from summer storms to the test of decades—while creating interiors that inspire and outdoor spaces that celebrate our remarkable Gulf Coast setting. This is the Florida Construction Specialists difference: homes built not just for today, but for a lifetime.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/tampa-luxury-custom-home-construction/tampa-luxury-custom-home-construction-display.webp"
              alt="Elegant custom home interior with luxury finishes"
              width={600}
              height={800}
              className="w-full object-cover"
              style={{ aspectRatio: '3/4' }}
            />
            <div 
              className="absolute -top-8 -right-8 w-48 h-48 border opacity-30 hidden lg:block"
              style={{ borderColor: '#c9a96e' }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-8" style={{ backgroundColor: '#161616' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl mb-6"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5',
                letterSpacing: '0.02em',
                fontWeight: 500
              }}
            >
              Our Expertise
            </h2>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: '#888888' }}>
              From architectural conception to the moment you turn your key, we guide you through 
              every phase of creating a home that exceeds your highest expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Custom Design & Architecture",
                description: "Your vision deserves more than a floor plan—it deserves a collaborative journey with Tampa Bay's finest architects and designers. We facilitate a seamless design process where every preference is honored, every detail considered, and every possibility explored. From contemporary waterfront estates to classic Mediterranean revivals, our homes reflect the full spectrum of architectural excellence. We work closely with your chosen architect or can recommend partners whose aesthetic sensibilities align perfectly with your vision. The result is always the same: a home that feels inevitable, as though it could have been designed no other way."
              },
              {
                number: "02",
                title: "Waterfront Estates",
                description: "Tampa Bay's waterfront lots present extraordinary opportunities—and equally extraordinary challenges. Our specialized expertise in coastal construction ensures your waterfront dream becomes reality without compromise. We navigate complex permitting requirements, coordinate seawall construction and repair, and specify marine-grade materials that withstand salt air, humidity, and coastal weather. From dock permitting to elevation requirements, from flood zone compliance to hurricane-resistant design, we bring decades of waterfront building experience to every bayfront, riverfront, and Gulf-facing property. Your views are precious; our construction protects them for generations."
              },
              {
                number: "03",
                title: "Hurricane-Resilient Construction",
                description: "In Florida, building for beauty alone is not enough. Every home we construct is engineered for resilience—exceeding Florida Building Code requirements and incorporating the latest advances in storm-resistant construction. Impact-rated windows and doors, fortified roof systems, reinforced concrete block construction, and strategic design elements work together to protect your family and your investment. We believe safety and sophistication should never compete; our homes prove they can coexist beautifully. When storms approach, you'll have confidence knowing your home was built by craftsmen who understand what Florida weather demands."
              },
              {
                number: "04",
                title: "Historic Preservation & Renovation",
                description: "Tampa Bay's historic neighborhoods—Hyde Park, Seminole Heights, Historic Ybor—contain architectural treasures deserving of thoughtful stewardship. Our historic preservation team brings sensitivity and expertise to renovations requiring Architectural Review Commission approval and compliance with Secretary of Interior standards. We understand the delicate balance between preserving character-defining features and integrating modern systems invisibly. Whether restoring original millwork, replicating historic windows, or concealing contemporary HVAC within period-appropriate spaces, we honor the past while preparing your historic home for another century of gracious living."
              },
              {
                number: "05",
                title: "Smart Home Integration",
                description: "Today's luxury home seamlessly blends technology with living spaces. Our smart home integration creates residences that respond intuitively to your lifestyle—climate systems that anticipate comfort, lighting that adjusts to activities and time of day, security that provides peace of mind, and entertainment systems that deliver immersive experiences in every room. We work with leading technology partners to design systems that are powerful yet invisible, sophisticated yet simple to operate. The best technology disappears into the architecture; that's our standard for every automated home we build."
              },
              {
                number: "06",
                title: "Outdoor Living Spaces",
                description: "Florida living extends far beyond interior walls, and our outdoor living designs celebrate this remarkable truth. Custom pools with spa features, summer kitchens equipped for serious entertaining, covered lanais that blur the boundary between inside and out, fire features for cool evenings, and lush landscaping that provides privacy and beauty—these elements transform your property into a private resort. We design outdoor spaces for year-round enjoyment, incorporating shade strategies, cooling systems, and weather-resistant materials that ensure comfort regardless of season. Your backyard should be your favorite destination."
              }
            ].map((service) => (
              <div 
                key={service.number}
                className="p-10 border transition-all duration-500 relative overflow-hidden group"
                style={{ 
                  borderColor: 'rgba(255,255,255,0.05)',
                  backgroundColor: 'transparent'
                }}
              >
                {/* Gold accent line on hover */}
                <div 
                  className="absolute top-0 left-0 w-full h-px transition-transform duration-500 scale-x-0 group-hover:scale-x-100"
                  style={{ background: 'linear-gradient(to right, transparent, #c9a96e, transparent)' }}
                />
                <div 
                  className="text-6xl mb-6 leading-none"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: 'rgba(201, 169, 110, 0.2)'
                  }}
                >
                  {service.number}
                </div>
                <h3 
                  className="text-xl mb-4"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: '#f5f5f5',
                    letterSpacing: '0.02em',
                    fontWeight: 500
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ color: '#888888', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break - Luxury Home */}
      <ContentParallax
        src="/images/tampa-luxury-custom-home-construction/tampa-luxury-custom-home-construction-small.webp"
        alt="Luxury custom home construction in Tampa Bay"
        title="Crafted for Generations"
        subtitle="Where vision meets timeless craftsmanship"
        overlayOpacity={0.5}
      />

      {/* Process Timeline Section */}
      <section className="py-32 px-8" style={{ backgroundColor: '#161616' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5',
                letterSpacing: '0.02em',
                fontWeight: 500
              }}
            >
              Your Journey Home
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div 
              className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(to bottom, #c9a96e, rgba(201,169,110,0.1))' }}
            />

            {[
              {
                title: "Discovery",
                content: "Every exceptional home begins with understanding. In our initial consultations, we explore your vision, lifestyle requirements, and aspirations. We study your property—its orientation, views, topography, and unique characteristics—identifying opportunities that will inform inspired design. This phase establishes the foundation for everything that follows: a clear understanding of what your home must be and what it can become. We discuss timelines, investment parameters, and the many decisions ahead, ensuring you enter this journey with complete clarity."
              },
              {
                title: "Design Development",
                content: "Working in close collaboration with architects and designers, we transform concepts into detailed construction documents. Every material, finish, and system is carefully specified. We guide you through selections that align with your aesthetic preferences and performance requirements—from exterior cladding and roofing to interior finishes, fixtures, and appliances. Our pre-construction planning eliminates surprises, establishing accurate budgets and realistic schedules before ground is broken. This meticulous preparation is the foundation of on-time, on-budget project delivery."
              },
              {
                title: "Construction",
                content: "With plans finalized and permits secured, our craftsmen begin transforming drawings into reality. Our construction methodology emphasizes quality at every stage—from foundation work and structural framing to mechanical systems and finish carpentry. Weekly progress reports and regular site visits keep you connected to your home's evolution. Our project managers coordinate the complex choreography of subcontractors and suppliers, ensuring each trade performs their work in proper sequence and to our exacting standards. Problems are anticipated and solved before they impact your timeline."
              },
              {
                title: "Finishing",
                content: "As construction nears completion, the character of your home emerges. Interior finishes—cabinetry, countertops, flooring, paint—transform spaces into rooms. Landscaping, hardscaping, and pool installation create your outdoor sanctuary. Smart home systems are programmed and tested. Every element is inspected against our quality standards and your expectations. We conduct thorough punch list processes, addressing every detail until your home achieves the perfection you deserve. Nothing is overlooked; nothing is left unfinished."
              },
              {
                title: "Welcome Home",
                content: "The culmination of your journey is a comprehensive orientation where we walk through every room, explain every system, and ensure complete satisfaction. We provide detailed documentation—warranties, manuals, maintenance schedules—and introduce you to the support team that will serve you in the years ahead. Our relationship doesn't end at closing; we remain your resource for warranty service, future modifications, and the ongoing care your home deserves. Welcome to a residence built for a lifetime of memories."
              }
            ].map((step, index) => (
              <div 
                key={step.title}
                className="grid md:grid-cols-[1fr_60px_1fr] gap-8 mb-16 last:mb-0"
              >
                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-3'}`}>
                  <h4 
                    className="text-xl mb-3"
                    style={{ 
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: '#f5f5f5',
                      fontWeight: 500
                    }}
                  >
                    {step.title}
                  </h4>
                  <p style={{ color: '#888888', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                    {step.content}
                  </p>
                </div>
                <div className={`hidden md:flex justify-center ${index % 2 === 0 ? 'md:col-start-2 md:row-start-1' : 'md:col-start-2'}`}>
                  <div className="relative">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: '#c9a96e' }}
                    />
                    <div 
                      className="absolute -inset-1 rounded-full border opacity-30"
                      style={{ borderColor: '#c9a96e' }}
                    />
                  </div>
                </div>
                {index % 2 !== 0 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break - Waterfront */}
      <ContentParallax
        src="/images/tampa-waterfront-home-construction/tampa-waterfront-home-construction-small.webp"
        alt="Waterfront custom home construction Tampa Bay"
        title="Waterfront Living Reimagined"
        subtitle="Breathtaking homes designed for Florida's coastal lifestyle"
        overlayOpacity={0.45}
      />

      {/* Testimonial Section */}
      <section className="py-32 px-8 text-center" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-4xl mx-auto">
          <p 
            className="text-3xl md:text-4xl mb-12 leading-relaxed"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              fontStyle: 'italic',
              fontWeight: 400
            }}
          >
            "They didn't just build our home—they understood our family's way of living and created 
            spaces that enhance every moment. From the morning light in our kitchen to the evening 
            views from our lanai, every detail reflects thoughtfulness we didn't know to ask for. 
            The attention to quality is extraordinary, but it's the personal care throughout the 
            process that truly set them apart."
          </p>
          <div className="flex items-center justify-center gap-6">
            <div 
              className="w-16 h-16 rounded-full"
              style={{ background: 'linear-gradient(135deg, #c9a96e, #d4b87a)' }}
            />
            <div className="text-left">
              <p className="font-medium mb-1" style={{ color: '#f5f5f5' }}>The Richardson Family</p>
              <p className="text-sm" style={{ color: '#888888' }}>Harbour Island Waterfront Estate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section id="portfolio" className="py-32 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <h2 
              className="text-4xl md:text-5xl"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5',
                letterSpacing: '0.02em',
                fontWeight: 500
              }}
            >
              Selected Works
            </h2>
            <Link
              href="/gallery/"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-[0.1em] uppercase transition-all duration-300 border hover:border-[#c9a96e] hover:text-[#c9a96e]"
              style={{ 
                color: '#f5f5f5',
                borderColor: 'rgba(255,255,255,0.2)'
              }}
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 relative group overflow-hidden cursor-pointer">
              <Image
                src="/images/custom-home-2-rotated-1/custom-home-2-rotated-1-display.webp"
                alt="Harbour Island Estate"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(to top, rgba(12,12,12,0.9) 0%, transparent 50%)' }}
              >
                <h4 className="text-xl mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#f5f5f5' }}>
                  Harbour Island Estate
                </h4>
                <p style={{ color: '#888888', fontSize: '0.875rem' }}>12,000 sq ft • Waterfront</p>
              </div>
            </div>
            <div className="relative group overflow-hidden cursor-pointer aspect-square">
              <Image
                src="/images/custom-home-1/custom-home-1-display.webp"
                alt="Davis Islands Modern"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(to top, rgba(12,12,12,0.9) 0%, transparent 50%)' }}
              >
                <h4 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#f5f5f5' }}>
                  Davis Islands Modern
                </h4>
                <p style={{ color: '#888888', fontSize: '0.75rem' }}>8,500 sq ft • Contemporary</p>
              </div>
            </div>
            <div className="relative group overflow-hidden cursor-pointer aspect-square">
              <Image
                src="/images/custom-home-2/custom-home-2-display.webp"
                alt="Beach Park Residence"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(to top, rgba(12,12,12,0.9) 0%, transparent 50%)' }}
              >
                <h4 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#f5f5f5' }}>
                  Beach Park Residence
                </h4>
                <p style={{ color: '#888888', fontSize: '0.75rem' }}>6,200 sq ft • Coastal</p>
              </div>
            </div>
            <div className="relative group overflow-hidden cursor-pointer aspect-square">
              <Image
                src="/images/custom-home-construction-1/custom-home-construction-1-display.webp"
                alt="Sunset Park Villa"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(to top, rgba(12,12,12,0.9) 0%, transparent 50%)' }}
              >
                <h4 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#f5f5f5' }}>
                  Sunset Park Villa
                </h4>
                <p style={{ color: '#888888', fontSize: '0.75rem' }}>9,800 sq ft • Mediterranean</p>
              </div>
            </div>
            <div className="relative group overflow-hidden cursor-pointer aspect-square">
              <Image
                src="/images/custom-home-construction-2/custom-home-construction-2-display.webp"
                alt="Bayshore Boulevard"
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'linear-gradient(to top, rgba(12,12,12,0.9) 0%, transparent 50%)' }}
              >
                <h4 className="text-lg mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#f5f5f5' }}>
                  Bayshore Boulevard
                </h4>
                <p style={{ color: '#888888', fontSize: '0.75rem' }}>7,400 sq ft • Renovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Elegant List */}
      <section className="py-32 px-8" style={{ backgroundColor: '#161616' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 
              className="text-4xl md:text-5xl mb-10 leading-[1.2]"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5',
                letterSpacing: '0.02em',
                fontWeight: 500
              }}
            >
              The Florida Construction Specialists Difference
            </h2>
            <p style={{ color: '#888888', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              What distinguishes an exceptional custom home builder from the many competent contractors 
              in Tampa Bay? We believe it comes down to three elements: unwavering commitment to 
              craftsmanship, deep understanding of our unique Florida context, and genuine care for 
              the families who entrust us with their dreams.
            </p>
            <p style={{ color: '#888888', lineHeight: 1.9 }}>
              Our team includes specialists in every discipline—structural engineering, coastal 
              construction, historic preservation, interior finishing, and landscape design. This 
              depth of expertise means we approach each project with solutions rather than excuses, 
              possibilities rather than limitations. When challenges arise—and in custom home building, 
              they inevitably do—our experience transforms problems into opportunities for creative 
              problem-solving.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                title: "Regulatory Mastery",
                description: "From FEMA flood zone compliance to historic district requirements, we navigate Tampa Bay's complex regulatory landscape so you don't have to. Our relationships with permitting authorities and deep understanding of local codes accelerate approvals and prevent costly delays."
              },
              {
                title: "Transparent Communication",
                description: "Weekly detailed reports, responsive project managers, and a commitment to honest conversation define our client relationships. You'll never wonder about progress, costs, or timeline. We believe informed clients make the best decisions."
              },
              {
                title: "Artisan Network",
                description: "Our relationships with the region's finest craftsmen—tile setters, finish carpenters, stonemasons, landscape designers—ensure every element of your home reflects exceptional skill. We work with artisans who share our standards."
              },
              {
                title: "Lifetime Commitment",
                description: "The relationship doesn't end at closing. Our warranty program, maintenance guidance, and ongoing support ensure your home remains everything it should be for decades to come. We build homes meant to last; we build relationships the same way."
              }
            ].map((item) => (
              <div key={item.title} className="border-l-2 pl-6" style={{ borderColor: '#c9a96e' }}>
                <h4 
                  className="text-lg mb-2"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: '#f5f5f5',
                    fontWeight: 500
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ color: '#888888', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section with Form */}
      <section className="py-32 px-8 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/custom-home-construction-3/custom-home-construction-3-display.webp"
            alt="Luxury home at dusk"
            fill
            className="object-cover opacity-30"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(12,12,12,0.95), rgba(12,12,12,0.7))' }}
          />
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.2]"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5',
                letterSpacing: '0.02em',
                fontWeight: 500
              }}
            >
              Begin Your Story
            </h2>
            <p className="mb-10 leading-relaxed text-lg" style={{ color: '#888888' }}>
              Every great home starts with a conversation—an exchange of ideas, aspirations, and 
              possibilities. We invite you to share your vision with us and explore what your 
              lifetime home could become. There's no obligation, only the opportunity to discover 
              whether Florida Construction Specialists is the right partner for your journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300 border hover:border-[#c9a96e] hover:text-[#c9a96e]"
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#f5f5f5',
                  borderColor: 'rgba(255,255,255,0.2)'
                }}
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <HighLevelForm variant="residential" />
          </div>
        </div>
      </section>

      {/* Service Links - Minimal */}
      <section className="py-16 px-8 border-t" style={{ backgroundColor: '#0c0c0c', borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { name: "Custom Homes", href: "/luxury-custom-homes/" },
              { name: "Waterfront", href: "/residential/waterfront-homes/" },
              { name: "Historic", href: "/residential/historic-preservation/" },
              { name: "FEMA Compliance", href: "/residential/fema-compliance/" },
              { name: "Contact", href: "/contact/" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm tracking-[0.1em] uppercase transition-colors duration-300 hover:text-[#c9a96e]"
                style={{ color: '#888888' }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
