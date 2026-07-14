export type AnalyticsEventName =
  | "booking_click"
  | "contact_email_click"
  | "contact_phone_click"
  | "form_start"
  | "form_submit_error"
  | "generate_lead"
  | "seo_cta_click"
  | "service_cta_click"
  | "template_use";

export type AnalyticsParameters = Record<string, string | number | boolean | undefined>;

type AnalyticsContext = {
  landing_page: string;
  referrer_host: string;
  traffic_source: string;
  traffic_medium: string;
};

let analyticsContext: AnalyticsContext | undefined;

declare global {
  interface Window {
    Cookiebot?: {
      consent?: {
        statistics?: boolean;
      };
    };
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function getLocale(pathname: string) {
  if (pathname === "/cs" || pathname.startsWith("/cs/")) return "cs";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "unknown";
}

function sanitizeCampaignValue(value: string | null) {
  if (!value) return "";
  return value.replace(/[^a-zA-Z0-9._/-]/g, "").slice(0, 80);
}

export function initializeAnalyticsContext() {
  if (typeof window === "undefined" || window.Cookiebot?.consent?.statistics !== true || analyticsContext) return;

  try {
    const query = new URLSearchParams(window.location.search);
    const referrerHost = document.referrer ? new URL(document.referrer).hostname : "direct";
    analyticsContext = {
      landing_page: window.location.pathname,
      referrer_host: referrerHost,
      traffic_source: sanitizeCampaignValue(query.get("utm_source")) || referrerHost,
      traffic_medium: sanitizeCampaignValue(query.get("utm_medium")) || "unknown",
    };
  } catch {
    analyticsContext = {
      landing_page: window.location.pathname,
      referrer_host: "unknown",
      traffic_source: "unknown",
      traffic_medium: "unknown",
    };
  }
}

function getAnalyticsContext() {
  initializeAnalyticsContext();
  return analyticsContext;
}

export function trackAnalyticsEvent(event: AnalyticsEventName, parameters: AnalyticsParameters = {}) {
  if (typeof window === "undefined" || window.Cookiebot?.consent?.statistics !== true) return;

  window.dataLayer ??= [];
  window.dataLayer.push({
    event,
    locale: getLocale(window.location.pathname),
    page_path: window.location.pathname,
    ...(getAnalyticsContext() ?? {}),
    ...parameters,
  });
}
