import assert from "node:assert/strict";
import { afterEach, test } from "node:test";

import { initializeAnalyticsContext, trackAnalyticsEvent } from "./analytics";

const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
const originalDocument = Object.getOwnPropertyDescriptor(globalThis, "document");

afterEach(() => {
  if (originalWindow) Object.defineProperty(globalThis, "window", originalWindow);
  else Reflect.deleteProperty(globalThis, "window");

  if (originalDocument) Object.defineProperty(globalThis, "document", originalDocument);
  else Reflect.deleteProperty(globalThis, "document");
});

function installBrowserContext(statisticsConsent: boolean) {
  const dataLayer: Array<Record<string, unknown>> = [];
  const location = {
    pathname: "/cs/sluzby/interni-systemy-na-miru/",
    search: "?utm_source=google%3Cscript%3E&utm_medium=organic+email",
  };

  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      Cookiebot: { consent: { statistics: statisticsConsent } },
      dataLayer,
      location,
    },
  });
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: { referrer: "https://example.org/source?ignored=1" },
  });

  return { dataLayer, location };
}

test("analytics is a no-op during server rendering", () => {
  Reflect.deleteProperty(globalThis, "window");
  assert.doesNotThrow(() => trackAnalyticsEvent("seo_cta_click"));
});

test("analytics does not record events without statistics consent", () => {
  const { dataLayer } = installBrowserContext(false);
  initializeAnalyticsContext();
  trackAnalyticsEvent("seo_cta_click");
  assert.deepEqual(dataLayer, []);
});

test("analytics records a sanitized, query-free in-memory context after consent", () => {
  const { dataLayer, location } = installBrowserContext(true);

  initializeAnalyticsContext();
  location.pathname = "/cs/popsat-projekt/";
  location.search = "?utm_source=must-not-overwrite";
  initializeAnalyticsContext();
  trackAnalyticsEvent("generate_lead", {
    form_id: "project_inquiry",
    lead_type: "project_inquiry",
  });

  assert.deepEqual(dataLayer, [
    {
      event: "generate_lead",
      locale: "cs",
      page_path: "/cs/popsat-projekt/",
      landing_page: "/cs/sluzby/interni-systemy-na-miru/",
      referrer_host: "example.org",
      traffic_source: "googlescript",
      traffic_medium: "organicemail",
      form_id: "project_inquiry",
      lead_type: "project_inquiry",
    },
  ]);
});
