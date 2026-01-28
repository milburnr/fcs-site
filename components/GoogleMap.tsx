"use client";

import { BUSINESS_INFO } from "@/lib/constants";

interface GoogleMapProps {
  // For city location maps (location pages)
  city?: string;
  cityCoordinates?: {
    lat: number;
    lng: number;
  };
  // For business location map (contact page)
  showBusinessLocation?: boolean;
  // Display options
  height?: number;
  className?: string;
  zoom?: number;
}

// City coordinates for service areas
const CITY_COORDINATES: Record<string, { lat: number; lng: number }> = {
  "Tampa": { lat: 27.9506, lng: -82.4572 },
  "Lakeland": { lat: 28.0395, lng: -81.9498 },
  "Brandon": { lat: 27.9378, lng: -82.2859 },
  "Plant City": { lat: 28.0186, lng: -82.1195 },
  "Clearwater": { lat: 27.9659, lng: -82.8001 },
  "St. Petersburg": { lat: 27.7676, lng: -82.6403 },
  "Sarasota": { lat: 27.3364, lng: -82.5307 },
  "Bradenton": { lat: 27.4989, lng: -82.5748 },
  "Ruskin": { lat: BUSINESS_INFO.coordinates.lat, lng: BUSINESS_INFO.coordinates.lng },
};

export function GoogleMap({
  city,
  cityCoordinates,
  showBusinessLocation = false,
  height = 400,
  className = "",
  zoom = 12,
}: GoogleMapProps) {
  // Determine coordinates
  let lat: number;
  let lng: number;
  let mapZoom = zoom;

  if (showBusinessLocation) {
    // Show business headquarters
    lat = BUSINESS_INFO.coordinates.lat;
    lng = BUSINESS_INFO.coordinates.lng;
    mapZoom = 14;
  } else if (cityCoordinates) {
    // Use provided coordinates
    lat = cityCoordinates.lat;
    lng = cityCoordinates.lng;
  } else if (city && CITY_COORDINATES[city]) {
    // Look up city coordinates
    lat = CITY_COORDINATES[city].lat;
    lng = CITY_COORDINATES[city].lng;
  } else {
    // Default to Tampa Bay area overview
    lat = 27.8;
    lng = -82.5;
    mapZoom = 9;
  }

  // Build the embed URL - using a simple map view without business listing
  // This avoids showing reviews and keeps focus on the location
  const embedUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=${lat},${lng}&zoom=${mapZoom}&maptype=roadmap`;

  // Alternative: Use a place embed for the city (shows city name)
  const placeQuery = showBusinessLocation
    ? "Florida+Construction+Specialists,Ruskin,FL"
    : city
      ? `${city.replace(/\s+/g, "+")},FL`
      : "Tampa+Bay,FL";

  const placeEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${placeQuery}`;

  // Use a free embed approach that doesn't require API key
  const freeEmbedUrl = showBusinessLocation
    ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM${lat}N${Math.abs(lng)}W!5e0!3m2!1sen!2sus!4v1`
    : `https://www.google.com/maps?q=${lat},${lng}&z=${mapZoom}&output=embed`;

  return (
    <div className={`relative w-full overflow-hidden rounded-xl shadow-lg ${className}`}>
      <iframe
        src={freeEmbedUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={showBusinessLocation
          ? "Florida Construction Specialists Location"
          : `${city || "Tampa Bay"} Service Area Map`
        }
        className="w-full"
      />
      {/* Overlay with service area info */}
      {!showBusinessLocation && city && (
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
          <p className="text-sm font-semibold text-gray-900">
            Serving {city}, FL
          </p>
          <p className="text-xs text-gray-600">
            {city === "Tampa" ? "Our primary service area" : `Just minutes from our Ruskin headquarters`}
          </p>
        </div>
      )}
    </div>
  );
}

// Simple service area map showing all cities we serve
export function ServiceAreaMap({ height = 450, className = "" }: { height?: number; className?: string }) {
  // Center on Tampa Bay area with all service cities visible
  const centerLat = 27.8;
  const centerLng = -82.4;
  const zoom = 9;

  const embedUrl = `https://www.google.com/maps?q=${centerLat},${centerLng}&z=${zoom}&output=embed`;

  return (
    <div className={`relative w-full overflow-hidden rounded-xl shadow-lg ${className}`}>
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Florida Construction Specialists Service Area"
        className="w-full"
      />
      {/* Service area legend */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-md max-w-xs">
        <p className="text-sm font-semibold text-gray-900 mb-2">Service Areas</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-600">
          <span>Tampa</span>
          <span>Lakeland</span>
          <span>Clearwater</span>
          <span>St. Petersburg</span>
          <span>Brandon</span>
          <span>Plant City</span>
          <span>Sarasota</span>
          <span>Bradenton</span>
        </div>
      </div>
    </div>
  );
}

// Business location map for contact page (with marker on exact location)
export function BusinessLocationMap({ height = 400, className = "" }: { height?: number; className?: string }) {
  // Use a simple embed that shows the general area without the business listing/reviews
  const { lat, lng } = BUSINESS_INFO.coordinates;

  // This embed shows a pin at the coordinates without business info overlay
  const embedUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className={`relative w-full overflow-hidden rounded-xl shadow-lg ${className}`}>
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Florida Construction Specialists Office Location"
        className="w-full"
      />
      {/* Address overlay */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-md">
        <p className="text-sm font-semibold text-gray-900">
          {BUSINESS_INFO.name}
        </p>
        <p className="text-xs text-gray-600">
          {BUSINESS_INFO.address.street}
        </p>
        <p className="text-xs text-gray-600">
          {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
        </p>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-xs text-blue-600 hover:text-blue-800 font-medium"
        >
          Get Directions →
        </a>
      </div>
    </div>
  );
}
