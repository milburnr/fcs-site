import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  /** Rendered size hint — controls `sizes` and CSS width. */
  variant?: "inline" | "hero" | "wide";
  priority?: boolean;
}

/**
 * Article body / hero image with caption. Uses Next/Image for responsive
 * optimization. R2-hosted URLs should be added to next.config's
 * `images.remotePatterns` for full optimization; the component uses
 * unoptimized=true since fcs-final has output: "export" in next.config.
 */
export function ArticleImage({ src, alt, caption, variant = "inline", priority = false }: Props) {
  const width = variant === "hero" ? 1280 : variant === "wide" ? 1080 : 900;
  const height = Math.round(width * 0.56); // 16:9-ish

  return (
    <figure
      className={
        variant === "hero"
          ? "-mx-4 md:mx-0 mb-10 rounded-lg overflow-hidden shadow-sm"
          : variant === "wide"
            ? "-mx-4 md:mx-0 my-8 rounded-lg overflow-hidden"
            : "my-8 rounded-lg overflow-hidden border border-gray-200"
      }
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={
          variant === "hero"
            ? "(max-width: 768px) 100vw, 1280px"
            : variant === "wide"
              ? "(max-width: 768px) 100vw, 1080px"
              : "(max-width: 768px) 100vw, 900px"
        }
        className="w-full h-auto object-cover"
        priority={priority}
        unoptimized
      />
      {caption && (
        <figcaption className="px-4 py-3 text-sm text-gray-500 italic bg-gray-50 border-t border-gray-200">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
