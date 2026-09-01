import type { ConsentState } from "@/lib/consent";
import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | IArguments | unknown[]>;
    gtag?: (...args: unknown[]) => void;
  }
}

let consentDefaultsSet = false;
let gtmLoaded = false;
let gaLoaded = false;

function initializeDataLayer() {
  window.dataLayer ??= [];
  window.gtag ??= (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
}

function setConsentDefaults() {
  if (consentDefaultsSet) return;

  initializeDataLayer();
  window.gtag?.("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
  consentDefaultsSet = true;
}

function loadGtm() {
  if (gtmLoaded) return;

  gtmLoaded = true;
  window.dataLayer?.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.id = "gtm-loader";
  script.src = `https://www.googletagmanager.com/gtm.js?id=${siteConfig.gtmId}`;
  document.head.appendChild(script);
}

function loadGoogleAnalytics() {
  if (gaLoaded) return;

  gaLoaded = true;
  const script = document.createElement("script");
  script.async = true;
  script.id = "gtag-loader";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`;
  document.head.appendChild(script);

  window.gtag?.("js", new Date());
  window.gtag?.("config", siteConfig.gaMeasurementId);
}

export function updateGoogleMeasurementConsent(state: ConsentState) {
  if (typeof window === "undefined" || process.env.NODE_ENV !== "production") return;

  setConsentDefaults();
  window.gtag?.("consent", "update", {
    ad_storage: state.marketing ? "granted" : "denied",
    ad_user_data: state.marketing ? "granted" : "denied",
    ad_personalization: state.marketing ? "granted" : "denied",
    analytics_storage: state.analytics ? "granted" : "denied",
  });

  if (state.analytics || state.marketing) loadGtm();
  if (state.analytics) loadGoogleAnalytics();
}
