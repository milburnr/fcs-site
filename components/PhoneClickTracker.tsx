"use client";

import { BUSINESS_INFO } from "@/lib/constants";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface PhoneClickTrackerProps {
  children: React.ReactNode;
  phoneNumber?: string;
  className?: string;
  elementLabel?: string;
}

export function PhoneClickTracker({
  children,
  phoneNumber = BUSINESS_INFO.phone,
  className = "",
  elementLabel = "Phone Link",
}: PhoneClickTrackerProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "phone_click", {
        phone_number: phoneNumber,
        page_path: window.location.pathname,
        element_text: elementLabel,
      });
    }
  };

  return (
    <a
      href={`tel:${BUSINESS_INFO.phoneRaw}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}

// Utility function to wrap existing tel: links with tracking
export function trackPhoneClick(phoneNumber: string, elementLabel: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "phone_click", {
      phone_number: phoneNumber,
      page_path: window.location.pathname,
      element_text: elementLabel,
    });
  }
}

// Hook to add phone tracking to the page
export function usePhoneTracking() {
  if (typeof window === "undefined") return;

  // Find all tel: links and add tracking
  const addTrackingToPhoneLinks = () => {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach((link) => {
      if (link.getAttribute("data-tracked") === "true") return;

      link.setAttribute("data-tracked", "true");
      link.addEventListener("click", () => {
        const href = link.getAttribute("href") || "";
        const phoneNumber = href.replace("tel:", "");
        const elementText = link.textContent || "Phone Link";
        trackPhoneClick(phoneNumber, elementText);
      });
    });
  };

  // Run on mount and observe DOM changes
  addTrackingToPhoneLinks();

  const observer = new MutationObserver(() => {
    addTrackingToPhoneLinks();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  return () => observer.disconnect();
}
