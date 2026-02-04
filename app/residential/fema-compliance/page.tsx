import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, CheckCircle, AlertTriangle, Calculator, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FEMA Compliance Tampa | 50% Rule | Flood Zone",
  description:
    "FEMA 50% rule specialists in Tampa Bay. Substantial improvement calculations, flood zone VE vs AE, elevation certificates, breakaway wall construction.",
  keywords:
    "FEMA 50% rule Tampa, substantial improvement, flood zone construction, elevation certificate, breakaway walls, VE flood zone, AE flood zone",
};

const features = [
  {
    title: "50% Rule Calculations",
    description: "Accurate substantial improvement calculations to determine compliance requirements",
    icon: Calculator,
  },
  {
    title: "Flood Zone Expertise",
    description: "Deep knowledge of VE, AE, and X zone requirements and construction techniques",
    icon: Shield,
  },
  {
    title: "Elevation Strategies",
    description: "Cost-effective approaches to elevating existing structures",
    icon: AlertTriangle,
  },
  {
    title: "Breakaway Walls",
    description: "Compliant breakaway wall construction for coastal high hazard areas",
    icon: CheckCircle,
  },
];

const floodZones = [
  {
    zone: "VE (Coastal High Hazard)",
    description: "Highest risk - wave action possible",
    requirements: "Elevation on open foundations, breakaway walls below BFE",
  },
  {
    zone: "AE (100-Year Flood)",
    description: "High risk - 1% annual flood chance",
    requirements: "Lowest floor at or above BFE, flood-resistant materials below",
  },
  {
    zone: "X (Shaded)",
    description: "Moderate risk - 500-year floodplain",
    requirements: "Flood insurance recommended, elevation may reduce premiums",
  },
  {
    zone: "X (Unshaded)",
    description: "Minimal risk",
    requirements: "Standard construction, flood insurance optional",
  },
];

const complianceServices = [
  "Substantial improvement calculations before you commit to a project",
  "Strategic phasing to stay under 50% threshold when possible",
  "Elevation design for homes that must be raised",
  "Breakaway wall construction for VE zones",
  "Flood vent installation for enclosed areas",
  "Elevation certificate coordination",
  "LOMA/LOMR applications when appropriate",
];

const improvementIncludes = [
  "Additions and expansions",
  "Kitchen and bath remodels",
  "New roofing",
  "HVAC replacement",
  "Electrical upgrades",
  "Structural repairs",
];

const improvementExcludes = [
  "Landscaping and fencing",
  "Detached structures",
  "Plans and permits (sometimes)",
  "Furniture and appliances",
  "Code-required safety upgrades",
  "Flood damage repairs (may vary)",
];

export default function FEMACompliancePage() {
  const breadcrumbItems = [
    { name: "Residential", href: "/residential/" },
    { name: "FEMA Compliance", href: "/residential/fema-compliance/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="HomeAndConstructionBusiness" service="FEMA Compliance Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="FEMA Compliance & Flood Zone Construction"
        serviceDescription="FEMA 50% rule compliance, flood zone construction, and elevation services in Tampa Bay"
        minPrice="250000"
      />

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
      <section className="min-h-[70vh] relative flex items-center py-20">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/custom-home-2-rotated-1/custom-home-2-rotated-1-display.webp"
            alt="FEMA compliant coastal construction"
            fill
            className="object-cover"
            priority
          />
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, 
                rgba(12,12,12,1) 0%, 
                rgba(12,12,12,0.85) 30%,
                rgba(12,12,12,0.4) 60%,
                rgba(12,12,12,0.3) 100%
              )`
            }}
          />
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-8 h-8" style={{ color: '#c9a96e' }} />
            <span 
              className="text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full"
              style={{ backgroundColor: 'rgba(201, 169, 110, 0.15)', color: '#c9a96e' }}
            >
              FEMA Compliance
            </span>
          </div>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 max-w-4xl leading-[1.1]"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Navigate Flood Zone <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Regulations</em> with Confidence
          </h1>
          <p 
            className="text-lg mb-10 max-w-2xl leading-relaxed"
            style={{ color: '#888888' }}
          >
            Navigate Tampa Bay's complex flood zone regulations with experts who understand the FEMA 50% rule, 
            substantial improvement requirements, and compliant construction techniques.
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
              Request FEMA Consultation
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
      </section>

      {/* Features Grid */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl mb-16 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            FEMA Compliance <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Services</em>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.title} 
                  className="p-8 rounded-sm transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    backgroundColor: 'rgba(201, 169, 110, 0.05)',
                    border: '1px solid rgba(201, 169, 110, 0.1)'
                  }}
                >
                  <Icon className="w-10 h-10 mb-6" style={{ color: '#c9a96e' }} />
                  <h3 
                    className="text-lg font-medium mb-3"
                    style={{ color: '#f5f5f5' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 50% Rule Explanation */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Essential Knowledge
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-12 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Understanding the FEMA <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>50% Rule</em>
          </h2>
          
          <div 
            className="p-10 rounded-sm mb-12"
            style={{ 
              backgroundColor: 'rgba(201, 169, 110, 0.05)',
              border: '1px solid rgba(201, 169, 110, 0.15)'
            }}
          >
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#c0c0c0' }}>
              The <strong style={{ color: '#f5f5f5' }}>50% Rule</strong> (Substantial Improvement) states that if
              the cost of improvements equals or exceeds 50% of the building's market value, the 
              <em style={{ color: '#c9a96e' }}> entire</em> structure must be brought into compliance
              with current flood regulations.
            </p>
            <div 
              className="p-6 rounded-sm"
              style={{ backgroundColor: 'rgba(201, 169, 110, 0.1)' }}
            >
              <h3 className="font-medium mb-3" style={{ color: '#c9a96e' }}>The Formula:</h3>
              <p className="font-mono text-lg" style={{ color: '#f5f5f5' }}>
                Improvement Cost ÷ Market Value = Substantial Improvement %
              </p>
              <p className="text-sm mt-3" style={{ color: '#888888' }}>
                If ≥ 50%, full compliance required (typically elevation to BFE)
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="p-8 rounded-sm"
              style={{ 
                backgroundColor: 'rgba(201, 169, 110, 0.03)',
                border: '1px solid rgba(201, 169, 110, 0.1)'
              }}
            >
              <h3 className="text-lg mb-6" style={{ color: '#f5f5f5' }}>What Counts as Improvement?</h3>
              <ul className="space-y-3">
                {improvementIncludes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3" style={{ color: '#c0c0c0' }}>
                    <CheckCircle className="w-4 h-4" style={{ color: '#c9a96e' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div 
              className="p-8 rounded-sm"
              style={{ 
                backgroundColor: 'rgba(201, 169, 110, 0.03)',
                border: '1px solid rgba(201, 169, 110, 0.1)'
              }}
            >
              <h3 className="text-lg mb-6" style={{ color: '#f5f5f5' }}>What's Excluded?</h3>
              <ul className="space-y-3">
                {improvementExcludes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3" style={{ color: '#c0c0c0' }}>
                    <CheckCircle className="w-4 h-4" style={{ color: '#c9a96e' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flood Zones */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Know Your Zone
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-16 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Tampa Bay <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Flood Zones</em> Explained
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {floodZones.map((zone) => (
              <div
                key={zone.zone}
                className="p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 110, 0.03)',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}
              >
                <h3 
                  className="text-lg mb-2"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: '#f5f5f5'
                  }}
                >
                  {zone.zone}
                </h3>
                <p className="text-sm mb-3" style={{ color: '#c9a96e' }}>{zone.description}</p>
                <p className="text-sm" style={{ color: '#888888' }}>
                  <span style={{ color: '#c0c0c0' }}>Requirements:</span> {zone.requirements}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p 
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: '#c9a96e' }}
            >
              Our Approach
            </p>
            <h2 
              className="text-3xl md:text-4xl mb-8"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5',
                letterSpacing: '0.02em'
              }}
            >
              How We Help with <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>FEMA Compliance</em>
            </h2>
            <div className="space-y-4">
              {complianceServices.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#c9a96e' }} />
                  <span style={{ color: '#c0c0c0' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div 
            className="p-10 rounded-sm"
            style={{ 
              backgroundColor: 'rgba(201, 169, 110, 0.05)',
              border: '1px solid rgba(201, 169, 110, 0.15)'
            }}
          >
            <h3 
              className="text-2xl mb-6"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5'
              }}
            >
              Before You Renovate...
            </h3>
            <p className="mb-8 leading-relaxed" style={{ color: '#888888' }}>
              Understanding your flood zone and the 50% rule <em style={{ color: '#c9a96e' }}>before</em> you
              start planning can save hundreds of thousands of dollars. Contact us for a pre-project FEMA consultation.
            </p>
            <Link
              href="/contact/"
              className="block w-full py-4 text-center text-sm font-medium tracking-[0.1em] uppercase transition-all hover:-translate-y-0.5"
              style={{ 
                backgroundColor: '#c9a96e',
                color: '#0c0c0c'
              }}
            >
              Request 50% Rule Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 px-8 relative"
        style={{ 
          background: 'linear-gradient(135deg, rgba(201, 169, 110, 0.15) 0%, rgba(201, 169, 110, 0.05) 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl mb-6"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Don't Let FEMA Rules <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Surprise You</em>
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#888888' }}>
            Understand your flood zone obligations before you start your project. 
            FCS helps Tampa Bay homeowners navigate FEMA compliance with confidence.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-3 px-10 py-5 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-400 hover:-translate-y-0.5"
            style={{ 
              backgroundColor: '#c9a96e',
              color: '#0c0c0c'
            }}
          >
            Schedule FEMA Compliance Consultation
          </Link>
        </div>
      </section>

      {/* Back to Residential */}
      <section className="py-12 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/residential/"
            className="inline-flex items-center gap-2 text-sm tracking-wide transition-colors hover:text-[#c9a96e]"
            style={{ color: '#888888' }}
          >
            ← Back to Lifetime Custom Homes
          </Link>
        </div>
      </section>
    </>
  );
}
