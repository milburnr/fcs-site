import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Landmark, CheckCircle, FileText, Home, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Historic Home Preservation Tampa | Hyde Park & South Tampa | FCS",
  description:
    "Residential historic preservation in Tampa Bay. Hyde Park ARC compliance, South Tampa historic districts, period-accurate restoration. Certificate of appropriateness specialists.",
  keywords:
    "historic home preservation Tampa, Hyde Park renovation, South Tampa historic homes, certificate of appropriateness, ARC guidelines Tampa",
};

const features = [
  {
    title: "ARC Compliance",
    description: "Navigate Hyde Park and South Tampa Architectural Review Committee requirements",
    icon: FileText,
  },
  {
    title: "Period Restoration",
    description: "Authentic restoration using traditional materials and techniques",
    icon: Landmark,
  },
  {
    title: "Modern Integration",
    description: "Sensitively integrate modern systems while preserving historic character",
    icon: Home,
  },
  {
    title: "Material Sourcing",
    description: "Access to period-appropriate materials for authentic restoration",
    icon: CheckCircle,
  },
];

const historicDistricts = [
  { name: "Hyde Park", period: "1880s-1930s", style: "Bungalow, Mediterranean Revival, Colonial Revival" },
  { name: "Seminole Heights", period: "1910s-1940s", style: "Craftsman, Colonial Revival, Mediterranean" },
  { name: "Palma Ceia", period: "1920s-1940s", style: "Mediterranean Revival, Spanish Colonial" },
  { name: "Beach Park", period: "1920s-1950s", style: "Mediterranean, Ranch, Mid-Century Modern" },
  { name: "Tampa Heights", period: "1880s-1920s", style: "Victorian, Craftsman, Colonial" },
];

const arcServices = [
  "Pre-application consultation with ARC staff",
  "Historical research and documentation",
  "Design that respects the Secretary of Interior's Standards",
  "Material specifications and samples",
  "Presentation at ARC hearings",
  "Coordination with city historic preservation office",
];

const arcApprovalItems = [
  "Exterior alterations visible from the street",
  "Window and door replacements",
  "Roof material changes",
  "Additions and new construction",
  "Demolition (even partial)",
  "Fence and landscape changes",
  "Paint color changes (some districts)",
];

export default function HistoricPreservationPage() {
  const breadcrumbItems = [
    { name: "Residential", href: "/residential/" },
    { name: "Historic Preservation", href: "/residential/historic-preservation/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="HomeAndConstructionBusiness" service="Historic Home Preservation" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Residential Historic Preservation"
        serviceDescription="Hyde Park and South Tampa historic home preservation with ARC compliance"
        minPrice="500000"
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
            alt="Historic Tampa home restoration"
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
            <Landmark className="w-8 h-8" style={{ color: '#c9a96e' }} />
            <span 
              className="text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full"
              style={{ backgroundColor: 'rgba(201, 169, 110, 0.15)', color: '#c9a96e' }}
            >
              Historic Preservation
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
            Preserving Tampa's <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Architectural Heritage</em>
          </h1>
          <p 
            className="text-lg mb-10 max-w-2xl leading-relaxed"
            style={{ color: '#888888' }}
          >
            Preserve the character of Tampa's most cherished historic homes while adding modern comfort. 
            From Hyde Park bungalows to Seminole Heights craftsmans, we restore homes to their original glory.
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
            Historic Preservation <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Expertise</em>
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

      {/* Certificate of Appropriateness */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p 
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: '#c9a96e' }}
            >
              Regulatory Navigation
            </p>
            <h2 
              className="text-3xl md:text-4xl mb-8"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5',
                letterSpacing: '0.02em'
              }}
            >
              Navigating the <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Certificate of Appropriateness</em>
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: '#888888' }}>
              Work in Tampa's historic districts requires approval from Architectural Review Committees. 
              A Certificate of Appropriateness ensures your project preserves the neighborhood's historic character.
            </p>
            <div className="space-y-4">
              {arcServices.map((item, index) => (
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
              What Requires ARC Approval?
            </h3>
            <ul className="space-y-3">
              {arcApprovalItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3" style={{ color: '#c0c0c0' }}>
                  <FileText className="w-4 h-4" style={{ color: '#c9a96e' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Historic Districts */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Where We Work
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-16 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Tampa's <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Historic Districts</em>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historicDistricts.map((district) => (
              <div
                key={district.name}
                className="p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 110, 0.03)',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}
              >
                <Landmark className="w-8 h-8 mb-4" style={{ color: '#c9a96e' }} />
                <h3 
                  className="text-lg mb-2"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: '#f5f5f5'
                  }}
                >
                  {district.name}
                </h3>
                <p className="text-sm mb-2" style={{ color: '#c9a96e' }}>{district.period}</p>
                <p className="text-sm" style={{ color: '#888888' }}>{district.style}</p>
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
            Preserve Your Historic Home's <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Legacy</em>
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#888888' }}>
            From Hyde Park to Seminole Heights, FCS helps homeowners navigate historic preservation 
            requirements while creating modern, livable spaces.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-3 px-10 py-5 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-400 hover:-translate-y-0.5"
            style={{ 
              backgroundColor: '#c9a96e',
              color: '#0c0c0c'
            }}
          >
            Schedule Historic Preservation Consultation
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
