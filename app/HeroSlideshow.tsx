"use client";

import { useState, useEffect } from "react";

// Slides 2-3 (slide 1 is server-rendered for instant LCP)
const slides = [
  {
    small: "/images/custom-home-construction-2/custom-home-construction-2-small.webp",
    medium: "/images/custom-home-construction-2/custom-home-construction-2-medium.webp",
    large: "/images/custom-home-construction-2/custom-home-construction-2-large.webp",
    xl: "/images/custom-home-construction-2/custom-home-construction-2-xl.webp",
  },
  {
    small: "/images/custom-home-2/custom-home-2-small.webp",
    medium: "/images/custom-home-2/custom-home-2-medium.webp",
    large: "/images/custom-home-2/custom-home-2-large.webp",
    xl: "/images/custom-home-2/custom-home-2-large.webp",
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0); // 0=slide1(server), 1=slide2, 2=slide3
  const [loaded, setLoaded] = useState(false);

  // Defer slides 2-3 until well after LCP hero image loads
  // 100ms was too aggressive — slide images (213KB) were stealing bandwidth from hero LCP
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Rotate through 3 slides every 6s
  useEffect(() => {
    if (!loaded) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, [loaded]);

  // Control server-rendered slide 1 opacity via DOM
  useEffect(() => {
    const slide0 = document.getElementById("hero-slide-0");
    if (slide0) {
      slide0.style.opacity = currentSlide === 0 ? "1" : "0";
      slide0.style.transition = "opacity 1s";
    }
  }, [currentSlide]);

  if (!loaded) return null;

  return (
    <>
      {slides.map((image, i) => (
        <div
          key={image.large}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i + 1 === currentSlide ? 1 : 0 }}
        >
          <div className="absolute inset-0 animate-ken-burns">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.medium}
              srcSet={`${image.small} 640w, ${image.medium} 960w, ${image.large} 1280w, ${image.xl} 1920w`}
              sizes="100vw"
              alt="Florida Construction Specialists - Tampa Bay commercial construction"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      ))}
    </>
  );
}
