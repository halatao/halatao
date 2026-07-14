"use client";

import { useEffect } from "react";

import { initializeAnalyticsContext, trackAnalyticsEvent, type AnalyticsEventName } from "@/lib/analytics";

const explicitEvents = new Set<AnalyticsEventName>(["seo_cta_click", "service_cta_click"]);

export function AnalyticsEvents() {
  useEffect(() => {
    initializeAnalyticsContext();
    window.addEventListener("CookiebotOnAccept", initializeAnalyticsContext);
    window.addEventListener("CookiebotOnConsentReady", initializeAnalyticsContext);

    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a");
      if (!(link instanceof HTMLAnchorElement)) return;

      const explicitEvent = link.dataset.analyticsEvent as AnalyticsEventName | undefined;
      if (explicitEvent && explicitEvents.has(explicitEvent)) {
        const target = new URL(link.href, window.location.origin);
        trackAnalyticsEvent(explicitEvent, {
          cta_location: link.dataset.analyticsLocation ?? "unknown",
          target_path: target.origin === window.location.origin ? target.pathname : target.origin,
        });
        return;
      }

      if (link.protocol === "mailto:") {
        trackAnalyticsEvent("contact_email_click", { contact_location: link.dataset.analyticsLocation ?? "page" });
      } else if (link.protocol === "tel:") {
        trackAnalyticsEvent("contact_phone_click", { contact_location: link.dataset.analyticsLocation ?? "page" });
      } else if (link.hostname === "calendly.com" || link.hostname.endsWith(".calendly.com")) {
        trackAnalyticsEvent("booking_click", { contact_location: link.dataset.analyticsLocation ?? "page" });
      }
    }

    function handleChange(event: Event) {
      if (!(event.target instanceof HTMLInputElement)) return;
      if (event.target.dataset.analyticsEvent !== "template_use" || !event.target.checked) return;
      trackAnalyticsEvent("template_use", {
        tool_id: event.target.dataset.toolId,
        group: event.target.dataset.toolGroup,
      });
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("change", handleChange);
    return () => {
      window.removeEventListener("CookiebotOnAccept", initializeAnalyticsContext);
      window.removeEventListener("CookiebotOnConsentReady", initializeAnalyticsContext);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("change", handleChange);
    };
  }, []);

  return null;
}
