"use client";

import { useEffect } from "react";

import { CONSENT_UPDATED_EVENT } from "@/lib/consent";
import { initializeOpenAiAdsPixel } from "@/lib/openai-ads";

export function OpenAiAdsPixel() {
  useEffect(() => {
    initializeOpenAiAdsPixel();
    window.addEventListener(CONSENT_UPDATED_EVENT, initializeOpenAiAdsPixel);

    return () => {
      window.removeEventListener(CONSENT_UPDATED_EVENT, initializeOpenAiAdsPixel);
    };
  }, []);

  return null;
}
