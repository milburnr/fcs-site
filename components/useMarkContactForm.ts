"use client";

import { useEffect } from "react";

/**
 * Marks the document body with [data-has-contact-form] while a contact form
 * is mounted. ChatWidget reads this attribute to suppress itself on pages
 * that already have an opt-in form (A2P/SMS compliance: chat widget opt-in
 * must be the only opt-in on pages where it appears).
 */
export function useMarkContactForm() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const body = document.body;
    const prev = parseInt(body.getAttribute("data-contact-form-count") || "0", 10);
    const next = prev + 1;
    body.setAttribute("data-contact-form-count", String(next));
    body.setAttribute("data-has-contact-form", "1");
    return () => {
      const cur = parseInt(body.getAttribute("data-contact-form-count") || "1", 10);
      const after = Math.max(0, cur - 1);
      if (after === 0) {
        body.removeAttribute("data-has-contact-form");
        body.removeAttribute("data-contact-form-count");
      } else {
        body.setAttribute("data-contact-form-count", String(after));
      }
    };
  }, []);
}
