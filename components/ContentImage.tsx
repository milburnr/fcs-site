import Image from "next/image";

interface ContentImageProps {
  src: string;
  alt: string;
  caption?: string;
  position?: "left" | "right" | "center" | "full";
  className?: string;
}

/**
 * Inline content image component for breaking up text-heavy sections.
 * Use between major content sections to add visual interest.
 */
export function ContentImage({ 
  src, 
  alt, 
  caption, 
  position = "center",
  className = ""
}: ContentImageProps) {
  const containerClasses = {
    left: "float-left mr-8 mb-4 w-full md:w-2/5",
    right: "float-right ml-8 mb-4 w-full md:w-2/5",
    center: "mx-auto my-8 max-w-3xl",
    full: "my-12 -mx-4 md:-mx-8 lg:-mx-12",
  };

  return (
    <figure className={`${containerClasses[position]} ${className}`}>
      <div className={`relative overflow-hidden rounded-xl shadow-lg ${position === "full" ? "aspect-[21/9]" : "aspect-video"}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={position === "full" ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-500 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Full-width parallax section for visual breaks between major content areas.
 */
export function ContentParallax({
  src,
  alt,
  title,
  subtitle,
  overlayOpacity = 0.5,
}: {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  overlayOpacity?: number;
}) {
  return (
    <section className="relative py-20 my-12">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${src}')` }}
      />
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />
      <div className="container-custom relative z-10 text-center text-white">
        {title && (
          <h3 className="text-2xl md:text-3xl font-bold mb-2 font-heading">{title}</h3>
        )}
        {subtitle && (
          <p className="text-lg text-white/90">{subtitle}</p>
        )}
        {!title && !subtitle && (
          <span className="sr-only">{alt}</span>
        )}
      </div>
    </section>
  );
}

/**
 * Image grid for showing multiple related images.
 */
export function ContentImageGrid({
  images,
  columns = 3,
}: {
  images: Array<{ src: string; alt: string; caption?: string }>;
  columns?: 2 | 3 | 4;
}) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 my-8`}>
      {images.map((image, index) => (
        <figure key={index} className="group">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes={`(max-width: 768px) 100vw, ${100 / columns}vw`}
            />
          </div>
          {image.caption && (
            <figcaption className="mt-2 text-sm text-gray-500 text-center">
              {image.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
