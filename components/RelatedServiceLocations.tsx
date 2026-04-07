import Link from "next/link";
import { ArrowRight, MapPin, Wrench } from "lucide-react";

// All 9 service-location services (cross-references actual app/ directory)
const ALL_SERVICES = [
  { name: "Commercial Construction", slug: "commercial-construction" },
  { name: "Multi-Family Construction", slug: "multi-family-construction" },
  { name: "Disaster Recovery", slug: "disaster-recovery" },
  { name: "Historic Restoration", slug: "historic-restoration" },
  { name: "Luxury Custom Homes", slug: "luxury-custom-homes" },
  { name: "Balcony Reconstruction", slug: "balcony-reconstruction" },
  { name: "Exterior Waterproofing", slug: "exterior-waterproofing" },
  { name: "Condo Remediation", slug: "condo-remediation" },
  { name: "Insurance Restoration", slug: "insurance-restoration" },
];

// All 8 service cities
const ALL_CITIES = [
  { name: "Tampa", slug: "tampa" },
  { name: "St. Petersburg", slug: "st-petersburg" },
  { name: "Clearwater", slug: "clearwater" },
  { name: "Bradenton", slug: "bradenton" },
  { name: "Brandon", slug: "brandon" },
  { name: "Lakeland", slug: "lakeland" },
  { name: "Sarasota", slug: "sarasota" },
  { name: "Ruskin", slug: "ruskin" },
];

interface RelatedServiceLocationsProps {
  currentCity: string;        // Display name, e.g., "Tampa"
  currentService: string;     // URL slug, e.g., "commercial-construction"
  currentServiceName: string; // Display name, e.g., "Commercial Construction"
}

export function RelatedServiceLocations({
  currentCity,
  currentService,
  currentServiceName,
}: RelatedServiceLocationsProps) {
  const citySlug = currentCity.toLowerCase().replace(/[\s.]+/g, "-").replace(/'/g, "");

  const otherServices = ALL_SERVICES.filter((s) => s.slug !== currentService);
  const otherCities = ALL_CITIES.filter((c) => c.name !== currentCity);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Same city, other services */}
          <div>
            <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-brand-gold" />
              Our Services in {currentCity}
            </h3>
            <div className="flex flex-col gap-2">
              {otherServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}-${citySlug}/`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-brand-green hover:shadow-md transition-all group"
                >
                  <ArrowRight className="w-4 h-4 text-brand-gold flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-700 group-hover:text-brand-green-dark font-medium text-sm">
                    {service.name} in {currentCity}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Same service, other cities */}
          <div>
            <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-gold" />
              {currentServiceName} in Other Cities
            </h3>
            <div className="flex flex-col gap-2">
              {otherCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${currentService}-${city.slug}/`}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-brand-green hover:shadow-md transition-all group"
                >
                  <ArrowRight className="w-4 h-4 text-brand-gold flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="text-gray-700 group-hover:text-brand-green-dark font-medium text-sm">
                    {currentServiceName} in {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
