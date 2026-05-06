import { BUSINESS_INFO } from "@/lib/constants";

interface LocalBusinessSchemaProps {
  city?: string;
  service?: string;
  schemaType?: "GeneralContractor" | "HomeAndConstructionBusiness";
}

export function LocalBusinessSchema({ city, service, schemaType = "GeneralContractor" }: LocalBusinessSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "name": BUSINESS_INFO.name,
    "image": "https://floridaconstructionspecialists.com/og-image.jpg",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00",
    },
    "foundingDate": BUSINESS_INFO.foundingDate,
    "description": "Prime contractor for large-scale commercial and residential construction in Tampa Bay, Florida. Licensed CBC, 40+ years experience.",
  };

  const containedInPlace = { "@type": "State", "name": "Florida" };

  if (city) {
    schema["areaServed"] = {
      "@type": "City",
      "name": city,
      "containedInPlace": containedInPlace,
    };
  } else {
    schema["areaServed"] = [
      { "@type": "City", "name": "Tampa", "containedInPlace": containedInPlace },
      { "@type": "City", "name": "St. Petersburg", "containedInPlace": containedInPlace },
      { "@type": "City", "name": "Clearwater", "containedInPlace": containedInPlace },
      { "@type": "City", "name": "Lakeland", "containedInPlace": containedInPlace },
      { "@type": "City", "name": "Sarasota", "containedInPlace": containedInPlace },
      { "@type": "City", "name": "Bradenton", "containedInPlace": containedInPlace },
      { "@type": "City", "name": "Brandon", "containedInPlace": containedInPlace },
      { "@type": "City", "name": "Ruskin", "containedInPlace": containedInPlace },
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
  serviceCategories?: string[];
  /** @deprecated No longer rendered in schema output per no-pricing decision. Kept for backward compatibility. */
  minPrice?: string;
}

export function ServiceSchema({ serviceName, serviceDescription, city, serviceCategories }: ServiceSchemaProps) {
  const containedInPlace = { "@type": "State", "name": "Florida" };

  const schema: Record<string, unknown> = {
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
      ? { "@type": "City", "name": city, "containedInPlace": containedInPlace }
      : [
          { "@type": "City", "name": "Tampa", "containedInPlace": containedInPlace },
          { "@type": "City", "name": "St. Petersburg", "containedInPlace": containedInPlace },
          { "@type": "City", "name": "Clearwater", "containedInPlace": containedInPlace },
          { "@type": "City", "name": "Lakeland", "containedInPlace": containedInPlace },
          { "@type": "City", "name": "Sarasota", "containedInPlace": containedInPlace },
          { "@type": "City", "name": "Bradenton", "containedInPlace": containedInPlace },
          { "@type": "City", "name": "Brandon", "containedInPlace": containedInPlace },
          { "@type": "City", "name": "Ruskin", "containedInPlace": containedInPlace },
        ],
    "description": serviceDescription,
  };

  if (serviceCategories && serviceCategories.length > 0) {
    schema["hasOfferCatalog"] = {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
      "itemListElement": serviceCategories.map(cat => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": cat,
        },
      })),
    };
  }

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
  // Google rich-results requires Article.image; fall back to the site OG image.
  const finalImageUrl = imageUrl || "https://floridaconstructionspecialists.com/og-image.jpg";
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
    "image": {
      "@type": "ImageObject",
      "url": finalImageUrl,
    },
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
  // FAQPage schema removed 2026-05-06: Google's 2023 update restricts
  // FAQ rich results to government and health sites; the schema is now
  // overhead/risk for non-eligible domains. Visible FAQ JSX in callers is
  // unaffected — Google can still cite Q&A from the page body. The
  // signature is preserved so all 292 callers keep compiling.
  void faqs;
  return null;
}
