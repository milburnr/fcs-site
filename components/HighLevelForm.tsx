"use client";

import { useEffect, useState, useRef } from "react";

// Form configurations
const FORMS = {
  residential: {
    id: "k8jDErhdZoQHf3eBLCoU",
    name: "Design Consultation Request",
    type: "form",
    height: 546,
  },
  commercial: {
    id: "qTTguTVsvCK4pIPN1Z35",
    name: "Commercial Project Survey",
    type: "survey",
    height: 600,
  },
} as const;

type FormVariant = keyof typeof FORMS;

interface HighLevelFormProps {
  variant?: FormVariant;
  className?: string;
  height?: number;
}

/**
 * HighLevelForm - Embeds a HighLevel/LeadConnector form
 * Lazy-loads the iframe when it enters the viewport to improve LCP
 *
 * @param variant - "residential" (default) or "commercial"
 * @param className - Additional CSS classes
 * @param height - Override default height
 */
export function HighLevelForm({
  variant = "residential",
  className = "",
  height,
}: HighLevelFormProps) {
  const config = FORMS[variant];
  const formHeight = height ?? config.height;
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use IntersectionObserver to lazy-load the form
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load when 200px from viewport
    );

    observer.observe(container);

    // Fallback: if still not visible after 2 seconds, show anyway
    // This handles cases where IntersectionObserver doesn't fire properly
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Load the form embed script if not already loaded
    const scriptId = "highlevel-form-embed";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.trustbasedseo.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isVisible]);

  // Placeholder while not visible
  if (!isVisible) {
    return (
      <div
        ref={containerRef}
        className={className}
        style={{ height: `${formHeight}px` }}
      >
        <div className="flex items-center justify-center h-full bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-center text-gray-500">
            <div className="animate-pulse">Loading form...</div>
          </div>
        </div>
      </div>
    );
  }

  // Survey widget (commercial) - simpler structure
  if (config.type === "survey") {
    return (
      <div ref={containerRef} className={className}>
        <iframe
          src={`https://link.trustbasedseo.com/widget/survey/${config.id}`}
          style={{
            width: "100%",
            height: `${formHeight}px`,
            border: "none",
          }}
          scrolling="no"
          id={config.id}
          title="survey"
          loading="lazy"
        />
      </div>
    );
  }

  // Form widget (residential) - full data attributes
  return (
    <div ref={containerRef} className={className}>
      <iframe
        src={`https://link.trustbasedseo.com/widget/form/${config.id}`}
        style={{
          width: "100%",
          height: `${formHeight}px`,
          border: "none",
          borderRadius: "3px",
        }}
        id={`inline-${config.id}`}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={config.name}
        data-height={formHeight}
        data-layout-iframe-id={`inline-${config.id}`}
        data-form-id={config.id}
        title={config.name}
        loading="lazy"
      />
    </div>
  );
}
