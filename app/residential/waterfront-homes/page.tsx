import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Waves, CheckCircle, Anchor, Shield, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Waterfront Home Construction Tampa | Seawall & Coastal Resilience | FCS",
  description:
    "Luxury waterfront home construction in Tampa Bay. Seawall coordination, marine-grade materials, flood zone compliance. Davis Islands, Harbour Island specialists.",
  keywords:
    "waterfront home construction Tampa, seawall construction, coastal home builder, Davis Islands builder, flood zone construction, marine-grade materials",
};

const features = [
  {
    title: "Seawall Coordination",
    description: "Expert coordination with seawall contractors for new construction and repairs",
    icon: Anchor,
  },
  {
    title: "Marine-Grade Materials",
    description: "Salt-resistant finishes, stainless hardware, and materials built for coastal exposure",
    icon: Shield,
  },
  {
    title: "Flood Zone Expertise",
    description: "FEMA compliance, elevation certificates, and breakaway wall construction",
    icon: Waves,
  },
  {
    title: "Hurricane Resilience",
    description: "Impact windows, reinforced construction, and wind-resistant design",
    icon: CheckCircle,
  },
];

const premiumLocations = [
  { name: "Davis Islands", description: "Tampa's most exclusive island community" },
  { name: "Harbour Island", description: "Downtown waterfront living" },
  { name: "Beach Park", description: "Bayshore Boulevard prestige" },
  { name: "Culbreath Isles", description: "Private waterfront enclave" },
  { name: "Apollo Beach", description: "Growing waterfront community" },
  { name: "Clearwater Beach", description: "Gulf Coast luxury" },
];

const seawallServices = [
  "Assessment of existing seawall condition",
  "Coordination with marine contractors for repairs or new installation",
  "Proper setbacks and foundation design",
  "Drainage and stormwater management",
  "Living shoreline alternatives where appropriate",
  "Permitting through SWFWMD and Army Corps",
];

const marineMaterials = [
  "316 stainless steel hardware",
  "Fiber cement and PVC trim",
  "Epoxy-coated rebar",
  "Impact-rated windows and doors",
  "Salt-resistant exterior finishes",
  "Elevated HVAC equipment",
];

export default function WaterfrontHomesPage() {
  const breadcrumbItems = [
    { name: "Residential", href: "/residential/" },
    { name: "Waterfront Resilience", href: "/residential/waterfront-homes/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="HomeAndConstructionBusiness" service="Waterfront Home Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Waterfront Home Construction"
        serviceDescription="Luxury waterfront home construction with seawall coordination and coastal resilience in Tampa Bay"
        minPrice="1000000"
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
            src="/wp-content/uploads/2024/01/Custom-home-2-rotated-1.jpg"
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
                rgba(12,12,12,0.85) 30%,
                rgba(12,12,12,0.4) 60%,
                rgba(12,12,12,0.3) 100%
              )`
            }}
          />
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="flex items-center gap-4 mb-8">
            <Waves className="w-8 h-8" style={{ color: '#c9a96e' }} />
            <span 
              className="text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full"
              style={{ backgroundColor: 'rgba(201, 169, 110, 0.15)', color: '#c9a96e' }}
            >
              Waterfront Living
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
            Waterfront Homes Built for <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Generations</em>
          </h1>
          <p 
            className="text-lg mb-10 max-w-2xl leading-relaxed"
            style={{ color: '#888888' }}
          >
            Build your waterfront dream home with experts who understand Tampa Bay's unique coastal challenges. 
            From seawall coordination to hurricane resilience, we build homes that stand the test of time.
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
              Schedule Consultation
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
            Waterfront Construction <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Expertise</em>
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

      {/* Seawall Section */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p 
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: '#c9a96e' }}
            >
              Coastal Infrastructure
            </p>
            <h2 
              className="text-3xl md:text-4xl mb-8"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5',
                letterSpacing: '0.02em'
              }}
            >
              Seawall Coordination for <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>New Construction</em>
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: '#888888' }}>
              Building on Tampa Bay's waterfront requires careful coordination with seawall infrastructure. 
              Whether you're building behind an existing seawall or need new construction, we manage the entire process.
            </p>
            <div className="space-y-4">
              {seawallServices.map((item, index) => (
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
              className="text-xl mb-6"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5'
              }}
            >
              Marine-Grade Construction
            </h3>
            <p className="mb-6" style={{ color: '#888888' }}>
              Salt air, humidity, and storm exposure demand materials built for coastal environments:
            </p>
            <ul className="space-y-3">
              {marineMaterials.map((item, index) => (
                <li key={index} className="flex items-center gap-3" style={{ color: '#c0c0c0' }}>
                  <Anchor className="w-4 h-4" style={{ color: '#c9a96e' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Premium Locations */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Where We Build
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-16 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Tampa Bay's Premier <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Waterfront Communities</em>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumLocations.map((location) => (
              <div
                key={location.name}
                className="p-8 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 110, 0.03)',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}
              >
                <Waves className="w-8 h-8 mx-auto mb-4" style={{ color: '#c9a96e' }} />
                <h3 
                  className="text-lg mb-2"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: '#f5f5f5'
                  }}
                >
                  {location.name}
                </h3>
                <p className="text-sm" style={{ color: '#888888' }}>{location.description}</p>
              </div>
            ))}
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
            Build Your Waterfront <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Legacy</em>
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#888888' }}>
            From Davis Islands to Clearwater Beach, FCS builds waterfront homes designed to 
            withstand Tampa Bay's unique coastal environment.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-3 px-10 py-5 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-400 hover:-translate-y-0.5"
            style={{ 
              backgroundColor: '#c9a96e',
              color: '#0c0c0c'
            }}
          >
            Schedule Waterfront Consultation
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
