"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Shield, Award, CheckCircle, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/Schema";
import { PathwayCard } from "@/components/PathwayCard";
import { Testimonials, FCS_TESTIMONIALS, TestimonialSchema } from "@/components/Testimonials";
import { ParallaxSection, ParallaxCardsContainer, ParallaxCard } from "@/components/ParallaxSection";
import { PARALLAX_IMAGES } from "@/lib/imageMapping";
import { HighLevelForm } from "@/components/HighLevelForm";

// Hero slideshow images
const heroImages = [
  "/wp-content/uploads/2023/12/Downtown-Tampa-Over-The-Bay-At-Sunrise-1024x682-1.jpg",
  "/wp-content/uploads/2023/12/custom-home-construction-2.jpg",
  "/wp-content/uploads/2023/12/Custom-home-2.jpg",
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Ken Burns slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <LocalBusinessSchema />
      <OrganizationSchema />

      {/* Trust Bar - Shared Credentials */}
      <section className="bg-brand-green-dark py-3">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-brand-gold" />
              <span>Licensed: {BUSINESS_INFO.licenseNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-brand-gold" />
              <span>Bonding: {BUSINESS_INFO.bondingCapacity}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-brand-gold" />
              <span>{BUSINESS_INFO.yearsInBusiness} Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-brand-gold" />
              <span>{BUSINESS_INFO.projectsCompleted} Projects Completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section with Ken Burns Slideshow */}
      <section className="relative h-[60vh] overflow-hidden">
        {/* Slideshow backgrounds with Ken Burns effect */}
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center animate-ken-burns"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}

        {/* Content overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="container-custom relative z-10 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading max-w-4xl">
            Tampa Bay&apos;s Premier Large-Scale Construction Specialists
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2 max-w-3xl">
            From $500K commercial projects to $50M+ developments
          </p>
          <p className="text-lg text-brand-gold font-semibold">
            Choose Your Pathway Below
          </p>
        </div>
      </section>

      {/* Split-Funnel Gateway Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4">
              Two Pathways, One Standard of Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your project type to explore services tailored to your specific needs
            </p>
          </div>

          {/* Dual Gateway Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PathwayCard
              type="commercial"
              title="Commercial Pathway"
              subtitle="Risk & ROI Focus"
              projectRange="$500K - $50M+"
              features={[
                "Medical & Healthcare Facilities",
                "Multi-Family Developments",
                "Industrial & Flex Space",
                "Insurance Restoration (Large Loss)",
                "Historic Restoration (Commercial)",
              ]}
              href="/commercial/"
              ctaText="Explore Commercial"
            />

            <PathwayCard
              type="residential"
              title="Residential Pathway"
              subtitle="Vision & Legacy Focus"
              projectRange="$1M+ Luxury Homes"
              features={[
                "Waterfront Custom Estates",
                "Historic Preservation",
                "FEMA/Flood Zone Compliance",
                "Balcony Reconstruction",
                "Hurricane-Resistant Design",
              ]}
              href="/residential/"
              ctaText="Explore Residential"
            />
          </div>
        </div>
      </section>

      {/* Brand Statement Section */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark" />

        {/* Transparent PNG text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/wp-content/uploads/2023/12/big-graphic-1.png"
            alt="Design Engineer Construction - Florida Construction Specialists"
            width={800}
            height={800}
            className="max-w-full h-auto opacity-90"
            priority
          />
        </div>
      </section>

      {/* Why Choose FCS - Parallax Section */}
      <ParallaxSection
        backgroundImage={PARALLAX_IMAGES.construction}
        title="Why Tampa Bay Chooses Florida Construction Specialists"
        subtitle="Trusted expertise for projects of any scale"
        overlayOpacity={0.6}
        cardOverlap={180}
        minHeight="450px"
      />
      <ParallaxCardsContainer overlap={180} className="pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <ParallaxCard className="text-center">
            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-brand-green" />
            </div>
            <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">Always Prime Contractor</h3>
            <p className="text-gray-600">
              We never work as a subcontractor. Your project gets our full attention, direct accountability, and complete control.
            </p>
          </ParallaxCard>

          <ParallaxCard className="text-center">
            <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{BUSINESS_INFO.bondingCapacity} Bonding</h3>
            <p className="text-gray-600">
              Our financial strength and bonding capacity means we can handle projects of virtually any scale with confidence.
            </p>
          </ParallaxCard>

          <ParallaxCard className="text-center">
            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-brand-green" />
            </div>
            <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{BUSINESS_INFO.totalProjectValue} Delivered</h3>
            <p className="text-gray-600">
              A proven track record of delivering large-scale projects on time and on budget throughout Tampa Bay.
            </p>
          </ParallaxCard>
        </div>
      </ParallaxCardsContainer>

      {/* Featured Projects Preview - Parallax Section */}
      <ParallaxSection
        backgroundImage={PARALLAX_IMAGES.office}
        title="Featured Projects"
        subtitle="Excellence delivered throughout Tampa Bay"
        overlayOpacity={0.5}
        cardOverlap={200}
        minHeight="400px"
      />
      <ParallaxCardsContainer overlap={200} className="pb-16">
        <div className="flex justify-end mb-4">
          <Link
            href="/portfolio/"
            className="flex items-center gap-2 text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
          >
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Commercial Feature */}
          <Link href="/commercial/" className="relative h-80 rounded-xl overflow-hidden group shadow-xl block">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('/wp-content/uploads/2023/12/Downtown-Tampa-Over-The-Bay-At-Sunrise-1024x682-1.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/90 via-brand-green-dark/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block bg-brand-green px-3 py-1 rounded-full text-xs font-bold mb-2">
                COMMERCIAL
              </span>
              <h3 className="text-xl font-bold font-heading mb-1">Multi-Family Developments</h3>
              <p className="text-white/80 text-sm">Large-scale residential and mixed-use projects</p>
            </div>
          </Link>

          {/* Residential Feature */}
          <Link href="/residential/" className="relative h-80 rounded-xl overflow-hidden group shadow-xl block">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url('/wp-content/uploads/2023/12/custom-home-construction-2.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-gold-dark/90 via-brand-gold-dark/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block bg-brand-gold px-3 py-1 rounded-full text-xs font-bold mb-2">
                RESIDENTIAL
              </span>
              <h3 className="text-xl font-bold font-heading mb-1">Luxury Custom Estates</h3>
              <p className="text-white/80 text-sm">Waterfront homes and architectural residences</p>
            </div>
          </Link>
        </div>
      </ParallaxCardsContainer>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
                Ready to Discuss Your Project?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you&apos;re planning a $500K commercial renovation or a $50M development,
                Florida Construction Specialists has the experience, resources, and commitment
                to deliver excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-green-dark">Commercial Projects</h4>
                    <p className="text-gray-600">$500K+ projects with full project management and bonding</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-brand-green-dark">Residential Projects</h4>
                    <p className="text-gray-600">$1M+ custom homes with luxury finishes and hurricane protection</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form (HighLevel) */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-lg overflow-hidden">
              <HighLevelForm height={662} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        testimonials={FCS_TESTIMONIALS}
        title="What Our Clients Say"
        subtitle="Trusted by property managers, developers, and homeowners throughout Tampa Bay"
      />
      <TestimonialSchema testimonials={FCS_TESTIMONIALS} businessName={BUSINESS_INFO.name} />

      {/* Final CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists is the prime contractor for large-scale commercial,
            multi-family, and luxury residential projects throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Project Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
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
