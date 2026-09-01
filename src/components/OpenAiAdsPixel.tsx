"use client";

import { useEffect } from "react";

import { initializeOpenAiAdsPixel } from "@/lib/openai-ads";

export function OpenAiAdsPixel() {
  useEffect(() => {
    initializeOpenAiAdsPixel();
    window.addEventListener("CookiebotOnAccept", initializeOpenAiAdsPixel);
    window.addEventListener("CookiebotOnConsentReady", initializeOpenAiAdsPixel);

    return () => {
      window.removeEventListener("CookiebotOnAccept", initializeOpenAiAdsPixel);
      window.removeEventListener("CookiebotOnConsentReady", initializeOpenAiAdsPixel);
    };
  }, []);

  return null;
}
