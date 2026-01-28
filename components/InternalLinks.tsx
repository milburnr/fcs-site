import Link from "next/link";
import { ArrowRight, MapPin, Wrench } from "lucide-react";
import { SERVICES, LOCATIONS } from "@/lib/constants";

interface RelatedServicesProps {
  city: string;
  currentService?: string;
  limit?: number;
}

export function RelatedServices({ city, currentService, limit = 6 }: RelatedServicesProps) {
  const citySlug = city.toLowerCase().replace(/\s+/g, "-").replace(".", "");

  // Find the current service to determine its silo
  const currentServiceData = SERVICES.find((s) => s.slug === currentService);
  const currentSilo = currentServiceData?.silo;

  // Filter to same-silo services only (if silo is known)
  const services = SERVICES
    .filter((s) => s.slug !== currentService)
    .filter((s) => !currentSilo || s.silo === currentSilo)
    .slice(0, limit);

  const siloLabel = currentSilo === "commercial" ? "Commercial" : currentSilo === "residential" ? "Residential" : "Our";

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
        <Wrench className="w-5 h-5" />
        {siloLabel} Services in {city}
      </h3>
      <ul className="space-y-2">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/${service.slug}-${citySlug}/`}
              className="flex items-center text-gray-700 hover:text-brand-green transition-colors group"
            >
              <ArrowRight className="w-4 h-4 mr-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
              {service.name} in {city}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface NearbyLocationsProps {
  currentCity: string;
  service?: string;
  serviceName?: string;
  limit?: number;
}

export function NearbyLocations({ currentCity, service, serviceName, limit = 7 }: NearbyLocationsProps) {
  const locations = LOCATIONS.filter((l) => l.name !== currentCity).slice(0, limit);

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
        <MapPin className="w-5 h-5" />
        {serviceName ? `${serviceName} in Nearby Cities` : "We Also Serve"}
      </h3>
      <ul className="space-y-2">
        {locations.map((location) => {
          const href = service
            ? `/${service}-${location.slug.replace("-fl", "")}/`
            : `/locations/${location.slug}/`;
          return (
            <li key={location.slug}>
              <Link
                href={href}
                className="flex items-center text-gray-700 hover:text-brand-green transition-colors group"
              >
                <ArrowRight className="w-4 h-4 mr-2 text-brand-gold group-hover:translate-x-1 transition-transform" />
                {serviceName ? `${serviceName} in ${location.name}` : `${location.name}, FL`}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

interface ServiceAreaLinksProps {
  service: string;
  serviceName: string;
}

export function ServiceAreaLinks({ service, serviceName }: ServiceAreaLinksProps) {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
          {serviceName} Throughout Tampa Bay
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {LOCATIONS.map((location) => {
            const citySlug = location.slug.replace("-fl", "");
            return (
              <Link
                key={location.slug}
                href={`/${service}-${citySlug}/`}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-brand-green-bg transition-colors group"
              >
                <MapPin className="w-4 h-4 mr-2 text-brand-gold" />
                <span className="font-medium text-gray-700 group-hover:text-brand-green-dark">
                  {location.name}, FL
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface RelatedArticlesProps {
  articles: Array<{
    title: string;
    slug: string;
    excerpt?: string;
  }>;
  limit?: number;
}

export function RelatedArticles({ articles, limit = 3 }: RelatedArticlesProps) {
  const displayArticles = articles.slice(0, limit);

  if (displayArticles.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-xl font-bold text-brand-green-dark mb-4">
        Related Articles
      </h3>
      <ul className="space-y-3">
        {displayArticles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/${article.slug}/`}
              className="block text-gray-700 hover:text-brand-green transition-colors"
            >
              <span className="font-medium">{article.title}</span>
              {article.excerpt && (
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {article.excerpt}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ServiceCardGridProps {
  city: string;
  citySlug: string;
}

export function ServiceCardGrid({ city, citySlug }: ServiceCardGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map((service) => (
        <Link
          key={service.slug}
          href={`/${service.slug}-${citySlug}/`}
          className="card hover:shadow-lg transition-shadow group"
        >
          <h3 className="text-lg font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors">
            {service.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3">{service.description}</p>
          <span className="text-brand-gold font-semibold text-sm flex items-center">
            Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      ))}
    </div>
  );
}

// Generic internal links component for cluster pages
interface InternalLinksProps {
  title?: string;
  links: Array<{
    href: string;
    label: string;
  }>;
}

export function InternalLinks({ title = "Related Services", links }: InternalLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors shadow-sm border border-gray-200"
          >
            <ArrowRight className="w-4 h-4" />
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
