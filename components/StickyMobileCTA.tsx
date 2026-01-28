"use client";

import { useState, useEffect } from "react";
import { Phone, X, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";

interface StickyMobileCTAProps {
  showAfterScroll?: number; // Pixels to scroll before showing
  phoneText?: string;
}

export function StickyMobileCTA({
  showAfterScroll = 300,
  phoneText = "Call Now",
}: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;

      const scrollY = window.scrollY;
      setIsVisible(scrollY > showAfterScroll);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfterScroll, isDismissed]);

  // Don't render on server or if dismissed
  if (!isVisible || isDismissed) return null;

  const handlePhoneClick = () => {
    // Track the click for analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "phone_click", {
        event_category: "conversion",
        event_label: "sticky_mobile_cta",
        phone_number: BUSINESS_INFO.phone,
      });
    }
  };

  return (
    <>
      {/* Spacer to prevent content from being hidden behind sticky CTA */}
      <div className="h-20 md:hidden" />

      {/* Sticky CTA - Mobile Only */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden transform transition-transform duration-300 ease-out"
        style={{ transform: isVisible ? "translateY(0)" : "translateY(100%)" }}
      >
        {/* Gradient fade effect at top */}
        <div className="h-4 bg-gradient-to-t from-white to-transparent" />

        {/* CTA Container */}
        <div className="bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] px-4 py-3 safe-area-pb">
          <div className="flex items-center gap-3">
            {/* Primary: Phone Button */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              onClick={handlePhoneClick}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 font-bold py-4 px-6 rounded-xl shadow-lg active:scale-[0.98] transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>{phoneText}</span>
            </a>

            {/* Secondary: Quick text/message option */}
            <a
              href={`sms:${BUSINESS_INFO.phoneRaw}?body=Hi, I'm interested in construction services.`}
              className="flex items-center justify-center w-14 h-14 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors"
              aria-label="Send text message"
            >
              <MessageSquare className="w-6 h-6" />
            </a>

            {/* Dismiss button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Trust line */}
          <p className="text-center text-xs text-gray-500 mt-2">
            Licensed CBC1262722 · $10M+ Bonding · 43+ Years Experience
          </p>
        </div>
      </div>
    </>
  );
}

// Alternative: Simple floating phone button
export function FloatingPhoneButton({ className = "" }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={`tel:${BUSINESS_INFO.phoneRaw}`}
      className={`fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-16 h-16 bg-amber-500 hover:bg-amber-600 text-gray-900 rounded-full shadow-2xl active:scale-95 transition-all ${className}`}
      aria-label="Call Florida Construction Specialists"
    >
      <Phone className="w-7 h-7" />
    </a>
  );
}
