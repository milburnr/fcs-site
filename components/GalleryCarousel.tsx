'use client';

import { useState, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface GallerySlide {
  src: string;
  thumb: string;
  alt: string;
}

interface GalleryCarouselProps {
  slides: GallerySlide[];
}

export function GalleryCarousel({ slides }: GalleryCarouselProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const yarlSlides = slides.map((s) => ({
    src: s.src,
    alt: s.alt,
    thumbnail: s.thumb,
  }));

  const handleClick = useCallback(
    ({ index }: { index: number }) => {
      setCurrentIndex(index);
      setLightboxOpen(true);
    },
    []
  );

  return (
    <div className="mx-auto" style={{ maxWidth: 1200 }}>
      {/* Inline carousel with thumbnail strip */}
      <Lightbox
        slides={yarlSlides}
        plugins={[Inline, Thumbnails]}
        inline={{
          style: {
            width: '100%',
            aspectRatio: '3 / 2',
          },
        }}
        carousel={{ finite: true }}
        on={{ click: handleClick }}
        thumbnails={{ border: 0, gap: 8, padding: 4 }}
        styles={{
          container: { backgroundColor: 'transparent' },
        }}
      />

      {/* Fullscreen lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={yarlSlides}
        plugins={[Thumbnails, Fullscreen, Zoom]}
        thumbnails={{ border: 0, gap: 8, padding: 4 }}
      />
    </div>
  );
}
