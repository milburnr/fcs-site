import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role?: string;
  company?: string;
  location?: string;
  quote: string;
  rating?: number;
  projectType?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  variant?: "grid" | "carousel" | "featured";
  showRating?: boolean;
}

export function Testimonials({
  testimonials,
  title = "What Our Clients Say",
  subtitle,
  variant = "grid",
  showRating = true,
}: TestimonialsProps) {
  if (variant === "featured" && testimonials.length > 0) {
    const featured = testimonials[0];
    return (
      <section className="py-16 bg-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-brand-gold mx-auto mb-6 opacity-50" />
            <blockquote className="text-2xl md:text-3xl text-white font-light italic mb-8">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <div className="flex flex-col items-center">
              {showRating && featured.rating && (
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < featured.rating!
                          ? "text-brand-gold fill-brand-gold"
                          : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>
              )}
              <p className="text-white font-semibold text-lg">{featured.name}</p>
              {(featured.role || featured.company) && (
                <p className="text-white/70">
                  {featured.role}
                  {featured.role && featured.company && ", "}
                  {featured.company}
                </p>
              )}
              {featured.location && (
                <p className="text-brand-gold text-sm mt-1">{featured.location}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-brand-gold/30 mb-4" />
              <blockquote className="text-gray-600 mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="border-t pt-4">
                {showRating && testimonial.rating && (
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating!
                            ? "text-brand-gold fill-brand-gold"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
                <p className="font-semibold text-brand-green-dark">
                  {testimonial.name}
                </p>
                {(testimonial.role || testimonial.company) && (
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                    {testimonial.role && testimonial.company && ", "}
                    {testimonial.company}
                  </p>
                )}
                {testimonial.location && (
                  <p className="text-xs text-brand-gold mt-1">{testimonial.location}</p>
                )}
                {testimonial.projectType && (
                  <span className="inline-block mt-2 px-2 py-1 bg-brand-green-light/30 text-brand-green-dark text-xs rounded-full">
                    {testimonial.projectType}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Schema component for testimonials (Review schema)
interface TestimonialSchemaProps {
  testimonials: Testimonial[];
  businessName: string;
}

export function TestimonialSchema({ testimonials, businessName }: TestimonialSchemaProps) {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (
        testimonials.reduce((sum, t) => sum + (t.rating || 5), 0) / testimonials.length
      ).toFixed(1),
      "reviewCount": testimonials.length,
      "bestRating": 5,
      "worstRating": 1,
    },
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name,
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating || 5,
        "bestRating": 5,
        "worstRating": 1,
      },
      "reviewBody": t.quote,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  );
}

// Sample testimonials for FCS (can be imported where needed)
export const FCS_TESTIMONIALS: Testimonial[] = [
  {
    name: "Michael R.",
    role: "Property Manager",
    company: "Tampa Bay HOA Management",
    location: "Tampa, FL",
    quote: "FCS handled our 200-unit balcony reconstruction project flawlessly. Their attention to SB4-D compliance and resident communication was exceptional.",
    rating: 5,
    projectType: "Balcony Reconstruction",
  },
  {
    name: "Sarah L.",
    role: "Director of Facilities",
    company: "Regional Medical Center",
    location: "Clearwater, FL",
    quote: "The clean room construction exceeded our expectations. FCS understood our ISO requirements and delivered on time despite complex permitting.",
    rating: 5,
    projectType: "Medical Construction",
  },
  {
    name: "Robert & Jennifer M.",
    location: "Davis Islands, Tampa",
    quote: "Building our waterfront dream home was seamless. FCS navigated all the flood zone requirements and environmental permits expertly.",
    rating: 5,
    projectType: "Custom Home",
  },
  {
    name: "David K.",
    role: "CEO",
    company: "Tampa Industrial Partners",
    location: "Brandon, FL",
    quote: "Our warehouse expansion was completed on schedule and on budget. FCS's project management and communication were outstanding.",
    rating: 5,
    projectType: "Industrial Construction",
  },
  {
    name: "Historic Tampa Foundation",
    location: "Ybor City, Tampa",
    quote: "FCS brought new life to our 1920s social club while respecting its historic character. Their SHPO coordination was invaluable.",
    rating: 5,
    projectType: "Historic Restoration",
  },
  {
    name: "Maria G.",
    role: "HOA President",
    company: "Bayshore Condominiums",
    location: "St. Petersburg, FL",
    quote: "After hurricane damage, FCS guided us through the entire restoration process. They worked directly with our insurance carrier and delivered quality repairs.",
    rating: 5,
    projectType: "Insurance Restoration",
  },
];
