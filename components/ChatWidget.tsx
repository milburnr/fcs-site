"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const WIDGET_ID = "696e669e9ec201ee9889bf3f";
const WIDGET_LOADER = "https://widgets.leadconnectorhq.com/loader.js";
const WIDGET_RESOURCES = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";

/**
 * ChatWidget - Loads LeadConnector chat widget with delayed loading
 * to avoid blocking Time to Interactive (TTI).
 *
 * A2P/SMS compliance: the chat widget collects an opt-in, so on pages that
 * already have a contact form (also an opt-in) we MUST NOT show it. Pages
 * with a contact form mark `body[data-has-contact-form="1"]` via
 * useMarkContactForm. We re-evaluate on every route change.
 *
 * Loads after:
 * - User interaction (scroll, click, mousemove, touchstart) OR
 * - 5 second timeout (whichever comes first)
 */
export function ChatWidget() {
  const pathname = usePathname();
  const loadedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let interactionListeners: Array<[string, EventListener]> = [];

    const hasContactForm = () =>
      document.body.hasAttribute("data-has-contact-form");

    const setVisible = (visible: boolean) => {
      document.documentElement.setAttribute(
        "data-chat-hidden",
        visible ? "0" : "1"
      );
    };

    const cleanupListeners = () => {
      interactionListeners.forEach(([e, h]) =>
        window.removeEventListener(e, h)
      );
      interactionListeners = [];
    };

    const loadWidget = () => {
      cleanupListeners();
      if (timeoutId) clearTimeout(timeoutId);
      if (loadedRef.current) return;
      // Re-check at load time — form may have just mounted
      if (hasContactForm()) {
        setVisible(false);
        return;
      }
      loadedRef.current = true;

      const script = document.createElement("script");
      script.src = WIDGET_LOADER;
      script.setAttribute("data-resources-url", WIDGET_RESOURCES);
      script.setAttribute("data-widget-id", WIDGET_ID);
      script.async = true;
      document.body.appendChild(script);
      setVisible(true);

      // Patch accessibility on injected chat widget elements
      const a11yObserver = new MutationObserver(() => {
        const buttons = document.querySelectorAll(
          '[class*="lc_"] button, [class*="lc_"][role="button"], [id*="lc-"] button'
        );
        buttons.forEach((btn) => {
          if (!btn.getAttribute("aria-label") && !btn.textContent?.trim()) {
            btn.setAttribute("aria-label", "Open chat");
          }
        });
        const widgetHeadings = document.querySelectorAll(
          '[class*="lc_"] h1, [class*="lc_"] h2, [class*="lc_"] h3, [id*="lc-"] h1, [id*="lc-"] h2, [id*="lc-"] h3'
        );
        widgetHeadings.forEach((heading) => {
          if (!heading.getAttribute("role")) {
            heading.setAttribute("role", "presentation");
          }
        });
      });
      a11yObserver.observe(document.body, { childList: true, subtree: true });
      setTimeout(() => a11yObserver.disconnect(), 15000);
    };

    // Wait one tick for any contact-form components on the new route to
    // mount and set the body attribute before evaluating.
    const checkTimer = setTimeout(() => {
      if (hasContactForm()) {
        setVisible(false);
        return;
      }
      setVisible(true);
      if (loadedRef.current) return;

      const handler = () => loadWidget();
      ["scroll", "click", "mousemove", "touchstart"].forEach((e) => {
        const opts =
          e === "click" ? { once: true } : { once: true, passive: true };
        window.addEventListener(e, handler, opts);
        interactionListeners.push([e, handler]);
      });
      timeoutId = setTimeout(loadWidget, 5000);
    }, 250);

    return () => {
      clearTimeout(checkTimer);
      if (timeoutId) clearTimeout(timeoutId);
      cleanupListeners();
    };
  }, [pathname]);

  return null;
}
