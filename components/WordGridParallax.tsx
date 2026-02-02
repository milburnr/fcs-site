"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function WordGridParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate how far through the section we've scrolled
      // 0 = section just entered viewport from bottom
      // 1 = section just left viewport from top
      const start = windowHeight;
      const end = -sectionHeight;
      const current = rect.top;
      
      const progress = Math.max(0, Math.min(1, (start - current) / (start - end)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Image moves from showing top (0%) to showing bottom (100%) as you scroll
  const imageTranslateY = scrollProgress * -20; // Adjust multiplier for more/less movement

  return (
    <section 
      ref={sectionRef}
      className="relative h-[80vh] overflow-hidden"
    >
      {/* Animated water background */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-slow-drift"
        style={{ backgroundImage: `url('/images/pool-water-texture.jpg')` }}
      />
      
      {/* Slight green tint overlay to match brand */}
      <div className="absolute inset-0 bg-brand-green-dark/30" />

      {/* PNG text with parallax - moves up as you scroll down */}
      <div 
        className="absolute inset-0 flex items-center justify-center will-change-transform"
        style={{ 
          transform: `translateY(${imageTranslateY}%)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <Image
          src="/wp-content/uploads/2023/12/big-graphic-1.png"
          alt="Design Engineer Construction - Florida Construction Specialists"
          width={912}
          height={880}
          className="w-full max-w-4xl h-auto mix-blend-screen scale-125"
          priority
        />
      </div>
    </section>
  );
}

export default WordGridParallax;
