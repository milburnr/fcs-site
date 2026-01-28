"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  overlayOpacity?: number;
  className?: string;
  minHeight?: string;
  cardOverlap?: number; // How much cards overlap into this section (px)
}

/**
 * ParallaxSection - Creates a fixed background image section with:
 * - Fixed background that doesn't scroll (parallax effect)
 * - Semi-transparent dark overlay for text readability
 * - White text for headings
 * - Optional gradient bottom for card overlap effect
 */
export function ParallaxSection({
  backgroundImage,
  title,
  subtitle,
  children,
  overlayOpacity = 0.5,
  className = "",
  minHeight = "400px",
  cardOverlap = 0,
}: ParallaxSectionProps) {
  return (
    <section
      className={`relative ${className}`}
      style={{
        minHeight,
        marginBottom: cardOverlap > 0 ? `-${cardOverlap}px` : undefined,
      }}
    >
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
        }}
      />

      {/* Gradient for card overlap transition */}
      {cardOverlap > 0 && (
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: `${cardOverlap + 50}px`,
            background: `linear-gradient(to bottom, transparent, rgba(255,255,255,0.3) 50%, white 100%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 container-custom py-16 md:py-24">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading drop-shadow-lg">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

interface ParallaxCardsContainerProps {
  children: ReactNode;
  overlap?: number; // How much to pull up into previous section
  className?: string;
}

/**
 * ParallaxCardsContainer - Container for cards that overlap the parallax section
 * Creates a 3D layered effect where cards appear to float above the background
 */
export function ParallaxCardsContainer({
  children,
  overlap = 200,
  className = "",
}: ParallaxCardsContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how far into view the element is
        if (rect.top < windowHeight && rect.bottom > 0) {
          setScrollY(windowHeight - rect.top);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle parallax: cards move slightly faster (1.05x) than normal scroll
  const parallaxOffset = Math.min(scrollY * 0.05, 50); // Max 50px additional movement

  return (
    <div
      ref={containerRef}
      className={`relative z-20 ${className}`}
      style={{
        marginTop: `-${overlap}px`,
        transform: `translateY(-${parallaxOffset}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="container-custom">
        {children}
      </div>
    </div>
  );
}

interface ParallaxCardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

/**
 * ParallaxCard - Individual card with gradient background for use in ParallaxCardsContainer
 */
export function ParallaxCard({
  children,
  className = "",
  gradient = true,
}: ParallaxCardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-xl p-6 md:p-8
        ${gradient ? "bg-gradient-to-br from-white via-white to-gray-50" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/**
 * FullParallaxSection - Complete section with fixed background and overlapping cards
 * Combines ParallaxSection + ParallaxCardsContainer for easy use
 */
interface FullParallaxSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  cards: ReactNode;
  overlayOpacity?: number;
  cardOverlap?: number;
}

export function FullParallaxSection({
  backgroundImage,
  title,
  subtitle,
  cards,
  overlayOpacity = 0.5,
  cardOverlap = 200,
}: FullParallaxSectionProps) {
  return (
    <>
      <ParallaxSection
        backgroundImage={backgroundImage}
        title={title}
        subtitle={subtitle}
        overlayOpacity={overlayOpacity}
        cardOverlap={cardOverlap}
        minHeight="500px"
      />
      <ParallaxCardsContainer overlap={cardOverlap}>
        {cards}
      </ParallaxCardsContainer>
    </>
  );
}
