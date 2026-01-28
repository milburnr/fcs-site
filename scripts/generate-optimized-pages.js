#!/usr/bin/env node
/**
 * Generate optimized service and location pages for FCS
 * Creates service hub pages, city pages, and service×location pages
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '../app');

// Services configuration
const SERVICES = [
  {
    slug: 'commercial-construction',
    name: 'Commercial Construction',
    title: 'Large-Scale Commercial Construction',
    subtitle: '$500K - $50M+ Projects',
    description: 'Premier commercial construction contractor serving Tampa Bay. From ground-up builds to tenant improvements, we deliver large-scale commercial projects on time and on budget.',
    minValue: '$500,000',
    faqKey: 'commercial',
    features: [
      'New commercial building construction',
      'Office buildings and corporate campuses',
      'Medical and healthcare facilities',
      'Retail centers and shopping complexes',
      'Hospitality and restaurant buildouts',
      'Educational institutions',
      'Industrial and warehouse facilities',
      'Tenant improvements and renovations',
    ],
  },
  {
    slug: 'multi-family-construction',
    name: 'Multi-Family Construction',
    title: 'Multi-Family Residential Construction',
    subtitle: 'Condos, Apartments & Townhomes',
    description: 'Expert multi-family construction throughout Tampa Bay. We build condominiums, apartment complexes, townhomes, and mixed-use developments.',
    minValue: '$1,000,000',
    faqKey: 'multiFamily',
    features: [
      'Condominium construction',
      'Apartment complexes',
      'Townhome developments',
      'Senior living facilities',
      'Student housing',
      'Mixed-use developments',
      'Common area construction',
      'Amenity buildings',
    ],
  },
  {
    slug: 'disaster-recovery',
    name: 'Disaster Recovery',
    title: 'Large Loss Property Restoration',
    subtitle: 'Prime Contractor for Insurance Claims',
    description: 'Experienced large loss property restoration contractor. We work directly with insurance companies to restore commercial and high-value residential properties after hurricanes, storms, and other disasters.',
    minValue: '$250,000',
    faqKey: 'disaster',
    features: [
      'Hurricane damage restoration',
      'Storm damage repair',
      'Fire damage restoration',
      'Flood damage recovery',
      'Insurance claim management',
      'Large loss commercial restoration',
      'Multi-family disaster recovery',
      'Complete property rebuilds',
    ],
  },
  {
    slug: 'historic-restoration',
    name: 'Historic Restoration',
    title: 'Historic Restoration & Preservation',
    subtitle: 'Certified Specialists',
    description: 'Expert historic restoration and preservation services. We restore Tampa Bay\'s architectural heritage while meeting modern building codes and SHPO requirements.',
    minValue: '$500,000',
    faqKey: 'historic',
    features: [
      'Historic building restoration',
      'Preservation compliance',
      'Adaptive reuse projects',
      'Facade restoration',
      'Period-accurate renovations',
      'Structural stabilization',
      'Interior historic restoration',
      'SHPO coordination',
    ],
  },
  {
    slug: 'luxury-custom-homes',
    name: 'Luxury Custom Homes',
    title: 'Luxury Custom Home Construction',
    subtitle: '$1M+ Waterfront & Estate Properties',
    description: 'Custom home builder specializing in $1M+ luxury residences. We build waterfront estates, architectural homes, and high-end custom residences throughout Tampa Bay.',
    minValue: '$1,000,000',
    faqKey: 'customHomes',
    features: [
      'Waterfront estate homes',
      'Luxury custom residences',
      'Architectural home builds',
      'Smart home integration',
      'High-end finishes',
      'Pool and outdoor living',
      'Multi-generational homes',
      'Hurricane-resistant construction',
    ],
  },
  {
    slug: 'balcony-reconstruction',
    name: 'Balcony Reconstruction',
    title: 'Commercial Balcony Reconstruction',
    subtitle: 'Multi-Family & Condo Specialists',
    description: 'Expert balcony reconstruction and waterproofing for condominiums, apartments, and commercial buildings. We work with HOAs and property managers throughout Tampa Bay.',
    minValue: '$100,000',
    faqKey: 'balcony',
    features: [
      'Structural balcony repair',
      'Balcony waterproofing',
      'Railing replacement',
      'Concrete restoration',
      'HOA and condo association work',
      'Multi-unit balcony projects',
      'Safety compliance upgrades',
      'Preventive maintenance programs',
    ],
  },
  {
    slug: 'exterior-waterproofing',
    name: 'Exterior Waterproofing',
    title: 'Building Envelope Waterproofing',
    subtitle: 'Commercial & Residential Properties',
    description: 'Comprehensive waterproofing solutions for commercial and residential buildings. We protect your property from Florida\'s demanding climate with premium waterproofing systems.',
    minValue: '$50,000',
    faqKey: 'waterproofing',
    features: [
      'Building envelope waterproofing',
      'Foundation waterproofing',
      'Below-grade waterproofing',
      'Deck and plaza waterproofing',
      'Parking structure waterproofing',
      'Caulking and sealants',
      'Drainage systems',
      'Moisture barrier installation',
    ],
  },
];

// Locations configuration
const LOCATIONS = [
  { name: 'Tampa', slug: 'tampa', fullSlug: 'tampa-fl', population: '400,000+', description: 'Florida\'s third-largest city and the economic hub of the Tampa Bay region' },
  { name: 'St. Petersburg', slug: 'st-petersburg', fullSlug: 'st-petersburg-fl', population: '260,000+', description: 'Historic waterfront city known for its arts, culture, and growing commercial sector' },
  { name: 'Clearwater', slug: 'clearwater', fullSlug: 'clearwater-fl', population: '117,000+', description: 'Coastal city with thriving tourism, hospitality, and commercial development' },
  { name: 'Lakeland', slug: 'lakeland', fullSlug: 'lakeland-fl', population: '115,000+', description: 'Growing central Florida city strategically located between Tampa and Orlando' },
  { name: 'Sarasota', slug: 'sarasota', fullSlug: 'sarasota-fl', population: '57,000+', description: 'Affluent Gulf Coast city known for arts, culture, and luxury real estate' },
  { name: 'Bradenton', slug: 'bradenton', fullSlug: 'bradenton-fl', population: '60,000+', description: 'Historic city experiencing significant commercial and residential growth' },
  { name: 'Brandon', slug: 'brandon', fullSlug: 'brandon-fl', population: '115,000+', description: 'Major Tampa suburb with extensive commercial and retail development' },
  { name: 'Ruskin', slug: 'ruskin', fullSlug: 'ruskin-fl', population: '25,000+', description: 'Our home base in South Hillsborough County, serving all of Tampa Bay' },
];

// FAQ Database
const FAQ_DATABASE = {
  commercial: [
    { question: "What size commercial projects does FCS handle?", answer: "Florida Construction Specialists handles commercial construction projects ranging from $500,000 to over $50 million. We specialize in large-scale projects including office buildings, medical facilities, retail centers, hospitality venues, and educational institutions." },
    { question: "Do you work as a subcontractor or prime contractor?", answer: "FCS always serves as the prime general contractor on our projects. We do not work as a subcontractor. As prime contractor, we maintain full project control, direct relationships with owners, and complete accountability for project delivery." },
    { question: "What is your bonding capacity?", answer: "Florida Construction Specialists maintains bonding capacity of $10 million or more, allowing us to take on large-scale commercial projects with confidence." },
    { question: "How long does a typical commercial project take?", answer: "Commercial project timelines vary based on scope. Tenant improvements typically take 2-4 months, while ground-up construction ranges from 8-18 months." },
    { question: "Do you provide design-build services?", answer: "Yes, FCS offers full design-build services where we manage both design and construction under a single contract, streamlining communication and accelerating delivery." },
  ],
  multiFamily: [
    { question: "What types of multi-family projects do you build?", answer: "FCS specializes in condominium construction, apartment complexes, townhome developments, senior living facilities, student housing, and mixed-use residential projects." },
    { question: "Do you handle condo and apartment construction?", answer: "Yes, multi-family residential construction is one of our core specialties. We build both for-sale condominiums and for-rent apartment communities." },
    { question: "What is the typical project value for multi-family?", answer: "Our multi-family projects typically range from $1 million for smaller developments to $50 million or more for large complexes." },
    { question: "How do you handle common area construction?", answer: "We construct all common areas including lobbies, fitness centers, pools, clubhouses, parking structures, and outdoor amenity spaces." },
    { question: "Do you offer balcony waterproofing?", answer: "Yes, balcony construction and waterproofing is included in all our multi-family projects, critical in Florida's climate." },
  ],
  disaster: [
    { question: "Do you work with insurance companies?", answer: "Yes, FCS has extensive experience working directly with insurance companies, adjusters, and claims professionals on large loss claims." },
    { question: "What is large loss property restoration?", answer: "Large loss refers to significant property damage claims, typically exceeding $250,000, requiring experienced contractors who understand insurance processes." },
    { question: "How quickly can you respond?", answer: "While we don't handle small emergency repairs, we mobilize quickly for large loss situations, beginning damage assessment immediately." },
    { question: "Do you handle the insurance claim process?", answer: "We assist throughout including damage documentation, certified estimates, adjuster meetings, and supplemental claims." },
    { question: "Are you a prime contractor for insurance restoration?", answer: "Yes, FCS always serves as the prime contractor on insurance restoration projects, maintaining direct contracts with property owners." },
  ],
  historic: [
    { question: "Are you certified for historic restoration?", answer: "Yes, FCS has extensive experience in historic restoration working in compliance with the Secretary of the Interior's Standards for Historic Preservation." },
    { question: "Do you work with SHPO?", answer: "Yes, we regularly coordinate with the State Historic Preservation Office and local historic preservation boards." },
    { question: "What makes historic restoration different?", answer: "Historic restoration requires specialized knowledge of period construction techniques, materials, and architectural details while meeting modern codes." },
    { question: "How do you preserve original materials?", answer: "We prioritize preservation over replacement, skilled in restoring original masonry, woodwork, metalwork, and decorative elements." },
    { question: "Can you add modern amenities?", answer: "Absolutely. We sensitively integrate modern systems—HVAC, electrical, plumbing—while preserving historic character." },
  ],
  customHomes: [
    { question: "What is your minimum project size?", answer: "Florida Construction Specialists focuses on luxury custom homes valued at $1 million and above, including waterfront estates and high-end residences." },
    { question: "Do you build waterfront homes?", answer: "Yes, waterfront estate construction is one of our specialties with extensive experience on challenging waterfront sites." },
    { question: "How long does custom home construction take?", answer: "Luxury custom home construction typically takes 12-24 months depending on size and complexity." },
    { question: "Do you work with our architect?", answer: "Absolutely. We work collaboratively with your architect and design team, or can introduce you to architects we've partnered with." },
    { question: "Are your homes hurricane-resistant?", answer: "We build to exceed Florida Building Code requirements for wind resistance with impact-resistant windows, enhanced tie-downs, and reinforced construction." },
  ],
  balcony: [
    { question: "Do you specialize in condo balcony repair?", answer: "Yes, balcony reconstruction for condominiums and multi-family buildings is one of our specialties throughout Tampa Bay." },
    { question: "What causes balcony structural damage?", answer: "In Florida, primary causes are water intrusion, reinforcing steel corrosion, concrete deterioration, and inadequate original waterproofing." },
    { question: "How do you waterproof balconies?", answer: "We use multi-layer waterproofing systems including traffic-bearing membranes, proper slope-to-drain, and appropriate sealants." },
    { question: "Do you work with HOAs?", answer: "Yes, we work extensively with HOAs and condo associations, understanding board approvals, reserve funds, and phased construction." },
    { question: "What is the typical timeline?", answer: "Individual balcony repairs might take 1-2 weeks per unit. Building-wide projects are phased over several months." },
  ],
  waterproofing: [
    { question: "What is building envelope waterproofing?", answer: "Building envelope waterproofing protects a structure from water intrusion through all exterior surfaces—walls, roofs, foundations, and below-grade areas." },
    { question: "Do you waterproof commercial buildings?", answer: "Yes, commercial waterproofing is a major part of our business, from high-rise envelopes to parking structures and plaza decks." },
    { question: "What areas need waterproofing in Florida?", answer: "Critical areas include foundations, below-grade walls, plaza decks, balconies, parking structures, expansion joints, and roof-wall interfaces." },
    { question: "How long does waterproofing last?", answer: "Quality commercial waterproofing systems typically last 15-25 years or more with proper maintenance." },
    { question: "Do you warranty your work?", answer: "Yes, all our waterproofing includes both manufacturer material warranties and our workmanship warranty." },
  ],
};

// Generate service hub page
function generateServiceHubPage(service) {
  const faqs = FAQ_DATABASE[service.faqKey] || FAQ_DATABASE.commercial;

  return `import Link from "next/link";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award } from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceAreaLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${service.title} | ${service.subtitle} | Florida Construction Specialists",
  description: "${service.description}",
};

const features = ${JSON.stringify(service.features, null, 2)};

const faqs = ${JSON.stringify(faqs, null, 2)};

export default function ${service.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema
        serviceName="${service.name}"
        serviceDescription="${service.description}"
        minPrice="${service.minValue.replace('$', '').replace(',', '')}"
      />

      <Breadcrumb items={[
        { name: "Services", href: "/services/" },
        { name: "${service.name}", href: "/${service.slug}/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">${service.subtitle}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              ${service.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              ${service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Project Consultation
              </Link>
              <a
                href={\`tel:\${BUSINESS_INFO.phoneRaw}\`}
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
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$10M+ Bonding Capacity</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">150+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Expert ${service.name} Services
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists delivers comprehensive ${service.name.toLowerCase()} services
                throughout the Tampa Bay region. As a prime general contractor, we maintain full project
                control and accountability from pre-construction through final completion.
              </p>
              <p className="text-gray-600 mb-6">
                Our experienced team has completed over $50 million in projects, bringing the expertise
                and resources needed for projects ranging from ${service.minValue} to $50 million or more.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-brand-green-bg rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Our ${service.name} Services Include:
              </h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-12 text-center font-heading">
            Our ${service.name} Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "We discuss your project goals, timeline, and budget requirements." },
              { step: "2", title: "Pre-Construction", desc: "Site analysis, detailed budgeting, and comprehensive project planning." },
              { step: "3", title: "Construction", desc: "Expert execution with strict quality control and timeline management." },
              { step: "4", title: "Completion", desc: "Final inspections, punch list, and seamless project handover." },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Choose FCS for ${service.name}?
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor—never a subcontractor.
              We bring 20+ years of experience and $50M+ in completed projects to every job.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Direct accountability and project control on every job.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Proven Track Record</h3>
              <p className="text-gray-600">$50M+ in completed projects throughout Tampa Bay.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Large-Scale Expertise</h3>
              <p className="text-gray-600">Specializing in projects from ${service.minValue} to $50M+.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreaLinks service="${service.slug}" serviceName="${service.name}" />

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="${service.name} FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Start Your ${service.name} Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We specialize in projects ${service.minValue} and above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
            </Link>
            <a
              href={\`tel:\${BUSINESS_INFO.phoneRaw}\`}
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
`;
}

// Generate city overview page
function generateCityPage(location) {
  return `import Link from "next/link";
import { Phone, MapPin, ArrowRight, Building2, Shield, Award } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceCardGrid } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${location.name}, FL General Contractor | Commercial & Residential Construction",
  description: "Premier general contractor serving ${location.name}, FL. Commercial construction, multi-family residential, disaster recovery, historic restoration. Projects $250K-$50M+.",
};

const faqs = [
  {
    question: "Do you serve ${location.name}, FL?",
    answer: "Yes, Florida Construction Specialists proudly serves ${location.name} and the surrounding areas. We have completed numerous projects in ${location.name} and maintain strong relationships with local building departments and subcontractors."
  },
  {
    question: "What types of construction projects do you handle in ${location.name}?",
    answer: "In ${location.name}, we handle commercial construction, multi-family residential, disaster recovery, historic restoration, luxury custom homes, balcony reconstruction, and exterior waterproofing. Project values typically range from $250,000 to $50 million or more."
  },
  {
    question: "Are you licensed to work in ${location.name}?",
    answer: "Yes, Florida Construction Specialists is a fully licensed Florida General Contractor with comprehensive insurance coverage. We are licensed to work throughout the state including ${location.name} and all Tampa Bay communities."
  },
  {
    question: "What is your typical project size in ${location.name}?",
    answer: "We specialize in large-scale projects in ${location.name} ranging from $250,000 to $50 million or more. This includes commercial construction, multi-family residential, historic restoration, and large loss insurance restoration projects."
  },
  {
    question: "How do I get started on a project in ${location.name}?",
    answer: "Contact us for a project consultation. We'll discuss your project goals, timeline, and budget, then provide preliminary guidance on how we can help bring your ${location.name} project to life."
  },
];

export default function ${location.name.replace(/\s+/g, '').replace('.', '')}Page() {
  return (
    <>
      <LocalBusinessSchema city="${location.name}" />

      <Breadcrumb items={[
        { name: "Locations", href: "/locations/" },
        { name: "${location.name}, FL", href: "/locations/${location.fullSlug}/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving ${location.name}, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              ${location.name}, FL General Contractor
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              ${location.description}. Florida Construction Specialists delivers large-scale commercial and residential construction throughout ${location.name} and the greater Tampa Bay area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Project Consultation
              </Link>
              <a
                href={\`tel:\${BUSINESS_INFO.phoneRaw}\`}
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
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$10M+ Bonding Capacity</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* About FCS in this city */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Construction Services in ${location.name}
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists is a premier general contractor serving ${location.name} with
              large-scale commercial construction, multi-family residential, disaster recovery, historic
              restoration, and luxury custom home building. As a prime contractor, we maintain full project
              control and direct accountability on every job.
            </p>
            <p className="text-gray-600">
              Our ${location.name} projects range from $250,000 to $50 million or more. We bring 20+ years
              of experience and a track record of $50M+ in completed projects throughout Tampa Bay.
            </p>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Services in ${location.name}
          </h2>
          <ServiceCardGrid city="${location.name}" citySlug="${location.slug}" />
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why ${location.name} Chooses FCS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brand-green-bg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor. Direct accountability and project control on every ${location.name} job.
              </p>
            </div>
            <div className="card text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brand-green-bg flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Large-Scale Expertise</h3>
              <p className="text-gray-600">
                Specializing in ${location.name} projects from $250K to $50M+. Commercial, multi-family, and luxury residential.
              </p>
            </div>
            <div className="card text-center p-6">
              <div className="w-16 h-16 rounded-full bg-brand-green-bg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Local Relationships</h3>
              <p className="text-gray-600">
                Strong relationships with ${location.name} building departments, inspectors, and subcontractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="${location.name} Construction FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Start Your ${location.name} Project Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. Serving ${location.name} with projects $250K and above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
            </Link>
            <a
              href={\`tel:\${BUSINESS_INFO.phoneRaw}\`}
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
`;
}

// Generate service×location page
function generateServiceLocationPage(service, location) {
  const faqs = [
    {
      question: `Do you provide ${service.name.toLowerCase()} services in ${location.name}?`,
      answer: `Yes, Florida Construction Specialists provides comprehensive ${service.name.toLowerCase()} services throughout ${location.name} and the greater Tampa Bay area. We have completed numerous projects in ${location.name} and maintain strong relationships with local building departments.`
    },
    {
      question: `What is the typical ${service.name.toLowerCase()} project cost in ${location.name}?`,
      answer: `Our ${service.name.toLowerCase()} projects in ${location.name} typically start at ${service.minValue} and can range up to $50 million or more depending on scope. Contact us for a project consultation and detailed budgeting.`
    },
    {
      question: `How long does ${service.name.toLowerCase()} take in ${location.name}?`,
      answer: `Project timelines for ${service.name.toLowerCase()} in ${location.name} vary based on scope and complexity. We provide detailed schedules during pre-construction. Contact us to discuss your specific project timeline requirements.`
    },
    {
      question: `Are you licensed for ${service.name.toLowerCase()} in ${location.name}?`,
      answer: `Yes, Florida Construction Specialists is a fully licensed Florida General Contractor with comprehensive insurance and bonding. We are licensed to perform ${service.name.toLowerCase()} throughout ${location.name} and all of Florida.`
    },
    {
      question: `Why choose FCS for ${service.name.toLowerCase()} in ${location.name}?`,
      answer: `FCS is always the prime contractor on ${location.name} projects—never a subcontractor. We bring 20+ years of experience, $10M+ bonding capacity, and a track record of successful ${service.name.toLowerCase()} projects throughout Tampa Bay.`
    },
  ];

  return `import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${service.name} in ${location.name}, FL | ${service.subtitle} | FCS",
  description: "${service.name} services in ${location.name}, Florida. ${service.description.slice(0, 100)}. Projects ${service.minValue}+. Licensed, bonded, insured.",
};

const features = ${JSON.stringify(service.features.slice(0, 6), null, 2)};

const faqs = ${JSON.stringify(faqs, null, 2)};

export default function ${service.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}${location.name.replace(/\s+/g, '').replace('.', '')}Page() {
  return (
    <>
      <LocalBusinessSchema city="${location.name}" service="${service.name}" />
      <ServiceSchema
        serviceName="${service.name}"
        serviceDescription="${service.description}"
        city="${location.name}"
        minPrice="${service.minValue.replace('$', '').replace(',', '')}"
      />

      <Breadcrumb items={[
        { name: "Services", href: "/services/" },
        { name: "${service.name}", href: "/${service.slug}/" },
        { name: "${location.name}", href: "/${service.slug}-${location.slug}/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">${location.name}, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              ${service.name} in ${location.name}, FL
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              ${service.description} Serving ${location.name} and the greater Tampa Bay area with projects ${service.minValue} and above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Project Consultation
              </Link>
              <a
                href={\`tel:\${BUSINESS_INFO.phoneRaw}\`}
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
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$10M+ Bonding</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">150+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                ${service.name} Services in ${location.name}
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists delivers expert ${service.name.toLowerCase()} services
                throughout ${location.name} and the greater Tampa Bay region. As a prime general contractor,
                we maintain full project control and direct accountability on every ${location.name} project.
              </p>
              <p className="text-gray-600 mb-8">
                Our ${location.name} ${service.name.toLowerCase()} projects range from ${service.minValue} to
                $50 million or more. We bring 20+ years of experience and a proven track record to every job,
                ensuring your project is completed on time, on budget, and to the highest standards.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                Our ${service.name} Services in ${location.name} Include:
              </h3>
              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your ${location.name} Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="${location.name}" currentService="${service.slug}" />
              <NearbyLocations currentCity="${location.name}" service="${service.slug}" serviceName="${service.name}" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why ${location.name} Chooses FCS for ${service.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Always the prime contractor in ${location.name}—never a sub.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Proven Track Record</h3>
              <p className="text-gray-600">$50M+ in completed projects throughout Tampa Bay.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Local Expertise</h3>
              <p className="text-gray-600">Strong relationships with ${location.name} building departments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="${service.name} in ${location.name} FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Start Your ${location.name} ${service.name} Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. ${service.name} in ${location.name} starting at ${service.minValue}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
            </Link>
            <a
              href={\`tel:\${BUSINESS_INFO.phoneRaw}\`}
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
`;
}

// Main execution
async function main() {
  console.log('FCS Optimized Page Generator');
  console.log('============================\n');

  let created = 0;
  let skipped = 0;

  // Generate service hub pages
  console.log('Generating service hub pages...');
  for (const service of SERVICES) {
    const pagePath = path.join(APP_DIR, service.slug, 'page.tsx');

    // Always overwrite service hub pages with optimized versions
    fs.mkdirSync(path.dirname(pagePath), { recursive: true });
    fs.writeFileSync(pagePath, generateServiceHubPage(service));
    console.log(`  [OK] /${service.slug}/`);
    created++;
  }

  // Generate city pages
  console.log('\nGenerating city pages...');
  for (const location of LOCATIONS) {
    const pagePath = path.join(APP_DIR, 'locations', location.fullSlug, 'page.tsx');

    // Always overwrite city pages with optimized versions
    fs.mkdirSync(path.dirname(pagePath), { recursive: true });
    fs.writeFileSync(pagePath, generateCityPage(location));
    console.log(`  [OK] /locations/${location.fullSlug}/`);
    created++;
  }

  // Generate service×location pages
  console.log('\nGenerating service×location pages...');
  for (const service of SERVICES) {
    for (const location of LOCATIONS) {
      const pageSlug = `${service.slug}-${location.slug}`;
      const pagePath = path.join(APP_DIR, pageSlug, 'page.tsx');

      // Create if doesn't exist
      if (!fs.existsSync(pagePath)) {
        fs.mkdirSync(path.dirname(pagePath), { recursive: true });
        fs.writeFileSync(pagePath, generateServiceLocationPage(service, location));
        console.log(`  [OK] /${pageSlug}/`);
        created++;
      } else {
        console.log(`  [SKIP] /${pageSlug}/ (exists)`);
        skipped++;
      }
    }
  }

  console.log('\n============================');
  console.log(`Created: ${created}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Total: ${created + skipped}`);
}

main().catch(console.error);
