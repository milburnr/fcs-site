"use client";

import { useEffect, useState } from "react";

/**
 * ChatWidget - Loads LeadConnector chat widget with delayed loading
 * to avoid blocking Time to Interactive (TTI)
 *
 * Loads after:
 * - User interaction (scroll, click, mousemove, touchstart) OR
 * - 5 second timeout (whichever comes first)
 */
export function ChatWidget() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;

    let timeoutId: NodeJS.Timeout;

    const loadWidget = () => {
      if (loaded) return;
      setLoaded(true);

      // Clean up listeners
      window.removeEventListener("scroll", loadWidget);
      window.removeEventListener("click", loadWidget);
      window.removeEventListener("mousemove", loadWidget);
      window.removeEventListener("touchstart", loadWidget);
      clearTimeout(timeoutId);

      // Create and inject the script
      const script = document.createElement("script");
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
      script.setAttribute("data-widget-id", "696e669e9ec201ee9889bf3f");
      script.async = true;
      document.body.appendChild(script);

      // Patch accessibility on injected chat widget elements
      const a11yObserver = new MutationObserver(() => {
        // Add aria-labels to buttons without accessible names
        const buttons = document.querySelectorAll('[class*="lc_"] button, [class*="lc_"][role="button"], [id*="lc-"] button');
        buttons.forEach((btn) => {
          if (!btn.getAttribute("aria-label") && !btn.textContent?.trim()) {
            btn.setAttribute("aria-label", "Open chat");
          }
        });
        // Fix heading hierarchy issues from injected widget
        const widgetHeadings = document.querySelectorAll('[class*="lc_"] h1, [class*="lc_"] h2, [class*="lc_"] h3, [id*="lc-"] h1, [id*="lc-"] h2, [id*="lc-"] h3');
        widgetHeadings.forEach((heading) => {
          if (!heading.getAttribute("role")) {
            heading.setAttribute("role", "presentation");
          }
        });
      });
      a11yObserver.observe(document.body, { childList: true, subtree: true });
      // Stop observing after 15s to avoid unnecessary overhead
      setTimeout(() => a11yObserver.disconnect(), 15000);
    };

    // Load on user interaction
    window.addEventListener("scroll", loadWidget, { once: true, passive: true });
    window.addEventListener("click", loadWidget, { once: true });
    window.addEventListener("mousemove", loadWidget, { once: true, passive: true });
    window.addEventListener("touchstart", loadWidget, { once: true, passive: true });

    // Fallback: load after 5 seconds if no interaction
    timeoutId = setTimeout(loadWidget, 5000);

    return () => {
      window.removeEventListener("scroll", loadWidget);
      window.removeEventListener("click", loadWidget);
      window.removeEventListener("mousemove", loadWidget);
      window.removeEventListener("touchstart", loadWidget);
      clearTimeout(timeoutId);
    };
  }, [loaded]);

  return null; // This component doesn't render anything visible
}
