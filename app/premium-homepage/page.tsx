'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PremiumHomepage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Full Bleed with Overlay */}
      <section className="relative h-screen min-h-[800px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/2f/2f-display.webp"
            alt="Construction manager reviewing blueprints at commercial site"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-semibold tracking-wide uppercase mb-4 text-sm">
              Tampa Bay's Premier Construction Partner
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Building{' '}
              <span className="text-amber-400">Legacy</span>
              <br />
              Projects
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              From $500K commercial renovations to $25M+ developments. 
              We don't just build structures—we build landmarks that define Tampa Bay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-lg rounded transition-all hover:translate-y-[-2px] hover:shadow-xl"
              >
                Discuss Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold text-lg rounded transition-all hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400">$500M+</p>
              <p className="text-slate-400 mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400">20+</p>
              <p className="text-slate-400 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400">150+</p>
              <p className="text-slate-400 mt-1">Commercial Projects</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-amber-400">100%</p>
              <p className="text-slate-400 mt-1">Bonded & Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Pathways Section - Magazine Style */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold tracking-wide uppercase mb-4">Our Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Two Pathways, One Standard of Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you're developing a commercial complex or building your dream estate, 
              we bring the same uncompromising quality and attention to detail.
            </p>
          </div>

          {/* Commercial Pathway */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/office-building-1/office-building-1-display.webp"
                alt="Modern commercial office building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                  Commercial
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Commercial Construction
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                From ground-up development to tenant improvements, we specialize in 
                commercial projects that demand precision, timeline adherence, and 
                budget discipline. Our portfolio includes medical facilities, retail 
                centers, office complexes, and hospitality venues.
              </p>
              <ul className="space-y-3 mb-8">
                {['Medical & Healthcare Facilities', 'Multi-Family Developments', 'Retail & Restaurant Build-Outs', 'Office & Corporate Spaces'].map((item) => (
                  <li key={item} className="flex items-center text-slate-700">
                    <svg className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="/commercial"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group"
              >
                Explore Commercial Services
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Residential Pathway - Reversed */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/custom-home-construction-5/custom-home-construction-5-display.webp"
                alt="Luxury custom home at dusk"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Residential
                </span>
              </div>
            </div>
            <div className="lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Luxury Residential
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Your vision deserves more than cookie-cutter construction. We partner 
                with discerning homeowners to create residences that reflect their 
                lifestyle—from waterfront estates to hurricane-hardened custom homes.
              </p>
              <ul className="space-y-3 mb-8">
                {['Custom Home Construction', 'Estate Renovations', 'Hurricane-Resistant Design', 'Historic Preservation'].map((item) => (
                  <li key={item} className="flex items-center text-slate-700">
                    <svg className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="/residential"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group"
              >
                Explore Residential Services
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project - Full Width */}
      <section className="relative py-32 bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Wellington-Polo-Club/wellington-polo-club-display.webp"
            alt="Wellington Polo Club - Luxury resort project"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-400 font-semibold tracking-wide uppercase mb-4">Featured Project</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Wellington Polo Club
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                A landmark hospitality project showcasing Mediterranean architecture, 
                precision tile work, and seamless integration with South Florida's 
                premier equestrian destination. Delivered on time, on budget, and 
                exceeding expectations.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <p className="text-3xl font-bold text-amber-400">$12M</p>
                  <p className="text-slate-400 text-sm">Project Value</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-400">18mo</p>
                  <p className="text-slate-400 text-sm">Completion</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-amber-400">45k</p>
                  <p className="text-slate-400 text-sm">Square Feet</p>
                </div>
              </div>
              <Link 
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded transition-all hover:translate-y-[-2px]"
              >
                View Full Portfolio
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Wellington-Polo-Club/wellington-polo-club-display.webp"
                alt="Wellington Polo Club project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why FCS Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold tracking-wide uppercase mb-4">The FCS Difference</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Tampa Bay's Most Demanding
              <br />Projects Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏗️',
                title: 'Always Prime Contractor',
                description: 'We never subcontract the critical work. Your project gets our A-team from groundbreaking to ribbon cutting.'
              },
              {
                icon: '💰',
                title: 'In-House Engineering',
                description: 'Financial strength to take on major projects with the security and peace of mind you deserve.'
              },
              {
                icon: '⚡',
                title: 'Insurance Restoration Experts',
                description: 'Decades of experience navigating complex insurance claims. We maximize your coverage while minimizing your stress.'
              },
              {
                icon: '🏛️',
                title: 'Historic Preservation',
                description: 'Certified expertise in restoring Tampa Bay\'s architectural treasures while meeting modern code requirements.'
              },
              {
                icon: '🌀',
                title: 'Hurricane-Hardened',
                description: 'We build for Florida\'s reality. Every project engineered to withstand what Mother Nature delivers.'
              },
              {
                icon: '📋',
                title: 'SB 4-D Compliance',
                description: 'Leading expertise in Florida\'s new condo safety requirements. Protect your association from liability.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <svg className="w-16 h-16 text-amber-400 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl text-slate-700 font-medium leading-relaxed mb-8">
            "FCS transformed our vision into reality. Their team managed every detail of our 
            $8M medical facility expansion with precision and professionalism. On time, on budget, 
            and the quality exceeded our expectations."
          </blockquote>
          <div>
            <p className="font-bold text-slate-900">Michael R.</p>
            <p className="text-slate-500">Property Manager, Tampa Bay HOA Management</p>
          </div>
        </div>
      </section>

      {/* Tampa Bay CTA */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-display.webp"
            alt="Tampa Bay skyline"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Whether you're planning a $500K renovation or a $50M development, 
            let's discuss how FCS can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-lg rounded transition-all"
            >
              Schedule a Consultation
            </Link>
            <a 
              href="tel:8134207561"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded hover:bg-white/10 transition-all"
            >
              Call (813) 420-7561
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Florida Construction Specialists</h3>
              <p className="text-slate-400 mb-6 max-w-md">
                Tampa Bay's premier large-scale construction partner. Commercial and residential 
                excellence since 2004.
              </p>
              <p className="text-slate-400">
                <strong className="text-white">License:</strong> CBC1260722
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/commercial" className="hover:text-amber-400 transition-colors">Commercial</Link></li>
                <li><Link href="/residential" className="hover:text-amber-400 transition-colors">Residential</Link></li>
                <li><Link href="/insurance-restoration" className="hover:text-amber-400 transition-colors">Insurance Restoration</Link></li>
                <li><Link href="/historic-restoration" className="hover:text-amber-400 transition-colors">Historic Restoration</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="tel:8134207561" className="hover:text-amber-400 transition-colors">(813) 420-7561</a></li>
                <li><a href="mailto:info@floridaconstructionspecialists.com" className="hover:text-amber-400 transition-colors">Email Us</a></li>
                <li>Tampa Bay, Florida</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
            <p>© 2026 Florida Construction Specialists. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
