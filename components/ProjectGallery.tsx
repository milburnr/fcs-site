import { OptimizedImage } from "@/components/OptimizedImage";

export interface GalleryPhoto {
  src: string;
  caption?: string;
}

interface ProjectGalleryProps {
  title?: string;
  subtitle?: string;
  photos: GalleryPhoto[];
  columns?: 2 | 3 | 4;
}

export function ProjectGallery({
  title = "Our Recent Projects",
  subtitle,
  photos,
  columns = 3,
}: ProjectGalleryProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className={`grid ${gridCols[columns]} gap-4`}>
          {photos.map((photo, i) => (
            <figure
              key={i}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <div className="aspect-[4/3]">
                <OptimizedImage
                  src={photo.src}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {photo.caption && (
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
