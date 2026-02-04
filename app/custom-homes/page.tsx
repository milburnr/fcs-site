import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Home, Waves, Shield, Hammer, Sparkles, TreePine } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContentParallax } from "@/components/ContentImage";
import { HighLevelForm } from "@/components/HighLevelForm";

export const metadata: Metadata = {
  title: "Custom Home Builder Tampa Bay | Waterfront | FCS",
  description:
    "Tampa Bay's trusted custom home builder for 28+ years. Waterfront estates, luxury homes, and bespoke residences designed for Florida living. Get your free consultation with Florida Construction Specialists.",
  keywords:
    "custom home builder Tampa, luxury homes Tampa Bay, waterfront home construction, custom house builder Florida, new home construction Tampa, high-end residential builder",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Custom Homes", href: "/custom-homes/" },
];

const faqs = [
  {
    question: "How long does it take to build a custom home in Tampa Bay?",
    answer: "Custom home construction timelines vary based on size and complexity. A typical luxury home takes 12-18 months from groundbreaking to completion. Waterfront properties with seawall work or extensive permitting may require 18-24 months. We provide detailed timelines during the planning phase and keep you informed throughout construction."
  },
  {
    question: "What is the cost per square foot for custom homes in Tampa?",
    answer: "Custom home costs in Tampa Bay range from $350-$800+ per square foot depending on finishes, complexity, and location. Waterfront properties and luxury specifications typically fall in the $500-$800+ range. We provide detailed budgets during design development so there are no surprises."
  },
  {
    question: "Do you build hurricane-resistant homes?",
    answer: "Absolutely. Every home we build exceeds Florida Building Code requirements for wind resistance. We use impact-rated windows and doors, reinforced concrete block construction, fortified roof systems, and strategic design elements that protect your family and investment from Florida's storm season."
  },
  {
    question: "Can you help with lot selection and site evaluation?",
    answer: "Yes, we offer pre-construction consulting that includes site evaluation for buildability, soil conditions, flood zone analysis, and permitting feasibility. Our expertise in Tampa Bay's unique conditions helps you avoid costly surprises and identify lots with the best potential for your vision."
  },
  {
    question: "What warranty do you provide on new custom homes?",
    answer: "We provide a comprehensive warranty program including 1-year workmanship warranty, 2-year mechanical systems warranty, and 10-year structural warranty. Additionally, many components carry manufacturer warranties that extend protection further. Our post-construction support team remains available for years after completion."
  },
  {
    question: "Do you work with outside architects or only your own designers?",
    answer: "We work both ways. Many clients bring their own architects, and we collaborate seamlessly to bring their vision to life. We also have established relationships with Tampa Bay's finest architects and can recommend partners whose style aligns with your vision. Either approach delivers exceptional results."
  }
];

export default function CustomHomesPage() {
  return (
    <>
      <LocalBusinessSchema schemaType="HomeAndConstructionBusiness" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />

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

      {/* Hero Section */}
      <section className="min-h-[75vh] relative flex items-center py-20">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/custom-home-1/custom-home-1-display.webp"
            alt="Luxury custom home construction in Tampa Bay"
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
            Custom Home Construction
          </p>
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-normal mb-4 max-w-4xl leading-[1.1]"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Build Your <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Dream</em> Home in Tampa Bay
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
            {BUSINESS_INFO.yearsInBusiness}+ Years of Excellence
          </p>
          <p 
            className="text-lg mb-10 max-w-xl leading-relaxed"
            style={{ color: '#888888' }}
          >
            From waterfront estates on Davis Islands to contemporary masterpieces in South Tampa, 
            we transform your vision into a home built to last generations. Florida Construction Specialists 
            brings unmatched expertise to every custom home project.
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
              Free Consultation
            </Link>
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
              {BUSINESS_INFO.phone}
            </a>
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
              Tampa Bay&apos;s Premier Custom Home Builder
            </h2>
            <div className="space-y-6" style={{ color: '#888888', lineHeight: 1.9 }}>
              <p>
                <span style={{ color: '#c9a96e', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '4rem', float: 'left', lineHeight: 1, marginRight: '0.5rem' }}>Y</span>
                our custom home should be as unique as your family. At Florida Construction Specialists, we don&apos;t build cookie-cutter houses—we create bespoke residences that reflect your lifestyle, anticipate your needs, and embrace the extraordinary beauty of Florida&apos;s Gulf Coast. Every home we build is a one-of-a-kind masterpiece designed for the way you actually live.
              </p>
              <p>
                For over {BUSINESS_INFO.yearsInBusiness} years, we&apos;ve had the privilege of building custom homes throughout Tampa, St. Petersburg, Clearwater, Sarasota, and Lakeland. Our portfolio spans the full spectrum of residential architecture—from sleek contemporary designs to timeless Mediterranean estates, from intimate family homes to expansive waterfront compounds. What unites every project is our unwavering commitment to quality craftsmanship and client satisfaction.
              </p>
              <p>
                Building a custom home represents one of life&apos;s most significant investments. It demands a builder who listens carefully, communicates transparently, and executes with precision. Our clients don&apos;t simply receive a house—they gain a dedicated partner who navigates the complexities of Florida construction, permitting requirements, and coastal building codes while keeping their dream firmly in focus.
              </p>
              <p>
                The homes we build are engineered for Florida&apos;s unique climate—designed to withstand hurricane-force winds, resist humidity and salt air, and maintain comfort through scorching summers. But resilience never comes at the expense of beauty. Our homes are crafted to inspire, with thoughtful details and premium finishes that elevate daily living into something extraordinary.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/tampa-luxury-custom-home-construction/tampa-luxury-custom-home-construction-display.webp"
              alt="Custom home construction in progress"
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

      {/* Custom Home Types */}
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
              Types of Custom Homes We Build
            </h2>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: '#888888' }}>
              From intimate family residences to sprawling waterfront estates, our expertise spans 
              every style and scale of custom home construction in Tampa Bay.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Waves,
                title: "Waterfront Estates",
                description: "Tampa Bay's waterfront properties present extraordinary opportunities—and unique challenges. Our expertise in seawall construction, dock permitting, flood zone compliance, and marine-grade materials ensures your waterfront dream becomes reality. We've built stunning homes on Davis Islands, Harbour Island, Bayshore Boulevard, and throughout the Gulf Coast. Every waterfront home we create maximizes views while meeting stringent coastal construction requirements."
              },
              {
                icon: Home,
                title: "Luxury Single-Family Homes",
                description: "Whether contemporary or traditional, our luxury single-family homes feature the finest materials, expert craftsmanship, and thoughtful design that anticipates how families actually live. From gourmet kitchens designed for serious cooks to home offices perfect for remote work, from spa-inspired master suites to dedicated entertainment spaces—every room serves your lifestyle beautifully."
              },
              {
                icon: TreePine,
                title: "Estate Homes & Compounds",
                description: "For families requiring expansive living space, we create estate homes and multi-structure compounds that provide room to spread out while maintaining cohesive architectural vision. Guest houses, pool cabanas, detached garages with living quarters, and dedicated entertainment pavilions—all designed as integrated elements of your private retreat."
              },
              {
                icon: Shield,
                title: "Hurricane-Resistant Construction",
                description: "Every home we build exceeds Florida Building Code requirements for wind resistance. Impact-rated windows and doors, reinforced concrete block construction, fortified roof-to-wall connections, and engineered structural systems protect your family and your investment. Safety and sophistication coexist beautifully in every FCS home."
              },
              {
                icon: Sparkles,
                title: "Smart Homes & Modern Design",
                description: "Today's luxury homes integrate technology seamlessly into living spaces. Climate systems that anticipate comfort, lighting that responds to activities and time of day, security that provides peace of mind, and entertainment systems delivering immersive experiences throughout. We design systems that are powerful yet invisible, sophisticated yet intuitive."
              },
              {
                icon: Hammer,
                title: "Historic Area New Construction",
                description: "Building new in Tampa Bay's historic neighborhoods—Hyde Park, Seminole Heights, Palma Ceia—requires sensitivity to architectural context and compliance with local design standards. We create contemporary homes that honor neighborhood character while incorporating modern systems and layouts that meet today's lifestyle expectations."
              }
            ].map((type) => (
              <div 
                key={type.title}
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
                <type.icon className="w-10 h-10 mb-6" style={{ color: '#c9a96e' }} />
                <h3 
                  className="text-xl mb-4"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: '#f5f5f5',
                    letterSpacing: '0.02em',
                    fontWeight: 500
                  }}
                >
                  {type.title}
                </h3>
                <p style={{ color: '#888888', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break - Waterfront Home */}
      <ContentParallax
        src="/images/tampa-waterfront-home-construction/tampa-waterfront-home-construction-small.webp"
        alt="Waterfront custom home construction Tampa Bay"
        title="Waterfront Living"
        subtitle="Where your backyard meets Tampa Bay's pristine waters"
        overlayOpacity={0.5}
      />

      {/* Our Process */}
      <section className="py-32 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-4xl mx-auto">
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
              The Custom Home Building Process
            </h2>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: '#888888' }}>
              From your first conversation to the moment you receive your keys, we guide you through 
              a proven process designed for transparency, efficiency, and exceptional results.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div 
              className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(to bottom, #c9a96e, rgba(201,169,110,0.1))' }}
            />

            {[
              {
                phase: "01",
                title: "Discovery & Planning",
                content: "Every custom home begins with understanding your vision. In our initial consultations, we explore how you live, what you need, and what inspires you. We review your property—its orientation, views, topography, and constraints—identifying opportunities that will inform inspired design. We discuss realistic budgets, timelines, and the decisions ahead, ensuring you begin this journey with complete clarity and confidence."
              },
              {
                phase: "02",
                title: "Design & Pre-Construction",
                content: "Working with your architect or one of our trusted design partners, we transform concepts into detailed construction documents. Every material, finish, and system is carefully specified. We guide you through selections—from structural systems and exterior finishes to interior appointments and smart home technology. Our detailed estimating process establishes accurate budgets before construction begins, eliminating surprises and establishing realistic expectations."
              },
              {
                phase: "03",
                title: "Permitting & Site Preparation",
                content: "Our team navigates Tampa Bay's permitting requirements efficiently, leveraging established relationships and deep regulatory knowledge to secure approvals without unnecessary delays. Site preparation includes soil testing, utility connections, surveying, and establishing construction access. We coordinate every element so groundbreaking occurs on schedule."
              },
              {
                phase: "04",
                title: "Construction",
                content: "With permits in hand, our craftsmen begin building your home. Our construction methodology emphasizes quality at every stage—from foundation work and structural framing to mechanical systems and finish carpentry. Weekly progress reports and site meetings keep you connected to your home's evolution. Our project managers coordinate subcontractors and suppliers, ensuring work proceeds in proper sequence to our exacting standards."
              },
              {
                phase: "05",
                title: "Finishing & Final Details",
                content: "As construction nears completion, your home's character emerges. Interior finishes—cabinetry, countertops, flooring, paint—transform spaces into rooms. Landscaping, hardscaping, and pools create your outdoor living environment. Smart home systems are programmed and tested. Every element is inspected against our quality standards until your home achieves the perfection you deserve."
              },
              {
                phase: "06",
                title: "Welcome Home",
                content: "The culmination of your journey is a comprehensive orientation where we walk through every room, demonstrate every system, and address every question. We provide detailed documentation—warranties, manuals, maintenance schedules—and introduce our support team. Our relationship doesn't end at closing; we remain your resource for warranty service, maintenance guidance, and future projects."
              }
            ].map((step, index) => (
              <div 
                key={step.phase}
                className="grid md:grid-cols-[1fr_60px_1fr] gap-8 mb-16 last:mb-0"
              >
                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-3'}`}>
                  <div 
                    className="text-5xl mb-3"
                    style={{ 
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      color: 'rgba(201, 169, 110, 0.3)'
                    }}
                  >
                    {step.phase}
                  </div>
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

      {/* Why Choose FCS */}
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
              Why Choose Florida Construction Specialists?
            </h2>
            <p style={{ color: '#888888', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Tampa Bay has many capable builders. What distinguishes Florida Construction Specialists 
              is our combination of deep local expertise, unwavering quality standards, and genuine 
              commitment to client satisfaction that has earned us an exceptional reputation over 
              {BUSINESS_INFO.yearsInBusiness}+ years.
            </p>
            <p style={{ color: '#888888', lineHeight: 1.9 }}>
              We understand Tampa Bay's unique challenges—from hurricane codes and flood zones to 
              soil conditions and historic district requirements. Our team includes specialists in 
              every discipline required for exceptional custom home construction. When challenges 
              arise, our experience transforms problems into opportunities for creative solutions.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                title: "28+ Years of Local Expertise",
                description: "Deep knowledge of Tampa Bay's permitting processes, building codes, and unique construction challenges. We've built relationships with inspectors and officials that help projects proceed smoothly."
              },
              {
                title: "Transparent Communication",
                description: "Weekly progress reports, responsive project managers, and open access to information. You'll always know exactly where your project stands—budget, timeline, and progress."
              },
              {
                title: "Quality Craftsmanship",
                description: "Our network of skilled tradespeople—many of whom have worked with us for decades—deliver the exceptional quality that defines every FCS home. We never compromise on materials or workmanship."
              },
              {
                title: "Licensed, Bonded & Insured",
                description: "Florida Certified General Contractor (CGC) with comprehensive insurance coverage. Our credentials and financial stability provide peace of mind throughout your project."
              },
              {
                title: "Warranty Protection",
                description: "Comprehensive warranty program including structural, mechanical, and workmanship coverage. Our post-construction team remains available for years after you move in."
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

      {/* Visual Break - Custom Home */}
      <ContentParallax
        src="/images/custom-home-construction-1/custom-home-construction-1-small.webp"
        alt="Custom home construction Tampa"
        title="Built for Generations"
        subtitle="Homes that become treasured family legacies"
        overlayOpacity={0.45}
      />

      {/* Service Areas */}
      <section className="py-32 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl mb-6"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em',
              fontWeight: 500
            }}
          >
            Custom Home Building Throughout Tampa Bay
          </h2>
          <p className="max-w-3xl mx-auto mb-16 leading-relaxed" style={{ color: '#888888' }}>
            We build custom homes throughout the greater Tampa Bay region, bringing our expertise to 
            the area's most desirable neighborhoods and communities.
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { area: "Tampa", neighborhoods: "Davis Islands, Hyde Park, South Tampa, Palma Ceia, Bayshore" },
              { area: "St. Petersburg", neighborhoods: "Snell Isle, Old Northeast, Tierra Verde, Shore Acres" },
              { area: "Clearwater", neighborhoods: "Clearwater Beach, Belleair, Countryside" },
              { area: "Sarasota", neighborhoods: "Siesta Key, Longboat Key, Downtown, Bird Key" },
              { area: "Lakeland", neighborhoods: "Lake Hollingsworth, Lake Morton, South Lakeland" }
            ].map((location) => (
              <div key={location.area} className="text-center">
                <h3 
                  className="text-2xl mb-3"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: '#c9a96e',
                    fontWeight: 500
                  }}
                >
                  {location.area}
                </h3>
                <p style={{ color: '#888888', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  {location.neighborhoods}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8" style={{ backgroundColor: '#161616' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl mb-6"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5',
                letterSpacing: '0.02em',
                fontWeight: 500
              }}
            >
              Frequently Asked Questions
            </h2>
            <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: '#888888' }}>
              Building a custom home raises many questions. Here are answers to the most common ones. 
              For anything else, we're always happy to talk.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b pb-8"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <h3 
                  className="text-xl mb-4"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: '#f5f5f5',
                    fontWeight: 500
                  }}
                >
                  {faq.question}
                </h3>
                <p style={{ color: '#888888', lineHeight: 1.8 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
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
            "Building our custom home was an incredible journey, and Florida Construction Specialists 
            made it seamless. From the first meeting through move-in day, their communication was 
            excellent and their craftsmanship exceptional. Our home is everything we dreamed of—and more. 
            We couldn't be happier with our decision to work with FCS."
          </p>
          <div className="flex items-center justify-center gap-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #c9a96e, #d4b87a)' }}
            >
              <span style={{ color: '#0c0c0c', fontWeight: 'bold', fontSize: '1.25rem' }}>M</span>
            </div>
            <div className="text-left">
              <p className="font-medium mb-1" style={{ color: '#f5f5f5' }}>The Martinez Family</p>
              <p className="text-sm" style={{ color: '#888888' }}>South Tampa Custom Home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Form */}
      <section className="py-32 px-8 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/custom-home-2/custom-home-2-display.webp"
            alt="Custom home at sunset"
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
              Start Building Your Dream
            </h2>
            <p className="mb-10 leading-relaxed text-lg" style={{ color: '#888888' }}>
              Every extraordinary home begins with a conversation. Tell us about your vision—the lot 
              you've found, the lifestyle you imagine, the home you've always wanted. There's no 
              obligation, just the opportunity to explore what's possible with Tampa Bay's most 
              trusted custom home builder.
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

      {/* Related Links */}
      <section className="py-16 px-8 border-t" style={{ backgroundColor: '#0c0c0c', borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { name: "Residential Services", href: "/residential/" },
              { name: "Waterfront Homes", href: "/residential/waterfront-homes/" },
              { name: "Hurricane Construction", href: "/residential/hurricane-resistant-construction/" },
              { name: "Home Additions", href: "/services/residential/home-additions/" },
              { name: "Contact Us", href: "/contact/" },
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
