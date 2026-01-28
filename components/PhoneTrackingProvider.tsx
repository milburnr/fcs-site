"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface PhoneTrackingProviderProps {
  children: React.ReactNode;
}

export function PhoneTrackingProvider({ children }: PhoneTrackingProviderProps) {
  useEffect(() => {
    const trackPhoneClick = (phoneNumber: string, elementText: string) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "phone_click", {
          phone_number: phoneNumber,
          page_path: window.location.pathname,
          element_text: elementText,
        });
      }
    };

    const addTrackingToPhoneLinks = () => {
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      phoneLinks.forEach((link) => {
        if (link.getAttribute("data-phone-tracked") === "true") return;

        link.setAttribute("data-phone-tracked", "true");
        link.addEventListener("click", () => {
          const href = link.getAttribute("href") || "";
          const phoneNumber = href.replace("tel:", "");
          const elementText = link.textContent?.trim() || "Phone Link";
          trackPhoneClick(phoneNumber, elementText);
        });
      });
    };

    // Run on mount
    addTrackingToPhoneLinks();

    // Observe DOM changes for dynamically added phone links
    const observer = new MutationObserver(() => {
      addTrackingToPhoneLinks();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
