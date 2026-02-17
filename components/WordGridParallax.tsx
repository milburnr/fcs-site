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

      const start = windowHeight;
      const end = -sectionHeight;
      const current = rect.top;

      const progress = Math.max(0, Math.min(1, (start - current) / (start - end)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageTranslateY = scrollProgress * -20;

  return (
    <section
      ref={sectionRef}
      className="relative h-[80vh] overflow-hidden"
    >
      {/* Blue-teal gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #0d4f4f 0%, #1a6b5a 25%, #0e3d3d 50%, #1b5e4a 75%, #0a3333 100%)' }}
      />

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
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default WordGridParallax;
