import { BUSINESS_INFO } from "@/lib/constants";

interface LocalBusinessSchemaProps {
  city?: string;
  service?: string;
  schemaType?: "GeneralContractor" | "HomeAndConstructionBusiness";
}

export function LocalBusinessSchema({ city, service, schemaType = "GeneralContractor" }: LocalBusinessSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", schemaType],
    "name": BUSINESS_INFO.name,
    "image": "https://floridaconstructionspecialists.com/logo.jpg",
    "telephone": "+1-813-420-7561",
    "email": BUSINESS_INFO.email,
    "url": "https://floridaconstructionspecialists.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.city,
      "addressRegion": BUSINESS_INFO.address.state,
      "postalCode": BUSINESS_INFO.address.zip,
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.coordinates.lat,
      "longitude": BUSINESS_INFO.coordinates.lng,
    },
    "priceRange": "$500,000 - $50,000,000+",
    "openingHours": "Mo-Fr 08:00-16:00",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00",
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Florida General Contractor License",
        "identifier": BUSINESS_INFO.licenseNumber,
        "recognizedBy": {
          "@type": "Organization",
          "name": "Florida Department of Business and Professional Regulation",
        },
      },
    ],
    "foundingDate": BUSINESS_INFO.foundingDate,
    "slogan": "Prime Contractor for Large-Scale Commercial & Residential Construction",
  };

  if (city) {
    schema["areaServed"] = {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State",
        "name": "Florida",
      },
    };
  } else {
    schema["areaServed"] = [
      { "@type": "City", "name": "Tampa" },
      { "@type": "City", "name": "St. Petersburg" },
      { "@type": "City", "name": "Clearwater" },
      { "@type": "City", "name": "Lakeland" },
      { "@type": "City", "name": "Sarasota" },
      { "@type": "City", "name": "Bradenton" },
      { "@type": "City", "name": "Brandon" },
      { "@type": "City", "name": "Ruskin" },
    ];
  }

  if (service) {
    schema["knowsAbout"] = service;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  city?: string;
  minPrice?: string;
}

export function ServiceSchema({ serviceName, serviceDescription, city, minPrice = "500000" }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "GeneralContractor",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "url": "https://floridaconstructionspecialists.com",
    },
    "areaServed": city
      ? { "@type": "City", "name": city }
      : [
          { "@type": "City", "name": "Tampa" },
          { "@type": "City", "name": "St. Petersburg" },
          { "@type": "City", "name": "Clearwater" },
          { "@type": "City", "name": "Lakeland" },
          { "@type": "City", "name": "Sarasota" },
          { "@type": "City", "name": "Bradenton" },
          { "@type": "City", "name": "Brandon" },
          { "@type": "City", "name": "Ruskin" },
        ],
    "description": serviceDescription,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "minPrice": minPrice,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://floridaconstructionspecialists.com${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface OrganizationSchemaProps {
  includeSocial?: boolean;
}

export function OrganizationSchema({ includeSocial = true }: OrganizationSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BUSINESS_INFO.name,
    "url": "https://floridaconstructionspecialists.com",
    "logo": "https://floridaconstructionspecialists.com/logo.jpg",
    "foundingDate": BUSINESS_INFO.foundingDate,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_INFO.phone,
      "contactType": "sales",
      "areaServed": "US",
      "availableLanguage": ["English", "Spanish"],
    },
  };

  if (includeSocial && BUSINESS_INFO.social) {
    const socialLinks = Object.values(BUSINESS_INFO.social).filter(Boolean);
    if (socialLinks.length > 0) {
      schema["sameAs"] = socialLinks;
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ArticleSchema for blog/resource pages
interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  slug?: string;
  imageUrl?: string;
}

export function ArticleSchema({
  headline,
  description,
  datePublished = "2024-01-01",
  dateModified,
  slug = "/",
  imageUrl,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "url": "https://floridaconstructionspecialists.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://floridaconstructionspecialists.com/logo.jpg",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://floridaconstructionspecialists.com${slug}`,
    },
    ...(imageUrl && {
      "image": {
        "@type": "ImageObject",
        "url": imageUrl,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema for pages with Q&A content
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
