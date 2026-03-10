"use client";

import Link from "next/link";
import { Phone, Shield, Award, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/Schema";
import { PathwayCard } from "@/components/PathwayCard";
import { Testimonials, FCS_TESTIMONIALS, TestimonialSchema } from "@/components/Testimonials";
import { ParallaxSection, ParallaxCardsContainer, ParallaxCard } from "@/components/ParallaxSection";
import { PARALLAX_IMAGES } from "@/lib/imageMapping";
import { HighLevelForm } from "@/components/HighLevelForm";
import { WordGridParallax } from "@/components/WordGridParallax";

export function HomePageClient() {
  return (
    <>
      <LocalBusinessSchema />
      <OrganizationSchema />

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
              projectRange="$500K - $25M+"
              features={[
                "Multi-Family Developments",
                "Industrial & Flex Space",
                "Insurance Restoration (Large Loss)",
                "Historic Restoration (Commercial)",
              ]}
              href="/commercial/"
              ctaText="Explore Commercial"
              backgroundImage="/images/commercial-construction-in-tampa/commercial-construction-in-tampa-display.webp"
            />

            <PathwayCard
              type="residential"
              title="Design/Build Pathway"
              subtitle="Vision & Legacy Focus"
              projectRange="$1M+ Lifetime Homes"
              features={[
                "Lifetime Custom Homes",
                "Historic Preservation",
                "FEMA/Flood Zone Compliance",
                "Balcony Reconstruction",
                "Hurricane-Resistant Design",
              ]}
              href="/residential/"
              ctaText="Explore Design/Build"
              backgroundImage="/images/custom-home-2/custom-home-2-large.webp"
            />
          </div>
        </div>
      </section>

      {/* Brand Statement Section - Water effect with parallax */}
      <WordGridParallax />

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
            <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{BUSINESS_INFO.yearsInBusiness} Years Experience</h3>
            <p className="text-gray-600">
              Four decades of expertise means we can handle projects of virtually any scale with confidence.
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-medium.webp"
              srcSet="/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-small.webp 640w, /images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-medium.webp 960w, /images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-large.webp 1280w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Commercial construction in Tampa"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/custom-home-construction-2/custom-home-construction-2-medium.webp"
              srcSet="/images/custom-home-construction-2/custom-home-construction-2-small.webp 640w, /images/custom-home-construction-2/custom-home-construction-2-medium.webp 960w, /images/custom-home-construction-2/custom-home-construction-2-large.webp 1280w"
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Luxury custom home construction"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
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
                    <p className="text-gray-600">$500K+ projects with full project management</p>
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
