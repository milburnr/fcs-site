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
