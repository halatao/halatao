import { hasMarketingConsent } from "@/lib/consent";
import { siteConfig } from "@/lib/site";

const pixelScriptUrl = "https://bzrcdn.openai.com/sdk/oaiq.min.js";

type OpenAiAdsQueue = {
  (...args: unknown[]): void;
  q?: unknown[][];
};

declare global {
  interface Window {
    oaiq?: OpenAiAdsQueue;
  }
}

let initialized = false;

export function initializeOpenAiAdsPixel() {
  if (
    typeof window === "undefined" ||
    process.env.NODE_ENV !== "production" ||
    initialized ||
    !hasMarketingConsent()
  ) {
    return;
  }

  initialized = true;

  if (!window.oaiq) {
    const queue: OpenAiAdsQueue = (...args: unknown[]) => {
      queue.q?.push(args);
    };
    queue.q = [];
    window.oaiq = queue;
  }

  if (!document.querySelector(`script[src="${pixelScriptUrl}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = pixelScriptUrl;
    document.head.appendChild(script);
  }

  window.oaiq("init", {
    pixelId: siteConfig.openAiAdsPixelId,
    debug: false,
  });
}

export function trackOpenAiAdsLead() {
  if (typeof window === "undefined" || process.env.NODE_ENV !== "production" || !hasMarketingConsent()) return;

  initializeOpenAiAdsPixel();
  window.oaiq?.("measure", "lead_created", { type: "customer_action" });
}
